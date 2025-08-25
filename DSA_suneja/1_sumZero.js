// // find the pair which has sum zero
// // checking sum zero,
// // let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8] //input
// //  output   =  first pair chahiye jiska sum zero hai [-4,4]   

// function sol12(arr) {
//     for (let i = 0; i < arr.length; i++) { // if we want all pairs
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == 0) {
//                 // console.log([arr[i], arr[j]])
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }

//////----------------------------------------------------------
// let result3 = sol12([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result3, '11111111===========');

//===========================================
function sort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {//7 
        for (let j = 0; j < arr.length; j++) {//0
            if (arr[j] > arr[j + 1]) { //6>2,6>9,9>3,9>8,9>4
                // console.log(arr[j], "arr[jjjjjj");
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                break
            }
        }
    }
    // console.log(arr, "22222array22")
}
sort([6, 22, 9, 3, -7, 8, 4, 5, 1])//[2, 3, 4,5,1,6,8,9];
// // answerby technical suneja

function sol9(arr2) {               //first pair chahiye jiska sum zero hai 
    // console.log("hello-world");
    for (let number of arr2) {
        console.log(number, 'arr2-=-===');
        console.log("outer loop");
        for (let j = 1; j < arr2.length; j++) {
            // console.log("innner loop", j, ' ', arr2[j])
            if (number + arr2[j] == 0) {
                // console.log(number, arr2[j])
                return [number, arr2[j]]
            }
            // console.log('inner-end-');
        }
    }
};
let answer = sol9([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(answer,'"answer of line 53333');
////////////////////////////////////////////////////////////////////////////////////////////////////
// // yaha array sort mila h

// //=========o(n square)  time complexity
// // quadratic time complexity

// //another answer by suneja 

// function sol2(arr) {  //two pointer se krra ye 
//     let left = 0        // 1
//     let right = arr.length - 1 //  8  6  4 
//     while (left < right) {
//         console.log('inside============')
//         if (arr[left] + arr[right] == 0) {
//             return [arr[left], arr[right]]
//         } else if (arr[left] + arr[right] > 0) {
//             right = right - 1
//         } else {
//             left = left + 1
//         }

//     }

// }


// const sol3 = sol2([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(sol3)
// //o(n)
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log('=======================,,,,')
// /** 
//  * q:) sum of two digits which has sum equal to target
//  * input:)    [3, 2, 10, 11, 7, 5];target 14
//  * output:)   [3,11]
//  */
// function target(arr, target) {

//     let left = 0
//     let right = arr3.length - 1;
//     while (left < right) {
//         if (arr3[left] + arr3[right] == target) {
//             return [arr3[left], arr[right]]
//         } else if (arr[left] + arr[right] > target) {
//             right--
//         } else {
//             left++
//         }
//     }
//     return -1
// };

// let arr3 = [3, 2, 10, 11, 7, 5];
// let arr411 = arr3.sort((x, y) => x - y)//[ 2, 3, 5, 7, 10, 11 ]

// let answer3 = target(arr3, 14);
// console.log(answer3, 'sum two  /=target')
// console.log('==============44444444444==========')

let a = 'hello world here';
a.toUpperCase()
// console.log(a, "    WQWSSSXCEVW$R@#E!aaa")//hello world here
b = a.toUpperCase()
// console.log(b, "bbb")//HELLO WORLD HERE
// console.log(isNaN('0'),'WQWQSAXZCDFV') //false
// console.log(isNaN(0),'AXZ') //false
// console.log(!isNaN(0),'AZ#@') //true
// console.log(Boolean(3))//true 
// console.log(Boolean(""))//false
// console.log(Boolean(null))//false
//////////////////////////////////////////////////////////////////////////////////
function sol(a, b, ...c) {
    // let sum = a + b + c
    return [...c]
};
let ab = sol(1, 2, 34, 5, 6, 7, 8)
// console.log(ab, "aabbb")
/////////////////////////////////////////////////////////////////////////////////
var a1 = 6
var b1 = a1
a1++
// console.log(a1, "a1----") //      7
// console.log(b1, "--- b1----")  //   6
// --------------------------------------------------------------------------------
var a1 = [3, 2, 4, 3, 5]
var b1 = a1
a1.push('poppy')
b1.push('b1 add new element')
// console.log(a1)  //[ 3, 2, 4, 3, 5, 'poppy', 'b1 add new element' ]
// console.log(b1)  //[ 3, 2, 4, 3, 5, 'poppy', 'b1 add new element' ]
/////////////////////////////////////////////////////////////////////////////////////
//shallow copy an deep copy
/*
A deep copy means that all of the values of the new variable are copied and disconnected
 from the original variable.
 
 A shallow copy means that certain (sub-)values are still connected to the original variable.
  
 */
var a3 = 3
var result = a3 < 18 ? 'no kid' : "elible"
// console.log(result)  ///no kid

var company = [
    { name: 'google', category: "product-based", start: 1991, end: 2020 },
    { name: 'amazon', category: "product-based", start: 1992, end: 2021 },
    { name: 'paytm', category: "product-based", start: 1993, end: 2022 },
    { name: 'yaahoo', category: "service-based", start: 1994, end: 2025 },
    { name: 'zee5', category: "service-based", start: 1997, end: 2026 },
]
// for (let i = 0; i < comapny.length; i++) {
//     // console.log(company[0])
// }
company.forEach((companies, index, abc, looper) => {
    // console.log(companies,'llll',index, ,looper)
})
// company.forEach((nameOfCompany) => console.log(nameOfCompany.name))
company.filter((companies) => {
    if (companies.category == 'product-based') {
        // console.log(companies.name)
    }
});

// const ab3 = 10
// function sol13() {
//     let ab3 = 9
//     console.log(ab3)
// };
// sol13()
let srte = 'helloA'
switch (srte) {
    case 'world':
        console.log("case one")
        break
    case 'worldtwo':
        console.log("case two")
        break
    case 'worldthree':
        console.log("case three")
        break
    case 'hello':
        console.log("case hello")
        break
    case 'worldfour':
        console.log("case four")
        break
    default: console.log("heelo default")
}

let t = [1, 2, 3]
let t1 = [...t]
let t3 = t
// console.log(t == t1, "equal operator ")// false
// console.log(t === t1, "equalRT   ")// false
// console.log(t == t3, "equal operator 3")// true
t.push(4)
t3.push(5)

// console.log(t == t1, "equal operator @Q")// false
// console.log(t == t3, "equal ope ")// true
// console.log(t, t3,t1, "value value value value")// true

///////////////////////////////////////////////////////////////////////////
const p = {
    name: "ram",
    age: 20,
}
// console.log(Object.keys(p), '1')//[ 'name', 'age' ]