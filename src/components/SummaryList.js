import { useEffect } from "react";
import data from "../data.json";

function SummaryList() {
  useEffect(() => {
    console.log(data);

    return () => {};
  }, []);

  return <ul></ul>;
}

export default SummaryList;
