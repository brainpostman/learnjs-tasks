function checkSpam(str) {
    str = str.toLowerCase();
    return str.includes("viagra") || str.includes("xxx");


}

console.log(checkSpam('buy ViAgRA now'),
checkSpam('free xxxxx'),
checkSpam("innocent rabbit"));