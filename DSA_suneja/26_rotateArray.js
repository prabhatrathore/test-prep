/*write

knowledge center
https://www.youtube.com/watch?v=VbVQJRKXxBA&list=PL1w8k37X_6L86f3PUUVFoGYXvZiZHde1S&ab_channel=KnowledgeCenter


LOVE BABBAR 450 QUESTIONS SERIES  by aditya rajiv
https://www.youtube.com/playlist?list=PLlGpFGXC9XnYOMturcfblGyym6wPGGvKF


leetcode problem by aditya rajiv
https://www.youtube.com/playlist?list=PLlGpFGXC9Xna36CAIr5x3VamSTwoqu5gu

**/
//practise
let user = {
    name: "ram",
    age: 22
};
// console.log(Object.hasOwn(user, 'name'))
// console.log(user.hasOwnProperty('name1'))
console.log("==============================================================")
let arr = [2, 3, 5, 6, 7, 8, 9]
let str = 'string';
let lastno = arr.at(-1)
let lastChar = str.at(-1)
console.log(lastno)
console.log(lastChar)

let randonIndex = Math.random(arr.length)
// console.log(randonIndex)
console.log("===================")


let arr2 = [2, 5, 3, 8, 4, 1, 9]; target = 14
let i = 0
while (i < arr2.length) {
    // let missing = target - arr2[i]
    if (arr2.includes(target - arr2[i])) {
        console.log([arr2[i], target - arr2[i]])
        break
    }
    i++
}
console.log("==2222222222222")
/**
 * input:nums=[1,2,3,4,5,6,7]   , k=3
 * output=[5,6,7,1,2,3,4];
 * 
 */

let arr3 = [1, 2, 3, 4, 5, 6, 7], k = 3
let first = arr3[0]
// console.log(first, '0000')
let m = 0
while (m < k) {
    for (let i = 0; i < arr3.length; i++) {// 0 
        arr3[i] = arr3[i + 1]  // [2, 3 4, 5, 6, 7, 7]
        // console.log(arr3, "inner")
    };
    arr3[arr3.length - 1] = first
    m++
    // console.log(arr3, "outer")
}
console.log(arr3,"sd")