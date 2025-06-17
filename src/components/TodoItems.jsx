import TodoList from "./TodoList";
import styles from "./TodoItems.module.css";

export default function TodoItems({ todos, setTodos }) {
  const sortedTodo = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodo.map((item) => (
        <TodoList
          items={item}
          key={item.name}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
