const { exec } = require('child_process');
console.log("The node exception handling mechanism !");

setTimeout(() => {
    throw new Error('Oops! uncaught exception occurred.')
}, 2000)

process.on('uncaughtException', () => {
    console.log("The uncaught exception occurred")
    exec('npm run make-file', (err)=>{
        console.log(err)
    })
})
