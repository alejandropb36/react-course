export function UserCard(props) {
  console.log(props);
  return <h1>Username: {props.username} </h1>;
}

export function UserCard2({username, password = 'default value'}) {
  console.log(username, password);
  return <h1>Username: {username.toString()} - Password: {password} </h1>;
}
