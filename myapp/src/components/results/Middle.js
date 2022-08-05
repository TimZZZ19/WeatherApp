import React from "react";
import styles from "./Middle.module.css";

const convertTime = (timestamp, locationTimeDiffToUTF) => {
  const localTimeDiffToUTC = new Date().getTimezoneOffset() * 60;
  const time = new Date(
    (timestamp + localTimeDiffToUTC + locationTimeDiffToUTF) * 1000
  );

  const hours = time.getHours();
  const mins = time.getMinutes();

  const normalizedHours = hours > 12 ? hours - 12 : hours;

  const hoursString =
    normalizedHours < 10 ? `0${normalizedHours}` : `${normalizedHours}`;

  const minsString = mins < 10 ? `0${mins}` : `${mins}`;
  const periodString = hours < 12 ? "am" : "pm";

  return hoursString + ":" + minsString + " " + periodString;
};

const Middle = ({
  sunriseTimestamp,
  sunsetTimestamp,
  locationTimeDiffToUTF,
}) => {
  return (
    <div className={styles.middle}>
      <div className={styles.sunrise}>
        <p className={styles.text}>
          <i className="bi bi-sunrise"></i>
        </p>
        <span className={styles.time}>
          {convertTime(sunriseTimestamp, locationTimeDiffToUTF)}
        </span>
      </div>
      <div className={styles.clock}></div>
      <div className={styles.sunset}>
        <p className={styles.text}>
          <i className="bi bi-sunset"></i>
        </p>
        <span className={styles.time}>
          {convertTime(sunsetTimestamp, locationTimeDiffToUTF)}
        </span>
      </div>
    </div>
  );
};

export default Middle;
