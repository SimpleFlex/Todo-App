import styles from "./TodoList.module.css";

export default function TodoList({ items, todos, setTodos }) {
  function deleteButton() {
    setTodos(todos.filter((todo) => todo !== items));
  }

  function handleClick() {
    const updatedTodos = todos.map((todo) =>
      todo === items ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  }

  const lineThrough = items.done ? styles.taskCompleted : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={lineThrough} onClick={handleClick}>
          {items.name || items.text}
        </span>
        <button onClick={deleteButton} className={styles.deleteButton}>
          X
        </button>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
