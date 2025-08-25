/**count unique numbers
 * [1,1,2,2,3,4,4,5,6,7,8,8]  // array is sorted 
 * output :8
 * how to solve condition apply :
 * first do sort the array 
 * 1: i=0, j=1., shuru krna hai aise
 * if arr[i]!==array[j] then jaise hee ye condition fulfill hoti i mai plus one and arr[i] mai arr[j]
 * daaalna
 * 
 * a:i++
 * b:arr[i]=arr[j] 
 */
// 
//                     i            j 
//    [1, 2, 3, 4, 5, 6, 7, 8, 6, 7, 8, 8]
var arr = [1, 1, 2, 2, 3, 42];      //[1, 2, 2, 2, 3, 42]
let i = 0;
for (let j = 1; j <= arr.length; j++) {// 1 
    if (arr[i] !== arr[j]) {
        console.log(arr[i], arr[j], 'iiiiiiii', i, 'AAA', j)
        i++;
        arr[i] = arr[j];
    };
};
console.log(i, "unique element==")
// --------------------------------------------------------------------------
var arr = [1, 1, 2, 2, 3, 42];
let t = []
arr.forEach((a, b) => {
    // console.log(a, ';;;;;;;;;;')
    if (!t.includes(a)) {
        t.push(a)
    }
})
// console.log(t, 'eeeeeeeee', t.length)
//==================================================

//solurion by technical   suneja=============
function sol(arr) {
    if (Array.length) {
        let i = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                i++
                arr[i] = arr[j]
            }
        }
        return i + 1 //beacuse ye zero se chalega
    } else { return 'array is empty' }
}
// let result = sol([1, 2, 3, 2, 3, 4, 4])
//          i     j           
let result = sol([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 11, 11])
console.log(result, '}}}}}')

///========================================================
//perfect find prime number in array. 
var arr = [2, 3, 4, 6, 5, 7, 9, 81, 343, 77, 34234]
var isPrime = []
arr.forEach((num) => {
    if (num <= 1) {
        return false
    };
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        };
    };
    isPrime.push(num)

});
console.log(isPrime, "isPrime")
//================================================
let r = [3, 5, 2, 6, 1, 9]
function j(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                break
            }
        }
    }
    return arr
}
let g1 = j(r)
console.log(g1, "net")
// --------------------------------------------------------------------------------

let n = 100
let array3 = []
for (let i = 2; i < n; i++) {
    array3.push(i)
}
let isPrime3 = []
array3.forEach((el) => {
    for (let i = 2; i < el; i++) {
        if (el % i == 0) {
            return false
        }
    }
    isPrime3.push(el)
    // console.log(isPrime3,"isprime3")

})
