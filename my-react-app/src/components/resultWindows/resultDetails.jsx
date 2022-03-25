import React from 'react';
import '../../css/style.css';
import {useSelector} from "react-redux";
import {format} from 'date-fns';


function getLocalTime(timeInSeconds, timezoneOffset) {
    const queryDate = new Date(timeInSeconds * 1000);
    timezoneOffset *= 1000;

    const ipDate = new Date();
    const ipTimezoneOffset = -ipDate.getTimezoneOffset() * 60000;

    const timezoneDifference = timezoneOffset - ipTimezoneOffset;

    return new Date(queryDate.getTime() + timezoneDifference);
}


function ResultDetails(props) {
    const {isActive} = props;

    const {
        main: {temp, feels_like},
        weather: [{main: weather}],
        timezone,
        sys: {sunrise, sunset}
    } = useSelector((store) => store.weatherData);
    const currentCity = useSelector(store => store.currentCity);


    const sunriseDate = getLocalTime(sunrise, timezone);
    const sunsetDate = getLocalTime(sunset, timezone);

    const visibleClass = isActive
        ? 'info__window_active'
        : 'info__window_nonactive';
    const className = 'info__details info__window details-window ' + visibleClass;

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