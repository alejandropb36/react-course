import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Button } from "./Button";
import { Posts } from "./Posts";


const handleChange = (e) => console.log(e.target.value);

const users = [
  {
    id: 1,
    name: 'Alejandro',
    lastname: 'Ponce',
    age: 27,
    image: 'https://robohash.org/user1'
  },
  {
    id: 2,
    name: 'Karla',
    lastname: 'Rodriguez',
    age: 20,
    image: 'https://robohash.org/user2'
  },
  {
    id: 3,
    name: 'Muneca',
    lastname: 'Ponce',
    age: 24,
    image: 'https://robohash.org/user3'
  },
  {
    id: 4,
    name: 'Pepe',
    lastname: 'Chuy',
    age: 19,
    image: 'https://robohash.org/user4'
  },
];

export function App() {
  return (
    <>
      <TaskCard ready={false} />
      <Saludar/>
      <Button text="Boton para hacer click" name="Alejandro"/>

      <input type="text" onChange={handleChange} />

      <form  onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}>
        <h2>Registro de Usuario</h2>
        <label htmlFor="user">Usuario</label>
        <br />
        <input type="text" name="user" />
        <br />
        <label htmlFor="password">Contraseña</label>
        <br />
        <input type="password" name="password" />
        <br />
        <button>Enviar</button>
      </form>


      <hr />
      <Posts/>


      <hr />
      <h1>Users: </h1>

      {users.map(user => (
          <div key={user.id}>
            <h2 key={user.id}>{user.name} {user.lastname}</h2>
            <img src={user.image} alt={user.name} />
          </div>
      ))}

    </> // This is React Fragment
  );
}
