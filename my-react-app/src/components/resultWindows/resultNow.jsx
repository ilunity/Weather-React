import React from 'react';
import {useSelector} from "react-redux";
import '../../css/style.css';
import {WeatherIcon} from "../weatherIcon";
import {FavouriteCityBtn} from "../favouriteCityBtn";


function ResultNow(props) {
    const {isActive} = props;

    const {main: {temp}, weather: [{id: weatherID}]} = useSelector((store) => store.weatherData);
    const currentCity = useSelector(store => store.currentCity);

    const visibleClass = isActive
        ? 'info__window_active'
        : 'info__window_nonactive';
    const className = 'info__now info__window now-window ' + visibleClass;

    return (
        <div className={className}>
            <p className="now-window__temperature">
                {Math.round(temp) + "°"}
            </p>
            <div className="now-window__weather-icon weather-icon_rain">
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