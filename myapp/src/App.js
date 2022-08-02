import "./App.css";
import { useState } from "react";
import SearchBar from "./components/UI components/SearchBar";
import Reports from "./components/reports/Reports";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("");

  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [hourlyWeatherData, setHourlyWeatherData] = useState({});
  const [dailyWeatherData, setDailyWeatherData] = useState({});

  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=60f4a693778a062a59f90441e674eb67`;
  const hourlyUrl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${location}&appid=60f4a693778a062a59f90441e674eb67`;
  const dailyUrl = `api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt={cnt}&appid=60f4a693778a062a59f90441e674eb67`;

  const getWeatherData = () => {
    axios
      .get(currentUrl)
      .then((response) => setCurrentWeatherData(response.data));
    axios
      .get(hourlyUrl)
      .then((response) => setHourlyWeatherData(response.data));
    axios.get(dailyUrl).then((response) => setDailyWeatherData(response.data));
  };

  return (
    <div className="background">
      <SearchBar
        location={location}
        setLocation={setLocation}
        getWeatherData={getWeatherData}
      />
      <Reports />
    </div>
  );
}

export default App;
