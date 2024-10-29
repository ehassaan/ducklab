
import { IKernelSpec } from './IKernelSpec';
import { PythonConnection } from "./connection";
import { TypedEmitter } from "../TypedEmitter";
import { ChildProcess, ChildProcessWithoutNullStreams } from 'child_process';
import { executeRequest, JupyterMessage, MessageType as NativeMessageType } from '@nteract/messaging';
import { IRunningKernel, KernelStatus } from "../IRunningKernel";
import { ErrorMessage, OutputMessage, MessageType, IKernelMessage, transformKnownMessage as transformDataMessage } from "../messaging";


export class PythonKernel implements IRunningKernel {

    public readonly exit = new TypedEmitter<Error | undefined>();
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
        this.statusChanged.emit(v);
        if (v === KernelStatus.Killed) {
            this.exit.emit(null);
        }
    }

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
        });
        this._process.on("disconnect", () => {
            console.log("disconnect");
        });
        this._process.on("exit", code => {
            console.log("exit: ", code);
            this.dispose();
        });
        this._process.on("spawn", () => {
            console.log("spawn");
        });
        this.connection.messages.on(msg => {

            this.updateStatus(msg);
            let convertedMsg = transformDataMessage(msg);
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
                    break;
                case "idle":
                    this.status = KernelStatus.Idle;
                    break;
                case "busy":
                    this.status = KernelStatus.Busy;
                    break;
                default:
                    break;
            }
        }
    }

    public async waitReady(timeout_ms: number = 120000) {
        if (this._status !== KernelStatus.NotReady) return;
        return new Promise<void>((resolve, reject) => {

            let cancel = setTimeout(() => {
                unsub();
                return reject(Error("Timeout while waiting for kernel start"));
            }, timeout_ms);

            let unsub = this.statusChanged.on(changed => {
                if (changed === KernelStatus.NotReady) {
                    return;
                }
                clearTimeout(cancel);
                unsub();

                if (changed === KernelStatus.Killed) {
                    return reject(Error("Kernel killed"));
                }
                return resolve();
            });
        });
    }

    public async execute(code: string): Promise<TypedEmitter<IKernelMessage>> {
        let request = executeRequest(code, {
            allow_stdin: true,
            silent: false,
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

    public async executeSync(code: string, timeout_ms: number): Promise<IKernelMessage[]> {
        return new Promise(async (resolve, reject) => {
            console.log("Init code: ", code);
            let res = await this.execute(code);
            let results: IKernelMessage[] = [];
            res.on(ev => {
                console.log("Init response: ", ev);
                results.push(ev);
            });
            let interval = setTimeout(() => {
                unsub();
                return reject(Error("Timeout: Did not receive any response from kernel"));
            }, timeout_ms);
            const unsub = res.onDispose(code => {
                if (code) {
                    clearTimeout(interval);
                    return reject(Error("Failed: " + results));
                }
                else {
                    clearTimeout(interval);
                    return resolve(results);
                }
            });
        });
    }

    private createNativeMessage(msgType: NativeMessageType, channel: string, content: any) {
        const msg: JupyterMessage = {
            header: {
                msg_id: crypto.randomUUID(),
                session: this.id,
                msg_type: msgType,
                username: "ducklab",
                version: "5.3",
                date: new Date().toISOString()
            },
            metadata: {},
            content: null,
            parent_header: null,
            channel: channel
        };
        return msg;
    }

    public async interrupt() {
        this.dispose();
        // this._process.kill("SIGTERM");
        // this.status = KernelStatus.Killed;
        // const msg = this.createNativeMessage("interrupt_request", "control", {});
        // await this.connection.send(msg);
    }

    private createResponseEmitter(req: JupyterMessage) {
        let emitter = new TypedEmitter<IKernelMessage>();

        let unsub = this.connection.messages.on(res => {
            if (res.header.session !== this.id) return;
            if (res.parent_header.msg_id !== req.header.msg_id) return;

            let message = transformDataMessage(res);
            if (message) {
                emitter.emit(message);
            }
            else {
                console.log("Unknown Message: ", res);
            }
            if (res.header.msg_type === "error") {
                unsub();  // execution completed, no need to listen more events
                emitter.dispose();
            }
            else if (res.header.msg_type === "execute_reply") {
                unsub();  // execution completed, no need to listen more events
                emitter.dispose();
            }
        });
        this.exit.on(ev => {
            emitter.dispose(1);
        });
        return emitter;
    }

    public dispose() {
        this._process.kill();
        this.stderr.dispose();
        this.stdout.dispose();
        this.status = KernelStatus.Killed;
    }
}