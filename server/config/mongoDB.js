const mongoose = require('mongoose');

// todo: move to dotenv
const username = '';
const pwd = '';
const DB_NAME = '';

const connect = async () => {
    await mongoose.connect(`mongodb+srv://${username}:${pwd}@cluster0.gustx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`);
    console.log('connected to hire_state db');
};

module.exports = connect;