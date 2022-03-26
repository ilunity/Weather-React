const serverUrl = 'http://api.openweathermap.org/data/2.5/';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

// function fetchErrorHandler(error) {
//     if (error.name === "TypeError") {
//         alert("Invalid URL or internet is absent");
//     } else if (error.name === "Error") {
//         alert(error.message);
//     } else {
//         throw error;
//     }
// }

//todo Обработка ошибок

async function getRequest(url, cityName) {
    let response = await fetch(url);
    let data = await response.json();

    if (Number(data.cod) !== 200) throw new Error(data.message);

    return data;
}

async function fetchForecastWeather(cityName) {
    const url = `${serverUrl}forecast?q=${cityName}&appid=${apiKey}&units=metric`;

    return getRequest(url, cityName);
}

async function fetchNowWeather(cityName) {
    const url = `${serverUrl}weather?q=${cityName}&appid=${apiKey}&units=metric`;

    return getRequest(url, cityName);
}

export {fetchNowWeather, fetchForecastWeather};