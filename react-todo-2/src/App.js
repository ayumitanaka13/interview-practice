// import Todos from "./components/Todos";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles/style.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDelete = (deleteTodo) => {
    setTodos(todos.filter((todo) => todo !== deleteTodo));
  };

  return (
    <div className="App">
      <div className="container">
        <TodoForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          todo={todo}
        />
        <TodoList todos={todos} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
