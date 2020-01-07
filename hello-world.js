const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hellow World, from express');
});

app.listen(port, () => console.log(`Hello World app listening on port ${port}!`))

