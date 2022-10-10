import './App.css';
import React, { useState } from "react";
import Background from './Background.js';
import SearchBar from "material-ui-search-bar";

function App() {
  const API_KEY = "1454ed3aaede7b9e8409f598962c9b74";
  const API_URL = 'https://api.openweathermap.org/data/2.5';
  const [data, setData] = useState([]);
  const[city, setCity] = useState([]);

  const search = city => {
      fetch(`${API_URL}/weather?q=${city}&appid=${API_KEY}&units=imperial`)
      .then(res => res.json())
      .then(result => {
        switch(result.cod) {
          case "404":
            alert("City does not exist, please try again.");
            break;
          default:
            setData(result);
            setCity("");
        }
        console.warn("Fetched", result);
    });
  }

  return (
    <div className="weatherApp">
      <div className="searchBar">
        <SearchBar 
          placeholder='Enter your location'
          value={city} 
          onRequestSearch={search}
          style={{
            'padding': '15px',
            'margin': '10px 10px 10px 10px',
            'width': '97%',
            'backgroundColor': 'rgba(255,255,255,0.5)',
            'boxShadow': '3px 3px 3px 3px rgba(39, 35, 35, 0.3)',
            'borderRadius': '40px',
            'fontSize': 'large',

          }}
        ></SearchBar>
        </div>
        {data.name ? (
          <Background weatherData={data}></Background>
        ) : console.log("Waiting for data...")}
    </div>
  );
}

export default App;
