import React from "react";
import { IProps } from "../interfaces";

const TodoList = ({ todo, completeTodo }: IProps) => {
  return (
    <div>
      <p>{todo.todo}</p>
      <p>{todo.deadline}</p>
      <button type="button" onClick={() => completeTodo(todo.todo)}>
        X
      </button>
    </div>
  );
};

export default TodoList;
