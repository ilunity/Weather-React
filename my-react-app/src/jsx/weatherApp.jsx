import React from 'react';
import '../css/weatherApp.css';
import {Search} from "../components/search";
import {ResultWindow} from "../components/resultWindow";
import {FavouriteCitiesList} from "../components/favouriteCitiesList";

function WeatherApp(props) {
    return (
        <div>
            <Search/>
            <div className="main-window">
                <ResultWindow/>
                <FavouriteCitiesList/>
            </div>
        </div>
    )
}

export {WeatherApp};