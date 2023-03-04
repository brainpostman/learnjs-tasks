function sortByAge(users) {
    return users.sort((userA, userB) => userA.age - userB.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

for (let user of arr) {
    console.log(user);
}