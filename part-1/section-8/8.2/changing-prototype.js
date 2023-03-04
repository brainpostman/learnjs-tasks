function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {}; // 1 - true

Rabbit.prototype.eats = false; // 2 - false

delete rabbit.eats; // 3 - true

delete Rabbit.prototype.eats; // 4 - undefined

alert(rabbit.eats); // варианты alert выше в комментариях