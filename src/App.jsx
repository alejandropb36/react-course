import { UserCard, UserCard2 } from "./UserCard";
import Product, { NavBar } from "./Product";
import { Card } from "./Card";

export function App() {
  return (
    <>
      <Card
        name="Ryan Ray"
        amount={100}
        married={true}
        points={[99, 33.3, 22.2]}
        address={{ street: "Alguna calle perrona", number: 2750, internalNumber: 44 }}
        greet={function() { alert("Hola esto es un alert como parametro"); }}
      />
      <hr />
      <NavBar />
      <Product />
      <UserCard username="Alejandro Ponce" />
      <UserCard username="Karla Rodriguez" />
      <UserCard username={40} />
      <UserCard username={true} />
      <UserCard username={[1, 2, 3]} />
      <UserCard2 username={"user card 2 with title prop"} password="password" />
      <UserCard2 username={"user card 2 with title prop"} />
    </> // This is React Fragment
  );
}
