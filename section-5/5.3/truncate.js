function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + "…" : str;
}

let x = truncate("Привет", 3);
let y = truncate("Привет", 4);

console.log(x, y);