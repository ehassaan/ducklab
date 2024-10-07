import { JupyterMessage } from '@nteract/messaging';

export enum MessageType {
    Output = "Output",
    Error = "Error",
}

type KernelMessageContent = ErrorContent | OutputContent;

export interface ErrorContent {
    ename: string;
    evalue: string;
    traceback: string[];
}

export interface OutputContent {
    data: string;
    contentType: string;
}

export interface IKernelMessage<M extends MessageType = any, C extends KernelMessageContent = any> {
    msgId: string;
    msgType: M;
    content: C;
}

export interface ErrorMessage extends IKernelMessage<MessageType.Error, ErrorContent> {
}

export interface OutputMessage extends IKernelMessage<MessageType.Output, OutputContent> {
    parentMsgId: string;
}

export function transformKnownMessage(msg: JupyterMessage) {
    if (msg.header.msg_type === "error") {
        return {
            msgType: MessageType.Error,
            msgId: msg.header.msg_id,
            content: {
                contentType: "text/plain",
                output: msg.content.text,
                traceback: msg.content.traceback.join("\n"),
                ename: msg.content.ename,
                evalue: msg.content.evalue
            }
        } as ErrorMessage;
    }
    else if (msg.header.msg_type === "stream" && msg.content.name === "stdout") {
        return {
            msgType: MessageType.Output,
            msgId: msg.header.msg_id,
            parentMsgId: msg.parent_header.msg_id,
            content: {
                contentType: "text/plain",
                data: msg.content.text
            }
        } as OutputMessage;
    }
    else if (msg.header.msg_type === "execute_result") {
        let data = null;
        let type = "text/plain";
        let formats = ["text/html", "application/json", "image/png", "image/jpg", "image/jpeg"];

        for (const fmt of formats) {
            if (msg.content.data[fmt]) {
                data = msg.content.data[fmt];
                type = fmt;
                break;
            }
        }
        return {
            msgType: MessageType.Output,
            msgId: msg.header.msg_id,
            parentMsgId: msg.parent_header.msg_id,
            content: {
                contentType: type,
                data: data
            }
        } as OutputMessage;
    }
    return null;
}