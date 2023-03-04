function printListRec(list) {
    if (list.next) {
        printListRec(list.next);
    }
    console.log(list.value);
}

function printListCycle(list) {
    let temp = list;
    let arr = []
    while (temp) {
        arr.push(temp.value);
        temp = temp.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);

    }
}


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printListRec(list);
console.log("--");
printListCycle(list);