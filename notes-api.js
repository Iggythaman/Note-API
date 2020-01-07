const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Where we will keep notes
let notes = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/notes', (req, res) => {
    const notes = req.body;

    // outputing the notes to the console for debugging
    console.log(note);
    notes.push(note);

    res.send('Notes are added to the database');
});

app.listen(port, () => console.log(`notes ${port}!`));