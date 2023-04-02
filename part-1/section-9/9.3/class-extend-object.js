class Rabbit {
    constructor(name) {
        //нужен конструктор от Object

        this.name = name;
    }
}

let rabbit = new Rabbit("Кроль");

console.log(rabbit.hasOwnProperty('name')); // Ошибка