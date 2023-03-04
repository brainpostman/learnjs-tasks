function throttle(f, ms) {

    let called = false,
        prevArgs,
        prevThis;

    function func() {

        if (called) {
            prevArgs = arguments;
            savedThis = this;
            return;
        }

        f.apply(this, arguments);

        called = true;

        setTimeout(function () {
            called = false;
            if (prevArgs) {
                func.apply(prevThis, prevArgs);
                prevArgs = prevThis = null;
            }
        }, ms);
    }

    return func;
}

function f(a) {
    console.log(a)
}

let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано