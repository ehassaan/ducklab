
import zmq from "zeromq";

export enum KernelType {
    IPYKERNEL = "IPYKERNEL",
    // JUPYTER = "JUPYTER",
}

export interface IPyKernelConnectionInfo {
    key: string;
    signatureScheme: string;
    heartbeat: { port: number; socket: zmq.Push; };
    control: { port: number; socket: zmq.Dealer; };
    shell: { port: number; socket: zmq.Dealer; };
    stdin: { port: number; socket: zmq.Dealer; };
    iopub: { port: number; socket: zmq.Subscriber; };
}

export interface IKernelSpec {
    id: string;
    label: string;
    path: string;
    envType: string;
    type: KernelType;
    version: {
        major: number,
        micro: number;
        minor: number;
        release: any;
        sysVersion: string;
    };
}
