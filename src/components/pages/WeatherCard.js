import { useContext } from "react";
import { weatherContext } from "../../context/weatherContext";
export default function WeatherCard() {
  const { weatherData } = useContext(weatherContext);
  return (
    <div>
      <div>
        <h3>{weatherData.name}</h3>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="weatherIcon"
        />
        <h4>{weatherData.main.temp} deg</h4>
        <p>
          {weatherData.main.temp_min} - {weatherData.main.temp_max} deg
        </p>
      </div>
    </div>
  );
}
