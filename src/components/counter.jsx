import { useState } from "react";

export default function Counter() {
    const names = ['Theo', 'Eva', 'Cynthia', 'Kenny'];
    let [index, setIndex] = useState(0)

    let previous = () => setIndex((index - 1 + names.length) % names.length)
    let next = () => setIndex((index + 1) % names.length)

    return (
        <div className="ml-10">
            <p>{names[index]}</p>
            <p className="flex gap-10">
                <button onClick={previous} className="border-2 border-purple-900 p-2 bg-purple-300">Previous Name</button>
                <button onClick={next} className="border-2 border-purple-900 p-2 bg-purple-300">Next Name</button>
            </p>
            
        </div>
    )
}