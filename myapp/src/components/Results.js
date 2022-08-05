import React from "react";
import styles from "./Results.module.css";
import Top from "./results/Top";
import Middle from "./results/Middle";
import Bottom from "./results/Bottom";
import { useState } from "react";

const Results = ({ currentWeatherData }) => {
  const [tempUnit, setTempUnit] = useState("imperial");

  const { name, main, sys, timezone, weather, wind } = currentWeatherData;
  console.log(name, main, sys, timezone, weather, wind);
  console.log(currentWeatherData);

  // Top
  console.log("name" + " " + name);
  console.log("temp" + " " + main.temp);
  console.log("weather" + " " + weather[0].main);

  // Middle
  console.log("sunrise" + " " + sys.sunrise);
  console.log("sunset" + " " + sys.sunset);

  // Bottom
  console.log("feels like" + " " + main["feels_like"]);
  console.log("humidity" + " " + main.humidity);
  console.log("wind speed" + " " + wind.speed);

  return (
    <div className={styles.results}>
      <Top tempUnit={tempUnit} setTempUnit={setTempUnit} />
      <Middle
        sunriseTimestamp={sys.sunrise}
        sunsetTimestamp={sys.sunset}
        locationTimeDiffToUTF={timezone}
      />
      <Bottom />
    </div>
  );
};

export default Results;
