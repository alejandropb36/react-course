import "./Task.css";

export function TaskCard({ ready = false }) {
  const titleStyles = { fontWeight: "lighter" };

  return (
    <div className="card">
      <h1 style={titleStyles}>Mi primer tarea</h1>
      <span style={ready ? { background: "green" } : { background: "red" }}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
      <br />
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
