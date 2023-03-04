function printListRec(list) {
    console.log(list.value);
    if (list.next) {
        printListRec(list.next);
    }
}

function printListCycle(list) {
    let temp = list;

    while (temp) {
        console.log(temp.value);
        temp = temp.next;
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
