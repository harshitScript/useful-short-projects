// SLEEP FUNCTION
const sleep = (sec) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('done'), sec * 1000)
    })
}

const mainThreadSleep = async () => {
    console.log('I executed at starting.');
    await sleep(2);
    console.log('I executed after 2 sec sleep.')
}

mainThreadSleep();