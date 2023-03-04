function getSecondsToTomorrow() {
    let date = new Date();
    let newDate = new Date(date.getFullYear(), 
        date.getMonth(),
        date.getDate());
    return 86400 - Math.round((date.getTime() - newDate.getTime()) / 1000);
}

console.log(getSecondsToTomorrow());