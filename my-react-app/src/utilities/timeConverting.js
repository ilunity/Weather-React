function getLocalTime(timeInSeconds, timezoneOffset) {
    const queryDate = new Date(timeInSeconds * 1000);
    timezoneOffset *= 1000;

    const ipDate = new Date();
    const ipTimezoneOffset = -ipDate.getTimezoneOffset() * 60000;

    const timezoneDifference = timezoneOffset - ipTimezoneOffset;

    return new Date(queryDate.getTime() + timezoneDifference);
}

export {getLocalTime};