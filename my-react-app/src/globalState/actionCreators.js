import {SET_CURRENT_CITY, SET_WEATHER_DATA, ADD_CITY, REMOVE_CITY} from './actions.js';


function setCurrentCity(cityName) {
    return {type: SET_CURRENT_CITY, cityName: cityName};
}

function setWeatherData(weatherData) {
    return{type: SET_WEATHER_DATA, weatherData: weatherData};
}

function addCity(cityName) {
    return {type: ADD_CITY, cityName: cityName};
}

function removeCity(cityName) {
    return {type: REMOVE_CITY, cityName: cityName};
}


export {setCurrentCity, setWeatherData, addCity, removeCity};