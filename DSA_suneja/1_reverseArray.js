// revrse the array 
// input  [7,4,3,2,1]
// output: [1,2,3,4,7]
let arr = [7, 4, 3, 2, 1];  //input
//        [ 1, 2, 3, 4, 7 ]
let arr2 = []
for (let i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i])
    // console.log(arr[i])
    // arr.pop()
    // console.log(arr)
}
console.log(arr2, "arr2")

//sol by arrushi sharma 
// let i = 0
// let j = arr.length - 1
// console.log(j)
// while (i < j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]]
//     i++
//     j--
//     // console.log(j)
// }
// console.log(arr)

// let arr = [7, 4, 3, 2, 1];
let k = 0
let g = arr.length - 1
console.log(g, '3=3=3=3=3')
while (k < g) {
    [arr[k], arr[g]] = [arr[g], arr[k]]
    k++
    g--
}
console.log(arr, '333333333======')

// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     newArr = arr[i] + newArr
// }
// console.log(newArr, "5=5=5=5=5=5=5====")