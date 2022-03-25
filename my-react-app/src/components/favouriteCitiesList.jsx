import React from 'react';
import '../css/style.css';
import {useSelector} from "react-redux";


function FavouriteCityItem(props) {
    const {cityName} = props;

    return (
        <li>
            <p className="location__city-name">
                {cityName}
            </p>
            <span className="location__delete-btn"/>
        </li>
    )
}

function FavouriteCitiesList(props) {
    const favouriteCities = useSelector(store => store.citiesList);


    return (
        <div className={'info__location location'}>
            <div className="location__title">
                Added Locations:
            </div>
            <ul className="location__list">
                {
                    favouriteCities.map((city) => {
                        <FavouriteCityItem cityName={city} />
                    })
                }
            </ul>
        </div>
    )
}

export {FavouriteCitiesList};