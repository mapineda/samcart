const mongoose = require('mongoose');

const connectionUrl = 'mongodb://127.0.0.1:27017/cars';

const CONNECTION_STRING = 'mongodb+srv://samcart:<password>@cluster0.wfgek.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


mongoose
.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.catch((e) => {
    console.error(`Connection error: ${e.message}`);
})

const db = mongoose.connection;

module.exports = db;
