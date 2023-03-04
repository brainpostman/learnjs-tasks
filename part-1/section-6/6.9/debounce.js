function debounce(f, ms) {
    let called = false;
    function func() {
        if (!called) {
            f.apply(this, arguments);
            called = true;
            setTimeout(() => called = false, ms);
        }
    }

    return func;
}

function f(x) {
    console.log(x);
}

let func = debounce(f, 1000);

func(1); // выполняется немедленно
func(2); // проигнорирован

setTimeout(() => func(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => func(4), 1100); // выполняется
setTimeout(() => func(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)