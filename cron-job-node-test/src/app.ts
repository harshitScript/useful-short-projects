import schedule from "node-schedule";

console.log("Scheduling your greetings job every two minute.");
const CRON_RULE = '*/2 * * * *' // every 2 minutes

const _ = schedule.scheduleJob(CRON_RULE, () => {
    console.log('Greet me Good Night.', new Date());
})