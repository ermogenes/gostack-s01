import React from 'react';
import Header from './components/Header';

function App() {
    return (
        <>
        <Header title="ReactJS" lead="The number one framework!" />
        <Header title="Rocketseat courses" lead="Yes!">
            <ul>
                <li>OmniStack</li>
                <li>GoStack</li>
            </ul>
        </Header>
        </>
    );
}

export default App;
