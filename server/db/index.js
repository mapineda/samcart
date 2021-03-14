const mongoose = require('mongoose');

const connectionUrl = 'mongodb://127.0.0.1:27017/cars';

mongoose
.connect(connectionUrl, { useNewUrlParser: true })
.catch((e) => {
    console.error(`Connection error: ${e.message}`);
})

const db = mongoose.connection;

module.exports = db;
