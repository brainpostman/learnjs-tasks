function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    }
}

function f(x, y) {
    console.log(x, y);
}

let f1000 = delay(f, 1000);
let f2000 = delay(f, 2000);

f1000("test", "this"); // показывает "test" после 1000 мс
f2000("test", "that"); // показывает "test" после 20000 мс