import './App.css';
import Weather from './Weather.js';
import React, { useEffect, useState } from "react";
import Geolocation from '@react-native-community/geolocation';


function App() {
  const API_KEY = "1454ed3aaede7b9e8409f598962c9b74";
  const ICON_URL = 'https://openweathermap.org/img/w';
  const API_URL = 'https://api.openweathermap.org/data/2.5';
  const [latitude, setLat] = useState([]);
  const [longitude, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      Geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
  
      await fetch(`${API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`)
      .then(res => res.json())
      .then(result => {
        setData(result);
        console.warn(result);
      });
    }
   
    fetchData();
  }, [latitude, longitude]);
  
  return (
    <div className="weatherApp">
      {data.name ? (
        <Weather weatherData={data}></Weather>
      ) : console.warn("Waiting for data...")}
    </div>
  );
}

export default App;
