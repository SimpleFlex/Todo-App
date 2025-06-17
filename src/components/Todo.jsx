import { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";
import TodoItems from "./TodoItems";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completeTodos = todos.filter((todo) => todo.done).length;
  const totalTodo = todos.length;
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <TodoItems todos={todos} setTodos={setTodos} />
      <Footer completedTodo={completeTodos} totalTodo={totalTodo} />
    </>
  );
}
