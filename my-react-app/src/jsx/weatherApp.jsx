import React, {useEffect} from 'react';
import '../css/weatherAppStyle.css';
import {Search, ResultWindow, FavouriteCitiesList} from "../components/index";
import {useLoadStorage, useWeatherFetch} from '../components/customHooks/customHooks';
import {useDispatch, useSelector} from "react-redux";

function WeatherApp(props) {
    const dispatch = useDispatch();
    const currentCity = useSelector(store => store.currentCity);

    useEffect(() => {
        useLoadStorage(dispatch);
    }, []);
    useEffect(() => {
        useWeatherFetch(dispatch, currentCity);
    },[currentCity]);

    return (
        <div className={'container'}>
            <Search/>
            <div className="main-window">
                <ResultWindow/>
                <FavouriteCitiesList/>
            </div>
        </div>
    )
}

export {WeatherApp};