const mongoose = require('mongoose');

const username = process.env.MONGO_USERNAME;
const pwd = process.env.MONGO_PASSWORD;
const DB_NAME = process.env.MONGO_DB_NAME;

const connect = async () => {
    await mongoose.connect(`mongodb+srv://${username}:${pwd}@cluster0.gustx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`);
    console.log('connected to hire_state db');
};

module.exports = connect;