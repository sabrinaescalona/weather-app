import './App.css';
import React from "react";
import './styles.css';
import moment from 'moment';

const Weather = (props) => {
    let data = props.weatherData;

    return (
        <div className="outer">
            <div className="container">
                <div className="weatherHeader">
                    <label className="city">{data.name}</label>
                </div>
                <div className='circleContainer'>
                    <div className="circle">
                        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img>
                        <label className="temp" >{Math.round(data.main.temp)} °F</label>
                        <label className="feelsLike">Feels Like: {Math.round(data.main.feels_like)} °F</label>
                        <label className='high'>H:{Math.round(data.main.temp_max)}
                            {'  '}L:{Math.round(data.main.temp_min)}
                        </label>
                    </div>
                </div>
                <div className='date'>
                    {moment().format("dddd")}, {moment().format("LL")}
                    <p>Description: {data.weather[0].description}</p>
                </div>
                <div className="weatherBox">
                    <div>
                        <label>Humidity: {data.main.humidity}%</label>
                    </div>
                    <div>
                        <label>Wind Speed: {data.wind.speed} MPH</label>
                    </div>
                    <div>
                        <label>Cloudiness: {data.clouds.all}%</label>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Weather;

