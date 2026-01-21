import { useState } from "react";

export default function CheckboxForm() {
  const options = ["Reading", "Coding", "Music", "Traveling", 'Cooking', "hiking", 'Joging', "sleeping"];

  const [selected, setSelected] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;

    if (selected.includes(value)) {
      // Remove if already selected
      setSelected(selected.filter(item => item !== value));
    } else {
      // Add if not selected
      setSelected([...selected, value]);
    }
  };

  return (
    <div>
      <p className="my-5  text-xl font-bold underline">Question 15</p>
      <div className="m-10 p-5 border border-gray-400">
      <h2 className="font-bold mb-3">Select your hobbies</h2>

      {options.map(option => (
        <label key={option} className="block">
          <input
            type="checkbox"
            value={option}
            onChange={handleChange}
          />{" "}
          {option}
        </label>
      ))}

      <div className="mt-4">
        <h3 className="font-semibold">Selected hobbies:</h3>
        {selected.length === 0 ? (
          <p>None selected</p>
        ) : (
          <ul className="list-disc ml-5">
            {selected.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>
    
  );
}
