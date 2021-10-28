import { useContext } from "react";
import { weatherContext } from "../../context/weatherContext";
import styles from "./styles.module.css";
export default function WeatherCard() {
  //weather state context
  const { weatherData } = useContext(weatherContext);

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.weatherCard}>
        {weatherData?.name && (
          <>
            <h3 className={styles.placeName}>{weatherData.name}</h3>
            <img
              // To get the weather indicator icon from api
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weatherIcon"
              className={styles.weatherIndicator}
            />
            <h4 className={styles.tempCount}>
              {weatherData.main.temp.toFixed(0)} °C
            </h4>
          </>
        )}
      </div>
    </div>
  );
}
