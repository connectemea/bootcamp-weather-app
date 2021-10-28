import { useContext } from "react";
import { weatherContext } from "../../context/weatherContext";
import { AUTH_TOKEN } from "../../const";
import { useState } from "react";
import { useHistory } from "react-router";
import styles from "./styles.module.css";
export default function SelectPlace() {
  //state to store place name
  const [place, setPlace] = useState();

  //state to store error
  const [errMsg, setErrMsg] = useState();

  //state for weather data (context)
  const { setWeatherData } = useContext(weatherContext);

  //history to manage the route
  const history = useHistory();

  //handle search input change
  const handleSearchChange = (event) => setPlace(event.target.value);

  //handle place selection and api call
  const handlePlaceChange = () => {
    //set API call in openweathermap
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${AUTH_TOKEN}`;

    //fetching weather data of selected place
    fetch(url)
      //handle req success
      .then((res) => res.json())

      .then(
        //result object handler
        (result) => {
          if (result.cod === "404") {
            return setErrMsg(result.message);
          }
          setWeatherData(result);
          history.push("/weather");
        },
        //error object handler
        (error) => {
          console.log("Error::", error);
        }
      );
  };
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.container}>
        <div className={styles.titleSection}>Weather App</div>
        <div className={styles.searchSection}>
          <input
            name="search"
            placeholder="Enter the place"
            value={place}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />

          <button
            onClick={place ? handlePlaceChange : null}
            className={styles.SearchBtn}
          >
            <i class="fas fa-search"></i>
          </button>
        </div>
        <p className={styles.errMsg}>{errMsg}</p>
      </div>
    </div>
  );
}
