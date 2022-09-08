import './App.css';
import React, { useEffect, useState } from "react";
import Geolocation from '@react-native-community/geolocation';
import Background from './Background.js';
import NavigationMenu from './NavigationMenu';


function App() {
  const API_KEY = "1454ed3aaede7b9e8409f598962c9b74";
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
        console.warn("Fetched", result);
      });
    }
   
    fetchData();
  }, [latitude, longitude]);
  
  return (
    <div className="weatherApp">
      <NavigationMenu></NavigationMenu>
        {data.name ? (
          <Background weatherData={data}></Background>
        ) : console.warn("Waiting for data...")}
    </div>
  );
}

export default App;
