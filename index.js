const express = require("express");
const app = express();


app.get("/usuario", (req, res) => {
    res.send("buscar usuario");
});


app.post("/usuario", (req, res) => {
    res.send("criar usuario");
});

app.put("/usuario", (req, res) => {
    res.send("atualizar usuario");
});


app.delete("/usuario", (req, res) => {
    res.send("deletar usuario");
});

app.use((req, res) => {
    res.status(404).send("Página não encontrada");
});

app.listen(3000, () => {
    console.log("servidor on: http://localhost:3000");
});

