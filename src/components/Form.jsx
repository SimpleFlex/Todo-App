import { useState } from "react";
import sytles from "./Form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", Done: false });
  }
  return (
    <>
      <form className={sytles.todoform} onSubmit={handleSubmit}>
        <div className={sytles.formComponent}>
          <input
            className={sytles.modernInput}
            type="text"
            placeholder="input your todo"
            value={todo.name}
            onChange={(e) => setTodo({ name: e.target.value, Done: false })}
          />
          <button className={sytles.modernButton} type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
