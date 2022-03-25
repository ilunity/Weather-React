import {SET_CURRENT_CITY, SET_WEATHER_DATA, SET_FORECAST_DATA, ADD_CITY, REMOVE_CITY} from './actions.js';
import {combineReducers} from "redux";

function weatherDataReducer(state = {}, action) {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return action.weatherData;
        default:
            return state;
    }
}

function forecastDataReducer(state = {}, action) {
    switch (action.type) {
        case SET_FORECAST_DATA:
            return action.forecastData;
        default:
            return state;
    }
}

function currentCityReducer(state = "", action) {
    switch (action.type) {
        case SET_CURRENT_CITY:
            return action.cityName;
        default:
            return state;
    }
}

function citiesListReducer(state = [], action) {
    switch (action.type) {
        case ADD_CITY:
            return [
                ...state,
                action.cityName
            ]

        case REMOVE_CITY:
            const newCitiesList = state.map((cityName) => {
                if (cityName !== action.cityName) {
                    return cityName;
                }
            });
            return newCitiesList;

        default:
            return state;
    }
}


const reducer = combineReducers({
    weatherData: weatherDataReducer,
    forecastData: forecastDataReducer,
    currentCity: currentCityReducer,
    citiesList: citiesListReducer,
});

export {reducer};