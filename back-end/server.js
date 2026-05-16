/*
    Criar App
    Usar middlewares
    Conectar rotas
    Ligar servidor
 */

const express = require("express");

const app = express();
// Cria a aplicação back end

app.use(express.json());
// Permite o backend entender JSON no corpo das requisições. 

let notes = [
    {
        id: 1,
        title: "First Note",
        content: "Note test"
    }
]

let nextId = 2


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
        id: nextId,
        title,
        content
    };
    nextId++


    notes.push(newNote);

    res.status(201).json(newNote);
    
});

app.delete("/notes/:id", (req, res) => {
    // :id é um espaço variável na URL

    const id = Number(req.params.id);
    // req.params.id vem como string,e ntão convertemos para número

    const noteExist = notes.some((note) => note.id === id);
    // Verifica se a nota existe

    if(!noteExist)  
        return res.status(404).json({ message: "Note not found"})
    // Caso a nota não exista, retorne 404 com a mensagem 

    notes = notes.filter((note) => note.id !== id);
    // Filtra e retorna para o estado 

    res.json({ message: "note deleted successfully"});
    //
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})