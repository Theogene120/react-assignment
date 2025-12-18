import { useState } from "react";
import ItemList from "./question22a";

function Counter2() {
  const [count, setCount] = useState(0)

  console.log("Counter rendered")

  return (
    <div className="ml-10 my-3">
      <p className="my-10  text-xl -ml-10 font-bold underline">Question 22</p>
      <h2>Counter: {count}</h2>

      <button className="border-2 border-black text-white bg-purple-500 p-1 my-4" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <ItemList />
    </div>
  );
}

export default Counter2;