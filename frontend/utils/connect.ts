import { Message } from "@/pages";

const socket = new WebSocket('ws://localhost:8080/ws');

export const connect = (cb: (msg: Message) => void) => {
    console.log('Attempting Connection...');

    socket.onopen = () => {
        console.log('Successfully Connected');
    }

    socket.onmessage = msg => {
        console.log("Message from web socket:", msg);
    }

    socket.onclose = event => {
        console.log('Socket Closed Connection: ', event);
    }

    socket.onerror = error => {
        console.log('Socket Error: ', error);
    }
}

export const sendMsg = (msg: Message) => {
    console.log('sending msg: ', msg);
    socket.send(msg.text);
}
