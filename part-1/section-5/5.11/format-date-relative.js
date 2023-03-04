function formatDate(date) {
    let currentDate = new Date();
    let diff = currentDate.getTime() - date.getTime();
    if (diff < 1000) {
        return "Прямо сейчас";
    }
    if (diff < 60000) {
        return `${Math.round(diff / 1000)} сек. назад`;
    }
    if (diff < 3600000) {
        return `${Math.round(diff / 60000)} мин. назад`;
    }
    let year = date.getFullYear() % 100;
    let month = date.getMonth() + 1;
    let monthString = (month > 9) ? month : "0" + month;
    let minutes = date.getMinutes();
    let minutesString = (minutes > 9) ? minutes : "0" + minutes;
    return `${date.getDate()}.${monthString}.${year}, ${date.getHours()}:${minutesString}`;
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );