import { JupyterMessageHeader, MessageType } from '@nteract/messaging';
import { RawJupyterMessage } from '@nteract/messaging/lib/wire-protocol';
import { webcrypto } from 'crypto';

// export interface IExecuteContent {
//     code: string;
//     silent: boolean;
//     store_history: boolean;
//     user_expressions: { [key: string]: string; };
//     allow_stdin: boolean;
//     stop_on_error: boolean;
// }

// export type MessageContent = IExecuteContent;

// export interface IMessageHeader {
//     msg_id: string,
//     date: string,
//     version: string,
//     msg_type: MessageType,
//     username: string,
//     session: string,
// }

// export interface IMessage<C extends MessageContent = any> {
//     header: IMessageHeader;
//     parent_header: JupyterMessageHeader;
//     metadata: { [k: string]: any; };
//     content: C;
//     buffers: Buffer[];
// }

// const createHeader = (messageType: MessageType, sessionId: string): JupyterMessageHeader<MessageType> => ({
//     msg_id: webcrypto.randomUUID(),
//     date: new Date().toISOString(),
//     version: '5.2',
//     msg_type: messageType,
//     username: 'ducklab',
//     session: sessionId,
// });

// export function createMessage<C extends MessageContent>(opts: {
//     sessionId: string;
//     msg_type: MessageType;
//     content: C;
// }): IMessage<C> {
//     return {
//         header: createHeader(opts.msg_type, opts.sessionId),
//         metadata: {},
//         parent_header: undefined,
//         content: opts.content,
//         buffers: [],
//         // idents: []
//     };
// }

export interface IKernelMessage {
    msgType: string;
    connectionId: string;
    contentType: string;
    content: string;
}

