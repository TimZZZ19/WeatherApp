import React from "react";
import styles from "./Top.module.css";

const Top = ({ tempUnit, setTempUnit }) => {
  const handleTempUnit = (e) => {
    setTempUnit(e.target.getAttribute("id"));
  };

  return (
    <div className={styles.top}>
      <div className={styles["location-converter"]}>
        <span className={styles.location}>Chicago</span>
        <div className={styles.converter}>
          <button
            id="imperial"
            onClick={handleTempUnit}
            className={`${tempUnit === "imperial" && styles["active-btn"]}`}
          >
            &#176;F
          </button>
          <button
            id="metric"
            onClick={handleTempUnit}
            className={`${tempUnit === "metric" && styles["active-btn"]}`}
          >
            &#176;C
          </button>
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
