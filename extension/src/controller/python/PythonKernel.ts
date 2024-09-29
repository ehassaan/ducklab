
import { IKernelSpec } from './IKernelSpec';
import { PythonConnection } from "./connection";
import { TypedEmitter } from "../TypedEmitter";
import { ChildProcess, ChildProcessWithoutNullStreams } from 'child_process';
import { executeRequest, ExecuteRequest, JupyterMessage } from '@nteract/messaging';
import { IRunningKernel, KernelStatus } from "../IRunningKernel";
import { ErrorMessage, OutputMessage, MessageType, IKernelMessage, transformKnownMessage } from "../messaging";


export class PythonKernel implements IRunningKernel {

    // public readonly stderr = new TypedEmitter<string>();
    public readonly exit = new TypedEmitter<Error | undefined>();
    // public readonly stdout = new TypedEmitter<string>();
    public readonly stdout = new TypedEmitter<OutputMessage>();
    public readonly stderr = new TypedEmitter<ErrorMessage>();
    public readonly statusChanged = new TypedEmitter<KernelStatus>();
    public readonly id: string;

    private _status: KernelStatus = KernelStatus.NotReady;
    public get status() {
        return this._status;
    }
    private set status(v) {
        this._status = v;
    }

    private _requestCancellation = new TypedEmitter<void>();

    constructor(
        readonly info: IKernelSpec,
        readonly connection: PythonConnection,
        private readonly _process: ChildProcess | ChildProcessWithoutNullStreams,
    ) {
        this.id = this.connection.id;
        this._process.stdout?.on("data", msg => {
            console.log("stdout: ", msg.toString());
        });
        this._process.stderr?.on("data", msg => {
            console.log("stderr: ", msg);
        });
        this._process.on("close", msg => {
            console.log("close: ", msg);
        });
        this._process.on("error", err => {
            console.log("error: ", err);
            this.exit.emit(err);
        });
        this._process.on("disconnect", () => {
            console.log("disconnect");
        });
        this._process.on("exit", code => {
            console.log("exit: ", code);
            this.exit.emit(
                code && this._status !== KernelStatus.Killed ? new Error(`Kernel exited with code ${code}`) : undefined,
            );
        });
        this._process.on("spawn", () => {
            console.log("spawn");
        });
        this.connection.messages.on(msg => {
            console.log("Message Received: ", msg.header.msg_type, msg.parent_header.msg_id, msg);

            this.updateStatus(msg);
            let convertedMsg = transformKnownMessage(msg);
            if (!convertedMsg) {
                return;
            }
            if (convertedMsg.msgType === MessageType.Output) {
                this.stdout.emit(convertedMsg);
            }
            else if (convertedMsg.msgType === MessageType.Error) {
                this.stderr.emit(convertedMsg);
            }
        });
    }

    private updateStatus(msg: JupyterMessage) {
        if (msg.header.msg_type === "status" && msg.content.execution_state) {
            switch (msg.content.execution_state) {
                case "starting":  // this message means it is already started. Why Jupyter?
                    this.status = KernelStatus.Idle;
                    this.statusChanged.emit(this.status);
                    break;
                case "idle":
                    this.status = KernelStatus.Idle;
                    this.statusChanged.emit(this.status);
                    break;
                case "busy":
                    this.status = KernelStatus.Busy;
                    this.statusChanged.emit(this.status);
                    break;
                default:
                    break;
            }
        }
    }

    public async waitReady(timeout_seconds: number = 120) {
        if (this._status !== KernelStatus.NotReady) return;
        return new Promise<void>((resolve, reject) => {

            let cancel = setTimeout(() => {
                unsub();
                return reject(Error("Timeout while waiting for kernel start"));
            }, timeout_seconds * 1000);

            let unsub = this.statusChanged.on(changed => {
                if (changed !== KernelStatus.NotReady) {
                    clearTimeout(cancel);
                    unsub();
                    return resolve();
                }
            });
        });
    }

    public async interrupt() {
        this._process.kill("SIGINT");
        // this._requestCancellation.emit();
    }

    public async execute(code: string): Promise<TypedEmitter<IKernelMessage>> {
        let request = executeRequest(code, {
            allow_stdin: false,
            silent: true,
            stop_on_error: true,
            store_history: true,
            user_expressions: {}
        });
        request.header.username = "ducklab";
        request.header.session = this.id;
        console.log("Sending execution request: ", request);

        let emitter = this.createResponseEmitter(request);

        await this.connection.send(request);
        return emitter;
    }

    private createResponseEmitter(req: JupyterMessage) {
        let emitter = new TypedEmitter<IKernelMessage>();

        let unsub = this.connection.messages.on(res => {
            if (res.header.session !== this.id) return;
            if (res.parent_header.msg_id !== req.header.msg_id) return;

            let message = transformKnownMessage(res);
            if (message) {
                emitter.emit(message);
            }
            if (res.header.msg_type === "execute_reply") {
                unsub();  // execution completed, no need to listen more events
                emitter.dispose();
            }
        });
        return emitter;
    }

    public dispose() {
        this._process.kill();
        this.status = KernelStatus.Killed;
        this.statusChanged.emit(KernelStatus.Killed);
    }
}