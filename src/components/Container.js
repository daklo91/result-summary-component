import styles from "./Container.module.css";

function Container() {
  return (
    <div className={styles.container}>
      <div className={styles.column}>Dette er en test</div>
      <div className={styles.column}>Dette er en test</div>
    </div>
  );
}

export default Container;
