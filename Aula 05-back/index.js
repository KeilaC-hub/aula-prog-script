// COMANDOS NO TERMINAL
// npm init iy
// npm express nodemon
// npm i body-parser
// package.json -> scripts {"start": "nodemon index.js"}
// npm start

const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const nodemon = require('nodemon');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.listen(3000, () => {
    console.log("O servidor está ativo na porta 3000");
})
// Banco de dados
let nomes = [];
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Front/index.html");
})

app.post("/cadastroChocolate", (req, res) => {
    const {nome} = req.body
    // data = "INSERT INTO chocolate (id, nome) VALUES (UUID), ${nome})"
    nomes.push(nome);
    res.sendFile(__dirname + "/Front/index.html")
    console.log(nomes);
})

app.get("/nomesChocolate", (req, res) => {
    // res.json(nomes)
    
})