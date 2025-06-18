// const  a2 = 10;
// function f() {
//     a2 = 9
//     console.log(a2)//assignment to constant variable
// }
// f();
// The code snippet provided declares a constant variable a2 and initializes it with the value of 10. Then, it defines a function f that attempts to reassign a new value of 9 to a2. However, when f is executed, it throws an error "assignment to constant variable" because a2 is a constant variable and cannot be reassigned a new value.

// In JavaScript, const is a keyword used to declare a variable whose value cannot be reassigned once it has been initialized. 
// This behavior is different from variables declared with var or let, which can be reassigned new values.

// In this case, since a2 is a constant variable, any attempt to modify its value after it has been initialized will result in an error being thrown at runtime. The error message "assignment to constant variable" indicates that you are attempting to modify a constant variable, which is not allowed.

// const  a2 = 10;90
// function f() {
//    let a2 = 9
//     console.log(a2)//9
// }
// f();
////////////////////////////////////////////////////////////////////
// let  a2 = 10;
// function f() {
//     a2 = 9  
//     console.log(a2)//9
// }
// f();
// console.log(a2,"aaaaa")//9
////////////////////////////////////////////////////////////////
let  a2 = 10;
function f(a2) {
    a2 = 9  
    console.log(a2)//9
}
f(a2);
console.log(a2,"2222222222222")//  10  
// //========================================

// //====================

a = {}
const b = { key: "b" }
const c = { key: "n" }
const d = { n: 3 }
a[b] = 98
console.log(a, "aaaaaa ")//{ '[object Object]': 98 }
console.log(JSON.stringify(a), "a22222aaaaa ")//{"[object Object]":98} 
console.log(a[b], "a[bbbbbb")//98
console.log(a, "##AS()*")//123   // { '[object Object]': 98 }
a[c] = 123
console.log(a, "@@AS()*")//123   // { '[object Object]': 123 }
a[d] = 6
console.log(a, "!!AS()*")//123  // { '[object Object]': 6 }
a['e'] = 1
a[{ d: 'update' }] = 31
a[{}] = 32
console.log(a[b], "()*")//123  //32 
console.log(a, "AS()*")//123    { '[object Object]': 32, e: 1 } AS()*

let string1 = '324e-1'
string1 = Number(string1)



console.log(string1, "string1string1")//    32.4 string1string1


// '324e-1' is in scientific notation, meaning:
// 324 × 10⁻¹ = 32.4


// ------------------------------------------------------------------------------------------
//setinterval 
//setinterval ,settimeout ki tarh hee h .
/**
 * settimout hamare function ko call kr rha tha kuch time baad 
 */
console.log('script start');
setInterval(() => {
    let sum = 0
    // for (let i = 10; i >= 0; i--) {
    //     sum += i
    // }
    // console.log('setinterval===', sum)
    while (sum < 10) {
        sum++
    };
    sum++
    // console.log("setinterval", Math.floor(Math.random() * 10));
}, 1000);

console.log('after script')



let kl = 4
function so() {
    console.log(kl)//Cannot access 'kl' before initialization
    let kl = 9
}
so()
//callback understand
function task1(caalback) {
    console.log('function 1 is done')
    caalback()
};
task1(() => {
    console.log("2nd function is print")
});

//e.g3 on callback ==================

// function addTwoNumber(num1, num2, onsuccess, onfailure) {
//     console.log(`there is two num which we add ${num1},${num2}`)
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         onsuccess(num1, num2)

//     } else {
//         onfailure()
//     }
// }

// function onsuccess(number1, number2) {
//     console.log(number1 + number2)
// }
// function onfailure() {
//     console.log('wrong input')
//     console.log('invalid input ')
// }
// addTwoNumber(2, '3', onsuccess, onfailure)

//e.g4======================================= same qurstion

function addTwoNumber(num1, num2, onsuccess, onfailure) {
    console.log(`there is two num which we add ${num1},${num2}`)
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        onsuccess(num1, num2)
    } else {
        onfailure()
    }
};
// function onsuccess(number1, number2) {
//     console.log(number1 + number2)
// }
// function onfailure() {
//     console.log('wrong input')
//     console.log('invalid input ')
// }
addTwoNumber(2, 3, (number1, number2) => {
    console.log(number1 + number2, 'onsuccess print ')
}, () => {
    console.log('wrong input')
    console.log('invalid input ')
});


//synchronous programmig vs asynchronous programming

//synchronous programming 
// console.log('beforee loop')
for (let i = 0; i < 1000; i++) {
    // console.log("inside", i)
}

// console.log('after loop')
//j.s is synchronous programming and single threaded.
//line by line execute hota hai code..
//===================================

//asynchronus programming
/**
 * 
 * first take a look at set time out function
 * set time out ek function lega as a input and saath mai lega time 
 * ye function kitni der baad run krana h 
 */
// console.log('script-start')

function start() {
    console.log('hello world,inside setitmeout =====')
}
setTimeout(start, 2000)

// console.log('script-end')

//e.g.2.==============settime out with 0 sec
// console.log('strart file ')
// setTimeout(() => { console.log('hello,settimeout with zero second') }, 0)

// console.log("befre looping")
//====================
for (let i = 0; i < 10; i++) {
    // console.log('inside for-loop', i)
}
// console.log("after settimenot")
//alanalyse

/**
 * first line execute, then j.s. ko nhi pta settimeout ke baare mai
 *  to ye browser ke pass bhj dega 
 * browser ke pass rhega aur execute krke result return kr dega. 
 *0 second baad 
 but js next line pr mmove krega aur execute krega aaage ka code 
 browser wala return last mai print hoga 
 */

//--------------------------------------------------------=
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolve');
    }, 2000);
});
// console.log('inbetween promise');
async function sol(req, res) {
    let arr = await promise1
    console.log(arr)
    console.log('promise after')
};
// sol()

for (var i = 0; i < 3; i++) { //change var , let const
    // change let ,var const 
}
console.log('===i"value===', i)

//=======parameter destructuring
let obj = {
    "name": "alex",
    age: 12,
    address: 'delhi'
};
function sol2({ name, age }) {
    console.log(name, '===name')//alex ===name
    console.log(age)  //12
};
sol2(obj)
console.log("=========================");
//=========================================

//============set========

let set2 = new Set()
// A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.

set2.add('e0ee')
set2.add('wjengwigw')
// set2.clear()     // clear property :to clear the set 
//  set2.delete("eeeeeeeeee")//delete property :specific element to delete 
let result = set2.has("eeeeeeeeee")// has property tell the element exist or not 
console.log(result)
console.log('=====  ==============')
console.log(set2)
arr = [...set2];
console.log(arr)