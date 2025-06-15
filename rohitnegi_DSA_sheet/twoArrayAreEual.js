// Given two arrays A and B of equal size N, the task is to find if given arrays are equal or not. Two arrays are said to be equal if both of them contain same set of elements, arrangements (or permutation) of elements may be different though.
// Note : If there are repetitions, then counts of repeated elements must also be same for two array to be equal.
// Input:
// N = 5
// A[] = {1,2,5,4,0}
// B[] = {2,4,5,0,1}
// Output: 1
// Explanation: Both the array can be 
// rearranged to {0,1,2,4,5}

// Input:
// N = 3
// A[] = {1,2,5}
// B[] = {2,4,15}
// Output: 0
// Explanation: A[] and B[] have only 
// one common value.

let A = [11, 2, 5, 4, 10, 11, 2, 11]
let B = [2, 4, 5, 10, 11, 11, 2, 11]
A = A.sort()
B = B.sort()
let isEqual = true
let obj = {}
let obj2 = {}

function sol(arr1, arr2) {

    if (arr1.length != arr2.length) {
        console.log("first222")
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        let num1 = arr1[i]
        let num2 = arr2[i]
        obj[num1] = (obj[num1] || 0) + 1
        obj2[num2] = (obj2[num2] || 0) + 1
    }
    // 93540 12674
    for (let el in obj) {
        if (obj[el] != obj2[el]) {
            return false
        }
    }
    return true
}

// for (let el in obj) {
//     if (obj2[el]) {
//         obj2[el]--
//     } else {
//         isEqual = false
//     }
// }
console.log(sol(A, B))
// console.log(isEqual, "eeee")
// console.log(obj, "obj2")
// console.log(obj2, "22==")