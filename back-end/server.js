/*
    Criar App
    Usar middlewares
    Conectar rotas
    Ligar servidor
 */
const express = require("express");
const notesRoutes = require("./routes/notesRoute");
const cors = require("cors");

const app = express();
// Cria a aplicação back end
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json());
// Permite o backend entender JSON no corpo das requisições. 

app.use(notesRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})