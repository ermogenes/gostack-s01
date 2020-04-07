const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        message: 'Hello World!',
    });
});

app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3 (supostamente novo)',
    ]);
});

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 4  (supostamente alterado)',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.listen(3333, () => {
    console.log("👌 back-end started");
});