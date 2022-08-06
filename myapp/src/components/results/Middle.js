import React, {useState, useEffect} from "react";
import styles from "./Middle.module.css";


const normalizeTime = (timestamp, locationTimeDiffToUTF) => {
  const localTimeDiffToUTC = new Date().getTimezoneOffset() * 60;

  const time = new Date(
    (timestamp + localTimeDiffToUTC + locationTimeDiffToUTF) * 1000
  );

  const result = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
   });
 
   return result;
  // const hours = time.getHours();
  // const mins = time.getMinutes();

  // const normalizedHours = hours > 12 ? hours - 12 : hours;

  // const hoursString =
  //   normalizedHours < 10 ? `0${normalizedHours}` : `${normalizedHours}`;

  // const minsString = mins < 10 ? `0${mins}` : `${mins}`;
  // const periodString = hours < 12 ? "am" : "pm";

  // return hoursString + ":" + minsString + " " + periodString;
};


const Middle = ({
  sunriseTimestamp,
  sunsetTimestamp,
  locationTimeDiffToUTF,
}) => {

  const [currentLocationTime, setCurrentLocationTime] = useState('');

  useEffect(() => {
    const clockId = setInterval(() => tick(), 1000)

    return function cleanup () {
      clearInterval(clockId);
    }
  })

  function tick(){
    const time = normalizeTime(Date.now() / 1000, locationTimeDiffToUTF);
    setCurrentLocationTime(time);
  }


  return (
    <div className={styles.middle}>
      <div className={styles.sunrise}>
        <p className={styles.text}>
          <i className="bi bi-sunrise"></i>
        </p>
        <span className={styles.time}>
          {normalizeTime(sunriseTimestamp, locationTimeDiffToUTF)}
        </span>
      </div>
      <div className={styles.clock}>
        <span className={styles["location-time"]}>{currentLocationTime}</span>
      </div>
      <div className={styles.sunset}>
        <p className={styles.text}>
          <i className="bi bi-sunset"></i>
        </p>
        <span className={styles.time}>
          {normalizeTime(sunsetTimestamp, locationTimeDiffToUTF)}
        </span>
      </div>
    </div>
  );
};

export default Middle;
