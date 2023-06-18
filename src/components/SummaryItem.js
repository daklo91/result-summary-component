import styles from "./SummaryItem.module.css";

function SummaryItem(props) {
  return (
    <li className={styles[props.skill.color]}>
      <span className={styles.icon_and_name}>
        <img src={props.skill.icon} alt="" />
        {props.skill.category}
      </span>
      <span>
        <span className={styles.score}>{props.skill.score}</span>
        <span className={styles.total_score}> / 100</span>
      </span>
    </li>
  );
}

export default SummaryItem;
