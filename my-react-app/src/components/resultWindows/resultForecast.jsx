import React from 'react';
import '../../css/style.css';
import {useSelector} from "react-redux";
import {WeatherIcon} from "../weatherIcon";

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

// todo to utilities
function getStringFromDateType(date) {
    // return hours and minutes from date type in UTC
    let resultTime = "";

    const hours = date.getHours();
    const minutes = date.getMinutes();

    resultTime += (hours < 10 ?
        "0" + hours :
        hours);

    resultTime += ":" + (minutes < 10 ?
        "0" + minutes :
        minutes);

    return resultTime;
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
                    { `${date.getDate()} ${MONTHS_LIST[date.getMonth()]}` }
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
                    <WeatherIcon weatherId={weatherId} />
                </div>
            </div>
        </li>
    )
}

function ForecastList(props) {
    const {list: forecastList} = useSelector(store => store.forecastData);

    return (
        <ul className="forecast-window__list">
            {forecastList.map((forecastItem) => {
                return <ForecastItem forecastItem={forecastItem} />
            })}
        </ul>
    )
}

function ResultForecast(props) {
    const {isActive} = props;

    const currentCity = useSelector(store => store.currentCity);


    const visibleClass = isActive
        ? 'info__window_active'
        : 'info__window_nonactive';
    const className = 'info__forecast info__window forecast-window ' + visibleClass;

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