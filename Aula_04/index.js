const express = require('express');

const app = express();
app.use(express.json());

app.listen(3000, () => {console.log("O servidor está ativo na porta 3000")});

// CRUD
// CREATE
app.post("/postAula", (req, res) => {
    const {nome, sobrenome} = req.body;
    console.log(`Os dados são: ${nome} e ${sobrenome}`);
    res.send("<h3>Dados inseridos com sucesso!</h3>");
})
// READ
// UPDATE
// DELETE