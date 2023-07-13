import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ResetButton from "./components/ResetButton";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">TODO</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        markComplete={markComplete}
        deleteTodo={deleteTodo}
      />
      <div className="flex justify-end rounded-full">
        <ResetButton resetTodos={resetTodos} />
      </div>
    </div>
  );
};

export default App;
