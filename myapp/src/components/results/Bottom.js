import React from "react";
import styles from "./Bottom.module.css";

const Bottom = () => {
  return (
    <div className={styles.bottom}>
      <div className={styles["feels-like"]}>
        <p className={styles.number}>84&#176;F</p>
        <p className={styles.text}>Feels Like</p>
      </div>
      <div className={styles["humidity"]}>
        <p className={styles.number}>65%</p>
        <p className={styles.text}>Humidity</p>
      </div>
      <div className={styles["wind-speed"]}>
        <p className={styles.number}>4MPH</p>
        <p className={styles.text}>Wind Speed</p>
      </div>
    </div>
  );
};

export default Bottom;
