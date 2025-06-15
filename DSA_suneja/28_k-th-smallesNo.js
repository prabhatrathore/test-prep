/**
 * kth smallest number find out krna 
 * 
 * steps to follow: 
 * first hum sort krr is array ko fir (k-1)index pr jo hai wahi hai element
 * solution 
 *  
 */
let arr = [7, 10, 3, 20, 1, 15];
arr.sort((x, y) => x - y)
// console.log(arr)
let k = 3
console.log(arr[k - 1])
// function sol(arr, k) {

// }
// sol(arr, 3)
/**
 * k th smallest ya kth largest ho wha heap use kr skte h
 *
 * closest, smallest ,minimum ho wha use hoga =>  max heap
 *
 * largest, masximum, longest farthest yaha use hoga=> min heap
 *
 * must check heap
 *
 */
// function sol2(arr, k) {
//     let arr2 = []
//     for (let i = 0; i < arr.length; i++) {
//         arr2.push(arr[i])
//         if (arr2.length == (k)) {
//             // console.log(arr2.length)
//             f
//         }
//     }


// }
// sol2(arr, 3)