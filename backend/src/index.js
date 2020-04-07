const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({
        message: 'Hello World!',
    });
});

app.get('/projects', (request, response) => {
    const { title, owner } = request.query;

    console.log(`Filtered by title='${title}', owner='${owner}'`);

    return response.json([
        'Project 1',
        'Project 2',
    ]);
});

app.post('/projects', (request, response) => {
    const body = request.body;

    console.log('New project added:');
    console.log(body);

    return response.json([
        'Project 1',
        'Project 2',
        'Project 3 (new)',
    ]);
});

app.put('/projects/:id', (request, response) => {
    const params = request.params;

    console.log(`Project with id=${params.id} changed`);

    return response.json([
        'Project 4 (changed)',
        'Project 2',
        'Project 3',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    console.log(`Project with id=${id} deleted`);

    return response.json([
        'Project 2',
        'Project 3',
    ]);
});

app.listen(3333, () => {
    console.log("👌 back-end started");
});