import './App.css';
import React, { useState } from "react";
import Background from './Background.js';


function App() {
  const API_KEY = "1454ed3aaede7b9e8409f598962c9b74";
  const API_URL = 'https://api.openweathermap.org/data/2.5';
  const [data, setData] = useState([]);
  const[city, setCity] = useState([]);

  const search = event => {
    if(event.key === 'Enter') {
      fetch(`${API_URL}/weather?q=${event.target.value}&appid=${API_KEY}&units=imperial`)
      .then(res => res.json())
      .then(result => {
        switch(result.cod) {
          case "404":
            alert("ERROR: City does not exist");
          default:
            setData(result);
            setCity("");
        }
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
        ) : <Background weatherData={data}></Background>}
    </div>
  );
}

export default App;
