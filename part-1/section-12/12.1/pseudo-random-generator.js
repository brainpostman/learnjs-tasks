function* pseudoRandom(seed) {
    while (true) {
        let result = seed * 16807 % 2147483647
        seed = result;
        yield result;
    }
}

let generator = pseudoRandom(1);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);