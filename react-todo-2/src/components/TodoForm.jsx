import React from "react";

const TodoForm = ({ handleSubmit, handleChange, todo }) => {
  return (
    <form action="" method="post" onSubmit={handleSubmit}>
      <label htmlFor="todo">ADD TODO</label>
      <input
        id="todo"
        type="text"
        name="todo"
        value={todo}
        placeholder="What's your todo?"
        onChange={(e) => handleChange(e)}
        required
      />
      <button type="submit" disabled={todo === ""}>
        ADD
      </button>
    </form>
  );
};

export default TodoForm;
