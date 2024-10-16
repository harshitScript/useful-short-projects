//? Main Thread Execution

import { Worker } from "worker_threads";
import Path from "path"

const worker = new Worker(Path.join(__dirname, './worker.js'));

worker.addListener('message', (message: string) => {
    console.log(message);
})

worker.postMessage('Start the heavy task.');
console.log('Hi from the main thread');