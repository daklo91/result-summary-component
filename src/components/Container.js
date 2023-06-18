import styles from "./Container.module.css";
import { useEffect, useState } from "react";
import SummaryList from "./SummaryList";
import CTAButton from "./CTAButton";

function Container() {
  const [scoreNumber] = useState(50);
  const [tickNumber, setTickNumber] = useState(0);
  const [delay, setDelay] = useState(10);

  useEffect(() => {
    const tickTreshold = scoreNumber - 30;
    const ticker = setInterval(() => {
      if (tickNumber > tickTreshold && tickNumber !== scoreNumber) {
        setDelay((prev) => prev + 6);
      }
      if (tickNumber < scoreNumber) {
        setTickNumber((prev) => prev + 1);
      } else {
        clearInterval(ticker);
      }
    }, delay);
    return () => clearInterval(ticker);
  });

  return (
    <div className={styles.container}>
      <div className={styles.showcase}>
        <p className={`${styles.yourResult} heading-m`}>Your Result</p>
        <div className={styles.counterContainer}>
          <p className={`${styles.counterScore} heading-xl`}>{tickNumber}</p>
          <p className={styles.counterTotalScore}>of 100</p>
        </div>
        <p className={`${styles.resultInfoHeader} heading-l`}>Great</p>
        <p className={styles.resultInfoText}>
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
      <div className={styles.summaryContainer}>
        <p className={`${styles.summaryHeader} heading-m`}>Summary</p>
        <SummaryList />
        <CTAButton />
      </div>
    </div>
  );
}

export default Container;
