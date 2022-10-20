import { VscBug } from 'react-icons/vsc';

export function Posts() {
    return (
        <>
            <button onClick={() => {
                fetch("https://jsonplaceholder.typicode.com/posts")
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error(error))
            }}>
                <VscBug/> Taer datos
            </button>


            <ul>
                <li>Titulo de una publicacion</li>
                <li>Titulo de una publicacion 2</li>
                <li>Titulo de una publicacion 3</li>
            </ul>
        </>
    );
}