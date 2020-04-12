import React, { useState, useEffect } from 'react';

import api from './services/api';
import Header from './components/Header';

import './App.css';
import someImage from './assets/coffee.jpg';

function App() {
    const [ projects, setProjects ] = useState([]);

    // Trigger an action
    useEffect(
        // action
        () => {
            api.get('/projects').then(
                response => {
                    setProjects(response.data);
                }
            )
        },
        // dependencies (run once if empty)
        []
    );

    async function handleAddProject() {
        const response = await api.post('/projects', {
            title: `Project #${Date.now()}`,
            owner: "Ermogenes",
        });

        setProjects([...projects, response.data]);
    }

    return (
        <>
        <Header title="ReactJS" lead="The number one framework!" />
        <img src={someImage} width={256} />
        <Header title="My projects" lead="It's a lot!">
            <ul>
                {projects.map(project => 
                    <li key={project.id}>{project.title}</li>
                )}
            </ul>
        </Header>

        <button type="button" onClick={handleAddProject}>Add project</button>

        </>
    );
}

export default App;
