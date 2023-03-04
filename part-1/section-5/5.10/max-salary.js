let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let highestPaid = null;
    let pay = 0;
    Object.entries(salaries).forEach(([key, value]) => {
        if (value > pay) {
            highestPaid = key;
            pay = value;
        }
    });
    return highestPaid;
}

console.log(topSalary({salaries}));