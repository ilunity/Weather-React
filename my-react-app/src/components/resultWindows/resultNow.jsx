import React from 'react';
import {useSelector} from "react-redux";
import '../../css/weatherAppStyle.css';
import {FavouriteCityBtn, WeatherIcon} from "../index";
import {defineIsActiveClass} from "../utilities";

function useGetStore() {
    const weatherData = useSelector((store) => store.weatherData.payload);
    const currentCity = useSelector(store => store.currentCity);

    return {weatherData, currentCity};
}


function ResultNow(props) {
    const {isActive} = props;

    const {weatherData: {main: {temp}, weather: [{id: weatherID}]}, currentCity} = useGetStore();

    const className = 'result-window__item now-window ' + defineIsActiveClass('result-window__item',isActive);

    return (
        <div className={className}>
            <p className="now-window__temperature">
                {Math.round(temp) + "°"}
            </p>
            <div className="now-window__weather-icon weather-icon">
                <WeatherIcon weatherId={weatherID}/>
            </div>
            <div className="now-window__city-info city-info">
                <p className="city-info__title">
                    {currentCity}
                </p>
                <FavouriteCityBtn cityName={currentCity}/>
            </div>
        </div>
    )
}

export {ResultNow};