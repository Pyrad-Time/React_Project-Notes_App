# Notes App

Aplicação full stack de notas desenvolvida com React, Node.js, Express e PostgreSQL.

O objetivo deste projeto foi praticar o fluxo completo de uma aplicação web, passando pela criação da interface, componentização, consumo de API, organização do back-end, rotas, controllers e persistência de dados em banco relacional.

## Tecnologias

### Front-end

* React
* Vite
* JavaScript
* CSS

### Back-end

* Node.js
* Express
* PostgreSQL
* SQL

### Ferramentas

* Git
* GitHub
* Postman
* VS Code

## Funcionalidades

* Criar notas
* Listar notas
* Excluir notas
* Persistir dados no PostgreSQL
* Consumir API própria no front-end
* Integrar front-end, back-end e banco de dados

## Estrutura do projeto

```txt
notes-app/
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── Header/
│       │   ├── NoteForm/
│       │   ├── NoteList/
│       │   └── NoteCard/
│       ├── services/
│       │   └── notesService.js
│       ├── styles/
│       │   └── global.css
│       ├── App.jsx
│       └── main.jsx
│
├── backend/
│   ├── controllers/
│   │   └── notesController.js
│   ├── routes/
│   │   └── notesRoutes.js
│   ├── database/
│   │   ├── connection.js
│   │   └── schema.sql
│   ├── server.js
│   └── package.json
```

## Como funciona

O front-end foi desenvolvido com React. O `App.jsx` controla o estado principal das notas e distribui dados e funções para os componentes filhos.

O back-end foi desenvolvido com Node.js e Express. As rotas recebem as requisições HTTP e direcionam a lógica para os controllers, que se comunicam com o banco de dados PostgreSQL usando SQL puro.

Fluxo principal da aplicação:

```txt
Usuário interage com a interface
→ front-end envia uma requisição para a API
→ back-end processa a requisição
→ banco de dados é consultado ou atualizado
→ front-end atualiza a interface
```

## Rotas da API

| Método | Rota         | Descrição               |
| ------ | ------------ | ----------------------- |
| GET    | `/notes`     | Lista todas as notas    |
| POST   | `/notes`     | Cria uma nova nota      |
| DELETE | `/notes/:id` | Exclui uma nota pelo ID |

## Banco de dados

Estrutura básica da tabela `notes`:

```sql
CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Como rodar localmente

### Pré-requisitos

* Node.js
* PostgreSQL
* Git

### Clonar o repositório

```bash
git clone [link-do-repositorio](https://github.com/Pyrad-Time/React_Project-Notes_App)
cd React_Project-Notes_App
```

### Configurar o banco de dados

Crie o banco de dados:

```sql
CREATE DATABASE notes_app;
```

Depois execute o arquivo `schema.sql` para criar a tabela `notes`.

### Rodar o back-end

```bash
cd backend
npm install
npm run dev
```

O back-end será executado em:

```txt
http://localhost:3000
```

### Rodar o front-end

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

O front-end será executado em:

```txt
http://localhost:5173
```

## Aprendizados

Durante o desenvolvimento deste projeto, pratiquei:

* Componentização com React
* Estado com `useState`
* Efeitos com `useEffect`
* Passagem de props
* Consumo de API com `fetch`
* Criação de rotas com Express
* Organização entre rotas e controllers
* Uso de status HTTP
* Integração entre front-end, back-end e banco de dados
* Persistência de dados com PostgreSQL
* Escrita de queries SQL
* Versionamento com Git e GitHub

## Status

MVP finalizado.

O projeto permite criar, listar e excluir notas utilizando front-end, back-end e banco de dados integrados.

## Autor

Desenvolvido por Marcos Vinicius de Azevedo.
