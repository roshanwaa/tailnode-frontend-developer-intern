import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo({
      id: Date.now(),
      text,
      completed: false,
    });
    setText("");
  };

  return (
    <form className="mt-4 mb-4" onSubmit={handleSubmit}>
      <input
        className="border rounded-md px-4 py-2 w-full"
        type="text"
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
