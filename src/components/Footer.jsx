import styles from "./Footer.module.css";
export default function Footer({ completedTodo, totalTodo }) {
  return (
    <div className={styles.footer}>
      <span className={styles.items}>completed Todo : {completedTodo}</span>
      <span>Total Todo : {totalTodo}</span>
    </div>
  );
}
