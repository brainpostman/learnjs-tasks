function createTree(container, data) {
    let ul = document.createElement("ul");
    for (let key in data) {
        let li = document.createElement("li");
        li.textContent = key;
        if (Object.keys(data[key]).length === 0) {
            ul.append(li);
        } else {
            ul.append(createTree(li, data[key]));
        }
    }
    container.append(ul);
    return container;
}
let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};
createTree(document.body.firstElementChild, data);