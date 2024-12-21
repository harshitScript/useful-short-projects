const mongoose = require('mongoose');
require('dotenv').config();

const connection = mongoose.connection;

connection.on('error', (error) => console.log(`Failed to connect to the database: ${error}`))
connection.on('connected', () => console.log(`Database connected successfully.`))

// Connects to the db
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('DB Connected Successfully.')
    })
    .catch(error => {
        console.dir(error)
    })


const getDb = () => {
    return connection.db; // Return native db mentioned in URI otherwise test db.
}

module.exports = { getDb }