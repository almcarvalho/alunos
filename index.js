const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Simulação de um banco de dados simples para armazenar alunos
let alunos = [];

// Middleware para analisar o corpo das requisições como JSON
app.use(bodyParser.json());

// Rota para listar todos os alunos
app.get('/alunos', (req, res) => {
    res.json(alunos);
});

// Rota para cadastrar um novo aluno
app.post('/aluno', (req, res) => {
    const novoAluno = req.body;
    alunos.push(novoAluno);
    res.json({ message: 'Aluno cadastrado com sucesso!' });
});

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});