import React from "react";
import styles from "./Middle.module.css";

const Middle = () => {
  return (
    <div className={styles.middle}>
      <div className={styles.sunrise}>
        <p className={styles.time}>07:00 am</p>
        <p className={styles.text}>Sunrise</p>
      </div>
      <div className={styles.sunset}>
        <p className={styles.time}>08:00 pm</p>
        <p className={styles.text}>Sunset</p>
      </div>
    </div>
  );
};

export default Middle;
