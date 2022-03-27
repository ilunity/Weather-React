const DEFAULT_CURRENT_CITY = "Tomsk";
const FAVOURITE_CITIES = "favoriteCities";
const CURRENT_CITY = "currentCity";


const storage = {};


storage.getFavoriteCities = function () {
    return JSON.parse(localStorage.getItem(FAVOURITE_CITIES)) || [];
}

storage.addFavoriteCity = function (cityName) {
    let favoriteCities = storage.getFavoriteCities();

    favoriteCities.push(cityName);

    storage.saveFavoriteCities(favoriteCities);
}

storage.deleteFavoriteCity = function (cityName) {
    let favoriteCities = storage.getFavoriteCities();

    favoriteCities.splice(favoriteCities.indexOf(cityName), 1);

    storage.saveFavoriteCities(favoriteCities);
}

storage.saveFavoriteCities = function (favoriteCities) {
    localStorage.setItem(
        FAVOURITE_CITIES,
        JSON.stringify(favoriteCities)
    );
}



storage.setCurrentCity = function (cityName) {
    localStorage.setItem(
        CURRENT_CITY,
        cityName
    );
}

storage.getCurrentCity = function () {
    return localStorage.getItem(CURRENT_CITY) || DEFAULT_CURRENT_CITY;
}


export {storage};