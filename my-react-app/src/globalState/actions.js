import {fetchNowWeather, fetchForecastWeather} from "../js/fetchWeatherAPI.js";
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

const FETCH_WEATHER_DATA = 'FETCH_WEATHER_DATA';

function fetchWeatherData(cityName) {
    return async function (dispatch) {
        dispatch({type: FETCH_WEATHER_DATA});

        const weatherData = await fetchNowWeather(cityName);
        dispatch(setWeatherData(weatherData));
    }
}


const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

function setForecastData(forecastData) {
    return {type: SET_FORECAST_DATA, forecastData: forecastData};
}

const FETCH_FORECAST_DATA = 'FETCH_FORECAST_DATA';

function fetchForecastData(cityName) {
    return async function (dispatch) {
        dispatch({type: FETCH_FORECAST_DATA});

        const forecastData = await fetchForecastWeather(cityName);

        dispatch(setForecastData(forecastData));
    }
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
    FETCH_WEATHER_DATA,
    fetchWeatherData,
    SET_FORECAST_DATA,
    FETCH_FORECAST_DATA,
    fetchForecastData,
    SET_FAVOURITE_CITIES,
    setFavouriteCities,
    ADD_CITY,
    addCity,
    REMOVE_CITY,
    removeCity
};