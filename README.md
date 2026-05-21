# Notes App

Esse projeto é uma aplicação full stack simples de notas.

A ideia principal foi entender, na prática, como o frontend conversa com o backend e como o backend se conecta com um banco de dados para salvar, buscar e deletar informações.

O projeto não foi feito com o objetivo de ser algo super complexo, mas sim para consolidar fundamentos importantes de React, Node.js, Express e PostgreSQL.

---

## O que a aplicação faz

A aplicação permite:

- criar uma nota;
- listar todas as notas;
- deletar uma nota;
- manter as notas salvas no banco de dados.

Cada nota possui:

- id;
- título;
- conteúdo;
- data de criação.

---

## Tecnologias utilizadas

### Frontend

- React
- Vite
- JavaScript
- CSS puro

### Backend

- Node.js
- Express

### Banco de dados

- PostgreSQL

---

## Estrutura do projeto

```text
notes-app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   ├── NoteForm/
│   │   │   ├── NoteList/
│   │   │   └── NoteCard/
│   │   │
│   │   ├── services/
│   │   │   └── notesService.js
│   │   │
│   │   ├── styles/
│   │   │   └── global.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend/
│   ├── controllers/
│   │   └── notesController.js
│   │
│   ├── routes/
│   │   └── notesRoutes.js
│   │
│   ├── database/
│   │   └── connection.js
│   │
│   └── server.js
