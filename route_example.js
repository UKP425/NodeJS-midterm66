const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/login', (req, res) => {
    res.send('Login page');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});