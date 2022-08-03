import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("");
  const [resultsShown, setResultsShown] = useState(false);

  const [currentWeatherData, setCurrentWeatherData] = useState({});

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=60f4a693778a062a59f90441e674eb67`;

  const getWeatherData = () => {
    axios.get(currentWeatherUrl).then((response) => {
      setCurrentWeatherData(response.data);
      setLocation("");
      setResultsShown(true);
    });
  };

  console.log(currentWeatherData);

  return (
    <div className="background">
      <SearchBar
        location={location}
        setLocation={setLocation}
        getWeatherData={getWeatherData}
      />
      {resultsShown ? (
        <Results />
      ) : (
        <div className="welcome-screen">
          <p className="welcome-msg">Welcome to WeatherApp!</p>
        </div>
      )}
    </div>
  );
}

export default App;
