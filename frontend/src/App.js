import React, { useState } from 'react';
import Header from './components/Header';

function App() {
    const [ projects, setProjects ] = useState(
        ['Project #1', 'Project #2', '...']
    );

    function handleAddProject() {
        setProjects([
            ...projects,
            `Project #${Date.now()}`,
        ]);
    }

    return (
        <>
        <Header title="ReactJS" lead="The number one framework!" />
        <Header title="My projects" lead="It's a lot!">
            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>
        </Header>

        <button type="button" onClick={handleAddProject}>Add project</button>
        </>
    );
}

export default App;
