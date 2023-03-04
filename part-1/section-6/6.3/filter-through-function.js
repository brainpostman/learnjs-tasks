function inBetween(a, b) {
    return function (element) {
        return element >= a && element <= b;
    }
}

function inArray(arr) {
    return function (element) {
        return arr.includes(element);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2