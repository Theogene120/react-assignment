import { useState } from "react";
import TodoList from "./question24a";

function TodoApp() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="ml-10 my-20">
      <p className="my-10  text-xl -ml-10 font-bold underline">Question 24</p>
      <h2 className="text-xl font-bold">Todo App</h2>

      <input
        className="border-2 border-black h-10"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />

      <button className="border-2 border-black bg-purple-400 p-2 px-8 text-white" onClick={addTodo}>Add</button>

      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp;
