import {createStore} from "redux";
import {reducer} from "./reducers.js";

const store = createStore(reducer);

export {store};

// {
//     weatherData: {},
//     forecastData: {},
//     currentCity: "",
//     citiesList: [],
// }