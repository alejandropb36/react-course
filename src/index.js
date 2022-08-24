import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));

function Greeting() {
  const user = {
    firstName: "Alejandro",
    lastName: "Ponce",
    id: 2123131231,
  };
  const band = true;

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <h2>Id: {user.id}</h2>
      <h3>Object: {JSON.stringify(user)}</h3>

      <p>Active: {band.toString()}</p>
    </div>
  );
}

root.render(<Greeting />);
