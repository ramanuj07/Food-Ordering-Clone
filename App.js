import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    'div',
    { id: 'parent' },
    [
        React.createElement(
            'div',
            { id: 'child' },
            [
                React.createElement('h1', {}, 'I am an h1 tag of child'),
                React.createElement('h2', {}, 'I am an h2 tag in child class')
            ]
        ),

        React.createElement(
            'div',
            { id: 'child2' },
            [
                React.createElement('h1', {}, 'I am an h1 tag of child2'),
                React.createElement('h2', {}, 'I am an h2 tag in child2 class')
            ]
        )
    ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(parent);