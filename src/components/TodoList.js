import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, markComplete, deleteTodo }) => {
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          markComplete={markComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
