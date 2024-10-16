import os from "os";
import cluster from "cluster";
import express from "express";
const CPU = os.cpus().length;
const app = express();

//? It will create multiple instance of our server that will benefit in load balancing.
if (cluster.isPrimary) {
    for (let i = 0; i < CPU; i++) {
        cluster.fork();
    }
} else {
    app.listen(4000, () => {
        console.log(`The server is listening to port 4000. ${process.pid}`)
    })
}

