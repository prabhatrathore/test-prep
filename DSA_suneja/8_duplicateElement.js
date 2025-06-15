/**
 * remove duplicate element from array 
 */
let arr = [1, 2, 5, 5, 3, 2, 3, 4, 5, 4, 4, 2, 8];
let newArr = []
for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) {
        continue;
    };
    newArr.push(arr[i])
};
console.log(newArr, "==========999999999");
console.log("=====11111111111111111111")


obj = {};
for (let value of arr) {
    // console.log(value)
    // console.log(obj)
    // if (obj[value] = false) {
    //     // console.log(obj[value], "88888888888888")
    //     obj[value] = 1
    // };
    obj[value] ? obj[value]++ : obj[value] = 1
};
console.log(obj, '9999999')
let b = Object.keys(obj);
console.log(...b);
// console.log(obj)


//using set 
let bSet = new Set(arr)
//i have to get back array so using spread operator

let bSpread = [...bSet]
console.log(bSpread, "using set ")  //bes sol 


arr.sort((x, y) => x - y)
let e = 0
let result4 = []
for (let i = 1; i < arr.length; i++) {
    if (arr[e] != arr[i]) {
        result4.push(arr[e])
        e++
        arr[e] = arr[i]
    }
}
console.log(result4, "result4====44444444444")