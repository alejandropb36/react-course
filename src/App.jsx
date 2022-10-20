import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Button } from "./Button";
import { Posts } from "./Posts";


const handleChange = (e) => console.log(e.target.value);

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
    </> // This is React Fragment
  );
}
