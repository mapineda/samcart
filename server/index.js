// imports
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const carRouter = require('./routes/car-router')

// init the app
const app = express();
// assign server port
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// idx route
app.get('/', (req, res) => {
    res.send('Salve Terra!')
})

// api route
app.use('/api', carRouter)

// listen on port
app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
})
