import React from "react";
import styles from "./SearchBar.module.css";
import { useState } from "react";
import cities from "cities.json";

const citySet = [];
cities.forEach((city) => citySet.push(city.name.toLowerCase()));

const SearchBar = ({ location, setLocation, getWeatherData }) => {
  const [waringMsgShown, setWarningMsgShown] = useState(false);
  const submitInput = (e) => {
    if (e.key !== "Enter" && e.target.getAttribute("id") !== "submit-btn")
      return;

    if (citySet.includes(location.toLowerCase())) {
      getWeatherData();
    } else {
      setWarningMsgShown(true);
    }
  };

  const inputChangeHandler = (e) => {
    setLocation(e.target.value);
    if (waringMsgShown) setWarningMsgShown(false);
  };

  return (
    <div
      className={`${styles["search-bar"]} ${
        waringMsgShown && styles["search-bar--invalid-input"]
      }`}
    >
      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={inputChangeHandler}
        onKeyPress={submitInput}
      />
      <button onClick={submitInput}>
        <ion-icon id="submit-btn" name="search-outline"></ion-icon>
      </button>
    </div>
  );
};

export default SearchBar;
