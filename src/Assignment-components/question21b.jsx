import { useState } from "react";
import Child from "./question21a";

function ReactMemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="ml-10 my-5">
      <p className="my-10  text-xl -ml-10 font-bold underline">Question 21</p>
      <h2 className="text-xl font-bold">Parent Component</h2>
      <p>Counter: {count}</p>

      <button className="border-2 border-black bg-purple-400 p-2" onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      <Child message="Hello from Parent" />
    </div>
  );
}

export default ReactMemo;
