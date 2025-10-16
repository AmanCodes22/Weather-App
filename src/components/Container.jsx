import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";
import WeatherDetails from "./WeatherDetails";
import Message from "./Message";
import "./App.css";

function Container() {
 const myapi = import.meta.env.VITE_WEATHER_API;

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myapi}&units=metric`
      );
      const data = await res.json();

      if (res.ok) {
        setWeather(data);
      } else {
        setWeather(null);
        setError(data.message || "City not found");
      }
    } catch {
      setWeather(null);
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="maincon">
      <SearchBar city={city} setCity={setCity} onSearch={getData} />
      {loading && <Message text="Loading..." />}
      {error && <Message text={error} />}
      {weather && (
        <>
          <WeatherInfo weather={weather} />
          <WeatherDetails weather={weather} />
        </>
      )}
      {!weather && !loading && !error && <Message text="Search for any city to view weather 🌍" />}
    </div>
  );
}

export default Container;
