import React from "react";

const TodoList = React.memo(({ todos }) => {
  console.log("TodoList rendered");

  return (
    <ul className="list-disc ml-5">
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
});

export default TodoList;
