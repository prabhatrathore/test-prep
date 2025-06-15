/**

✖✖✖✖ ✖✖✖✖

Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top.

This means we can use a variable or function before declaring it in our code.

**Note - Variable initializations are not hoisted, only variable declarations are hoisted:

*/

// example of variable declarations 
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// example of Variable initializations
////////////////////////////////////////////////////////////
// console.log(f, "gh")
// f = 54      // f iss not defined 

/**
 
Hoisting with var
 When we use var, the variable is hoisted to the top of its scope (like the whole function or global scope) and is automatically initialized with the value 'undefined'. This means we can use the variable before declaring it, and it won’t throw an error—it will just show 'undefined'.

Example from the Image:

*/

console.log(name1); // Outputs: undefined
var name1 = "xyz";

/**
 Hoisting with let:
 Variables declared with 'let' are also hoisted to the top of their scope (block scope ), but they are not initialized. This means we cannot use them before their declaration—they’ll throw a ReferenceError. This uninitialized phase is called the Temporal Dead Zone (TDZ).
console.log(name); // ReferenceError: name is not defined
let name = "xyz";


30. What is a Temporal Dead Zone?
It is a behaviour where we try to access a variable before it is initialized.

Examples of temporal dead zone:
x = 23; // Gives reference error

let x;

function anotherRandomFunc(){
  message = "Hello"; // Throws a reference error
  let message;
}
anotherRandomFunc();

In the code above, both in global scope and functional scope, we are trying to access variables which have not been declared yet. This is called the Temporal Dead Zone .

Coding problems:
--------------------------------------------------------------------------------------------------

Key Difference:
var: Hoisted and initialized to 'undefined', so we can use it before declaration (but it’ll be undefined).
let and const: Hoisted but not initialized (in the TDZ), so using them before declaration causes a ReferenceError.

// With var
console.log(a); // undefined (hoisted, initialized as undefined)
var a = 10;

// With let
console.log(b); // ReferenceError (hoisted, but in TDZ)
let b = 20;

// With const
console.log(c); // ReferenceError (hoisted, but in TDZ)
const c = 30;

\\-
 */

function sol8(a, b) {
    return (c) => {
        console.log(c,"inside a function")
        return a * b
    }
};

let ab12 = sol8(3, 14)

console.log(ab12('hello'), 'function1')// 42   
// return
//==========================
function isEven(a) { // is number even or not 
    return a % 2 == 0
}
let ab2 = isEven(4122)
console.log(ab2, 'function2222')
console.log("==========================");
//=============================shorter method=======;


const ab7 = a => a % 2 == 0
// let ab2=isEven(41)
console.log(ab7(22), "============function 3==")
console.log("===222222");

function findTarget(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i
        }
    }
    return `${target}  not present in arr`
}
let arr = [3, 2, 4, 5, 6, 8, 9, 2]
let targetGet = 19
let ab4 = findTarget(arr, targetGet)
console.log(ab4, 'function 444')
console.log("==========================");

//-================================function expression
const ab5 = function sol(word) {
    console.log(word)
}
ab5('world')
//=================================
console.log("==3333333333===");

const ab6 = function firstChar(a) {
    return a[0]
}
console.log(ab6('hello'))
//===============================
//function inside function
console.log("===444444===");

function app() {
    let ab2 = () => {
        console.log('inside function-,first console.log')
    }

    const ab = function sum(a, b, c, d, e) {
        return a + b + c + d + e
    }
    console.log('inside -=-=-=-==function')
    ab2()
    console.log(ab(1, 3, 2, 4, 2))
}
app()

//////////////////////////////////////////
// lexical scope 
let arr1 = 'outside-function'
function sol() {
    const array = () => {
        console.log('inside functon array')
      }
    array()
}
sol()
//=====================var let const 
{
    var ab1 = "pp, variable inside block"   //let, const 
    // console.log('inside- block', ab)
}
// console.log('outside block ', ab)
// //===========================
{
    let ab2 = "pp, const variable"
    // console.log('inside- block', ab2)
}
// console.log('outside block ', ab2)
// //============================
{
    const ab3 = "pp, const variable"
    console.log('inside- block', ab3)
}
// console.log('outside block ', ab3)
//==================================
function sol1() {
    if (true) {
        var first = 'function called===' //chnage var , let, const 
        console.log(first)
    }
    console.log(first);
}
sol1()
function sol2() {
    if (true) {
        var ab = 'hello'
    }
    if (true) {
        console.log(ab)
        console.log(ab, '===')
    }
}
sol2()
//==============================
//default parameter
