const express = require("express");

const app = express();
// Cria a aplicação back end

app.use(express.json());
// Permite o backend entender JSON no corpo das requisições. 

const notes = [
    {
        id: 1,
        title: "First Note",
        content: "Note test"
    }
]


app.get("/console", (req, res) => {
    res.json({ message: "Backend funcionando" })
})
// cria uma rota teste

app.get("/notes", (req, res) => {
    res.json(notes)
})

app.post("/notes", (req, res) => {
    const { title, content } = req.body;
    // desestrutura e define valor da variável

    const newNote = {
        id: notes.length + 1,
        title,
        content
    };

    notes.push(newNote);

    res.status(201).json(newNote);
    
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})