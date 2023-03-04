let styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-ролл");
console.log(styles);
changeInMiddle("Классика", styles);
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift("Рэп", "Рэгги");
console.log(styles);


function changeInMiddle(item, array) {
    array[Math.floor(array.length / 2)] = item;
}
