const express = require('express');
const app = express();

// Middlleware para criar itens em formato JSON
app.use(express.json());

// Array de cursos
const cursos = [
    'NodeJS',
    'React-Native',
    'JavaScript'
]

// Buscar Itens
app.get('/cursos', (requisicao, resposta) => {
    return resposta.json(cursos);
});

// Buscando curso pelo index
app.get('/cursos/:index', (requisicao, resposta) => {
    const { index } = requisicao.params;
    return resposta.json(cursos[index]);
});

// Adicionando um curso
app.post('/cursos', (requisicao, resposta) => {
    const { nome } = requisicao.body;
    cursos.push(nome);
    return resposta.json(cursos);
});

// Editando um curso
app.put('/cursos/:index', (requisicao, resposta) => {
    const { index } = requisicao.params;
    const { nome } = requisicao.body;

    cursos[index] = nome;
    return resposta.json(cursos);
});

// Excluindo um curso
app.delete('/cursos/:index', (requisicao, resposta) => {
    const { index } = requisicao.params;

    cursos.splice(index, 1);
    return resposta.json({ message: 'Curso excluido com sucesso!'});
});

// Criando o servidor que roda na porta 3000
app.listen((3000), () => {
    console.log('Servidor rodando ...');
});