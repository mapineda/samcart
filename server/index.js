// imports
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// init the app
const app = express();
// assign server port
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json());

// idx route
app.get('/', (req, res) => {
    res.send('Salve Terra!')
})

// listen on port
app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
})
