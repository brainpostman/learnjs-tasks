let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(key) {
    return function (a, b) {
        return a[key] > b[key] ? 1 : -1;
    }
}

users.sort(byField('name'));
for (let user of users) {
    console.log(user);
}

users.sort(byField('age'));
for (let user of users) {
    console.log(user);
}


