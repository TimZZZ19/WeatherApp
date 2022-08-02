import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ location, setLocation, getWeatherData }) => {
  const submitInput = (e) => {
    if (e.key !== "Enter") return;
    getWeatherData();
  };

  return (
    <div className={styles["search-bar"]}>
      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={submitInput}
      />
      <button onClick={getWeatherData}>
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </div>
  );
};

export default SearchBar;
