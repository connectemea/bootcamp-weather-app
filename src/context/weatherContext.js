import { createContext, useState } from 'react';

export const weatherContext = createContext();

export default function WheatherDataProvider(props) {
  const [weatherData, setWeatherData] = useState([]);

  return (
    <weatherContext.Provider value={{ weatherData, setWeatherData }}>
      {props.children}
    </weatherContext.Provider>
  );
}
