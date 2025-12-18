import { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <div className="m-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border border-black p-2 bg-gray-200 w-40"
      >
        Select option
      </button>

      {isOpen && (
        <ul className="border border-black mt-2 w-40">
          <li className="p-2 hover:bg-gray-200">Option 1</li>
          <li className="p-2 hover:bg-gray-200">Option 2</li>
          <li className="p-2 hover:bg-gray-200">Option 3</li>
        </ul>
      )}
    </div>
  );
}
