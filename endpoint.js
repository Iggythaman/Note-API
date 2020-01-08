const express = require('express');
const app = express();
const port = 5000;

app.get('/notes/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id;

    // Searching notes for the isbn
    for (let note of notes) {
        if (note.id === id) {
            res.json(notes);
            return;
        }
    }

    // Sending 404 when not found something is a good practice
    res.status(404).send('Notes not found');
});

app.listen(port, () => console.log(`Hello World app listening on port ${port}!`))

