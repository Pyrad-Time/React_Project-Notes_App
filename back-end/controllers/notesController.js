// Fica com a lógica das notas
const db = require("../database/connection");

let notes = [
    {
        id: 1,
        title: "Server Rodando!",
        content: "Note test"
    }
]

let nextId = 2

async function getNotes(req, res) {
    // res.json(notes)
    // Adiciona valor a memória

    try {
        const result = await db.query("SELECT * FROM notes ORDER BY id ASC");

        res.json(result.rows);
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao buscar notas no servidor." });
    }
}

function postNotes(req, res) {
    const { title, content } = req.body;
    // Desestruturação e de definição da váriavel

    const newNote = {
        id: nextId,
        title,
        content
    };
    nextId++
    // Cria um objeto com os valores vindos de body e incrementa o id

    notes.push(newNote);
    // Adiciona uma nova nota na memória local

    res.status(201).json(newNote);
    // Retorna um status de sucesso para o browser e adiciona o new note ao formato json
}

function deleteNotes(req, res) {
    const id = Number(req.params.id);
    // req.params é o valor da vaiável retornada no path da url convertida em número

    const noteExist = notes.some((note) => note.id === id);
    // Valida se o id da memória é compátivel com o id retornado pelo path da url

    if(!noteExist)
        return res.status(404).json({ message: "Note not found "});
    // Caso noteExist retorne falso o navegador recebe um status de erro do cliente 

    notes = notes.filter((note) => note.id !== id)
    // Retorna um novo array retornando somente aqueles que não são extritamente iguais ao valor de id
}

module.exports = {
    getNotes,
    postNotes,
    deleteNotes
}
