function shuffle(array) {
    let random = (i) => Math.floor(Math.random() * (i + 1));
    for (let i = array.length - 1; i > 0; i--) {
        let j = random(i);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);