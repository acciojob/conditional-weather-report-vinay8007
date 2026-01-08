import {useState} from "react";
import WeatherDisplay from "./WeatherDisplay"
function App(){
  const [weather, setWeather] = useState({
    temperature: 25,
    condition: "Sunny",
  });
  return(
    <div>
      <WeatherDisplay weather = {weather}/>
    </div>
  );
}
export default App;
