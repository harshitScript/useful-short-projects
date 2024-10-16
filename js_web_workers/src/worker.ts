//? Background Task.
import { parentPort } from "worker_threads";

if (parentPort) {
    parentPort.on('message', (message) => {

        console.log(message); // Message from the main thread

        // Perform the heavy task
        for (let i = 0; i < 1000000000; i++) { }

        // Send a message back to the main thread
        parentPort && parentPort.postMessage('Done with Heavy task!');
    });
}
console.log('Hi from the background thread')
