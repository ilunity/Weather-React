import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducers.js";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);


export {store};

// {
//     weatherData: {
//         isFetching: true,
//         payload: {},
//     },
//     forecastData: {
//         isFetching: true,
//         payload: {},
//     },
//     currentCity: "",
//     citiesList: [],
// }