function WeatherDetails({ weather }) {
  return (
    <div className="other">
      <div>🌬️ Wind speed: {weather.wind?.speed} m/s</div>
      <div>💧 Humidity: {weather.main?.humidity}%</div>
      <div>☁️ Weather type: {weather.weather?.[0]?.main}</div>
      <div>📝 Description: {weather.weather?.[0]?.description}</div>
    </div>
  );
}

export default WeatherDetails;
