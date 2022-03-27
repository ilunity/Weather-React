import React from 'react';
import '../css/weatherAppStyle.css';
import {
    thunderstormIcon,
    showerRainIcon,
    rainIcon,
    snowIcon,
    mistIcon,
    clearSkyIcon,
    scatteredClouds
} from "../img/weather-icons/index.js";

const WEATHER_TYPES = {
    THUNDERSTORM: 'thunderstorm',
    SHOWER_RAIN: 'shower-rain',
    RAIN: 'rain',
    SNOW: 'snow',
    MIST: 'mist',
    CLEAR_SKY: 'clear-sky',
    SCATTERED_CLOUDS: 'scattered-clouds',
}

const WEATHER_SOURCES = {
    [WEATHER_TYPES.THUNDERSTORM]: thunderstormIcon,
    [WEATHER_TYPES.SHOWER_RAIN]: showerRainIcon,
    [WEATHER_TYPES.RAIN]: rainIcon,
    [WEATHER_TYPES.SNOW]: snowIcon,
    [WEATHER_TYPES.MIST]: mistIcon,
    [WEATHER_TYPES.CLEAR_SKY]: clearSkyIcon,
    [WEATHER_TYPES.SCATTERED_CLOUDS]: scatteredClouds,
}

function getWeatherTypeFromID(weatherID) {
    const strWeatherID = String(weatherID);

    if (strWeatherID.startsWith('2')) return WEATHER_TYPES.THUNDERSTORM;
    if (strWeatherID.startsWith('3')) return WEATHER_TYPES.SHOWER_RAIN;
    if (strWeatherID.startsWith('5')) return WEATHER_TYPES.RAIN;
    if (strWeatherID.startsWith('6')) return WEATHER_TYPES.SNOW;
    if (strWeatherID.startsWith('7')) return WEATHER_TYPES.MIST;

    if (strWeatherID === '800') return WEATHER_TYPES.CLEAR_SKY;
    if (strWeatherID.startsWith('80')) return WEATHER_TYPES.SCATTERED_CLOUDS;
}


function WeatherIcon(props) {
    const {weatherId} = props;

    const weatherType = getWeatherTypeFromID(weatherId);

    return (
        <img src={WEATHER_SOURCES[weatherType]} alt="Картинка погоды"/>
    )
}

export {WeatherIcon};