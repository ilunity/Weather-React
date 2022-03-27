import React from 'react';
import '../css/weatherAppStyle.css';
import {useDispatch, useSelector} from "react-redux";
import {removeCity, setCurrentCity} from "../globalState/actions";


function FavouriteCityItem(props) {
    const {cityName} = props;
    const dispatch = useDispatch();

    function handleDeleteCity() {
        dispatch(removeCity(cityName));
    }

    function handleClickCity() {
        dispatch(setCurrentCity(cityName));
    }

    return (
        <li key={cityName}>
            <p
                onClick={handleClickCity}
                className="location__city-name"
            >
                {cityName}
            </p>
            <span
                onClick={handleDeleteCity}
                className="location__delete-btn"
            />
        </li>
    )
}

function FavouriteCitiesList(props) {
    const favouriteCities = useSelector(store => store.citiesList);


    return (
        <div className={'main-window__location location'}>
            <div className="location__title">
                Added Locations:
            </div>
            <ul className="location__list">
                {
                    favouriteCities.map((city) => {
                        return <FavouriteCityItem cityName={city}/>
                    })
                }
            </ul>
        </div>
    )
}

export {FavouriteCitiesList};