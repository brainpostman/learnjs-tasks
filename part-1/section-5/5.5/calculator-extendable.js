function Calculator() {
    this.funcs = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };
    this.calculate = (str) => {
        let [a, op, b] = str.split(" ");
        if (isNaN(a)) {
            throw new Error(`Operand "${a}" is not a number`);
        }
        if (isNaN(b)) {
            throw new Error(`Operand "${b}" is not a number`)
        }
        if (!this.funcs[op]) {
            throw new Error(`Unrecognized operator: "${op}"`);
        }
        return this.funcs[op](+a, +b);
    }
    
    this.addMethod = (name, func) => {
       this.funcs[name] = func;
    }
}

let calc = new Calculator;

console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");

console.log(result);