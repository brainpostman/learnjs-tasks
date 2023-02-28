function getMaxSubSum(arr) {
    let maxEnd = 0;
    let maxSoFar = 0;
    for (let num of arr) {
        maxEnd = Math.max(0, maxEnd + num);
        maxSoFar = Math.max(maxSoFar, maxEnd);
    }
    console.log(maxSoFar);
    return maxSoFar;
}

getMaxSubSum([-1, 2, 3, -9]) == 5; //(сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6;
getMaxSubSum([-1, 2, 3, -9, 11]) == 11;
getMaxSubSum([-2, -1, 1, 2]) == 3;
getMaxSubSum([100, -9, 2, -3, 5]) == 100;
getMaxSubSum([1, 2, 3]) == 6; //(берём все)
getMaxSubSum([-1, -2, -3]) == 0;