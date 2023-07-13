import { BsFillTrash3Fill } from "react-icons/bs";
import React from "react";

const TodoCard = ({ todo, markComplete, deleteTodo }) => {
  const { id, text, completed } = todo;

  const handleComplete = () => {
    markComplete(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg px-4 py-4 hover:bg-gray-100 transition-colors duration-300">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleComplete}
          className="mr-2"
        />
        <span className={`${completed ? "line-through text-gray-500" : ""}`}>
          {text}
        </span>
      </div>
      <button
        type="button"
        className="text-red-500 text-lg	"
        onClick={handleDelete}
      >
        <BsFillTrash3Fill />
      </button>
    </div>
  );
};

export default TodoCard;
