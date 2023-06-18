import data from "../data.json";
import SummaryItem from "./SummaryItem";
import styles from "./SummaryList.module.css";

function SummaryList() {
  return (
    <ul className={styles.list}>
      {data.map((props) => (
        <SummaryItem skill={props} key={props.id} />
      ))}
    </ul>
  );
}

export default SummaryList;
