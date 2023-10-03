// COMANDOS NO TERMINAL
// npm init iy
// npm express nodemon
// npm i body-parser
// package.json -> scripts {"start": "nodemon index.js"}
// npm start

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.listen(3000, () => {
    console.log("O servidor está ativo na porta 3000");
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Front/index.html");
})