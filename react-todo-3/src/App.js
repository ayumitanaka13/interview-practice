import React, { useEffect, useRef, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles/style.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = (deleteTodo) => {
    setTodos(todos.filter((todo) => todo !== deleteTodo));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          inputRef={inputRef}
          todo={todo}
        />
        <TodoList todos={todos} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
