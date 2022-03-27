import {useDispatch, useSelector} from "react-redux";
import {fetchForecastData, fetchWeatherData, setCurrentCity, setFavouriteCities} from "../../globalState/actions";
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