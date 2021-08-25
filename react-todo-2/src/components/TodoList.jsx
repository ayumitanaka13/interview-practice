import React from "react";

const TodoList = ({todos, handleDelete}) => {
  return (
    <div className="todos">
      {todos.map((todo, i) => (
        <div key={i} className="todos__list">
          <p>{todo}</p>
          <button
            type="button"
            onClick={() => handleDelete(todo)}
            aria-label="Delete Todo"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
