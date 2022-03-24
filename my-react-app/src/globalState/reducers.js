import {SET_CURRENT_CITY, SET_WEATHER_DATA, ADD_CITY, REMOVE_CITY} from './actions.js';
import {combineReducers} from "redux";

function weatherDataReducer(state = [], action) {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return action.weatherData;
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

function cityListReducer(state = [], action) {
    switch (action.type) {
        case ADD_CITY:
            return [
                ...state,
                action.cityName
            ]

        case REMOVE_CITY:
            const newCityList = state.map((cityName) => {
                if (cityName !== action.cityName) {
                    return cityName;
                }
            });
            return newCityList;

        default:
            return state;
    }
}


const reducer = combineReducers({
    weatherData: weatherDataReducer,
    currentCity: currentCityReducer,
    cityList: cityListReducer,
});

export {reducer};