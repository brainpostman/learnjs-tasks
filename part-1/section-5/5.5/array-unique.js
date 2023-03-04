function unique(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.includes(arr[i])) continue;
        result.push(arr[i]);
    }
    return result;
}

  
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
  
console.log( unique(strings) );