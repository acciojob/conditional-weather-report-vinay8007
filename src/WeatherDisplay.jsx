function WeatherDisplay({weather}){
    const temperatureStyle={
        color:weather.temperature>20?"red":"blue",
    }
    return(
        <div>
            <p>temperature
                <span style={temperatureStyle}>{weather.temerature}?°C</span>
            </p>
            <p>condition:{weather.conditions}</p>
        </div>
    );
}
export default WeatherDisplay;
