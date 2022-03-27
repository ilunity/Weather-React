import {fetchForecastWeather, fetchNowWeather} from "../js/fetchWeatherAPI";
import {setWeatherData, setForecastData} from "./actions";

const FETCH_WEATHER_DATA = 'FETCH_WEATHER_DATA';

function fetchWeatherData(cityName) {
    return async function (dispatch) {
        dispatch({type: FETCH_WEATHER_DATA});

        const weatherData = await fetchNowWeather(cityName);
        dispatch(setWeatherData(weatherData));
    }
}

const FETCH_FORECAST_DATA = 'FETCH_FORECAST_DATA';

function fetchForecastData(cityName) {
    return async function (dispatch) {
        dispatch({type: FETCH_FORECAST_DATA});

        const forecastData = await fetchForecastWeather(cityName);

        dispatch(setForecastData(forecastData));
    }
}

export {FETCH_WEATHER_DATA, fetchWeatherData, FETCH_FORECAST_DATA, fetchForecastData}