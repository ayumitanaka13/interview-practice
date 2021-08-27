import React from "react";

const TodoForm = ({ handleSubmit, todo, inputRef, handleChange }) => {
  return (
    <form action="" method="post" onSubmit={handleSubmit}>
      <input
        id="todo"
        name="todo"
        type="text"
        value={todo}
        ref={inputRef}
        placeholder="Let's add todo!"
        required
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
