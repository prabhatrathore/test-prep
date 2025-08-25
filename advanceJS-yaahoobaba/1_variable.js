// var, let, const variable
// in var 
var x = 'hello';
var x = 'abd' //we can re-declare the variable 
x = 'change-value' // reassign the variable as well. 
// ---------------------------------------------
// in let
let y = 'hello ';
// let y='world'  //cannot re-declare the same variable
y = 'words-change value' //reassign the variable can be done.

// in const 
const z = 'pppp';
// const z ='qqqq';//cannot redeclare the variable
// z='sss' // cannot reassign the varible 

if (true) {
    var x1 = 'line number 18'
}
console.log(x1, 'line 21')  //can access the variable 'x1'

if (true) {
    let y1 = 'change '   //same as 'const' case = ReferenceError: y1 is not defined
}
// console.log(y1,"twenty six") //ReferenceError: y1 is not defined

///////////////////////////////////////////////////////////////////////////////////////////////

// initialization, condition, increment
for (var i1 = 1;    i1 <= 5;    i1++) {
}
console.log(i1, "line 3111")//  can access the variable   -- answer --- 6 , line 31 

// Scope of i1 with var
// Since var is used, i1 is not block-scoped to the 'for loop'. Instead, it is hoisted to the global scope. This means i1 remains accessible after the loop ends.

// After the loop, i1 holds the value 6 (the value that caused the loop to exit).

// //////////////////////////////////////////////////////
////////////////////////////////////////////////////

// for (let j = 1; j <= 5; j++) {
// }

// console.log(j, "line 38::")//  ReferenceError: j is not defined

//////////////////////////////////////////////////////////////
// for (const t = 1; t <= 5; t++) {
// }
// console.log(t, "line 40")//  TypeError: Assignment to constant variable.
//-------------------------------------------------------------------------------------
// //////////////////////////////////////////////////////////////////////////////////////////////----------

//TEMPLATE STRING  or TEMPLATE LITERALS=================================
// use backtick and dollar sign with curly braces for defining the dynamic value in the string

//ARROW FUNCTION =============================
// REST OPERATOR==========================

// function with multiple arguments
function sol(name, course, ...arguments) {
    let sum = 0;

    for (let i of arguments) {
        sum += i
    }

    console.log(`hello ${name}, ${course} : ${sum}`)
}

// sol('fucntion', 'bap', 22, 33, 435, 354);

/////////////////////////////////////////////////////////////////////////////////////
// console.log("first,,,, line 50")

setTimeout(() => {
    // console.log('line 52')
    for (var k = 1; k <= 5; k++) {

    }
    console.log(k, "line 56")//  can access the variable, here 'var' case we got amswer 
    // answer is 6 
}, 1000);

//but in 'const' case error we got: assignment to constant variable


// console.log("first,,,, line 62")
/////////////////////////////////////////////////////////////////////////////////////////

for (let l = 0; l < 5; l++) {
    setTimeout(() => {
        console.log(l, 'line 68')

    }, 1000)
}

// 0 line 68
// 1 line 68
// 2 line 68
// 3 line 68
// 4 line 68
// -------------------------------------------------------------------------------------------

for (var n = 0; n < 3; n++) {
    (function (i) {
        setTimeout(() => {
            console.log(n, "22222222222222@!#",i);
        }, 2000);
    })(n);
}
// 3 22222222222222@!# 0
// 3 22222222222222@!# 1
// 3 22222222222222@!# 2
// Why:

// n is 3 because the loop finishes before the timeouts trigger, and n is a var (shared across all iterations).
// i is 0, 1, 2 because the IIFE creates a new scope for each iteration, capturing the value of n at that moment.
/////////////////////////////////////////////////////////////////////////////////////////

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i, 'line 76 ////')
//     }, 1000)
// }

// 5 line 76   // //
// 5 line 76   // //
// 5 line 76   // //
// 5 line 76   // //
// 5 line 76   // //

/////////////////////////////////////////////////////////////////////////////////////////////
var ret = 3
console.log(ret ** 4, 'line 75******2@@***')   //3 raised to the power of 4 //81
// 3*3*3*3 == 81