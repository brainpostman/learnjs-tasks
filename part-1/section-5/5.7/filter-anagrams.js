function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
        let strArr = word.split("").sort().join("").toLowerCase();
        if (!map.has(strArr)) {
            map.set(strArr, word);
        }
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));