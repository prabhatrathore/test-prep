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
console.log(newArr, "==========999999999",'arr');
////////////another way to achieve the same result 
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//         if (arr[i] == arr[j]) {
//             arr.splice(j, 1)
//             j--
//         }
//     }
// }
// console.log(arr, 'lengthhhhhhhhh array ')
// ----------------------------------------------------------------------------------------

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
// console.log(obj, '9999999')//{ '1': 1, '2': 3, '3': 2, '4': 3, '5': 3, '8': 1 }
let b = Object.keys(obj);
// console.log(...b);// 1 2 3 4 5 8
// console.log(obj)


//using set 
let bSet = new Set(arr)
//i have to get back array so using spread operator

let bSpread = [...bSet]
// console.log(bSpread, "using set ")  //bes sol // [ 1, 2, 5, 3, 4, 8 ]


arr.sort((x, y) => x - y)
