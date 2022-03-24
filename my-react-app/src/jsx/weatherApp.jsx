import React from 'react';
import '../css/weatherApp.css';
import {Search} from "../components/search";

function WeatherApp(props) {



    return (
        <div>
            <Search/>
            <div className="main-window">

            </div>
        </div>
    )
}

export {WeatherApp};