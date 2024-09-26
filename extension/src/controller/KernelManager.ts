import { ChildProcess, ChildProcessWithoutNullStreams, exec, spawn } from 'child_process';
import { IKernelSpec } from './IKernelSpec';
// import split from 'split2';
import { Connection } from './connection';
import { executeRequest } from "@nteract/messaging";
import { filter, ReplaySubject, Subject, takeUntil, takeWhile } from 'rxjs';
// import { createMessage, IExecuteContent } from './messaging';
// import { webcrypto as crypto } from 'crypto';


export class RunningKernel {

    public readonly stderr = new Subject<string>();
    public readonly exit = new ReplaySubject<Error | undefined>(1);
    public readonly sessionId: string;
    private killed = false;
    private _requestCancellation = new Subject<{ connectionId: string; }>();
    public readonly stdout = new Subject<string>();

    constructor(
        readonly info: IKernelSpec,
        readonly connection: Connection,
        readonly process: ChildProcess | ChildProcessWithoutNullStreams,
    ) {
        this.sessionId = this.connection.id;
        this.process.stdout.on("data", msg => {
            console.log("stdout: ", msg?.toString());
        });
        this.process.stderr.on("data", msg => {
            console.log("stderr: ", msg?.toString());
        });
        this.process.on("close", msg => {
            console.log("close: ", msg?.toString());
        });
        this.process.on("error", err => {
            console.log("error: ", err);
            this.exit.next(err);
        });
        this.process.on("disconnect", msg => {
            console.log("disconnect: ", msg?.toString());
        });
        this.process.on("exit", code => {
            console.log("exit: ", code);
            this.exit.next(
                code && !this.killed ? new Error(`Kernel exited with code ${code}`) : undefined,
            );
        });
        this.process.on("spawn", msg => {
            console.log("spawn: ", msg?.toString());
        });
        this.connection.messages.subscribe(msg => {
            console.log("Message Received: ", msg);
        });
    }

    // public async execute(code: string) {
    //     this.process.stdin.write(`${JSON.stringify({ code: code })}\n`);
    // }

    public async interrupt() {
        this._requestCancellation.next({ connectionId: this.sessionId });
    }

    public async execute(code: string) {
        let request = executeRequest(code, {
            allow_stdin: false,
            silent: true,
            stop_on_error: true,
            store_history: true,
            user_expressions: {}
        });
        request.header.username = "ducklab";
        request.header.session = this.sessionId;
        await this.connection.send(request);
    }

    public dispose() {
        this.killed = true;
        this.process.kill();
    }
}

export class KernelManager {

    // kernels: IKernelSpec & { process: ChildProcess; }[];
    kernels: RunningKernel[] = [];

    async runCommand(kernel: IKernelSpec, cmd: string) {
        let promise = new Promise<string>((resolve, reject) => {
            exec(`${kernel.path} ${cmd}`, (err, stdout, stderr) => {
                if (err) {
                    return reject(stderr);
                }
                resolve(stdout);
            });
        });
        return promise;
    }

    private runProcess(kernel: IKernelSpec, args: string[]) {
        let process = spawn(kernel.path, args, { stdio: "pipe" });
        return process;
    }

    async listDeps(kernel: IKernelSpec) {
        let pipList = await this.runCommand(kernel, "-m pip list");
        let lines = pipList.replaceAll("\r\n", "\n").split("\n");
        if (lines.length <= 2) return [];

        let packages = lines.slice(2).map(line => {
            let parts = line.replace(new RegExp("\\s+"), ":").split(":");
            return {
                name: parts[0],
                version: parts[1]
            };
        });
        return packages;
    }

    async installDeps(kernel: IKernelSpec) {
        await this.runCommand(kernel, "-m pip install ipykernel");
    }

    async hasRequiredDeps(packages: { name: string, version: string; }[]) {
        let ipykernel = packages.filter(p => p.name.toLowerCase() === "ipykernel");
        if (ipykernel.length === 0) return false;
    }

    async launchKernel(info: IKernelSpec) {
        let packages = await this.listDeps(info);
        if (!this.hasRequiredDeps(packages)) {
            console.log("Installing required dependencies...");
            await this.installDeps(info);
        }
        let conn = await Connection.create();
        let process = this.runProcess(info, ["-m", "ipykernel_launcher", "-f", conn.connectionFile]);
        let kernel = new RunningKernel(
            info,
            conn,
            process,
        );
        console.log("Kernel Run Res: ", kernel);
        this.kernels.push(kernel);
        return kernel;
    }
}

