import { useContext } from "react";
import { CountContex } from "./App";

function SprintCount() {
  const count = useContext(CountContex);
  return (
    <div>
      <p> voir {count}</p>
    </div>
  );
}
export default SprintCount;
