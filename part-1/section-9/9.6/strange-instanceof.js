function A() { }
function B() { }

A.prototype = B.prototype = {};

let a = new A();

console.log(a instanceof B); // true, производится проверка свойства prototype, 
//которая была явно изменена для классов A и B на один и тот же объект