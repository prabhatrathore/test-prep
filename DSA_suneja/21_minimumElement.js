function min(arr) {
    let currentValue = arr[0];
    if (!arr.length) {
        return 'array is empty'
    } else if (arr.length == 1) {
        return arr[0]
    } else {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < currentValue) {
                currentValue = arr[i]
            }

        }

        return currentValue
    }
}
const result = min([12, 3, 11, 4, 5]);
console.log(result)
console.log("==========================");
function sol2(arr) {
    let currentValue = arr[0]
    if (!arr.length) {
        return 'array is empty'
    } else if (arr.length == 1) {
        return arr[0]
    } else {
        for (let value in arr) {
            if (arr[value] < currentValue) {
                currentValue = arr[value]
            }
        }

    }
    return currentValue

}
let arr2 = [11, 6, 9, 13]
sres = sol2(arr2)
console.log(sres)