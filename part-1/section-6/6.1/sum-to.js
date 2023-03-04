function sumToRec(n) {
    return (n === 1) ? 1 : n + sumToRec(n - 1);
}

function sumToCycle(n) {
    let sum = n;
    for (let i = 1; i < n; i++) {
        sum += i;
    }
    return sum;
}

function sumToProg(n) {
    return n + n * (n - 1) / 2;
}

console.log(sumToRec(3));
console.log(sumToCycle(3));
console.log(sumToProg(3));