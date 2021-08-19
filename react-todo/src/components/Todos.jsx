import React from "react";
import { useState } from "react";

const Todos = () => {
  //   const [todo, setTodo] = useState("");
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <input
          id="add-todo"
          name="add-todo"
          type="text"
          //   value={target.value}
          placeholder="What's your todo?"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>

      <div className="todos">
        <div className="todos__list">
          <input type="checkbox" id="todo" name="todo" />
          <label htmlFor="todo">{input}</label>
        </div>
      </div>
    </div>
  );
};

export default Todos;
