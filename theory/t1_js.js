// 1020
// 4
// javascript 
// ""
// 0
// nan 
console.log(true + true) //2 
console.log(true + false) //1 

let history_of_js
/** 
1995: Brendan Eich at Netscape created a scripting language in 10 days.
Original Names:
First name called Mocha.
Renamed to LiveScript.
Finally named JavaScript for marketing, as Java was popular, but Java and JavaScript are unrelated.

-----------------------------------------------------------------------------------------------------

Browser Wars:
Netscape used JavaScript.
Microsoft’s Internet Explorer copied features and created JScript.

EcmaScript:
To standardize scripting across browsers, Ecma International (founded 1996) created EcmaScript.
JavaScript + Ecma rules = EcmaScript.

Key versions:
ES1 (1997): First version.
ES5 (2009): Added new features.
ES6 (2015): Major update, also called Modern JavaScript.

Since 2015, new features are released yearly by the TC39 committee

Convert String to Number:
Add a plus sign (+) before a string.
Example: let str = "169"; console.log(typeof (+str)); → Outputs number.
---------------------------------------------------------------------------------------------

Convert Number to String:
Add an empty string ("") to a number.
Example: let num = 10; console.log(typeof (num + "")); → Outputs string.
---------------------------------------------------------------------------------------------

Strings in JavaScript
Strings store text (words, sentences) and use zero-based indexing (first character is at index 0).

Examples:
let str = "pro"; 
(stores "pro").

Common String Methods:
trim(): Removes extra spaces.
slice(): Extracts part of a string.
charAt(): Gets a character at a specific index.
toString(): Converts to string.
concat(): Joins strings.
substring(): Extracts part of a string.
indexOf(): Finds the position of a substring.
toUpperCase(): Converts to uppercase.
lastIndexOf(): Finds the last position of a substring.
toLowerCase(): Converts to lowercase.
--------------------------------------------------------------------------------

Undefined and Null

Undefined:
Returned when:
1.) A variable is declared but not assigned a value.
2.) Accessing a non-existing object's property.
3.) Accessing an array's element out of bounds.

Example:
 let str;
  console.log(str);  → Outputs undefined.
---------------------------------------------------------------------------------
Null:
Means "no value" and is explicitly assigned value .
Type of null is object.
Treated as false in conditions.
Example: 
let val = null;
 console.log(typeof val); 
 → Outputs object.
---------------------------------------------------------------------------------

BigInt
Purpose: Handles large numbers beyond 2^53 - 1 (JavaScript’s safe integer limit).
Declaration:
Add n to a number: let num = 9816543219865252772n;.
Use BigInt(): let num = BigInt(9816543219865252772);.

Note: bigint Does not support decimal values.
--------------------------------------------------------------------------------------------

Methods in Objects
A function inside an object is called a method.

Example:
const person = {
  name: "Alex",
  age: 21,
  about: function() {
    console.log(`My name is ${this.name}`);
  }
};

person.about(); // Outputs "My name is Alex"
-----------------------------------------------------------------------
------------------------------------------------------------------------------

Prototypes
Prototypes allow us to add properties or methods to an object constructor, making them available to all instances created from that constructor.

Example:
function Person() {
  this.name = "John";
  this.age = 23;
}

Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const person = new Person();
person.greet(); // Outputs "Hi, I'm John"
--------------------------------------------------------------------------------------------

How it works:
Person is a constructor function.
Person.prototype.greet adds the 'greet' method to the Person prototype.
All instances of Person (like person) inherit the 'greet' method via the prototype chain.
Calling person.greet() accesses this.name from the instance, outputting "Hi, I'm John".

Prototypes are shared across all instances, making them memory-efficient for methods.

-------------------------------------------------------------------

The new Keyword
Purpose: Creates a new object from a constructor function.
Steps:
-> Creates a new empty object.
-> Sets the object’s prototype.
-> Points 'this' to the new object.
-> Executes the constructor function with this.
-> Returns the new object.
*/

/**
// const  a2 = 10;
// function f() {
//     a2 = 9
//     console.log(a2)//assignment to constant variable
// }
// f();

//a constant variable a2 and initializes it with the value of 10. Then, it defines a function f that attempts to reassign a new value of 9 to a2. However, when f is executed, it throws an error "assignment to constant variable" because a2 is a constant variable and cannot be reassigned a new value.

// In JavaScript, 'const' is a keyword used to declare a variable whose value cannot be reassigned once it has been initialized. 
// This behavior is different from variables declared with var or let, which can be reassigned new values.

// In this case, since a2 is a constant variable, any attempt to modify its value after it has been initialized will result in an error being thrown at runtime. The error message "assignment to constant variable" indicates that we are attempting to modify a constant variable, which is not allowed.
-------------------------------------------------------------------------------------------------------------------

// const  a2 = 10; 90
// function f() {
//    let a2 = 9
//     console.log(a2)//9
// }
// f();
////////////////////////////////////////////////////////////////////
// let a2 = 10;
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
console.log(a )//{ '[object Object]': 98 }
console.log(JSON.stringify(a) ) // {"[object Object]":98} 
console.log(a[b] ) // 98
console.log(a,)//   // { '[object Object]': 98 }
a[c] = 123
console.log(a )//   // { '[object Object]': 123 }
a[d] = 6
console.log(a)//  // { '[object Object]': 6 }
a['e'] = 1
a[{ d: 'update' }] = 31
a[{}] = 32
console.log(a[b]) //   //32 
console.log(a) //     { '[object Object]': 32, e: 1 } 
---------------------------------------------------------------------------------------

let string1 = '324e-1'
string1 = Number(string1)

console.log(string1, "ng1")//    32.4 

// '324e-1' is in scientific notation, meaning:          // 324 × 10⁻¹ = 32.4

// ------------------------------------------------------------------------------------------
//setinterval 
//setinterval, settimeout ki tarh hee h .
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
  console.log(kl) // Cannot access 'kl' before initialization
  let kl = 9
}
// so()

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

// addTwoNumber(2, 3, (number1, number2) => {
//     console.log(number1 + number2, 'onsuccess print ')
// }, () => {
//     console.log('wrong input')
//     console.log('invalid input ')
// });

// -------------------------------------------------------------------
//synchronous programmig vs asynchronous programming

//synchronous programming 
// console.log('beforee loop')
for (let i = 0; i < 1000; i++) {
  // console.log("inside", i)
}

// console.log('after loop')
//j.s is synchronous programming and single threaded.
//line by line execute code .
//===================================

//asynchronus programming
/** 
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

//e.g.2.============== settime out with 0 sec
// console.log('strart file ')
// setTimeout(() => { console.log('hello,settimeout with zero second') }, 0)

// console.log("befre looping")
//====================
for (let i = 0; i < 10; i++) {
  // console.log('inside for-loop', i)
}
// console.log("after settimenot")
//analyse

/**
 * first line execute, then j.s. ko nhi pta settimeout ke baare mai
 *  to ye browser ke pass bhj dega 
 * browser ke pass rhega aur execute krke result return kr dega. 
 * 0 second baad 
 but js next line pr move krega aur execute krega aaage ka code browser wala return last mai print hoga 
 */
//------------------------------------------------------------------------------------------------------------

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

for (var i = 0; i < 3; i++) { //change var -> let, const
  // change let ,var const  
}
// console.log( i)// 3
//--------------------------------------------------------------
for (let i = 0; i < 3; i++) { //
  // change let ,var const  
}

// console.log( i)// 3
//-----------------------------------------------------------------------------------------
// for (const i = 0; i < 3; i++) { //
//   // change let, var const  
// }
//---------------------------------------------------------
// console.log( i)// assignment to constant variable

//=======parameter destructuring --------------
// Parameter destructuring in JavaScript allows the unpacking of properties from objects or elements from arrays directly within a function's parameter list

let obj = {
  "name": "alex",
  age: 12,
  address: 'delhi'
};
function sol2({ name, age }) {
  console.log(name, '===name')//alex ===name
  console.log(age)  //12
};
// sol2(obj)

//============set========

let set2 = new Set()
// A JavaScript Set is a collection of unique values-> that means no duplicates allowed. A Set can hold any value of any data type.
// ⚙️ Common Methods: 
// add ->   Adds a new value     mySet.add(10)
// get-> 
// has-> Checks if value exists
// delete ->Removes a value
// clear -> Removes all values
// size -> Returns number of items 

set2.add('e0ee')
set2.add('wjengwigw')
let t3 = { name: 'ram' }
set2.add(t3)
// set2.clear()     // clear property : to clear the set 
//  set2.delete("eeeeeeeeee")//'delete property' : specific element to delete 
let result = set2.has("e0ee")// 'has' 'property' tell the element exist or not 
let result1 = set2.has(t3)// 'has property' tell the element exist or not 
// console.log(result, "WSDCVBVCD", result1, "resultg22222")//true WSDCVBVCD true resultg22222
// console.log('=====  ==============') 
// console.log(set2, "BBBBBB")// Set(3) { 'e0ee', 'wjengwigw', { name: 'ram' } } 
arr = [...set2];
// console.log(arr, 'XSWEDC')// [ 'e0ee', 'wjengwigw', { name: 'ram' } ]


let WHat_is_Javascript;
/*
JavaScript is a scripting (programming) language used in client side that allows us (developers) to make web pages interactive.***

 A scripting language is a kind of programming language that is used to automate the execution of operations in a runtime environment. 

JavaScript is an object-based scripting language, meaning it uses objects to represent data and functionality,
JavaScript is also cross-platform, which means it can be run on any device that has a web browser,
JavaScript follow synchronous pattern
JavaScript code is a single thread, which means that code can only do one task at a time

Dynamic Typing ****
JavaScript is dynamically typed, which means: we don’t need to mention the type of a variable.
A variable can hold any type of value, and it can change later.

let x = 10;           // x is a number
x = "Hello";         // now x is a string
x = [1, 2, 3];      // now x is an array
x = { name: "JS" } // now x is an object
*/
let rem;
let Rem;

let JAVASCRIPT_CASE_SENSITIVE_LANGUAGE

/**
 Is JavaScript a case-sensitive language?
Yes, JavaScript is a case sensitive language.
It means uppercase and lowercase letters are treated as different.
let name = "John";
let Name = "Doe";

console.log(name); // John
console.log(Name); // Doe
 */
/*
  ------------------------------------------------------------------------------------------------------------
  Q: Why JavaScript is known as a lightweight programming language ?
  JavaScript is considered a lightweight language due to its low CPU usage, minimalist syntax, ease of implementation.
  
 and it was originally designed to run in browsers with minimal resource demands. It executes client-side tasks (like DOM manipulation) without requiring heavy computation. 
  ------------------------------------------------------------------------------------------------------------

Q: Is JavaScript compiled or interpreted? 
A: JavaScript is primarily interpreted, but modern engines use Just-In-Time (JIT) compilation, so it is technically both. It starts by interpreting and then compiles frequently used code to machine code at runtime for better performance.

🚀 Modern JS Engines (Compiled Just-in-Time - JIT)
Modern engines use Just-in-Time (JIT) compilation to make JavaScript run faster.

Instead of just interpreting code line-by-line (slow), JIT compiles JavaScript into machine code right before execution.
------------------------------------------------------------------------
JIT Compiler: A JIT compiler converts code into byte code first. Then, at runtime, it changes the byte code into machine - readable code, which makes the program run faster.
--------------------------------------------------------------------------------------------
*/
/** 
Why is JavaScript interpreted not compiled?
 JavaScript is compiled or interpreted depends on the environment in which it is run. If it runs in older browsers, it's interpreted. If it runs in modern browsers, it's compiled. 

 What is an Interpreted Programming Language?
 Originally, JavaScript was interpreted, meaning the browser read and executed the code line-by-line at runtime.
*/

let ADVANTAGES_OF_USING_JAVASCRIPT;
/*
 Light Weight Scripting Language******
means js is made for data handling at the browser (only) & due to its low CPU usage, minimalist syntax, and ease of implementation.

--> Server interaction is less. 
-->  Feedback to the visitors is immediate . 
--> Interactivity is high .
--> Interfaces are rich .
--> Speed. Client-side JavaScript is very fast because it can be run immediately within the client-side browser. 

Simplicity. JavaScript is relatively simple to learn and implement.

   The biggest advantage of JavaScript having ability to support all modern browsers and produce an equivalent result.

-> JavaScript is use to create dynamic and interactive websites. JavaScript can be used to manipulate the content and styling of a web page, add interactivity through event handling, and communicate with web servers to update content without requiring a full page refresh.
---------------------------------------------------------------------------------------------------------
*/
let feature_of_js
/*
🌟 Core Features of JavaScript:
✅ Lightweight and Interpreted
JavaScript is a lightweight language and runs directly in the browser. No need to compile manually.

✅ Dynamic Typing
we don’t need to declare variable types (like int, string, etc.).
Example:

let x = 10;  // number  
x = "Hello"; // now it's a string
✅ Object-Oriented
JavaScript supports objects, classes (ES6), inheritance, etc.

✅ Event-Driven Programming
It's perfect for reacting to user actions like clicks, keypress, form submission.

✅ Functional Programming
Functions are first-class citizens. we can assign functions to variables, pass them as arguments, and return function from other functions.

✅ Prototype-based Inheritance
Instead of class-based inheritance (like Java or C++), JavaScript uses prototypes.

✅ Asynchronous and Single-threaded
JavaScript uses an event loop and callbacks, promises, and async/await to handle async code (like API calls) in a non-blocking way.

✅ Runs Everywhere (Cross-platform)
JS runs on browsers, mobile, desktop (with Electron), and servers (Node.js).

✅ Rich Standard Library.
Lots of built-in methods for arrays, strings, objects, dates, math, etc.

✅ Browser Integration.
JavaScript can directly manipulate the DOM, handle events, interact with browser APIs (like localStorage, fetch, etc.)
*/
let DISADVANTAGES_OF_JS = {
}
/*
No support for multithreading. 
No support for multiprocessing. 
Reading and writing of files is not allowed
---------------------------------------------------------------------------------------------------------
 A programming language is a type of computer language that has set of instructions for communicating with computers. 
 the programming languages that are compiled first before running, scripting languages do not compile the file and execute the file without being compiled.
 ******************************************************************************
 */
/*
******************************************************************************

Question: “Is JavaScript a programming language or a scripting language?”
Answer: JavaScript is both. It began as a scripting language for web browsers, automating tasks like DOM manipulation. But with modern features (e.g., ES6-> classes, modules), it’s a full programming language we used everywhere from front-end to back-end development (e.g., with Node.js).
----------------------------------------------------------------------------------------

JavaScript is a programming language. explain 
Yes, JavaScript is a programming language that is used ((primarily)) for web development, but can also be used for other purposes such as server-side programming, desktop applications, and mobile app development. 
-----------------------------------------------------------------------------------------

❓ Why is JavaScript single-threaded?
JavaScript was designed to be single-threaded because of its main job in the browser: interact with the DOM (the web page).  
---------------------------------------------------------------------------------------
*/
let event_loop
/*
🔷 Event Loop is the mechanism that makes asynchronous programming possible in JS.
🔷 Node.js uses JavaScript + Event Loop to build fast, scalable, non-blocking server-side applications.
-----------------------------------------------------------------------------------------

((   ((The Event Loop and Asynchronous Behavior:))
JavaScript uses single-threaded, non-blocking model with an event loop to handle concurrency without multiple threads.
The event loop manages the execution of code, handling tasks like DOM events, timers (setTimeout), and asynchronous operations (e.g., fetching data with fetch).))
---------------------------------------------------------------------------
How it works:
JavaScript has a call stack (where code executes), a task queue (for pending tasks), and a web API (for async operations like timers or HTTP requests).

When an async operation (e.g., setTimeout) is encountered, it’s sent away (offloaded)  to the web API. Once the operation is ready, its callback is placed in the task queue.
The event loop continuously checks the call stack. If the stack is empty, it takes the next task from the queue and pushes to the stack for execution.
---------------------------------------------------------------------------------------
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");
0
Output: Start, End, Timeout
-------------------------------------------------------------------------------------------------
---example---------------------------------------------
console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");
----------------------------------------------------------------------------

🧠 1. Call Stack (Main Execution)
This is where code is executed line by line.
console.log("1") → goes into the stack → runs → pops out.
setTimeout(...) → goes into the stack → passed to Web APIs → pops out.
console.log("3") → runs next.

So the stack looks like:

| console.log("1") | → done
| setTimeout(...)  | → passed to Web API
| console.log("3") | → done

🌐 2. Web APIs
Web APIs are provided by the browser (or Node) to handle asynchronous stuff outside the main thread.
---------------------------------------------------------------------------------------------------
In our case:

setTimeout(() => console.log("2"), 1000)
Web API starts a timer in the background.
Once 1000ms is over, this callback run:
() => console.log("2")

---------------------------------------------------------------------------------------------------------
🗂️ 3. Callback Queue (aka Task Queue or Message Queue)
After the timer ends, the callback is added to this queue.

But it will not run immediately.
Instead, it waits until the Call Stack is empty.

🔁 4. Event Loop 
The Event Loop keeps checking:
“Is the call stack empty?”
If yes, it picks the next task from the Callback Queue and pushes into the Call Stack to execute.

So here:

After console.log("3") finishes, the call stack becomes empty.
Event Loop picks () => console.log("2") and runs it.
-------------------------------------------------------------------------
Microtask Queue (Priority Queue)
The Microtask Queue has higher priority than the Callback Queue. It contains:

Promises (.then(), .catch())
Mutation Observers
process.nextTick() (Node.js only)
-------------------------------------------------------------------------

Execution Context
An Execution Context is the environment where JavaScript code is executed. It consists of

Global Execution Context (GEC) – Created when the JavaScript file runs.
Function Execution Context (FEC) – Created when a function is invoked.
Example:
console.log("Start");

function greet() {
  console.log("Hello");
}

greet(); // Function Execution Context created
console.log("End");
Execution Order:

Global Execution Context (GEC) is created.
console.log("Start") runs.
Function greet() is called → New Function Execution Context (FEC) is created.
Inside greet(), console.log("Hello") runs.
Function context is destroyed, and control returns to the global context.
console.log("End") runs.
**********************************************************************************************

Difference: Micro vs Macro Task
Microtask → Promise.then, process.nextTick → runs immediately after current task.
Macrotask → setTimeout, setInterval → runs after microtasks are done.
**********************************************************************************************
*/
let FUNCTION_SCOPE_AND_GLOBAL_SCOPE

/*
  Function-Scoped
A variable declared with var is function-scoped, meaning it’s only accessible within the function where it’s defined in. If it’s not inside a function, it becomes globally scoped.
**********************************************************************************************

Globally Scoped.......
A variable declared with 'var' outside any function ((or without 'var' in non-strict mode)) is globally scoped, meaning it’s accessible everywhere in our program, including inside functions, loops, or any other code.

Example with our code:

var ret = 2; // Globally scoped because it’s not inside a function
console.log(ret ** 2, 'l'); // ret is accessible

function test() {
    console.log(ret); // ret is still accessible inside this function
}
test(); // Outputs: 2
*/

let w = 2;
console.log(w); // Accessible here
function test() {
  console.log(w); // Also accessible here
}

/**
In JavaScript, whether a variable declared with 'let w = 2' is globally scoped depends on where it is declared.

If declared outside any function or block: Yes, w is in the global scope and accessible throughout the entire script (or module, if using ES modules). For example:

In this case, w is globally scoped because it’s declared at the top level of the script.
If declared inside a block or function: If 'w' is declared inside a block (e.g., {}), function, or other scope, it is not globally scoped and is only accessible within that block or function due to let’s block-scoping behavior. For example:

-------------------------------------------------------------------------------------
In JavaScript, if we declare const t = 3 in the first line of a script (outside any function or block), it behaves similarly to 'let' in terms of scope but with key differences due to const’s properties:

Global Scope: If const t = 3 is declared at the top level of a script (outside any block or function), it is in the global scope for that script and accessible throughout the script. For example:
*/
/**
========================================================
In simple terms, "interactivity" refers to how much a user can interact with a web page or application. JavaScript is a programming language that is commonly used in web development to add interactivity to websites.
  
With JavaScript, we can create interactive features such as drop-down menus, pop-up windows, sliders, animations, and more. These features can respond to user actions such as clicks, mouse movements, or keyboard inputs, allowing users to interact with the website and its content in meaningful ways.

For example, with JavaScript, a user can click a button to show or hide content on a web page. JavaScript can also be used to validate form inputs, perform calculations, and even create interactive games.
 */
let Undefined_AND_NULL
/**
 What is the difference between null & undefined ?
 Undefined means a variable has been declared but has not yet been assigned a value. On the other hand,
 null is an assignment value. null can be assigned to a variable as a representation of no value. 
 Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object
 
  Storing a value in a variable is called variable initialization
   */

console.log(undefined == null, " FG") //true
console.log(undefined === null, " FG1")  //false

/*
**************************************************************************************
What are undeclared and undefined variables ?

Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.

Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.
*/

let type_of_function_in_js
/**
 There are two types of functions: named functions and anonymous functions.

A named function is a function that has a name. It can be defined using the function keyword followed by the function name, a set of parentheses, and a set of curly braces that enclose the function's body.--
Here's an example of a named function:

function addNumbers(a, b) {
  return a + b;
}

An anonymous function is a function that does not have a name. It can be defined using the function keyword, followed by a set of parentheses and a set of curly braces that enclose the function's body, without any function name. Anonymous functions are often used as callback functions, as function arguments or immediately invoked function expressions (IIFE) or Self Invoking Functions.

Here's an example of an anonymous function:
let sum = function(a, b) {
  return a + b;
} 

Note that in the example above, the function is assigned to a variable (sum), so it can be invoked later by calling that variable as a function.

Anonymous functions can also be immediately invoked by enclosing the function definition in parentheses followed by an additional set of parentheses:

-----------------------------------------------------------------------------------------------------------
(function() {
  console.log("This is an immediately invoked anonymous function.");
})();

in this case, the function is defined and invoked immediately without being assigned to a variable

An Immediately Invoked Function expression ( known as IIFE ) is a function that runs as soon as it is defined.
 */


// string method 
var str = '   hello-world   '
// str.trim()// not working here becos we cannot assign here, in variable.
var str2 = str.trim()
// console.log(str.length ) //17
// console.log(str2.length) //// 11 
let temp = str.slice(0, 4)  // 
// console.log(temp ) // h 

// console.log(typeof temp ) // string

// console.log(str.slice(0, 4) ) // h 
// console.log(typeof str.slice(0, 4) ) // string 
// console.log(str2.slice(0, 4) )  // hell 
//////////////////////////////////////////////////////////////////////////////////////////////

// console.log(str.charAt(4))  //e 
// console.log(str2.charAt(4))  //o 
// console.log(str.indexOf('h'))  //3
// console.log(str.lastIndexOf('h')) //3
// console.log('================================================================ =======')

let tempAr = [3, 4, 5, 6, 6, 2, 1]
// console.log(tempAr?.slice(0, 2) ) // [ 3, 4 ] 
//-----------------------------------------------------------------------------------------

tempAr = 'tempArRDRFRGR'
let th = tempAr.substring(3, 1)
// console.log(th ) // em  // swap krra
// ----------------------------------------------------------------------

th = tempAr.substring(-3, 1)
// console.log(th ) // t  // minus index will be treated as 0.
// ----------------------------------------------------------------------

th = tempAr.substring(3, -1)
// console.log(th) // tem  

// ----------------------------------------------------------------------
let thj = tempAr.slice(2, 3)
// console.log(thj ) // m 

let thj1 = tempAr.slice(2, 2)
// console.log(thj1) //"" return nothing

tempAr = [3, 4, 5, 6, 6, 2, 1]
// console.log(tempAr.slice(2, 2) ) // "" []  // empty array

let SUBSTRING;

/**
The substring() method is used to extract a part of a string, between two specified indexes (positions).
 substring() only applicable on string not array.
 substring() method extracts characters from start to end (exclusive).
 substring() method does not change the original string.
 If startIndex > endIndex, JavaScript automatically swaps them.
 substring() does not support negative indexes,

let str = "JavaScript";
let result = str.substring(0, 4);
console.log(result); // "Java"

console.log("Hello".substring(3, 1)); // "el" /// swap kr dia 
=======================================================================================================
 example: 
 */
let str6 = "Hello";
// console.log(str6.substring(-2, 3) ); // Treats -2 as 0, outputs "Hel"

// console.log(str6.substring(-2, -3) ) ; // Treats -2 as 0, & -3 as 0 outputs ""
/*
If we pass a negative index to substring(), it treats as 0.
--------------------------------------------------------------------------------------------

❗Difference from slice():
slice() support negative indexes (e.g., -1 refers to the last character)
let str = "Hello";
console.log(str.slice(-2, 5)); // Outputs "lo"
console.log(str.slice(-3, -1)); // Outputs "ll"

 ======================================================================================================= 
 The slice() method is used to extract a part of a string or array and returns it as a new value — without changing the original.

 Returns a shallow copy of a portion of an array, specified by start and end indices (end not included). 
 Supports negative indices.
 let arr = [1, 2, 3, 4];
 let sliced = arr.slice(1, 3); // [2, 3]

 let str = "JavaScript";
console.log(str.slice(-6));       // "Script"
console.log(str.slice(-6, -3));   // "Scr"
-----------------------------------------------------

let arr = [10, 20, 30, 40, 50];

console.log(arr.slice(-3));      // [30, 40, 50]
console.log(arr.slice(-4, -1));  // [20, 30, 40]
 =======================================================================================================
 */

/**
 * array method:
 * array length: it return the number of elements in an array & returns the new length.
 * array push: it add element to the end of the array and returns the new length of the array. 
 * array pop: it remove the last element from an array and return removed element.
 * array shift : Removes the first element from an array and returns removed element. 
 * array unshift : Adds one or more elements to the beginning of an array and returns the new length.
 * array sort : Sorts the elements of an array in place (mutates the array) and returns the sorted array..
 * array reverse : Reverses the order of elements in an array in place and returns the reversed array. modify original array . 
 let arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1] 

------------------------------------------------------------------------------------------------
 Additional Array Methods Commonly used : 

  map Function
 The map function takes an array, applies a transformation to each element, and returns a new array with the transformed values. The new array always has the same number of elements as the original array
 ------------------------------------------------------------------------------------------------

 filter Function
 The filter function takes an array, checks each element against a condition, and returns a new array with only the elements that pass the condition.
 ------------------------------------------------------------------------------------------------

 Array Method.forEach()
The .forEach() method executes a callback function on each of the elements in an array in order.
Executes a provided function once for each array element. Does not return anything (returns undefined)

const numbers = [28, 77, 45, 99, 27]; 
numbers.forEach(number => {  
  console.log(number);
}); 

------------------------------------------------------------------------------------------------
Array.reduce()
The reduce() function is used to reduce an array to a single value by applying a function to each element and accumulating the result.

🧠 Simple Explanation: 
It takes all items in an array, processes them, and gives one final value.
*/
let t = [3, 4, 5, 6]
let t1 = t.reduce((a, b) => {
  return a + b
}, 0)

// acc = accumulator (stores the total so far)
// curr = current number in the array
// 0 = initial value
// console.log(t1, "rrrrr  ")

/*
Array.find()
 Returns the first element that satisfies a condition, or undefined if none found.
-------------------------------------------------------------------------------------------------------------....

Array.findIndex()
 Returns the index of the first element that satisfies a condition, or -1 if none found.
let arr = [1, 2, 3];   
let index = arr.findIndex(num => num > 2); // 2
------------------------------------------------------------------------------------------------

Array.includes()
 Checks if an array or string contains a specific value, returning true or false .
let arr = [1, 2, 3];
console.log(arr.includes(2)); // true
*/
// console.log("first".includes("f") )//true
/*
-------------------------------------------------------------------------------------------------
 Array.join()
 Joins all elements of an array into a string, optionally with a separator.

--------------------------------------------------------------------------------------------------
 
*/
/*-------------------------------------------------------------------------------------------------

Array.splice()
Modifies an array by removing, replacing, or adding elements at a specified index.it Returns removed elements.
*/
let arr4 = [1, 2, 3, 4];
// let tf = arr4.splice(1, 2, 'new'); // Removes [2, 3], adds 'new'
// console.log(arr4,  tf); // [1, 'new', 4]  [ 2, 3 ]

arr4.splice(1, -10, 'new'); // Removes nothing, adds 'new'
// console.log(arr4); // [ 1, 'new', 2, 3, 4 ]

/*
Array.concat()
Merges two or more arrays, returning a new array without modifying the originals.
*/
let nam = 'happy'
let year = 'twenty'
let next = nam.concat(" ", year)
// console.log(next, "next,@@@@@", nam, 'namemememe')
var ae = "eeee"
ae = 'helo'// reassign krra h ye 
// console.log(ae) ///helo
// -----------------------------------------------------------------------------------------
obj = {
  firstName: 3,
  lastname: 4,
  age: 5,
  address: 6
}
for (let value in obj) {
  // console.log(value)
}
// firstName
// lastname
// age
// address

// console.log(Object.values(obj) )//[3,4,5,6]
/**
 * Object.entries takes an object and return the key value pairs in array.
 */
// console.log(Object.entries(obj) )
// [
//   ['firstName', 3],
//   ['lastname', 4],
//   ['age', 5],
//   ['address', 6]
// ]

/**
 * Variables declared with let and const are also hoisted but, 
 *  unlike var, are not initialized with a default value. 
 */

// console.log(ab)// ReferenceError: Cannot access 'ab' before initialization
const ab = 9
{
}

function abc(a) {
  function sd(ad) {
    console.log(`opo ${a} and ${ad}`, 'ppeor')
    return `opo ${a} and ${ad}`
  }
  return sd
}
let rr = abc("hello")
// console.log(rr('world'), "lp");   ///opo hello and world
// rr()
//=========================================================---------------------------------------==
let ee = ['rty', 'ppp', 'ertyu'];
function sol(string) {
  return string.length === 3
}
let res = ee.find(sol)
// console.log(res) //rty

/**
 "debugger” in JavaScript?
 debugger is helpful for finding and fixing errors in JavaScript code.
 */

let is_nan

/**
🔍 What is NaN in JavaScript?
NaN stands for "Not-a-Number".

NaN is a special value in JavaScript that means “This value is not a valid number.”
------------------------------------------------------------
typeof of NaN will return a Number.

To check if a value is NaN, we use the isNaN() function,
isNaN converts the argument to a Number and returns true if the resulting value is NOT a Number
Note- isNaN() function converts the given value to a Number type, and then equates to NaN.

isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true 
---------------------------------------------------------------
   */
let strict
/**
Strict mode in JavaScript is a feature introduced in ECMAScript 5 (ES5), 2009, to implement stricter parsing and error handling in our code.

characteristics:
Duplicate parameter are not allowed by developers:

In 'non-strict' mode, JavaScript allows functions to have duplicate parameter names, which can lead to confusion or errors, as the last parameter with the same name overrides earlier ones. For example:

function example(a, a) {
  console.log(a); // Only the last 'a' is used
}
--------------------------------------------------------------------------------------------------
"use strict";
function example(a, a) { // SyntaxError: Duplicate parameter name not allowed in this context
console.log(a);
}
--------------------------------------------------------------------------------------------------

2:) In strict mode, we won't be able to use the JavaScript keyword as a parameter or function name:

JavaScript has reserved keywords (e.g., let, const, function, class, if, etc.) that cannot be used as variable names, parameter names, or function names in strict mode. In non-strict mode, some of these keywords could be used in certain contexts, leading to potential confusion or errors. For example:

// Non-strict mode (works, but bad practice)
function let() {
  console.log("This is allowed in non-strict mode");
}

In strict mode, using reserved keywords as identifiers (e.g., function or parameter names) results in a SyntaxError:
 "use strict";
function let() { // SyntaxError: Unexpected strict mode reserved word
  console.log("This will not work");
     }
 */

let Closures
/**
 What Are Closures in JavaScript?
 
 Closures are functions that have access to the variables from their outer function scope even after the outer function has finished executing. They “remember” the environment in which they were created.
 
 -> Closures are an ability of a function to remember the variables that are declared in its outer scope.
 -> Inner function remembers outer function's variables. 
-----------------------------------------------------------------------------------------------------
*/

let different_type_of_errors_in_js
/*
What Are the Different Types of Errors in JavaScript?

Syntax errors
Runtime errors
Logical errors
Reference Errors

Syntax errors: Syntax errors occur when the JavaScript code is not syntactically correct.
console.log("Hello"  // Missing closing parenthesis ❌
output: 
Uncaught SyntaxError: missing ) after argument list
------------------------------------------------------------------------------------------------------
Runtime errors: Runtime errors occur when the JavaScript code is executed and there is a problem.
Logical errors: Logical errors occur when the JavaScript code does not do what it is supposed to do.
----------------------------------------------------------------------------------------------------
Reference Errors: Happen when you try to use a variable that doesn’t exist or is out of scope.
console.log(x);  // ❌ x is not defined
output:
Uncaught ReferenceError: x is not defined
*/

let memoization;
/*
Memoization in JavaScript is an optimization technique used to improve the performance of functions by caching their results based on the input parameters. When a function is called with the same inputs multiple times, memoization allows the function to return the cached result instead of recomputing it, saving time and computational resources.
---------------------------------------------------------------------------------------------------------

Recursion is a technique where a function call itself until it arrive at a result.
   
---------------------------------------------------------------------------------------------------------

Arrow functions were introduced in the ES6 version of javascript. They provide us with a new and shorter syntax for declaring functions. 
((Arrow functions can only be used as a function expression.))

---------------------------------------------------------------------------------------------------------

A generator function is a special type of function that can be paused and resumed during its execution.
  */
function* generator1() {
  console.log("first")
  yield 100
  console.log('second')
  yield 2000
}
let gene = generator1()
//  console.log(gene.next() )
//  first
// { value: 100, done: false } 
// -------------------------------------------------------------------------------------------------
//  console.log(gene.next() )
//  second
// { value: 2000, done: false } 
//  console.log(gene.next())
let js_map
/**
In JavaScript, new Map() creates a Map object, which is a collection of key-value pairs where keys and values can be of any type (e.g., strings, numbers, objects, etc.). Unlike regular objects,

Maps maintain the insertion order of elements and allow keys of any data-type, not just strings or symbols.
we can add, retrieve, update, or remove key-value pairs, and it remembers the order in which we added them.

Purpose: Similar to objects but allows any value as keys.
Example:*/
const person = new Map();
person.set("Name", "Alex");
// console.log(person ); // Outputs: Map { "Name" => "Alex" }
// console.log(person.keys() ); // Outputs: [Map Iterator] { 'Name' }
// console.log(person.has("Name") );    // true
// console.log(person.has("Name1") );  // false
// console.log(person.get("Name1") ); // undefined
// console.log(person.get("Name") ); // Alex
/*
-----------------------------------------------------------------------------
Methods:
get(key): Gets the value for a key.
set(key, value): Adds or updates a key-value pair.
delete(key): Removes a key-value pair.
clear(): Removes all key-value pairs.
has(key): Checks if a key exists (returns true or false).
keys(): Returns an iterator of all keys.
-----------------------------------------------------------------------
Map: A key-value pair collection where keys and values can be of any type.
Set: A collection of unique values.
-------------------------------------------------------------------------------------------
Feature                     	Map      	Set
Stores Key-Value Pairs?	    ✅ Yes	  ❌ No
Allows Duplicate Values?   	❌ No  	❌ No
Order is Maintained?	      ✅ Yes  	✅ Yes
----------------------------------------------------------------------
let map = new Map();
map.set("name", "Alice");

let set = new Set([1, 2, 3, 3]);
console.log(set); // {1, 2, 3} (duplicates removed)
------------------------------------------------------------------------------------

A Set stores unique values.
When we add objects, they are only considered unique if their reference is different — even if the content is same.
 */
let mySet = new Set();
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
mySet.add(obj1);
mySet.add(obj2);
// console.log(mySet.size); // 👉 2
// Even though obj1 and obj2 look the same, they're stored as separate entries because they have different references in memory.
// -------------------------------------------------------------------------------------
mySet = new Set();

mySet.add({ a: 1 });
mySet.add({ a: 1 });
// console.log(mySet.size); // 👉 2 (different objects)

let sameObj = { b: 2 };
mySet.add(sameObj);
mySet.add(sameObj);
// console.log(mySet.size); // 👉 3 (same object added twice, only stored once)
// --------------------------------------------------------------------------------------
// example 
let objItems = new Map()
objItems.set(2, 2)
objItems.set(12, 22)
// console.log(objItems,"objItems") // Map(2) { 2 => 2, 12 => 22 } objItems

let object1 = new Map()
temp = { name: "map first" }
object1.set(temp, "first map initialise")
// object1.clear()
// object1.delete(temp)
// console.log(object1, '???????????????????????????????', object1.has(temp),  object1.get(temp),object1.keys())

let WeakMap
/*
---------------------------------------------------------------------------------------------------------
WeakMap in JavaScript is a collection of key/value pairs, where keys must be objects and values can be any data type.
A WeakMap is a special kind of Map in JavaScript.

let obj = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(obj, "secret value");

console.log(weakMap.get(obj)); // "secret value"
---------------------------------------------------------------------------

Key Features of WeakMap
Keys Must Be Objects: 
Only objects (or symbols in newer JS versions) can be keys (e.g., {} or new Object()). Primitives like strings or numbers are not allowed.

Weak References: If a key object is no longer referenced elsewhere in the code, it can be garbage-collected, and its entry is automatically removed from the WeakMap.

Non-Iterable: we can’t loop through a WeakMap (no .keys(), .values(), or .entries()), ensuring privacy and preventing accidental leaks.

Limited Methods: Supports only .set(key, value), .get(key), .has(key), and .delete(key).
--------------------------------------------------------------------

Benefits of WeakMap
Memory Efficiency:
Automatically cleans up entries when keys are no longer referenced, preventing memory leaks. Useful for managing large datasets (e.g., user sessions in Vuezen.io’s backend).

Private Data Storage:
Since WeakMap isn’t iterable, it’s great for storing private data tied to objects without exposing it. For example, storing user metadata without allowing external access.

No Key Leaks:
Unlike Map, where keys are strongly referenced and can cause memory leaks if not manually removed, WeakMap handles cleanup automatically.

Use in Libraries/Frameworks:
Ideal for associating metadata with DOM elements, objects, or API responses without affecting their lifecycle, common in frameworks like Vue.js or Node.js apps.
------------------------------------------------------------------------------------

Limitations
Non-Iterable: Can’t loop through entries, so not suitable for cases where we need to access all keys/values.
Object Keys Only: Limits flexibility compared to Map, which allows any key type.
Debugging: Harder to inspect since we can’t see all entries.
-----------------------------------------------------------------------------------------------------------

obj = null; // Now the key can be garbage collected

Once obj is set to null, the object is eligible for garbage collection, and the entry in weakMap is cleaned up automatically.

🧠 Summary:
WeakMap is like a Map, but:
Keys must be objects
Entries can be garbage collected if the object is no longer used
It’s not iterable 
*/
let WeakSet
/*
In javascript, a Set is a collection of unique and ordered elements. 
---------------------------------------------------------------------------------------------------------
🔍 What is WeakSet ? 
A WeakSet is a special type of Set in JavaScript where: 
It only stores objects (no primitive values like numbers or strings).
The objects in a WeakSet are weakly referenced, meaning:
If no other reference to an object exists, it can be garbage collected.

(automatically removes objects when they are no longer in use)

let weakSet = new WeakSet();
*/

// console.log(typeof WeakSet); // Should print "function".
let user = { name: "Alice" };
console.log(typeof globalThis.WeakSet, "/////////\\\\\\\\\\\\"); // Should print "function"
// let weakSet = new WeakSet();
// console.log(weakSet.has(user) ); // true
// weakSet.add(user);
// console.log(weakSet.has(user) ); // true

user = null;
// Now the object may be garbage collected.
/*
❌ What we Can’t Do with WeakSet:

weakSet.forEach(...);  // ❌ Not allowed
console.log(weakSet.size);  // ❌ Not available

🧠 Summary:
WeakSet is like a Set, but:
Only stores objects.
Stored objects are weakly held.
It’s not iterable and doesn’t expose its content.
*/
let Function_Declarations_and_Function_Expressions
/*
---------------------------------------------------------------------------------------------------------
What Is the Difference Between Function Declarations and Function Expressions?
Function declarations are defined using the function keyword, while function expressions are defined by assigning a function to a variable. Function declarations are hoisted, while function expressions are not.

//function declaration  
function multiple (a, b){
return a * b
}

//function expression 
const ad = function (a, b){
return a + b 
}

console.log(3,3)//9
console.log(ad(2,3)) //5

---------------------------------------------------------------------------------------------------------
Both localStorage and sessionStorage are web storage objects in JavaScript, but they have different scopes and lifetimes.

localStorage save data even after the browser window is closed and is accessible across different browser's tabs/windows of the same origin.

session Storage stores data for a single browser session and is accessible only within the same tab or window open.
Once the tab or window is closed, the data is cleared

---------------------------------------------------------------------------------------------------------

Storage                         	Expiry      	Max_Size	     Accessible_by_JS?
localStorage	                Never expires     	~5MB	            ✅ Yes
sessionStorage     	      Expires on page close	  ~5MB	            ✅ Yes
Cookies	                     Set manually	        ~4KB	            ✅ Yes

localStorage.setItem("user", "Alice");
sessionStorage.setItem("session", "active");
document.cookie = "token=12345; expires=Fri, 31 Dec 2025 12:00:00 UTC";
---------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------
IndexedDB is a client-side database technology in JavaScript that allows us to store data locally in a user's browser, making it accessible offline. It's a low-level API that provides a more powerful and efficient way of storing data compared to other client-side storage solutions like localStorage and cookies.

IndexedDB provides a way to store large amounts of structured data and enables search and retrieval of data, making it a good choice for applications that need to store large amounts of data and search it quickly. Some use cases of IndexedDB include:

Storing offline data: An application can store data locally using IndexedDB and use it even when the user is offline.
Caching data: An application can cache data in IndexedDB and reduce the number of network requests, resulting in faster page load times.
Data management: IndexedDB can be used to manage data in a structured manner, making it easier to work with and maintain.
In general, IndexedDB is a useful tool for web developers who need to store and manage large amounts of data on the client-side.

What is web storage 
Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive way than using cookies. The web storage provides two mechanisms for storing data on the client.
i.Local storage: It stores data for current origin with no expiration date. 
ii. Session storage: It stores data for one session and the data is lost when the browser tab is closed.

-------------------------------------------------------------------------------------------------------------

which one more secure in term of data storage session storage or cookie ?
👉 Cookies (with HttpOnly + Secure flags) are more secure for sensitive data (like login tokens).
Session storage is fine for temporary client-only data, but not for authentication.

---------------------------------------------------------------------------------------------------------
dynamo db how to store data ? 
Think of DynamoDB like a giant JSON table, not like MySQL.
Each record = Item
Each table = Collection of items
Each item = Key-Value pairs (flexible schema)

---------------------------------------------------------------------------------------------------------
🔹 What happens when we clear browser cache
“Cache” mainly means stored static files like images, CSS, JS — it helps pages load faster.
But depending on what we select while clearing, it can also include cookies and site data.

🚦 Three types of storage — and what happens when we clear cache:

1️⃣ Cookies
Cookies usually store session info, login tokens, etc.
If we clear cookies, we’ll be logged out — because the site loses our login token.
✅ So: Clear cookies = Login gone.

2️⃣ Local Storage
Data stored here stays even after closing the browser.
If we only clear cache (not site data), localStorage remains safe.

But if we clear “cookies and site data”, then localStorage also gets deleted → we’ll need to log in again (if site depends on it).

3️⃣ Session Storage
Data lasts only till the tab or window is open.
Once we close the tab/browser, sessionStorage data is automatically gone.
💀 So it’s temporary anyway.
---------------------------------------------------------------------------------------------------------
*/

/**
 What Is the Difference Between an Array and an Object in JavaScript ? 
 An array is a data structure that can store a collection of values. 
 An object is a data structure that can store a collection of properties.
 
 Arrays are indexed by numbers.
 */
let tgb = [3, "ghar", { r: 3 }, function f() { }, []]
/*
 Objects are indexed by strings.  

(( Objects can store primitive data types, objects,function and arrays.))
 ---------------------------------------------------------------------------------------------------------
 
 Browser Object Model is known as BOM.
 Browser Object Model allows users to interact with the browser.
 ---------------------------------------------------------------------------------------------------------
 
 What is the use of a type-of operator?

The typeof operator in JavaScript is a built-in operator that allows us to tell the data type of a value or variable.


 function myFunc() {}
console.log(typeof myFunc); // "function"
----------------------------------------------
const myFunc = function() {};
console.log(typeof myFunc); // "function"

const myArrowFunc = () => {};
console.log(typeof myArrowFunc); // "function"

const obj = { method: function() {} };
console.log(typeof obj.method); // "function"
console.log(typeof NaN); // "number"
           typeof Infinity;   // "number"

           isNaN(NaN);           // true (but beware: converts non-numbers)
           Number.isNaN(NaN);    // true (strict, recommended)
           globalThis.isNaN(NaN);     // true
           Number.isNaN(NaN);         // true
           
           console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof null); // "object" (common interview gotcha)
const isFunction = fn => typeof fn === "function";
console.log(isFunction(() => {})); // true
console.log(isFunction("not a function")); // false
 ---------------------------------------------------------------------------------------------------------
 
 Prototype Design Pattern in JavaScript is a way to create new objects by copying an existing object, called a prototype, instead of starting from scratch. This pattern is useful when we want to create objects that are similar to an existing object, with some or all of its properties and values already set.
 ---------------------------------------------------------------------------------------------------------
 
An HTTP status 204, No Content indicates that the server has successfully processed the request, but there's no content to return in the response body.
 */

// The prototype (template) object
const characterPrototype = {
  name: "Default",
  health: 100,
  attack: 10,
  greet() {
    console.log(`Hi, I'm ${this.name}!`);
  }
};

// Function to create a new character by copying the prototype
function createCharacter(name) {
  // Copy the prototype object
  const newCharacter = Object.create(characterPrototype);
  // Customize the new object
  newCharacter.name = name;
  return newCharacter;
}

// Create new characters
const warrior = createCharacter("Warrior");
const mage = createCharacter("Mage");

// console.log(warrior); // { name: "Warrior", health: 100, attack: 10 }
// console.log(mage); // { name: "Mage", health: 100, attack: 10 }
warrior.greet(); // Hi, I'm Warrior!
mage.greet(); // Hi, I'm Mage!
///
// 
/**
 "Keyword",          "const",  "let",  "var"
"Global Scope",       "No",     "No",  "Yes"
"Function Scope",     "Yes",   "Yes",  "Yes"
"Block Scope",        "Yes",   "Yes",  "No"
"Can Be Reassigned",   "No",   "Yes",  "Yes" 
"Can Be re-declared",  "No",   "no",  "Yes" 
 */

var x = 23;

(function () {
  var x = 43;
  (function random() {
    x++;
    // console.log(x);
    var x = 21;
  })();
})();
/**
 Output is NaN.
random() function has functional scope since x is declared and hoisted in the functional scope.
Rewriting the random function will give a better idea about the output:

function random(){
  var x; // x is hoisted
  x++; // x is not a number since it is not initialized yet
  console.log(x); // Outputs NaN
  x = 21; // Initialization of x
      }
 */

function func1() {
  setTimeout(() => {
    console.log(x, "line  BB");
    console.log(y, 'lin dd');
  }, 3000);

  var x = 2;
  let y = 12;
}
// func1();
// 2 line  BB
// 12 lin dd

/**
 Is JavaScript a pass-by-reference or pass-by-value language?
 JavaScript: Pass-by-Value (Always)

 In JavaScript, when we pass a variable to a function, the function gets a copy of the value. However, the tricky part comes when dealing with objects (including arrays and functions), because the "value" of an object is actually a reference (a memory address) to where the object’s data is stored.
--------------------------------------------------------------------------

Why It Feels Like Pass-by-Reference with Objects ?
When we pass an object to a function, the function gets a copy of the reference (the memory address), not the object itself.

If we modify the object’s properties using that reference, the changes affect the original object because both the original reference and the copied reference point to the same object in memory.

But if we try to replace the entire object (by assigning a new object to the parameter), the original object doesn’t change because we’re only modifying the copied reference, not the original one.

Case 1: Modifying an Object’s Properties (Looks Like Pass-by-Reference)
function modifyObject(obj) {
  obj.name = "Alice"; // Modifying the object's property
}

const myObject = { name: "Bob" };
modifyObject(myObject);
console.log(myObject.name); // Outputs: "Alice"

----------------------------------------------------------------------------------
Case 2: Replacing the Entire Object (Shows Pass-by-Value)

function replaceObject(obj) {
  obj = { name: "Charlie" }; // Replacing the entire object
}

const myObject = { name: "Bob" };
replaceObject(myObject);
console.log(myObject.name); // Outputs: "Bob"

Summary
JavaScript is pass-by-value, but with objects, the value being passed is a reference. This means:

Modifying an object’s properties inside a function affects the original object.
Replacing the entire object inside a function does not affect the original object.
 */

// console.log(Boolean([]), "WWWW")  /// true
/**
*/
let default_parameter = {
}
/**
    The concept of default parameters is a new feature introduced in the ES6 version of JavaScript. This allows us to give default values to function parameters. Let's take an example,
 
    function sum(x = 3, y = 5) {
    // return sum
    return x + y;
}

console.log(sum(5, 15));  // 20 
console.log(sum(7));        // 12
console.log(sum());          // 8
In the above example, the default value of x is 3 and the default value of y is 5.
sum(5, 15) - When both arguments are passed, x takes 5 and y takes 15.
sum(7) - When 7 is passed to the sum() function, x takes 7 and y takes default value 5.
sum() - When no argument is passed to the sum() function, x takes default value 3 and y takes default value 5.

 */

// Example 1: Passing Parameter as Default Values
function sum(x = 1, y = x, z = x + y) {
  // console.log(x + y + z);
}
sum(); // 4
// In the above program,
// The default value of x is 1
// The default value of y is set to x parameter
// The default value of z is the sum of x and y

/**
If you reference the parameter that has not been initialized yet, we will get an error. For example,

function sum( x = y, y = 1 ) {
    console.log( x + y);
}
sum(); 
Ad
Output
ReferenceError: Cannot access 'y' before initialization

-----------------------------------------------------------------------------------------------------

Example 2:
 Passing Function Value as Default Value using a function in default value expression . 

const sum = () => 15;

const calculate = function( x, y = x * sum() ) {
    return x + y;
}

const result = calculate(10);
console.log(result); // 160
In the above program,

10 is passed to the calculate() function.
x becomes 10, and y becomes 150 (the sum function returns 15).
The result will be 160.
---------------------------------------------------------------------------------------------------

Passing undefined Value
In JavaScript, when we pass 'undefined' to a default parameter function, the function takes the default value.
 For example,

function test(x = 1) {
  console.log(x);
}
// passing undefined
// takes default value 1
test(undefined); // 1
*/

function test(x = 19) {
  console.log(x, "pppppppppp");
}

// takes default value 19
// test(undefined); // 19
// test(null); // null
// test(0); // 0
// test(""); // ""
// test(NaN); // NaN
/*
---------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------
Template Strings (also called Template Literals):
A feature in JavaScript introduced in ES6.

Template literals use backticks (`) instead of quotes to create strings, allowing us to add variables and expressions inside them without concatenation.
With template literals, we can use both single and double quotes inside a string.

🔁 Summary:
Term	                                Meaning
Template Strings	               The syntax using backticks (`)
String Interpolation	           The feature of injecting variables (${...})
Relation	                       Interpolation is done inside template strings
-----------------------------------------------------------------------------------------

What is Arguments Binding?
When we call a function in JavaScript, the values we pass (arguments) are "bound" to the function's parameters in the order they are defined. This binding determines what values the parameters will hold inside the function.

function example(a, b) {
    console.log(a, b);
}
example(5, 10); // a is bound to 5, b is bound to 10
-----------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------
*/
/**
 
loose Equality Coercion

 while using the ‘==’ operator, implicit coercion takes place.
The ‘==’ operator, converts both the operands to the same type and then compares them.

Example :
var a = 12;
var b = "12";

a == b // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.
Coercion does not take place when using the ‘===’ operator. Both operands(value) are not converted to the same type in the case of ‘===’ operator.

Example:
var a = 226;
var b = "226";
a === b // Returns false because coercion does not take place and the operands are of different types. Hence they are not equal.

  Type coercion in JavaScript only coerces to the string, number, and Boolean primitive types. There's no way in JavaScript to coerce a value type to object or function .

 Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number etc. when different types of operators are applied to the values.

 String to Number Conversion
  var w = 10 - '5';//5
        var x = 10 * '5';//50
        var y = 10 / '5';// 2
        var z = 10 % '5';//0
        Boolean to Number
        var x = true + 2;//3  
        var y = false + 2;//2
        ---------------------------------------------------------------*/
// console.log(true=="true","{{{{{{{{{}}}}}}}}@@@")//false
/*-------------------------------------------------------------------
The == operator in JavaScript performs a loose equality comparison, which allows type coercion.
The left operand, true, is a boolean.
The right operand, "true", is a string.
When comparing a boolean to a string using ==, JavaScript attempts to coerce one or both operands to a common type.
In this case, the string "true" is not directly converted to a boolean. Instead, the boolean true is coerced to a number (where true becomes 1), and the string "true" is also coerced to a number. However, since "true" is not a valid number, it becomes NaN (Not-a-Number).

The comparison then becomes 1 == NaN, which is false because NaN is not equal to any number, including 1.
Thus, the output of console.log(true == "true") is false.

If we used strict equality (===), the result would also be false because true (boolean) and "true" (string) are different types, and === does not perform type coercion.
------------------------------------------
---------------------------------------------------------*/
// console.log(NaN == NaN, "{AAAAA@@")//false

/*
4. The Equality Operator
      var x = (10 == '10'); // true
      var y = (true == 1);  // true
      var z = (true == 'true');//false

Scope chain: Whenever our code tries to access a variable during the function call, it starts the searching from local variables. And if the variable is not found, it'll continue searching in its outer scope or parent functions' scope until it reaches the global scope and completes searching for the variable there.
--------------------------------------------------------------------------------------
*/
let exec_and_test;
/*
What is the difference between exec () and test () methods in javascript?
Both test() and exec() are JavaScript RegExp methods used to match patterns in strings, but they differ in their output and use:
test(): Checks if a string contains a pattern and returns a boolean (true if found, false if not).
*/

let regex = /hello /;
// This is a regular expression that matches the exact phrase:
// console.log(regex.test("hello world"), ); // true
// console.log(regex.test("he world"), ); // false
// -----------------------------------------------------------------------

regex = /hello   /;
// This is a regular expression that matches the exact phrase:
// console.log(regex.test("hello world"), 'XXXXXXXx'); // false
// -----------------------------------------------------------------------

regex = /hello is the/;
// This is a regular expression that matches the exact phrase:
// console.log(regex.test("hello world"), 'XXXXXXXx'); // false
// console.log(regex.test("hello is the"), 'XXXXXXXx'); // true
/*
===============================================================

exec(): Checks if a string contains a pattern and returns an array with the matched text, groups, index,,,  input if found, or null if not.
===============================================================
*/

const regex1 = /hello /;
console.log(regex1.exec("hello world"), 'LLLLLLLLLLL'); // ["hello", index: 0, input: "hello world", groups: undefined]
console.log(regex1.exec("world")); // null
/*
-------------------------------------------------------------------------------------------
Currying in JavaScript is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

Instead of taking all arguments at once, a curried (curry) function returns a new function for each argument until all arguments are provided, then it computes the result.
*/
// Regular function
function add(a, b, c) {
  return a + b + c;
}
// ---------------------------------------------------------------------------------------0
// Curried version
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// Usage
// console.log(curryAdd(1)(2)(3)); // Output: 6

// Partial application
const add1 = curryAdd(1); // Returns a function waiting for b
const add1and2 = add1(2); // Returns a function waiting for c
console.log(add1and2(3)); // Output: 6

/**
 Benefits of Currying in JavaScript
 Function Reusability:
Curried (curry) functions are modular, enabling us to reuse logic with different arguments.

Delayed Execution:
Arguments are evaluated only when all are provided, allowing flexible control over when the function runs. This is useful for lazy evaluation or deferred computations.

-------------------------------------------------------------------------------------------
Negatives of Currying in JavaScript
Increased Complexity:
Currying can make code harder to read and understand, especially for developers unfamiliar with functional programming. Nested function calls like f(a)(b)(c) can feel unintuitive compared to f(a, b, c).

------------------------------------------------------------------------------------
functional programming explain ?
✅ Functional Programming (FP) is a programming style where
we write functions as building blocks.
Functions are pure (no side effects).
--------------------------------------------------------------------------------------------
Core Concepts of FP in JS
Pure Functions

Always return the same output for same input.
No side effects (don’t change external data).
---------------------------------------------------------------------------------------------------------------
function add(a, b) {
  return a + b;
}
// No dependency on external data, no modification outside.
------------------------------------------------------------------
First-Class Functions

In JavaScript, functions are first-class citizens.
➡️ This means:
    Functions can be stored in variables.
    Passed as arguments to other functions.
    Returned from other functions.

function greet(name) {
  return "Hello, " + name;
}

function processUser(name, callback) {
  return callback(name);
}

console.log(processUser("Prabhat", greet)); // Hello, Prabhat
-----------------------------------------------------------------------------
 => Higher-Order Functions
✅ A Higher-Order Function ( HOF ) is a function that:
Takes another function as an argument (callback), or Returns from another function.

const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]
---------------------------------------------------------------------------------
map, filter, reduce are?
✅ They are Higher-Order Functions.
➡️ Because they take a function as an argument (the callback we pass to map, filter, or reduce).
🔹 Example with map:
const nums = [1, 2, 3];
const doubled = nums.map(x => x * 2);

------------------------------------------------------------------------------------
✅ The 'find' method is used on arrays to find the first element that satisfies a given condition.

➡️ It returns the first matching element, or undefined if no match is found.
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(element => element > 10);
console.log(found); // 12

------------------------------------------------------------------------------------
🚀 Is find a higher-order function?
✅ Yes, it is a higher-order function.
➡️ Why?
Because 'find' takes a function (callback) as an argument to decide which element to return.
------------------------------------------------------------------------------------

⚡ How does First-Class relate to Higher-Order?
✔️ First-class functions are a language feature (JS treats functions like variables).
✔️ Higher-order functions are a use-case or implementation (functions that take or return functions).

🔑 In simple words:
First-class functions = capability.
Higher-order functions = usage of that capability.

------------------------------------------------------------------------------------....
Why Are Higher-Order Functions Useful?
Code Reusability: HOFs let us reuse logic by passing different functions as arguments (e.g., map can transform arrays in many ways).
Abstraction: They hide complex details, making our code cleaner (e.g., filter handles the looping logic for you).

function createCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}

const counter = createCounter();
console.log(counter()); // Outputs: 0
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
.......................................................................

How Does bind Relate to Higher-Order Functions?
Answer: bind is an HOF because it returns a new function with a fixed 'this' value.
Example:
function sayHi() {
    console.log("Hi, " + this.name);
}
const user = { name: "Alex" };
const boundFunction = sayHi.bind(user);
boundFunction(); // Outputs: Hi, Alex

------------------------------------------------------------------------------------.
Scope Chain in js. 
 if the javascript engine does not find the variable in local scope, it tries to check the variable in the outer scope. If the variable does not exist in the outer scope, it tries to find the variable in the global scope.
 
--------------------------------------------------------------------------------------
 
What is the use of a constructor function in javascript?       
Constructor functions are used to create objects in javascript.

When do we use constructor functions?
If we want to create multiple objects having similar properties and methods, constructor functions are used.

((Note- The name of a constructor function should always be written in Pascal Notation: every word should start with a capital letter.)))

Example: */
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var person1 = new Person("Vivek", 76, "male");
// console.log(person1,':::::::'); // Person { name: 'Vivek', age: 76, gender: 'male' }

var person2 = new Person("Courtney", 34, "female");
// console.log(person2,'?????????'); // Person { name: 'Courtney', age: 34, gender: 'female' }

/*In the code above, we have created a constructor function named Person. Whenever we want to create a new object of the type Person, we need to create it using the 'new' keyword:

var person3 = new Person("Lilly", 17, "female");
The above line of code will create a new object of the type Person. Constructor functions allow us to group similar objects.
------------------------------------------------------------------------------------------------

What is DOM ?

DOM stands for Document Object Model. DOM is a programming interface for HTML and XML documents.
When the browser tries to render an HTML document, it creates an object based on the HTML document called DOM. Using this DOM, we can manipulate or change various elements inside the HTML document.
------------------------------------------------------------------------------------------------

What do you mean by BOM?
Browser Object Model is known as BOM. It allows users to interact with the browser. A browser's initial object is a window. As a result, we may call all of the window's functions directly or by referencing the window. The document, history, screen, navigator, location, and other attributes are available in the window object.
------------------------------------------------------------------------------------------------

 What are classes in javascript ? 
Introduced in the ES6 version, classes are nothing but syntactic sugars for constructor functions. classes provide a new way of declaring constructor functions in javascript. Below are the examples of how classes are declared and used:

// Before ES6 version, using constructor functions*/
function Student(name, rollNumber, grade, section) {
  this.name = name;
  this.rollNumber = rollNumber;
  this.grade = grade;
  this.section = section;
}

// Way to add methods to a constructor function
Student.prototype.getDetails = function () {
  return `Name: ${this.name}, Roll no: ${this.rollNumber}, Grade: ${this.grade}, Section:${this.section}`;
}

let student1 = new Student("Vivek", 354, "6th", "A");
let ge = student1.getDetails();
// console.log(ge ) // Name: Vivek, Roll no: 354, Grade: 6th, Section:A
// Returns Name: Vivek, Roll no:354, Grade: 6th, Section:A

// -------------------------------------------------------------------------------------------------

// ES6 version classes
class Student1 {
  constructor(name, rollNumber, grade, section) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
    this.section = section;
  }

  // Methods can be directly added inside the class
  getDetails() {
    return `Name: ${this.name}, Roll no: ${this.rollNumber}, Grade:${this.grade}, Section:${this.section}`;
  }
}

let student2 = new Student1("Garry", 673, "7th", "C");
let gh = student2.getDetails()
  ;
// console.log(gh ) // Name: Garry, Roll no: 673, Grade:7th, Section:C
// Returns             Name: Garry, Roll no:673, Grade: 7th, Section:C

/*
Key points to remember about classes:
---------------------------------------------------------------------------------------------------
Unlike functions, classes are not hoisted. A class cannot be used before it is declared.
A class can inherit properties and methods from other classes by using the 'extend' keyword.
All the syntaxes inside the class must follow the strict mode(‘use strict’) of javascript. An error will be thrown if the strict mode rules are not followed. 
*/
// example
class Animals {
  constructor(name, phone) {
    this.name = name,
      this.phone = phone
  }
  info() {
    console.log(`${this.name}, and phone is ${this.phone}`)
    return `${this.name}, and phone is ${this.phone}`
  }
};
// let newanimal = new Animals("sonu", '12')
// console.log(newanimal, 'newall')

// newanimal.info()

// let newanimal2 = new Lion("sonu1", '12address')
// newanimal2.info()

// console.log(newanimal2,'newimal2')
/*
------------------------------------------------------------------------------------------------
  Quick Tips
✅ map, filter, reduce, find are Higher - Order Functions
✅ splice, sort, reverse, push, pop, shift, unshift --> modify original array
✅ slice, map, filter, concat return new arrays ( don’t mutate original )
------------------------------------------------------------------------------------------------
  What would be the output of the below JavaScript code ?
var a = 10;

if (function abc() { }) {
  a += typeof abc;
}

console.log(a);//////10undefined
Here, function abc() { } is a function expression inside an if condition.

✅ In JavaScript:
function abc() { } evaluates to the function object itself, which is truthy.
  So, the if block runs.

🔍 Key Point
In this context:
'abc' is NOT defined in the outer scope.
The function expression function abc() { } does not create abc in the outer scope.
In function expressions with names(named function expressions), the name is only available inside the function itself, not outside.
------------------------------------------------------------------------------------------------
*/
let t4 = 2
if (function el() { }) {
  t4 = t4 + typeof el
}
// console.log(t4 ) // 2undefined
/*
What will be the output of the following code?
*/
var Bar = function Foo() {
  return 11;
};

// console.log(typeof Foo() ) // ReferenceError: Foo is not defined
/*
The output would be a reference error since a function definition can only have a single reference variable as its name.  
------------------------------------------------------------------------------------------------
What will be the output of the following code ?
*/
var Student = {
  college: "abc",
};

var stud1 = Object.create(Student);

delete stud1.college;
// console.log(stud1.college, "!!!");//abc

// delete Student.college;
/*
This is essentially a simple example of object-oriented programming. Therefore, the output will be ‘abc’ as we are accessing the property of the student object.

------------------------------------------------------------------------------------------------
*/
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < 10; i++) {
  // setTimeout(() => console.log(b[i]), 1000);
}
/*
🔍 Explanation:
🔁 for (var i = 0; i < 10; i++)
This is a basic 'for loop' that runs 10 times, with i going from 0 to 9.

🕒 setTimeout(() => console.log(b[i]), 1000);
This schedules a delayed execution of the function (after 1000ms = 1 second).

Inside the callback, b[i] is printed.

⚠️ The Gotcha: var Scope
The key thing here is:
'var' is function-scoped, not block-scoped.
By the time the setTimeout executes (after 1 second), the loop has already finished.
So the value of i is already 10 when console.log(b[i]) runs.

📦 What is b[10]?
The b array has values from index 0 to 9.

b[10] is undefined because the 10th index doesn't exist.
output 
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined

------------------------------------------------------------------------------------------------
*/
for (let i = 0; i < 10; i++) {
  // setTimeout(() => console.log(b[i] ), 1000);
}

/**
1
2
3
4
5
6
7
8
9
10
 */

/*
🔹 OOPs (Object-Oriented Programming) 
oops is the programming paradign that uses objects to represent data and functionality 

(structure code for reusability, modularity, and clarity.) 
 ((rather than just functions and procedure)). 

It is the most popular methodology among developers. 

Objects is real-world instances of entities like class that have some characteristics and behaviors.

 Need of OOPS:
  OOPs helps 'dev' to understand the software easily. With OOPs, the readability, understandability, and maintainability of the code increase multifold.
  Even very big software can be easily written and managed using OOPs.

Benefits:
Reusable code (DRY).
Easier to manage large projects
Organized and modular
Easier to debug

🔸 Core Concepts of OOP:
Concept 	    Description
Class	        Blueprint of an object (like a template)
Object	      Instance of a class (actual usable thing made from blueprint)
Constructor	  Special method called when object is created (used for initialization)
Method	      Function inside a class
Inheritance	  One class can use properties/methods of another class using extends & super()
Encapsulation	: Wrapping data (variables) and methods (functions) into a single unit — a class.
Polymorphism  :  Same method behaves differently in different classes
abstruction   :  show only relevant details for users and hide other details

🔸 Example:
*/
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    console.log(`${this.brand} is driving`);
  }
}

const car1 = new Car("BMW");
car1.drive(); // BMW is driving

/*
-------------------------------------------------------------------------------
🔸 Types of Methods:
Type	                 Syntax Example               	Notes
Constructor	          constructor() {}	         Auto-called on object creation
Normal Method        	drive() {}	               Called via object like car.drive()
Static Method	        static details() {}	       Called via class, not object (Car.details())

--------------------------------------------------------------------------------------------
🔸 Inheritance Example:
*/
class Employee {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log(`Employee: ${this.name}`);
  }
}

class Manager extends Employee {
  show() {
    super.show(); // calls parent method
    console.log(`Role: Manager`);
  }
}

const m = new Manager("Ravi");
m.show();
// Employee: Ravi
// Role: Manager

/*
🔸 Summary (For Interview Quick Recall):
Class = Blueprint
Object = Instance of Class
Constructor = Auto-run when object created
this = Refers to current object

super() = Call parent class methods/properties
Static Method = No need to create object
Inheritance = extends + super()

------------------------------------------------------------------------------------------------------------

3) Features of OOps are:
 Inheritance:
Encapsulation:
Polymorphism :
Abstraction:
-------------------------------------------------------------------------
 * 1. Encapsulation
 Encapsulation is bundling data (properties) and the methods (functions) that work on that data into a single unit (an object), 

 function Person(name, age) {
    // Private data (not truly private in this example, but encapsulated)
    let _name = name;
    let _age = age;
   
    // Public methods to access the data
    this.getName = function() {
        return _name;
    };
    this.setAge = function(newAge) {
        _age = newAge;
    };
}

const person = new Person("Alex", 25);
console.log(person.getName()); // Outputs: Alex
person.setAge(26);
************************************************************************************

Abstraction
 Abstraction is hiding the complex details of how something works and showing only the simple, necessary parts to the user.

 function Car() {
    // Complex details (hidden)
    let speed = 0;

    // Simple interface (public method)
    this.drive = function() {
        speed += 10;
        console.log(`Driving at ${speed} km/h`);
    };
}

const myCar = new Car();
myCar.drive(); // Outputs: Driving at 10 km/h


3. Inheritance
 Inheritance lets one object (or class) “inherit” properties and methods from another, so you can reuse code and extend functionality.

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
};
--------------------------------------------------------------------------------------
function Student(name, grade) {
    Person.call(this, name); // Inherit Person's properties
    this.grade = grade;
}

// Inherit Person's prototype methods
Student.prototype = Object.create(Person.prototype);

const student = new Student("Cody", "A");
student.sayHello(); // Outputs: Hello, I'm Cody
console.log(student.grade); // Outputs: A


. Polymorphism
 Polymorphism lets different objects use the same method name but behave differently based on their own rules.
class Animal {
  makeSound() {
    return "Some generic sound";
  }
}

class Dog extends Animal {
  makeSound() {
    return "Woof!";
  }
}

class Cat extends Animal {
  makeSound() {
    return "Meow!";
  }
}

const dog = new Dog();
const cat = new Cat();

console.log(dog.makeSound()); // Output: Woof!
console.log(cat.makeSound()); // Output: Meow!
---------------------------------------------------------------------------------------------
function Animal() {}
Animal.prototype.makeSound = function() {
    console.log("Some sound");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.makeSound = function() {
    console.log("Woof");
};

function Cat() {}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.makeSound = function() {
    console.log("Meow");
};

const dog = new Dog();
const cat = new Cat();
dog.makeSound(); // Outputs: Woof
cat.makeSound(); // Outputs: Meow


---------------------------------------------------------------
Advantages Of OOPS:
OOPS follows a bottom-up approach. OOPS allows us the reusability of code.
Avoids unnecessary data exposure to the user by using the abstraction.
Decompose a complex problem into smaller chunks.
Programmer are able to reach their goals faster.
Minimizes the complexity.

5) Disadvantages Of OOps:  
Proper planning is required.
Program design is tricky.
Programmer should be well skilled.
Classes tend to be overly generalized.
----------------------------------------------------------------------

Difference between Classes and Object:
  class is blueprint of object
Classes: It is a group of similar object.It is a logical entity.
  It is conceptual,It does not occupy space in the memory.
  A class can be existed without any object.
  It binds data and methods together into a single unit.
  It is a data type that represents the blueprint of an object.
  It uses the keyword class when declared.
e.g : audi(category)

Object:It is a real world entity such as book,car,etc.It is a physical or real world entity.
  It occupies space in the memory.
  Object cannot be existed without a class.
  It is just like a variable of a class.
  It is an instance of the class.
  It uses the new keyword to create an object.
  -----------------------------------------------------------------------------------

🔹 Encapsulation | Abstraction | Polymorphism (OOP Pillars)-----------------------------------------

✅ 1. Encapsulation
Definition:
Wrapping data (variables) and methods (functions) into a single unit — a class.

Goal: Protect data and prevent direct access from outside.

Example:

class Person {
  constructor(name) {
    let _name = name; // private
    this.getName = () => _name; // public getter
  }
}
const p = new Person("Ravi");
console.log(p.getName()); // Ravi
🧠 Think of it like: Medicine capsule — everything wrapped inside.

✅ 2. Abstraction
Definition:
Hiding complex details and showing only the essentials to the user.

Goal: Show what an object does, hide how it does.

Example:

class Car {
  startEngine() { // abstraction: user just calls this
    this._injectFuel();
    this._ignite();
    console.log("Engine started");
  }
  _injectFuel() {}  // internal
  _ignite() {}       // internal
}
🧠 Think of it like: You drive a car without knowing how the engine works.

✅ 3. Polymorphism:Polymorphism is the ability to process objects differently on the basis of their class and data types.

Definition:
Same function name behaves differently for different classes.

Goal: Reuse function names across multiple classes.

Example:
*/
class Animal {
  sound() { console.log("Animal makes sound"); }
}
class Dog extends Animal {
  sound() { console.log("Dog barks"); }
}
const a = new Animal();
const d = new Dog();
a.sound(); // Animal makes sound
d.sound(); // Dog barks

/*

🧠 Think of it like: Same remote button — controls TV, AC, Fan differently.

⚡ Final One-Liner Recap:
Pillar	Purpose	Keyword
Encapsulation	Protect and bundle data	class
Abstraction	Show only required details	methods
Polymorphism	One method, many forms	override
inheritance : 

*/
/***
 Constructor
  A constructor is a special method of a class or structure in object-oriented programming 
that initializes a newly created object of that type. 
Whenever an object is created, the constructor is called automatically.
When a class  is created, its constructor is called. 
Constructors have the same name as the class or struct, 
and they usually initialize the data members of the new object. 
--------------------------------------------------------------------------------

8) Sub Class Vs Super Class:
SubClass:Subclass is known as derived class, child class.
  A subclass can use the properties and methods of the Superclass.
  When implementing inheritance, the class that inherits the properties and 
  methods from the Superclass is the Subclass.

Super Class:Superclass is known as base class, parent class.
Superclass is also a part of Inheritance. The superclass is an entity, which allows subclasses or child classes to inherit from itself.
*/
function afg() {

}
console.log(typeof afg, "aaaa")//function 
console.log(typeof NaN, "aa")//number 

// What will be the result of the following code ?
// let x = 10;
// let y = (x++, x + 1, x * 2);
// console.log(y);//22

// Explanation:

// The comma operator ( , ) evaluates all expressions but returns the value of the last one.
// x++ increments x to 11, but the result of this expression is the original 10.
// x + 1 becomes 11 + 1 = 12, and the final expression x * 2 evaluates to 11 * 2 = 22, which is assigned to y.
/**
 console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');//A D C B

Explanation:

The synchronous code runs first, logging 'A' and 'D'.
Promise callbacks (microtasks) are executed before setTimeout (macrotasks). So 'C' is logged before 'B'.


***************************************************************

***************************************************************

What will be the output of this recursive function?
function foo(num) {
  if (num === 0) return 1;
  return num + foo(num - 1);
}
console.log(foo(3)); //3
Explanation:

The function works recursively:
foo(3) → 3 + foo(2)
foo(2) → 2 + foo(1)
foo(1) → 1 + foo(0)
foo(0) → 1
So, the total is 3 + 2 + 1 + 1 = 7.

🔥 Difference between Prototypal Inheritance and Classical Inheritance in JavaScript
✅ 1. Classical Inheritance

Common in languages like Java, C++.
Uses classes and objects.
You create a class (blueprint), then make objects (instances) from it.
Inheritance happens by extending classes.


✅ 2. Prototypal Inheritance (JavaScript)
JavaScript’s way of inheritance.

Uses objects inheriting from other objects directly.

Each object has a hidden [[Prototype]] reference (accessed via __proto__ or Object.getPrototypeOf()).

💡 Example:
*/
let animal = {
  eat() {
    console.log("Eating...");
  }
};

let dog = Object.create(animal);
dog.bark = function () {
  console.log("Barking...");
};

dog.eat(); // Eating...
dog.bark(); // Barking...
/*
✅ What are JavaScript Design Patterns?
Common solutions to problems that come up while building apps. They make code cleaner, reusable, and stable.

🔹 Three main types:

Creational Patterns:
How to create objects efficiently.
(e.g., Factory, Singleton)

Structural Patterns:
How to organise and combine objects to build bigger systems.
(e.g., Adapter, Decorator)

Behavioral Patterns:
How objects communicate and interact with each other.
(e.g., Observer, Strategy)


✅ Difference between Async/Await and Generators
Generators pause and resume code execution.
Async/Await waits for promises to resolve to write asynchronous code like synchronous code.
 */

// What is Object.seal and Object.freeze in JavaScript?
// Sealed prevents adding/deleting properties.
// Frozen prevents modifications.

// Feature                      	                       Object.seal()  	Object.freeze()
// Prevents new properties?	                                 ✅ Yes      	✅ Yes
// Prevents deletion?	                                       ✅ Yes	      ✅ Yes
// Prevents modification of existing properties?            	❌ No	      ✅ Yes
// const obj = { name: "Alice" };
// Object.seal(obj);
// obj.name = "Bob"; // Allowed
// delete obj.name; // Not allowed

// Object.freeze(obj);
// obj.name = "Charlie"; // Not allowed


/**
 🔹 Lexical Scoping (Used in JavaScript)
🔧 Scope depends on where the function is written in the code.

It remembers variables from where it was defined, not from where it's called.
let a = 10;

function outer() {
  let a = 20;
  function inner() {
    console.log(a);
  }
  return inner;
}

let fn = outer();
fn(); // Output: 20 (It uses 'a' from where inner() was defined)
*/

/*
------------------------------------------------------------------------------------
What is Negative Infinity?
Negative Infinity means a value that is smaller than any other number.

In JavaScript, it’s written as:

-Infinity

✅ Key Points:
It is a special value in JavaScript.

Nothing is less than -Infinity.

It often comes from dividing a negative number by zero:
console.log(-1 / 0); // -Infinity

console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(-9999999999 < -Infinity);  // false
🎯 Simple Meaning:
-Infinity means "super, super small" — smaller than any number you can think of.

 */


let t13
/**
-----------------------------------------------------------------------------------------------------------------
What is an Iterator?
An iterator is an object that allows you to iterate (loop) over a collection of data.
-----------------------------------------------------------------------------------------------------------------

48. What is variable typing?
Variable typing assigns a number to a variable and then assigns a string to the same variable. An example is as follows:
i= 8;
i="john";

-------------------------------------------------------------------------------------------------------------------
 Which keywords are used to handle exceptions?
Try… Catch—finally is used to handle exceptions in the JavaScript
Try{
    Code
}
Catch(exp){
    Code to throw an exception.
}
Finally{
    Code runs either it finishes successfully or after catch
}

**********************************************************

**********************************************************

29. What is the function of the delete operator?
The delete keyword is used to delete the property as well as its value.
Example
var student= {age:20, batch:"ABC"};
Delete student. age;


...................................................................................................
How to read and write a file using JavaScript?
we can use the File System API.

........................................................

Does JavaScript support automatic type conversion?
Yes, JavaScript does support automatic type conversion. It is the common way of type conversion used by JavaScript developers.

.......................................................................
What is a first order function
First-order function is a function that doesn’t accept another function as an argument and
doesn’t return a function as its return value.
const firstOrder = () => console.log ('I am a first order function!');
.......................................................................
.......................................................................

*/
