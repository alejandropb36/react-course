import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  console.log({ count, setCount });
  return (
    <>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Incrementar
      </button>

      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrementar
      </button>

      <button
        onClick={() => {
          setCount(1000);
        }}
      >
        Resetear
      </button>
    </>
  );
}
