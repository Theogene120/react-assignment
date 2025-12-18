import { useState } from "react";
import ItemList from "./question22a";

function Counter2() {
  const [count, setCount] = useState(0)

  console.log("Counter rendered")

  return (
    <div className="ml-10 my-3">
      <h2>Counter: {count}</h2>

      <button className="border-2 border-black text-white bg-purple-500 p-1 my-4" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <ItemList />
    </div>
  );
}

export default Counter2;