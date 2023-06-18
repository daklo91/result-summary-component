import styles from "./CTAButton.module.css";

function CTAButton() {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.CTAButton}>
        <span>Continue</span>
      </button>
    </div>
  );
}

export default CTAButton;
