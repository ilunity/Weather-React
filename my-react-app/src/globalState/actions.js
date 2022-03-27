import {storage} from "../js/storage";


const SET_CURRENT_CITY = 'SET_CURRENT_CITY';

function setCurrentCity(cityName) {
    storage.setCurrentCity(cityName);
    return {type: SET_CURRENT_CITY, cityName: cityName};
}


const SET_WEATHER_DATA = 'SET_WEATHER_DATA';

function setWeatherData(weatherData) {
    return {type: SET_WEATHER_DATA, weatherData: weatherData};
}

const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

function setForecastData(forecastData) {
    return {type: SET_FORECAST_DATA, forecastData: forecastData};
}


const SET_FAVOURITE_CITIES = 'SET_FAVOURITE_CITIES';

function setFavouriteCities (citiesList) {
    return {type: SET_FAVOURITE_CITIES, citiesList: citiesList};
}

const ADD_CITY = 'ADD_CITY';

function addCity(cityName) {
    storage.addFavoriteCity(cityName);
    return {type: ADD_CITY, cityName: cityName};
}


const REMOVE_CITY = 'REMOVE_CITY';

function removeCity(cityName) {
    storage.deleteFavoriteCity(cityName);
    return {type: REMOVE_CITY, cityName: cityName};
}


export {
    SET_CURRENT_CITY,
    setCurrentCity,
    SET_WEATHER_DATA,
    setWeatherData,
    SET_FORECAST_DATA,
    setForecastData,
    SET_FAVOURITE_CITIES,
    setFavouriteCities,
    ADD_CITY,
    addCity,
    REMOVE_CITY,
    removeCity
};