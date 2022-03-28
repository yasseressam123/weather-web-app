import './app-weather-display.css';
import React, {useEffect} from 'react';

const AppWeatherDisplay = (props)=>{
    console.log("c2",props);
    const today = new Date();
    const date = today.toLocaleString('en-us', {weekday:'long'})+' '+(today.getMonth()+1)+', '+today.getFullYear();
    console.log("fff",today);
    let temp = '';
    let apparentTemperature = '';
    let dewPoint = '';
    useEffect(()=>{
        let tempMod = localStorage.getItem('tempMod');
        setTemp();
    },[props])
    const setTemp=()=>{
        console.log(props);
        let tempMod = localStorage.getItem('tempMod');
        if(tempMod === 'c'){
            let tempVal = props.data.currently ? props.data.currently.temperature : '';
            let apptempVal = props?.data?.currently ? props?.data?.currently?.apparentTemperature : '';
            let dewPointVal = props?.data?.currently? props?.data?.currently?.dewPoint : '';
            temp = (5/9) * (tempVal - 32);
            apparentTemperature = (5/9) * (apptempVal - 32);
            dewPoint = (5/9) * (dewPointVal - 32);
        }else if(tempMod === 'f'){
            temp = props?.data?.currently ? props?.data?.currently?.temperature : '';
            apparentTemperature = props?.data?.currently ? props?.data?.currently.apparentTemperature : '';
            dewPoint = props?.data?.currently ? props?.data?.currently.dewPoint : '';
        }
    }
    setTemp();

    return(
        <div className='app-weather-display'>
            <div>
                <h2>{props.city ? props.city : ''}</h2>
                <p>{date}</p>
                <img src={require('../../../assets/CurrentIcon.png')} alt="cloudy" />
                <p>{props.data.currently ? props.data?.currently.summary : ''}</p>
            </div>
            <div>
                <h1>{temp}&#176;</h1>
                <p><span>{apparentTemperature}&#176;</span>/<span>{dewPoint}&#176;</span></p>
                <p>{props.data.hourly ? props?.data?.hourly.summary : ''}</p>
            </div>
        </div>
    )
}

export default AppWeatherDisplay;