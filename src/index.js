import React from 'react';
import ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(document.getElementById('root'));

function Greeting() {
    return <div>
        <h1>Esto es un componente</h1>
        <p>Lorem 123</p>
    </div>;
}

root.render(<div>
    <Greeting></Greeting>
    <Greeting/>
</div>);

