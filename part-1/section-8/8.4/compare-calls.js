function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function () {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); //строка Rabbit
Rabbit.prototype.sayHi(); //undefined, у прототипа нет контекста с name
Object.getPrototypeOf(rabbit).sayHi(); // тоже что и выше
rabbit.__proto__.sayHi(); // тоже что и выше