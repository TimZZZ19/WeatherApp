import React from "react";
import styles from "./Results.module.css";
import Top from "./results/Top";
import Middle from "./results/Middle";
import Bottom from "./results/Bottom";
import { useState, useEffect } from "react";

const Results = ({ currentWeatherData }) => {
  const { name, main, sys, timezone, weather, wind } = currentWeatherData;

  const [temp, setTemp] = useState(main.temp);
  const [feelsLike, setFeelsLike] = useState(main['feels_like']);
  const [tempUnit, setTempUnit] = useState("imperial");

  useEffect(()=>{
    setTemp(main.temp);
    setFeelsLike(main['feels_like']);
  },[main])
  useEffect(()=>{setTempUnit("imperial")}, [currentWeatherData])

  console.log(name, main, sys, timezone, weather, wind);
  console.log(currentWeatherData);

  // // Top
  // console.log("name" + " " + name);
  // console.log("temp" + " " + main.temp);
  // console.log("weather" + " " + weather[0].main);

  // // Middle
  // console.log("sunrise" + " " + sys.sunrise);
  // console.log("sunset" + " " + sys.sunset);

  // // Bottom
  // console.log("feels like" + " " + main["feels_like"]);
  // console.log("humidity" + " " + main.humidity);
  // console.log("wind speed" + " " + wind.speed);

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

        weather={weather[0].main} />
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
