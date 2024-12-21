const mongoose = require('mongoose');
require('dotenv').config();

const dbMap = new Map();

const connection = mongoose.connection;
connection.on('error', () => console.log('Failed To connect the database.'))
connection.on('connected', () => console.log('Connection to database successfully.'))

// Connects to the db.
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Database connected Successfully.')
    })
    .catch((error) => {
        console.log(`Failed to Connect to the database : ${error}`)
    })

// Returns the database of our choice.
const getDb = (dbName) => {
    if (dbMap.get(dbName)) return dbMap.get(dbName);
    const db = connection.useDb(dbName, { useCache: true });
    dbMap.set(dbName, db);
    return db
}

module.exports = { getDb }