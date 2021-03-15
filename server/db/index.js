const mongoose = require('mongoose');

// const connectionUrl = 'mongodb://mongo:27017/cars';

const connectionUrl = 'mongodb+srv://samcart:tacos123@cluster0.wfgek.mongodb.net/cars?retryWrites=true&w=majority&tlsInsecure=true';


mongoose
.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.catch((e) => {
    console.error(`Connection error: ${e.message}`);
})

const db = mongoose.connection;

module.exports = db;
