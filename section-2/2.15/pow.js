function pow(x, n) {
    if (n < 1) return NaN;
    let y = n % 1;
    n = y > 0.5 ? n - y + 1 : n - y;
    return x ** n;
}

console.log(pow(2, 2.6));