import { useState } from "react";
import HeavyCalculation from "./question23a";

function PerformanceDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="ml-10 my-5">
      <p className="my-10  text-xl -ml-10 font-bold underline">Question 23</p>
      <h2 className="text-xl font-bold">Performance Demo</h2>
      <p>Counter: {count}</p>

      <button className="border-2 border-black bg-purple-400 p-2 text-white" onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      <HeavyCalculation number={5} />
    </div>
  );
}

export default PerformanceDemo;
