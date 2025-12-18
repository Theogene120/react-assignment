import { useState } from "react";


export default function Toggle() {

    let [toggle, setToggle] = useState('ON')

    let change = () => setToggle(toggle === 'ON' ? 'OFF' : 'ON')

    return (
        <div className="border-t border-black">
            <p>Events</p>
            <div className="ml-10 mt-5">
                <p>Click on button below</p>
                <button className="mt-2 py-1 px-4 border-2 border-black bg-purple-500 text-white font-bold" onClick={change}>{toggle}</button>
            </div>
        </div>
    )
}