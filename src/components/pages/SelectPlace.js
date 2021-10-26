import { useContext } from "react";
import { weatherContext } from "../../context/weatherContext";
import { AUTH_TOKEN } from "../../const";
import { useState } from "react";
import { useHistory } from "react-router";
export default function SelectPlace() {
  const [place, setPlace] = useState();
  const [errMsg, setErrMsg] = useState();
  const { setWeatherData } = useContext(weatherContext);
  const history = useHistory();
  const handleSearchChange = (event) => setPlace(event.target.value);
  const handlePlaceChange = () => {
    console.log(place, AUTH_TOKEN);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${AUTH_TOKEN}`;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          if (result.cod === "404") {
            return setErrMsg(result.message);
          }
          setWeatherData(result);
          history.push("/weather");
        },
        (error) => {
          console.log("Error::",error);
        }
      );
  };
  return (
    <div>
      <div>
        <h3>Wheather app</h3>
      </div>
      <div>
        <div>
          <input name="search" value={place} onChange={handleSearchChange} />
          <button onClick={handlePlaceChange}>search</button>
        </div>
        <p>{errMsg}</p>
      </div>
    </div>
  );
}
