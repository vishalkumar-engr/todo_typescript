import React, { useState } from "react";
import "./style.css";
import InputBox from "./commonComponents/InputBox";
import { Todo } from "../model";
import TodoList from "./TodoList";

const Body: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
   
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <div style={{ width: "90%" }}>
      <InputBox todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Body;
