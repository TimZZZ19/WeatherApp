import React from "react";
import styles from "./Middle.module.css";

const localTimeDiffToUTC = new Date().getTimezoneOffset() * 60;

const convertCutOffTime = (timestamp, locationTimeDiffToUTF) => {
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

const getCurrentTime = (locationTimeDiffToUTF) => {
  const locationTime = new Date(
    (Date.now() / 1000 + localTimeDiffToUTC + locationTimeDiffToUTF) * 1000
  );

  console.log(locationTime);
};

const Middle = ({
  sunriseTimestamp,
  sunsetTimestamp,
  locationTimeDiffToUTF,
}) => {
  getCurrentTime(locationTimeDiffToUTF);

  return (
    <div className={styles.middle}>
      <div className={styles.sunrise}>
        <p className={styles.text}>
          <i className="bi bi-sunrise"></i>
        </p>
        <span className={styles.time}>
          {convertCutOffTime(sunriseTimestamp, locationTimeDiffToUTF)}
        </span>
      </div>
      <div className={styles.clock}>
        <span className={styles["location-time"]}>11 : 00</span>
        &nbsp;
        <span className={styles["location-period"]}>am</span>
      </div>
      <div className={styles.sunset}>
        <p className={styles.text}>
          <i className="bi bi-sunset"></i>
        </p>
        <span className={styles.time}>
          {convertCutOffTime(sunsetTimestamp, locationTimeDiffToUTF)}
        </span>
      </div>
    </div>
  );
};

export default Middle;
