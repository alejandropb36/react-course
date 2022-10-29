import { useState } from "react";

export function Form() {
  const [mensaje, setMensaje] = useState("");

  console.log(mensaje);

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setMensaje(e.target.value)} />

        <button onClick={() => {
            alert("El mensaje es: " + mensaje);
        }}>Save</button>
      </div>
    </>
  );
}
