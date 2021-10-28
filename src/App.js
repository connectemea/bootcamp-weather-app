import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import SelectPlace from "./components/pages/SelectPlace";
import WeatherCard from "./components/pages/WeatherCard";
import WheatherDataProvider from "./context/weatherContext";
function App() {
  return (
    <Router>
      <Switch>
        <WheatherDataProvider>
          <Route exact path="/" component={SelectPlace} />
          <Route exact path="/selectPlace" component={SelectPlace} />
          <Route exact path="/weather" component={WeatherCard} />
        </WheatherDataProvider>
      </Switch>
    </Router>
  );
}

export default App;
