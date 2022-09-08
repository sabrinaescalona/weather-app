import React from "react";
import './styles.css';
import Weather from './Weather.js';

const imgMap = new Map();
imgMap.set('01d', './img/01d.jpg');
imgMap.set('01n', './img/01n.jpg');
imgMap.set('02d', './img/02d.jpg');
imgMap.set('02n', './img/02n.jpg');
imgMap.set('03d', './img/03d.jpg');
imgMap.set('03n', './img/03n.jpg');
imgMap.set('04d', './img/04d.jpg');
imgMap.set('04n', './img/04n.jpg');
imgMap.set('09d', './img/09d10d.jpg');
imgMap.set('09n', './img/09n10n.jpg');
imgMap.set('10d', './img/09d10d.jpg');
imgMap.set('10n', './img/09n10n.jpg');
imgMap.set('11d', './img/11dn.jpg');
imgMap.set('11n', './img/11dn.jpg');
imgMap.set('13d', './img/13d.jpg');
imgMap.set('13n', './img/13n.jpg');
imgMap.set('50d', './img/50d.jpg');
imgMap.set('50n', './img/50n.jpg');

const setStyle = (path) => ({
    backgroundImage: `url(${require("" + path + "")})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
});


const Background = (props) => {
    let imgPath = imgMap.get(props.weatherData.weather[0].icon);
    console.warn("ImgPath", imgPath);

    return (
        <div className="background" style={setStyle(imgPath)}>
            <Weather weatherData={props.weatherData}></Weather>
        </div>
    );
}

export default Background;

