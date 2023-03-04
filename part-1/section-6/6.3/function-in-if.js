"use strict"

let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}

sayHi(); // ошибка с строгом режиме, в свободном код исполняется т.к. есть особый алгоритм поведения функций, вложенных в блоки, в задании явно не обозначен строгий режим