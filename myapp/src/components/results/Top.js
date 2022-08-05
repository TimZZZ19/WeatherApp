import React from "react";
import styles from "./Top.module.css";

const convertToFahrenheit = (celsius)  => celsius * 1.8 + 32;
const convertToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

const Top = ({name, temp, setTemp, feelsLike, setFeelsLike,tempUnit, setTempUnit, weather}) => {
  const handleTempUnit = (e) => {
    const clickedTempUnit = e.target.getAttribute("id");
    if (clickedTempUnit === tempUnit) return;
    setTempUnit(clickedTempUnit);

    if (tempUnit === "imperial") {
      setTemp(convertToCelsius(temp)); 
      setFeelsLike(convertToCelsius(feelsLike));
    } else {
      setTemp(convertToFahrenheit(temp));
      setFeelsLike(convertToFahrenheit(feelsLike));
    }
  };

  return (
    <div className={styles.top}>
      <div className={styles["location-converter"]}>
        <span className={styles.location}>{name}</span>
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
        <span className={styles.temperature}>
          {`${temp.toFixed(0)}`} 
          &nbsp;&#176;
          {`${tempUnit === "imperial"? 'F':'C'}`}
          </span>
        <span className={styles["weather-condition"]}>{weather}</span>
      </div>
    </div>
  );
};

export default Top;
