import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import { ITask } from "./interfaces";
import "./App.css";
import TodoList from "./components/TodoList";

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(1);
  const [todos, setTodos] = useState<ITask[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTodo = { todo: todo, deadline: deadline };
    setTodos([...todos, newTodo]);
    setTodo("");
    setDeadline(1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "todo") {
      setTodo(e.target.value);
    } else if (e.target.name === "deadline") {
      setDeadline(Number(e.target.value));
    }
  };

  const completeTodo = (completeTodo: string): void => {
    setTodos(
      todos.filter((todo) => {
        return todo.todo !== completeTodo;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <form action="" method="post" onSubmit={handleSubmit}>
          <input
            id="todo"
            type="text"
            name="todo"
            value={todo}
            placeholder="todo?"
            onChange={handleChange}
          />
          <input
            id="deadline"
            type="number"
            name="deadline"
            value={deadline}
            placeholder="deadline?"
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="todos">
        {todos.map((todo: ITask, i: number) => (
          <TodoList key={i} todo={todo} completeTodo={completeTodo} />
        ))}
      </div>
    </div>
  );
};

export default App;
