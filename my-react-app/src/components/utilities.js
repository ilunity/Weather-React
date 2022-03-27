function defineIsActiveClass(mainClass, isActive) {
    return isActive
        ? `${mainClass}_active`
        : `${mainClass}_nonactive`;
}

function getStringFromDateType(date) {
    // return hours and minutes from date type in UTC
    let resultTime = "";

    const hours = date.getHours();
    const minutes = date.getMinutes();

    resultTime += (hours < 10 ?
        "0" + hours :
        hours);

    resultTime += ":" + (minutes < 10 ?
        "0" + minutes :
        minutes);

    return resultTime;
}


export {defineIsActiveClass, getStringFromDateType};