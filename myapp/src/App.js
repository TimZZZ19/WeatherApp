import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("");
  const [resultsShown, setResultsShown] = useState(false);

  const [currentWeatherData, setCurrentWeatherData] = useState({});

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=60f4a693778a062a59f90441e674eb67`;

  const getWeatherData = () => {
    axios.get(currentWeatherUrl).then((response) => {
      setCurrentWeatherData(response.data);
      setLocation("");
      setResultsShown(true);
    });
  };

  return (
    <div className="background">
      <div
        className="bng-img"
        style={{
          backgroundImage: `url("https://www.livinginhawaii.com/wp-content/uploads/2017/08/honolulu-1124096.jpg")`,
        }}
      ></div>
      <SearchBar
        location={location}
        setLocation={setLocation}
        getWeatherData={getWeatherData}
      />
      {resultsShown ? (
        <Results currentWeatherData={currentWeatherData} />
      ) : (
        <div className="welcome-screen">
          <p className="welcome-msg">Welcome to WeatherApp!</p>
        </div>
      )}
    </div>
  );
}

export default App;
