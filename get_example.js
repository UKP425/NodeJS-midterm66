const express = require('express');
const app = express();
const port = 3000;

app.get('/greet', (req, res) => {
    let userName = req.query.name;
    res.send(`Hello ${userName}!`);
});

app.get('/sum', (req, res) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    res.send(`a = ${a}, b = ${b}<br>sum = ${a + b}`);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});