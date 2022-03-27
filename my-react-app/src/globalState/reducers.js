import {
    SET_CURRENT_CITY,
    SET_WEATHER_DATA,
    SET_FORECAST_DATA,
    ADD_CITY,
    REMOVE_CITY,
    FETCH_WEATHER_DATA, FETCH_FORECAST_DATA, SET_FAVOURITE_CITIES
} from './actions.js';
import {combineReducers} from "redux";

function weatherDataReducer(
    state = {
        isFetching: true,
        payload: {},
    },
    action
) {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                payload: action.weatherData,
            });
        case FETCH_WEATHER_DATA:
            return Object.assign({}, state, {
                isFetching: true,
            });
        default:
            return state;
    }
}

function forecastDataReducer(
    state = {
        isFetching: true,
        payload: {},
    },
    action
) {
    switch (action.type) {
        case SET_FORECAST_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                payload: action.forecastData,
            });
        case FETCH_FORECAST_DATA:
            return Object.assign({}, state, {
                isFetching: true,
            });
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
            const newCitiesList = state.filter((cityName) => {
                return cityName !== action.cityName
            });
            return newCitiesList;

        case SET_FAVOURITE_CITIES:
            return action.citiesList;

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