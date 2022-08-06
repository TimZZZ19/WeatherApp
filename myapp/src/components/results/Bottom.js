import React from "react";
import styles from "./Bottom.module.css";

const Bottom = ({feelsLike, tempUnit, humidity, windSpeed}) => {
  return (
    <div className={styles.bottom}>
      <div className={styles["feels-like"]}>
        <p className={styles.number}>
          {`${feelsLike.toFixed(0)}`} 
          &nbsp;&#176;
          {`${tempUnit === "imperial"? 'F':'C'}`}
        </p>
        <p className={styles.text}>Feels Like</p>
      </div>
      <div className={styles["humidity"]}>
        <p className={styles.number}>{humidity}%</p>
        <p className={styles.text}>Humidity</p>
      </div>
      <div className={styles["wind-speed"]}>
        <p className={styles.number}>{windSpeed.toFixed(0)}&nbsp;MPH</p>
        <p className={styles.text}>Wind Speed</p>
      </div>
    </div>
  );
};

export default Bottom;
