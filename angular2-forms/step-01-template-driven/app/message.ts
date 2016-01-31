import { IMessage } from "./i-message";

export class Message implements IMessage {
    address: string;
    message: string;
}