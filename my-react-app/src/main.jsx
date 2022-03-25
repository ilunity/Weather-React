import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import {WeatherApp} from './jsx/weatherApp';
import {Provider} from "react-redux";
import {store} from "./globalState/store";

ReactDOM.render(
    <Provider store={store}>
        <WeatherApp />
    </Provider>,
    document.getElementById('root')
)
