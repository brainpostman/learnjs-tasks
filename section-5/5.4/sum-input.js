function sumInput() {
    let nums = [];
    let sum = 0;
    let input;
    while (true) {
        input = prompt("Введите число:", "");
        if (input === "" || input === null || !isFinite(input)) {
            break;
        }
        nums.push(+input);
    }
    for (let num of nums) {
        sum += num;
    }
    return sum;
}