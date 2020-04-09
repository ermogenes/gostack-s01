import React, { useState } from 'react';
import Header from './components/Header';

function App() {
    const [ courses, setCourses ] = useState(['OmniStack', 'GoStack']);

    function handleAddCourse() {
        setCourses([
            ...courses,
            `Course in ${Date.now()}`,
        ]);
    }

    return (
        <>
        <Header title="ReactJS" lead="The number one framework!" />
        <Header title="Rocketseat courses" lead="Yes!">
            <ul>
                {courses.map(course => <li key={course}>{course}</li>)}
            </ul>
        </Header>

        <button type="button" onClick={handleAddCourse}>Add course</button>
        </>
    );
}

export default App;
