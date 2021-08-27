import React from "react";

const TodoList = ({ todos, handleClick }) => {
  return (
    <div className="todos">
      <h5>You have {todos.length} todos</h5>
      {todos.map((todo, i) => (
        <div className="todos__todo" key={i}>
          <p>{todo}</p>
          <button type="button" onClick={() => handleClick(todo)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
