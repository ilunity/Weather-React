import React from 'react';
import '../../css/weatherAppStyle.css';
import {useSelector} from "react-redux";
import {WeatherIcon} from "../index";
import {getStringFromDateType, defineIsActiveClass} from "../utilities";


const MONTHS_LIST = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
}


function ForecastItem(props) {
    const {
        forecastItem: {
            dt: timestamp,
            main: {temp, feels_like},
            weather: [{main: weatherType, id: weatherId}],
        }
    } = props;

    const date = new Date(timestamp * 1000);

    return (
        <li className={'forecast-window__item forecast-item'}>
            <div className="forecast-item__date">
                <div className="forecast-item__day">
                    {`${date.getDate()} ${MONTHS_LIST[date.getMonth()]}`}
                </div>
                <div className="forecast-item__time">
                    {getStringFromDateType(date)}
                </div>
            </div>
            <div className="forecast-item__weather">
                <div className="forecast-item__temp-parameters">
                    <div className="forecast-item__temp">
                        {`Temperature: ${Math.round(temp)}°`}
                    </div>
                    <div className="forecast-item__temp-feeling">
                        {`Feels like: ${Math.round(feels_like)}°`}
                    </div>
                </div>
                <div className="forecast-item__weather-parameters">
                    <div className="forecast-item__weather-type">
                        {weatherType}
                    </div>
                    <div className={"forecast-item__weather-icon"}>
                        <WeatherIcon weatherId={weatherId}/>
                    </div>
                </div>
            </div>
        </li>
    )
}

function ForecastList(props) {
    const {list: forecastList} = useSelector(store => store.forecastData.payload);

    return (
        <ul className="forecast-window__list">
            {forecastList.map((forecastItem) => {
                return <ForecastItem forecastItem={forecastItem}/>
            })}
        </ul>
    )
}

function ResultForecast(props) {
    const {isActive} = props;

    const currentCity = useSelector(store => store.currentCity);

    const className = 'result-window__item forecast-window ' + defineIsActiveClass('result-window__item', isActive);

    return (
        <div className={className}>
            <div className="forecast-window__city-name">
                {currentCity}
            </div>
            <ForecastList/>
        </div>
    )
}

export {ResultForecast};