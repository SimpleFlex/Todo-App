import { useState } from "react";
import Form from "./Form";
import TodoItems from "./TodoItems";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <TodoItems todos={todos} />
    </>
  );
}
