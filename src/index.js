import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));

function Greeting() {
  const married = true;

  return <h1>{married ? "Estoy casado! 😀" : "No estoy casado!"}</h1>;

  if (married) {
    return <h1>Estoy casado!</h1>;
  } else {
    return <h1>No estoy casado!</h1>;
  }
}

root.render(<Greeting />);
