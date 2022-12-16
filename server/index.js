const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, './.env')});
const express = require("express");
const bodyParser = require('body-parser');
const connectDb = require('./config/mongoDB');

const PORT = process.env.PORT || 8001;

const start = async () => {
    const app = express();

    try {
        await connectDb();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    app.use(bodyParser.json({ type: '*/*' }));

    app.use('/api/prefs', require('./router/preferences'));
    app.use('/api/companies', require('./router/companies'));

    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });
};

start();