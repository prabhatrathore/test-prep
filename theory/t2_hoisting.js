/**
✖✖✖✖ ✖✖✖✖
Hoisting is a default behaviour of javascript where all the variable declarations and function declarations are moved on top of their scope before code execution.

✔️ Function declarations are fully hoisted (both declaration + definition).
✔️ Variable declarations are hoisted but not their initializations.

**Note - Variable initializations are not hoisted, only variable declarations are hoisted:
*/
// example of variable declarations 
// console.log(x); // Output: undefined
var x = 5;
// console.log(x); // Output: 5

// example of Variable initializations
////////////////////////////////////////////////////////////
// console.log(f, "gh")
// f = 54      // f iss not defined 

/**
Hoisting with var
 When we use var, the variable is hoisted to the top of its scope (like the whole function or global scope) and is automatically initialized with the value 'undefined'. This means we can use the variable before declaring it, and it won’t throw an error—it will just show 'undefined'.
*/
console.log(name1); // Outputs: undefined
var name1 = "xyz";

/**
 Hoisting with let:
 Variables declared with 'let' are also hoisted to the top of their scope (block scope ), but they are not initialized. This means we cannot use them before their declaration—they’ll throw a ReferenceError. This uninitialized phase is called the Temporal Dead Zone (TDZ).

console.log(name); // ReferenceError: name is not defined
let name = "xyz";

What is a Temporal Dead Zone?
It is a behaviour (phase) where we try to access a variable before it is initialized.

Examples of temporal dead zone:
x = 23; // Gives reference error
let x;

-------------------------------------------------------------------------------------------

function anotherRandomFunc(){
  message = "Hello"; // Throws a reference error
  let message;
}
anotherRandomFunc();

In the code above, both in global scope and functional scope, we are trying to access variables which have not been declared yet. This is called the Temporal Dead Zone.

✔️ let and const are hoisted but kept in "Temporal Dead Zone (TDZ)" until they are declared.

--------------------------------------------------------------------------------------------------
Coding problems:

Key Difference:
var: Hoisted and initialized to 'undefined', so we can use it before declaration.
let and const: Hoisted (in the TDZ) but not initialized , so using them before declaration causes a ReferenceError.

// With var
console.log(a); // undefined (hoisted, initialized as undefined)
var a = 10;

// With let
console.log(b); // ReferenceError (hoisted, but in TDZ)
let b = 20;

// With const
console.log(c); // ReferenceError (hoisted, but in TDZ)
const c = 30;
 */

function sol8(a, b) {
    return (c) => {
        console.log(c, "inside a function")
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

//=============================shorter method=======;

const ab7 = a => a % 2 == 0
// let ab2=isEven(41)
console.log(ab7(22), "============function 3==")
//-----------------------------------------------------------------------
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

//-================================function expression
const ab5 = function sol(word) {
    console.log(word)
}
ab5('world')
//=================================

const ab6 = function firstChar(a) {
    return a[0]
}
console.log(ab6('hello'))
//===============================

//function inside function

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
        var first = 'function called===' //change var , let, const 
        console.log(first, "pl---plp-")
    }
    console.log(first, "-------");
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
// ✅ 1. What is lexical scope in JavaScript?
// Where a variable is defined decides its scope.
// Inner functions can access variables of outer functions.
function outer() {
    let x = 10;
    function inner() {
        console.log(x); // 10
    }
    inner();
}
/**
 ✅ 2. How does lexical scoping work with this keyword ? 
Lexical scope and 'this' are different.
'this' depends on how a function is called, not where it’s defined.
Lexical scope is based on where it’s written in code.
---------------------------------------------------------------------------------

✅ 3. What is the use of void(0)?
Runs an expression without returning anything.
Often used in <a href="javascript:void(0)"> to do nothing and prevent page reload
---------------------------------------------------------------------------------

✅ 5. What are Web Workers?
Web Workers run JavaScript in background threads, so heavy tasks don’t block UI.
💡 Use case: Data processing without freezing the page.
---------------------------------------------------------------------------------

✅ 6. Explain debouncing and throttling.
🔹 Debouncing: Runs a function after a delay, and resets timer if called again . 
(e.g., search bar input)
Executes only after a pause.
---------------------------------------------------------------------------------
🔹 Throttling:
Runs a function at fixed intervals, ignoring extra calls in between.
Limits function execution rate.
*/
(function() { var a = b = 5; })(); 
console.log(typeof a,"???>"); // undefined (a is local)
console.log(typeof b,"EDFGBV",b); // number (b becomes global)
/*
Why?
b = 5 is like window.b = 5 but a is var scoped inside function.
-------------------------------------------------------------------------------------------
*/
const car = {
    name: 'Toyota',
    getName: function () {
        return this.name;
    },
};

const getCarName = car.getName;
console.log(getCarName(),"wwwwwwwasa"); // ???
/*Why?
Because this is not bound to car here; it becomes undefined or window depending on strict mode.
-----------------------------------------------------------------------------------------------------
*/
arr = new Array(3).fill([]);
console.log(arr, 'aaaaa#$')
arr[0].push(10);
console.log(arr, 'VCAS'); //[ [10], [10], [10] ]
/*Why?
All array slots refer to the same inner array object.

--------------------------------*/
const obj = { xf: 11 };
const { xf, xf: y } = obj;
console.log(y, "GGG", xf, "{{{{"); // 1 GGG 1 {{{{
/*Why?
xf: y assigns obj.xf to new variable y.

 */