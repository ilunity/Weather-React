import React from "react";
import {useSelector} from "react-redux";


const BTN_STYLES = {
    ACTIVE: 'city-info__add-favorite_added',
    NONACTIVE: 'city-info__add-favorite_not-added',
}

export function FavouriteCityBtn(props) {
    const {cityName} = props;
    const favouriteCities = useSelector(store => store.citiesList);


    const activeClassName = favouriteCities.includes(cityName)
        ? BTN_STYLES.ACTIVE
        : BTN_STYLES.NONACTIVE;

    const className = 'city-info__add-favorite ' + activeClassName;

    return (
        <div className={}/>
    )
}