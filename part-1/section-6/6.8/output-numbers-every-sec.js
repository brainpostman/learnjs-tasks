function printNumbers(from, to) {
    let count = from;
    let intervalId = setInterval(() => {
        if (count <= to) console.log(count++);
            else clearInterval(intervalId);
    }, 1000);
}

function printNumbers2(from, to) {
    let count = from;
    let timerId = setTimeout(function func() {
        if (count <= to) {
            console.log(count++);
            timerId = setTimeout(func, 1000);
        } else {
            clearTimeout(timerId);
        }
    }, 1000);
}

console.log(printNumbers(1, 4));
console.log(printNumbers2(2, 5));