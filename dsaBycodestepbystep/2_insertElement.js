/**
 * insert element in an array 
 */
let element = 0
let arr = [3, 55, 8, 6, 13, 5]; n = 89
let position = 3
console.log(arr, '=+++')
for (let i = arr.length - 1; i >= 0; i--) {// 5 4 3 

    if (i >= position) {

        arr[i + 1] = arr[i]

        if (i == position) {
            arr[position] = n

        }
    }
}
console.log(arr)