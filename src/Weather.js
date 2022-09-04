import './App.css';
import React from "react";
import './styles.css';
import moment from 'moment';

const Weather = (props) => {
    let data = props.weatherData;

    return (
        <div className="outer">
            <div className="container">
                <box className="weatherHeader">
                    <text className="city">{data.name}</text>
                </box>
                <div className='date'>
                    {moment().format("dddd")}, {moment().format("LL")}
                    <p>Description: {data.weather[0].description}</p>
                </div>
                <box className="weatherBox">
                        <p>Temperature: {Math.round(data.main.temp)} °F</p>
                        <p>Feels Like: {Math.round(data.main.feels_like)} °F</p>
                        <p>Humidity: {data.main.humidity}%</p>
                        <p>Wind Speed: {data.wind.speed} MPH</p>
                        <p>Cloudiness: {data.clouds.all}%</p>
                </box>
            </div>
        </div>
    );
}


export default Weather;

