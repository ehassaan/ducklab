import { ErrorMessage, IKernelMessage, OutputMessage } from './messaging';
import { IKernelSpec } from './python/IKernelSpec';
import { TypedEmitter } from './TypedEmitter';
// import { ExecuteReplyError } from "@nteract/messaging";

export enum KernelStatus {
    NotReady = "NotReady",
    Idle = "Idle",
    Killed = "Killed",
    Busy = "Busy"
}

export interface IRunningKernel {
    id: string;
    info: IKernelSpec;
    stdout: TypedEmitter<OutputMessage>;
    stderr: TypedEmitter<ErrorMessage>;
    // message: TypedEmitter<IKernelMessage>;
    // exit: TypedEmitter;
    status: KernelStatus;
    statusChanged: TypedEmitter<KernelStatus>;
    execute(code: string): Promise<TypedEmitter<IKernelMessage>>;
    interrupt(): Promise<void>;
    dispose(): void;
    waitReady(timeout_seconds: number): Promise<void>;
}
