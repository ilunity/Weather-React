import React from 'react';
import {useSelector} from "react-redux";
import '../../css/weatherAppStyle.css';
import {format} from 'date-fns';
import {getLocalTime} from "../../utilities/timeConverting";
import {defineIsActiveClass} from "../utilities";

function useGetStore() {
    const weatherData = useSelector(store => store.weatherData.payload);
    const currentCity = useSelector(store => store.currentCity);

    return {weatherData, currentCity};
}


function ResultDetails(props) {
    const {isActive} = props;

    const {
        weatherData: {
            main: {temp, feels_like},
            weather: [{main: weather}],
            timezone,
            sys: {sunrise, sunset}
        }, currentCity
    } = useGetStore();

    const sunriseDate = getLocalTime(sunrise, timezone);
    const sunsetDate = getLocalTime(sunset, timezone);

    const className = 'result-window__item details-window ' + defineIsActiveClass('result-window__item', isActive);

    return (
        <div className={className}>
            <div className="details-window__city-name">
                {currentCity}
            </div>
            <ul className="details-window__parameters-list">
                <li className="details-window__temperature">
                    {"Temperature: " + Math.round(temp) + "°"}
                </li>
                <li className="details-window__feeling">
                    {"Feels like: " + Math.round(feels_like) + "°"}
                </li>
                <li className="details-window__weather">
                    {"Weather: " + weather}
                </li>
                <li className="details-window__sunrise">
                    {"Sunrise: " + format(sunriseDate, 'HH:mm')}
                </li>
                <li className="details-window__sunset">
                    {"Sunset: " + format(sunsetDate, 'HH:mm')}
                </li>
            </ul>
        </div>
    )
}

export {ResultDetails};