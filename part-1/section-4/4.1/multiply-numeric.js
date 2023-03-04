// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);
  
multiplyNumeric(menu);
  
console.log(menu);

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === "number") {
            obj[prop] = obj[prop] * 2;
        }
    }
}