import { useState, useEffect } from "react";

export function Form() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setMensaje(e.target.value)} />

        <button
          onClick={() => {
            alert("El mensaje es: " + mensaje);
          }}
        >
          Save
        </button>
      </div>

      <hr />
      <h1>Counter: {counter}</h1>
      <button onClick={() => {
        setCounter(prevCounter => prevCounter + 1)
      }}>Incrementar</button>
    </>
  );
}
