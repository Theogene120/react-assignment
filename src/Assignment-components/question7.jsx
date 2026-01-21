import { useState } from "react";

export default function Counter() {

    let [counter, setCounter] = useState(0)

    return(
        <div className="ml-10 mt-8">
            <p className="my-5 -ml-10 text-xl font-bold underline">Question 7</p>
            <p>{counter}</p>
            <p className="flex gap-10">
                <button onClick={() => setCounter(counter + 1)} className="border-2 border-black mt-2 px-2 text-white" style={{backgroundColor: 'green'}}>Increase</button>
                <button onClick={() => setCounter(counter === 0 ? 0 : counter - 1)} className="border-2 border-black mt-2 px-2 text-white" style={{backgroundColor: 'red'}}>Decrease</button>
            </p>
        </div>
    )
}