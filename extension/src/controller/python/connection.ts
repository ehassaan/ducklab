
import getPort from 'get-port';
import * as crypto from 'crypto';
import * as zmq from 'zeromq';
import { promises as fs } from 'fs';
import { promiseMap } from '../util';
import * as wireProtocol from '@nteract/messaging/lib/wire-protocol';
import { RawJupyterMessage } from "@nteract/messaging/lib/wire-protocol";
import { join } from 'path';
import { tmpdir } from 'os';
import { IDisposable } from '../../disposable';
import { JupyterMessage, JupyterMessageHeader } from '@nteract/messaging';
import { TypedEmitter } from '../TypedEmitter';
import { mkdir } from 'fs/promises';
// import { IMessage, MessageContent } from './messaging';

/* Interacting with the Python interface that likes lots of snake_cases: */
/* eslint-disable @typescript-eslint/camelcase */

interface ISockets {
    key: string;
    signatureScheme: string;
    heartbeat: { port: number; socket: zmq.Push; };
    control: { port: number; socket: zmq.Dealer; };
    shell: { port: number; socket: zmq.Dealer; };
    stdin: { port: number; socket: zmq.Dealer; };
    iopub: { port: number; socket: zmq.Subscriber; };
}

const sendChannelNames = ['control', 'shell', 'stdin'] as const;
const receiveChannelNames = ['control', 'shell', 'stdin', 'iopub'] as const;

type SendChannel = typeof sendChannelNames[number];
type ReceiveChannel = typeof receiveChannelNames[number];
type SocketChannel = SendChannel | ReceiveChannel | "heartbeat";

export type IOChannel = SendChannel | ReceiveChannel;

export function toRawMessage(message: JupyterMessage) {
    let rawMsg: RawJupyterMessage = {
        ...message,
        parent_header: message.parent_header as JupyterMessageHeader,
        buffers: message.buffers ? message.buffers.map(b => Buffer.from(new Uint8Array(b as ArrayBuffer))) : [],
        idents: [],
    };
    return rawMsg;
}

export function fromRawMessage(message: RawJupyterMessage, channel: string): JupyterMessage {
    return {
        ...message,
        channel: channel,
        buffers: message.buffers ? [Buffer.concat(message.buffers)] : undefined,
    };
}

export class PythonConnection implements IDisposable {

    public readonly id: string;
    public readonly messages = new TypedEmitter<JupyterMessage>();

    /**
     * Establishes a new Connection listening in ports and with a connection
     * file ready to pass to a kernel.
     */
    public static async create() {
        const routingId = crypto.randomUUID();
        const sockets: ISockets = await promiseMap({
            key: crypto.randomUUID(),
            signatureScheme: 'hmac-sha256',
            control: createSocket(new zmq.Dealer({ routingId })),
            heartbeat: createSocket(new zmq.Push()),
            iopub: createSocket(new zmq.Subscriber()),
            shell: createSocket(new zmq.Dealer({ routingId })),
            stdin: createSocket(new zmq.Dealer({ routingId })),
        });

        sockets.iopub.socket.subscribe();

        const cnx = new PythonConnection(sockets, await createConnectionFile(sockets));
        cnx.processSocketMessages(sockets.control.socket, "control");
        cnx.processSocketMessages(sockets.iopub.socket, "iopub");
        cnx.processSocketMessages(sockets.shell.socket, "shell");
        cnx.processSocketMessages(sockets.stdin.socket, "stdin");
        return cnx;
    }

    protected constructor(
        private readonly sockets: ISockets,
        public readonly connectionFile: string,
    ) {
        this.id = sockets.key;
    }

    private async processSocketMessages(
        socket: zmq.Dealer | zmq.Subscriber,
        channel: SocketChannel
    ) {
        for await (const msg of socket) {
            const message = wireProtocol.decode(msg, this.sockets.key, this.sockets.signatureScheme);
            this.messages.emit(fromRawMessage(message, channel));
        }
    }

    /**
     * Sends the message and returns a string of followup messages received
     * in response to it.
     */
    public async send(message: JupyterMessage) {
        console.log("Sending message: ", message.header.msg_type, message.header.msg_id, message);
        await this.sendRaw(toRawMessage(message), message.channel);
    }

    /**
     * Sends a raw Jupyter kernel message.
     */
    public async sendRaw(message: RawJupyterMessage, channel: string) {
        const data = wireProtocol.encode(
            message,
            this.sockets.key,
            this.sockets.signatureScheme,
        );
        let socket = this.sockets[channel].socket as zmq.Dealer;
        await socket.send(data);
    }

    /**
     * Frees unmanaged resources.
     */
    public dispose() {
        this.sockets.control.socket.close();
        this.sockets.heartbeat.socket.close();
        this.sockets.iopub.socket.close();
        this.sockets.shell.socket.close();
        this.sockets.stdin.socket.close();
        fs.unlink(this.connectionFile).catch(() => {
            /* it's a temp file, just ignore */
        });
    }
}


async function createConnectionFile(sockets: ISockets, host = '127.0.0.1'): Promise<string> {
    const contents = JSON.stringify({
        control_port: sockets.control.port,
        shell_port: sockets.shell.port,
        hb_port: sockets.heartbeat.port,
        stdin_port: sockets.stdin.port,
        iopub_port: sockets.iopub.port,
        transport: 'tcp',
        ip: host,
        signature_scheme: sockets.signatureScheme,
        key: sockets.key,
    });

    let parent = join(tmpdir(), "ducklab");
    try {
        await mkdir(parent, { recursive: true });
    }
    catch {
    }
    const fname = join(parent, `ducklab-kernel-${crypto.randomBytes(8).toString('hex')}.json`);
    await fs.writeFile(fname, contents);
    return fname;
}

async function createSocket<T extends zmq.Socket>(socket: T): Promise<{ socket: T; port: number; }> {
    const port = await getPort();
    socket.connect(`tcp://127.0.0.1:${port}`);
    return { port, socket };
}
