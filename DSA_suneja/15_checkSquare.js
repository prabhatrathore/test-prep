/**
 * checcking square in another array 
 * steps:
 * if(arr1[i]*arr[i]==arr2[j])
 */
// function sol(arr1, arr2) { //doubt

//     for (let i = 0; i < arr1.length; i++) {
//         let square = false;
// for (let j = 0; j < arr2.length; j++) {
//             // console.log(arr2[j])
//             if (arr1[i] * arr1[i] == arr2[j]) {
//                 // console.log(arr1[i])
//                 square = true
//             };
//             if (j == arr2.length - 1) {
//                 if (!square) {
//                     // square = false
//                     return false
//                 }
//             }
//         }
//     };
//     // return square
//     return true
// };
// // time complexity O (n^2);
// let a1 = [1, 2, 3];
// let a2 = [1, 4, 25];
// const result = sol(a1, a2);
// console.log(result);

let ab = [2, 3, 4, 5];
let bv = [4]
let rr = ab.includes(bv)
console.log(rr, '=2222222222')
//===============================================
// function sol2(arr1, arr2) {
//     let arr3 = []
//     for (let i = 0; i < arr1.length; i++) {
//         arr3.push(arr1[i] * arr1[i])
//     }
//     // return arr2.includess(arr3)

// }
// let ae = sol2([2, 5], [1, 4, 25])
// console.log(ae, '111111111111111')
/**
 *  arr1=[1,2,3,4]  arr2=[1,4,9,16] - case 1
 * arr1=[1,2,4,2], arr2=[1,4,4,16] - case 2
  * conditon :kya smj aaya :
 * map1={1:1,2:2,4:1}
 * map2={1:1,4:2,16:1}
 * hamare array mai element kitni baar h to map create krra 
 * map1 ki key h iska square map2 ke key ke equal aa rhi h

* and check also the value of both the map are always equal hogi  

*/

function sol21(arr1, arr2) {
    let obj3 = {};
    let obj4 = {};
    for (let i of arr1) {
        obj3[i] ? obj3[i]++ : obj3[i] = 1
    }
    console.log(obj3, 'obj3333')
    for (let i of arr2) {
        obj4[i] ? obj[i]++ : obj4[i] = 1
    };

    console.log(obj4, 'obj444444')

    for (let key in obj3) {
        console.log(key, "44444444444")
        console.log(obj4[key * key], '333333333');
        if (!obj4[key * key]) {
            return false
        }
        if (obj3[key] != obj4[key * key]) { // another condition have to fulfill to become true
            return false
        }
        // console.log(key)
    }
    return true
}

const result4 = sol21([1, 2, 3, 4], [1, 4, 5, 9, 16])
console.log(result4, "000000000000");

console.log('=====3333333333====')
let obj = {
    name: "abc",
    address: {
        street: 1,
        city: 'new delhi',
        phoneNO: { a: 2252368, b: 455687687, c: 3464786353 }
    }
}

const { name: e, address: { street, phoneNO: { a } }, } = obj;
// console.log(name);
console.log(e)
// console.log(address);
console.log({ street })
// console.log(phoneNO[0])
console.log(a)
console.log('===44444444444444444=============')
let obj5 = {
    a: 2,
    b: 5
};
let obj6 = {
    a: 2,
    b: 3
};
console.log(obj6['b'])
var array1 = [1, 2, 3, 4, 5];
console.log(Math.max(...array1))

array1.filter((element, index) => {
    if (element >= 4) {
        console.log(element)
    }
})
// console.log(as, '====')
// console.log(array1)
var sum = array1.reduce((total, element) => {
    return total + element
})
// console.log(sum)

let b = new Number(286)
console.log(b, '99876777777')

console.log("==========555555=======");
let arr7 = [1, 2, 3, 4];
let arr8 = [1, 4, 9, 16];
function checkSquare(arr1, arr2) {
    let obj1 = {}
    let obj2 = {}
    for (let i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] ? obj1[arr1[i]]++ : obj1[arr1[i]] = 1
    }
    console.log(obj1, '444444444')
    for (let i of arr2) {
        obj2[i] ? obj2[i]++ : obj2[i] = 1
    }
    console.log(obj2, '55555555')
    for (let value in obj1) {
        console.log(value)
        if (!obj2[value * value]) {
            return false;
        }
        if (obj1[value] != obj2[value * value]) {
            return false
        }
    }
    return true;
};
let resu = checkSquare(arr7, arr8)
console.log(resu)