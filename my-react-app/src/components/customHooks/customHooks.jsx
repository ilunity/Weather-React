import {useSelector} from "react-redux";
import {setCurrentCity, setFavouriteCities} from "../../globalStore/actions";
import {fetchForecastData, fetchWeatherData} from "../../globalStore/asyncActions";
import {storage} from "../../js/storage";

function useLoadStorage(dispatch) {
    const currentCity = storage.getCurrentCity();
    const citiesList = storage.getFavoriteCities();

    dispatch(setCurrentCity(currentCity));
    dispatch(setFavouriteCities(citiesList));
}

function useWeatherFetch(dispatch, currentCity) {
    dispatch(fetchWeatherData(currentCity));
    dispatch(fetchForecastData(currentCity));
}

function useIfWeatherStateFetched() {
    const store = useSelector(store => store);

    return store.weatherData.isFetching === false && store.forecastData.isFetching === false;
}


export {useWeatherFetch, useLoadStorage, useIfWeatherStateFetched};