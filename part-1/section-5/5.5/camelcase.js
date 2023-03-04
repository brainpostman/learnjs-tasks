function camelize(str) {
    return str.split("-").map((item, index) => {
        return (index > 0) ? item.toUpperCase()[0] + item.slice(1) : item;
    }).join("");
}

console.log(camelize("background-color"),
camelize("list-style-image"),
camelize("-webkit-transition"));