function sumObject(obj) {
    let sum = 0;
    for (let prop in obj) {
        if (typeof obj[prop] === "number") {
            sum += obj[prop];
        }
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

console.log(sumObject(salaries));