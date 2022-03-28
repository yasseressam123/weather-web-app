import './weather-app.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import AppHeader from './components/app-header/app-header';
import AppWeatherDisplay from './components/app-weather-display/app-weather-display';



const WeatherApp = ()=>{
    const [data , setData] = useState({});

    
    useEffect(()=>{
       const success=(pos) => {
           let crd = pos.coords;
           let corrdinates = {lat:crd.latitude , long:crd.longitude}
           var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
           var targetURL = `https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/${corrdinates.lat},${corrdinates.long}`
           axios.get(proxyUrl + targetURL)
            // .then((response) => response.json())
            .then((data) => {
              let res = data.data;
              setData({...res});
              console.log("ghgghfgh", data.data);
            })
         }
       const error = (err)=> {
         console.warn(`ERROR(${err.code}): ${err.message}`);
       }
       const options = {
           enableHighAccuracy: true,
           timeout: 5000,
           maximumAge: 0
         };
       navigator.geolocation.getCurrentPosition(success, error, options);
       
      },[]);
    return(
        <div className="weather-app">
            <AppHeader/>
            <AppWeatherDisplay data={data}/>
        </div>
    )
}

export default WeatherApp;