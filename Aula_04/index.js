const express = require('express');

const app = express();
app.use(express.json());

app.listen(3000, () => {console.log("O servidor está ativo na porta 3000")});

// CRUD
// CREATE
app.post("/postSorvete", (req, res) => {
    const {sabor, preco} = req.body;
    console.log(`Os dados são: ${sabor} e ${preco}`);
    sabores.push(sabor);
    precos.push(preco);
    res.send("<h3>Dados inseridos com sucesso!</h3>");
})

// READ
app.get("/getSabores", (req, res) => {
    console.log(sabores);
    res.send(sabores);
})

// UPDATE
app.patch("patchPreco", (req, res) => {

})
// DELETE
app.delete("deleteSabor", (req, res) = {
    
})