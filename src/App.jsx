import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";

export function App() {
  return (
    <>
      <TaskCard ready={false} />
      <Saludar/>
    </> // This is React Fragment
  );
}
