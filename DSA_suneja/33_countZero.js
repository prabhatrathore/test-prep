/**
 * input:[0,1,0,3,12]
 * output:[1,3,12,0,0]
 */
let arr = [0, 1, 0, 3, 12];
let count = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        count++
        arr.splice(i, 1)
        i--
    }
}
for (let i = 0; i < count; i++) {
    arr.push(0)
}
console.log(arr)
/**
 * 2nd approches
 */
function sol(arr) {
    for (let i = 0; i < arr.length; i++) {
        array[i] == 0 && array.splice(i, 1) && array.push(0)
    }
    return arr
}
let array = [0, 1, 0, 3, 12];
let res = sol(array)
console.log(res)