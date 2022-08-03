import React from "react";
import styles from "./Middle.module.css";

const Middle = () => {
  return (
    <div className={styles.middle}>
      <div className={styles.sunrise}>
        <p className={styles.text}>
          <i className="bi bi-sunrise"></i>
        </p>
        <span className={styles.time}>07:00 am</span>
      </div>
      <div className={styles.sunset}>
        <p className={styles.text}>
          <i className="bi bi-sunset"></i>
        </p>
        <span className={styles.time}>08:00 pm</span>
      </div>
    </div>
  );
};

export default Middle;
