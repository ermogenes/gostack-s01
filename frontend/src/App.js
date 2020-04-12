import React, { useState, useEffect } from 'react';

import api from './services/api';
import Header from './components/Header';

import './App.css';
import flavorImage from './assets/man-on-computer.jpg';

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
        <img src={flavorImage} width={160} />
        <Header title="My projects" lead="Some (fun) projects:">
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
