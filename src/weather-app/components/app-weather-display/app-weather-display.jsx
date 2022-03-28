import './app-weather-display.css';
import React, {useEffect,useState} from 'react';

const AppWeatherDisplay = (props)=>{
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let temp = '';
    let apparentTemperature = '';
    let dewPoint = '';

    return(
        <div className='app-weather-display'>
            <div>
                <h2>New Cairo</h2>
                <p>{date}</p>
                <img src={require('../../../assets/CurrentIcon.png')} alt="cloudy" />
                {/* <p>{props.data.currently.summary}</p> */}
            </div>
            <div>
                <h1>{temp}&#176;</h1>
                <p><span>{apparentTemperature}&#176;</span>/<span>{dewPoint}&#176;</span></p>
                {/* <p>{props.data.hourly.summary}</p> */}
            </div>
        </div>
    )
}

export default AppWeatherDisplay;