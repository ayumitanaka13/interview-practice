import React from "react";
import { useState } from "react";

const Todos = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const deleteTodo = (deleteTodo) => {
    setTodos(todos.filter((todo) => todo !== deleteTodo));
  };

  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <input
          id="add-todo"
          name="add-todo"
          type="text"
          value={input}
          placeholder="What's your todo?"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>

      <div>
        {todos.map((todo, i) => (
          <div key={i}>
            <p>{todo}</p>
            <button type="button" onClick={() => deleteTodo(todo)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
