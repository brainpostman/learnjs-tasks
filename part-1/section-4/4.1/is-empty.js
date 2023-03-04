function isEmpty(obj) {
    let counter = 0;
    for (props in obj) {
        counter++;
    }
    return counter === 0 ? true : false;
}

let obj = {
    name: "Arti"
}

let obj1 = {}



