//корректно
// function Obj() {
//     this.foo = "bar";
// }
//некорректно
function Obj() {
    this.foo = "bar";
}
Obj.prototype = {}; // перезаписали prototype функции конструктора
let obj = new Obj();
let obj2 = new obj.constructor();
console.log(obj2.foo);

