import React from "react";
import styles from "./Top.module.css";

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles["location-converter"]}>
        <span className={styles.location}>Chicago</span>
        <div className={styles.converter}>
          <button className={styles.fahrenheit}>&#176;F</button>
          <button className={styles.celsius}>&#176;C</button>
        </div>
      </div>
      <div className={styles["temperature-weather-condition"]}>
        <span className={styles.temperature}>81&#176;F</span>
        <span className={styles["weather-condition"]}>Clear</span>
      </div>
    </div>
  );
};

export default Top;
