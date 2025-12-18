import { useState } from "react";
import ItemList from "./ItemList";

function Counter() {
  const [count, setCount] = useState(0)

  console.log("Counter rendered")

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <ItemList />
    </div>
  );
}

export default Counter;