function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length;) {
        if (arr[i] >= a && arr[i] <= b) {
            i++;
        } else {
            arr.splice(i, 1);
        }
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);