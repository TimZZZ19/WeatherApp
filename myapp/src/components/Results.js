import styles from "./Results.module.css";
import Top from "./results/Top";
import Middle from "./results/Middle";
import Bottom from "./results/Bottom";
import { useState, useEffect } from "react";
import React from "react";

const Results = ({ currentWeatherData }) => {
  const { name, main, sys, timezone, weather, wind } = currentWeatherData;

  const [temp, setTemp] = useState(main.temp);
  const [feelsLike, setFeelsLike] = useState(main["feels_like"]);
  const [tempUnit, setTempUnit] = useState("imperial");

  useEffect(() => {
    setTemp(main.temp);
    setFeelsLike(main["feels_like"]);
  }, [main]);

  useEffect(() => {
    setTempUnit("imperial");
  }, [currentWeatherData]);

  return (
    <div className={styles.results}>
      <Top
        name={name}
        temp={temp}
        setTemp={setTemp}
        feelsLike={feelsLike}
        setFeelsLike={setFeelsLike}
        tempUnit={tempUnit}
        setTempUnit={setTempUnit}
        weather={weather[0].main}
      />
      <Middle
        sunriseTimestamp={sys.sunrise}
        sunsetTimestamp={sys.sunset}
        locationTimeDiffToUTF={timezone}
      />
      <Bottom
        feelsLike={feelsLike}
        tempUnit={tempUnit}
        humidity={main.humidity}
        windSpeed={wind.speed}
      />
    </div>
  );
};

export default Results;
