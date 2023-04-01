import styles from "./Container.module.css";

function Container() {
  return (
    <div className={styles.container}>
      <div className={styles.column1}></div>
      <div className={styles.column2}></div>
    </div>
  );
}

export default Container;
