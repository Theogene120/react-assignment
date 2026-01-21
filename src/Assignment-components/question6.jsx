

import { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState("OFF");

  const change = () => {
    setToggle(toggle === "ON" ? "OFF" : "ON");
  };

  return (
    <div className="border-t border-black">
      <p>Events</p>

      <div className="ml-10 mt-5">
        <p className="my-5 -ml-10 text-xl font-bold underline">
          Question 6
        </p>

        <p>Click on button below</p>

        <button
          className="mt-2 py-1 px-4 border-2 border-black text-white font-bold"
          onClick={change}
          style={{
            backgroundColor: toggle === "ON" ? "green" : "red",
          }}
        >
          {toggle}
        </button>
      </div>
    </div>
  );
}
