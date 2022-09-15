export function Card({ name, amount, married, points, address, greet }) {
  console.log(greet);

  return (
    <div>
      <h1>{name}</h1>
      <p>En su cuenta tiene 🤑{amount}</p>
      <p>Estado civil {married ? "Casado" : "Soltero"} </p>
      <ul>
        <li>Calle: {address.street}</li>
        <li>Numero: {address.number}</li>
        <li>Numero interior: {address.internalNumber}</li>
      </ul>
    </div>
  );
}
