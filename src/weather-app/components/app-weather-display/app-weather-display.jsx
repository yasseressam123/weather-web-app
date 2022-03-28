import './app-weather-display.css';

const AppWeatherDisplay = ()=>{
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return(
        <div>
            <div>
                <h2>New Cairo</h2>
                <p>{date}</p>
                <img src="../../../assets/Current Icon.png" alt="cloudy" />
                <p>Cloudy</p>
            </div>
            <div>
                <h1>72</h1>
                <p><span>81</span>/<span>82</span></p>
                <p>Cloudy throughout the day</p>
            </div>
        </div>
    )
}

export default AppWeatherDisplay;