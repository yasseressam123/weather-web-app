import './app-weather-display.css';

const AppWeatherDisplay = (props)=>{
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return(
        <div>
            <div>
                <h2>New Cairo</h2>
                <p>{date}</p>
                <img src="../../../assets/CurrentIcon.png" alt="cloudy" />
                <p>{props.data.currently.summary}</p>
            </div>
            <div>
                <h1>{props.data.currently.temperature}</h1>
                <p><span>{props.data.currently.apparentTemperature}</span>/<span>{props.data.currently.dewPoint}</span></p>
                <p>{props.data.hourly.summary}</p>
            </div>
        </div>
    )
}

export default AppWeatherDisplay;