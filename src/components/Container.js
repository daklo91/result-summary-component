import styles from "./Container.module.css";

function Container() {
  return (
    <div className={styles.container}>
      <div className={styles.showcase}>
        <p className={`${styles.yourResult} heading-m`}>Your Result</p>
        <div className={styles.counterContainer}>
          <p className={`${styles.counterScore} heading-xl`}>76</p>
          <p className={styles.counterTotalScore}>of 100</p>
        </div>
        <p className={`${styles.resultInfoHeader} heading-l`}>Great</p>
        <p className={styles.resultInfoText}>
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
      <div className={styles.column}>Dette er en test</div>
    </div>
  );
}

export default Container;
