function WeatherInfo({ weather }) {
  const iconCode = weather.weather?.[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div id="temp">
      <img src={iconUrl} alt="weather icon" />
      <div>
        <h3>{weather.name}, {weather.sys?.country}</h3>
        <p>🌡️ Temperature: {weather.main?.temp} °C</p>
      </div>
    </div>
  );
}

export default WeatherInfo;
