import TodoList from "./TodoList";

export default function TodoItems({ todos }) {
  return (
    <div>
      {todos.map((items) => (
        <TodoList items={items} key={items} />
      ))}
    </div>
  );
}
