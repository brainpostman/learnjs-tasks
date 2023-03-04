function getSecondsToday() {
    let date = new Date();
    let newDate = new Date(date.getFullYear(), 
        date.getMonth(),
        date.getDate());
    return Math.round((date.getTime() - newDate.getTime()) / 1000);
}

console.log(getSecondsToday());