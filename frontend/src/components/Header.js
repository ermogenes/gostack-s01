import React from 'react';

export default function Header({ title, lead, children }) {
    return (
        <header>
            <h1>{title}</h1>
            <em>{lead}</em>
            {children}
        </header>
    );
}
