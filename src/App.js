import './App.css';
import React, { useEffect, useState } from "react";
import Geolocation from '@react-native-community/geolocation';
import Background from './Background.js';


function App() {
  const API_KEY = "1454ed3aaede7b9e8409f598962c9b74";
  const API_URL = 'https://api.openweathermap.org/data/2.5';
  const [data, setData] = useState([]);
  const[city, setCity] = useState([]);

  const search = event => {
    // console.warn("Inside of search event: ", event);
    if(event.key === 'Enter') {
      // console.warn("Inside of if statement");
      fetch(`${API_URL}/weather?q=${event.target.value}&appid=${API_KEY}&units=imperial`)
      .then(res => res.json())
      .then(result => {
        setData(result);
        setCity("");
        console.warn("Fetched", result);
      });
    }
  }

  return (
    <div className="weatherApp">
        <input 
          type="text" 
          className="search-bar" 
          placeholder='Enter your location'
          onChange={e => setCity(e.target.value)}
          value={city} 
          onKeyPress={search} 
        />
        {data.name ? (
          <Background weatherData={data}></Background>
        ) : console.warn("Waiting for data...")}
    </div>
  );
}

export default App;
