import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {defineIsActiveClass} from "./utilities";
import {addCity, removeCity} from "../globalStore/actions";


const BTN_STYLES = {
    ACTIVE: 'city-info__add-favorite_added',
    NONACTIVE: 'city-info__add-favorite_not-added',
}

function FavouriteCityBtn(props) {
    const {cityName} = props;
    const favouriteCities = useSelector(store => store.citiesList);
    const dispatch = useDispatch();

    const isActive = favouriteCities.includes(cityName);
    const className = 'city-info__add-favorite ' + defineIsActiveClass('city-info__add-favorite', isActive);

    function handleClick() {
        isActive
            ? dispatch(removeCity(cityName))
            : dispatch(addCity(cityName));
    }

    return (
        <div
            className={className}
            onClick={handleClick}
        />
    )
}

export {FavouriteCityBtn};