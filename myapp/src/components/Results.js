import React from "react";
import styles from "./Results.module.css";
import Top from "./results/Top";
import Middle from "./results/Middle";
import Bottom from "./results/Bottom";

const Results = ({ currentWeatherData }) => {
  console.log(currentWeatherData);

  return (
    <div className={styles.results}>
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
};

export default Results;
