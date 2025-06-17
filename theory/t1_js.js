
let WHat_is_Javascript

/**
1) WHat is Javascript:
JavaScript is a scripting programming language used client side that allows developers to make web pages interactive.***

JavaScript is an object-based scripting language, meaning it uses objects to represent data and functionality,
JavaScript is also cross-platform, which means it can be run on any device that has a web browser,
JavaScript follow synchronous pattern
it is single threaded.

Dynamic Typing *************
JavaScript is dynamically typed, which means:
we don’t need to mention the type of a variable.
A variable can hold any type of value, and it can change later.

let x = 10;           // x is a number
x = "Hello";         // now x is a string
x = [1, 2, 3];      // now x is an array
x = { name: "JS" } // now x is an object


 A scripting language is a kind of programming language that is used to automate the execution of operations in a runtime environment. 

  ------------------------------------------------------------------------------------------------------------
  Q: Why JavaScript is known as a lightweight programming language ?
  JavaScript is considered a lightweight language due to its low CPU usage, minimalist syntax, and ease of implementation.
  
  JavaScript is often described as lightweight because it was originally designed to run in browsers with minimal resource demands. It executes client-side tasks (like DOM manipulation) without requiring heavy computation
  
  ------------------------------------------------------------------------------------------------------------

Q: Is JavaScript compiled or interpreted?
A: JavaScript is primarily interpreted, but modern engines use Just-In-Time (JIT) compilation, so it is technically both. It starts by interpreting and then compiles frequently used code to machine code at runtime for better performance.

🚀 Modern JS Engines (Compiled Just-in-Time - JIT)

Modern engines use Just-in-Time (JIT) compilation to make JavaScript run faster.

Instead of just interpreting code line-by-line (slow), JIT compiles JavaScript into machine code right before execution.

It combines:
Interpreter: Quickly runs code initially.
Compiler: Converts frequently used code into optimized machine code for speed.
 
--------------------------------------------------------------------------------------------

*/
let ADVANTAGES_OF_USING_JAVASCRIPT = {

}

/*
-- Light Weight Scripting Language******
means it is made for data handling at the browser (only) & due to its low CPU usage, minimalist syntax, and ease of implementation.

-- Server interaction is less
--  Feedback to the visitors is immediate
-- Interactivity is high
-- Interfaces are rich
Speed. Client-side JavaScript is very fast because it can be run immediately within the client-side browser. ...
Simplicity. JavaScript is relatively simple to learn and implement.

   The biggest advantage of JavaScript having ability to support all modern browsers and produce an equivalent result.

-> One of the main uses of JavaScript is to create dynamic and interactive websites. JavaScript can be used to manipulate the content and styling of a web page, add interactivity through event handling, and communicate with web servers to update content without requiring a full page refresh.

---------------------------------------------------------------------------------------------------------
*/

let DISADVANTAGES_OF_JS={

}
/*
3)
No support for multithreading
No support for multiprocessing
Reading and writing of files is not allowed

---------------------------------------------------------------------------------------------------------
 A programming language is a type of computer language that has of a set of instructions for communicating with computers.

 the programming languages that are compiled first before running, scripting languages do not compile the file and execute the file without being compiled.
 
 
 ******************************************************************************
 */


// What is an Interpreted Programming Language?
/*
******************************************************************************
Originally, JavaScript was interpreted, meaning the browser read and executed the code line-by-line at runtime.


Question: “Is JavaScript a programming language or a scripting language?”
Answer: JavaScript is both. It began as a scripting language for web browsers, automating tasks like DOM manipulation. But with modern features (e.g., ES6 classes, modules), it’s a full programming language we used everywhere from front-end to back-end development (e.g., with Node.js).
 
-------------------------------------------------------------------------

JavaScript code is a single thread, which means that code can only do one task at a time

❓ Why is JavaScript single-threaded?
JavaScript was designed to be single-threaded because of its main job in the browser: interact with the DOM (the web page).


The Event Loop and Asynchronous Behavior:
JavaScript uses  single-threaded, non-blocking model with an event loop to handle concurrency without multiple threads.
The event loop manages the execution of code, handling tasks like DOM events, timers (setTimeout), and asynchronous operations (e.g., fetching data with fetch).

How it works:
JavaScript has a call stack (where code executes), a task queue (for pending tasks), and a web API (for async operations like timers or HTTP requests).

When an async operation (e.g., setTimeout) is encountered, it’s sent away (offloaded)  to the web API. Once the operation is ready, its callback is placed in the task queue.
The event loop continuously checks the call stack. If the stack is empty, it takes the next task from the queue and pushes it to the stack for execution.


console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");

Output: Start, End, Timeout

-----------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------

JavaScript is a programming language .explain 
Yes, JavaScript is a programming language that is used primarily for web development, but can also be used for other purposes such as server-side programming, desktop applications, and mobile app development. 

**********************************************************************************************

*/
let FUNCTION_SCOPE_AND_GLOBAL_SCOPE
// Function-Scoped or Globally Scoped

/*

  Function-Scoped
A variable declared with var is function-scoped, meaning it’s only accessible within the function where it’s defined in. If it’s not inside a function, it becomes globally scoped.

**********************************************************************************************

Globally Scoped
 A variable declared with var outside any function (or without var in non-strict mode) is globally scoped, meaning it’s accessible everywhere in our program, including inside functions, loops, or any other code.

Example with our code:

var ret = 2; // Globally scoped because it’s not inside a function
console.log(ret ** 2, 'line 75******2@@***'); // ret is accessible

function test() {
    console.log(ret); // ret is still accessible inside this function
}
test(); // Outputs: 2

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

/**
 
========================================================
In simple terms, "interactivity" refers to how much a user can interact with a web page or application. JavaScript is a programming language that is commonly used in web development to add interactivity to websites.

With JavaScript, we can create interactive features such as drop-down menus, pop-up windows, sliders, animations, and more. These features can respond to user actions such as clicks, mouse movements, or keyboard inputs, allowing users to interact with the website and its content in meaningful ways.

For example, with JavaScript, a user can click a button to show or hide content on a web page, or drag and drop items to rearrange them. JavaScript can also be used to validate form inputs, perform calculations, and even create interactive games.


 */

let Undefined_AND_NULL

/**
 What is the difference between null & undefined ?
 Undefined means a variable has been declared but has not yet been assigned a value. On the other hand,
 null is an assignment value. It can be assigned to a variable as a representation of no value. Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object
 
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

// Types of functions IN JS:

/**
 Types of functions:
 There are two types of functions: named functions and anonymous functions.

A named function is a function that has a name. It can be defined using the function keyword followed by the function name, a set of parentheses, and a set of curly braces that enclose the function's body.--
Here's an example of a named function:

function addNumbers(a, b) {
  return a + b;
}

An anonymous function is a function that does not have a name. It can be defined using the function keyword, followed by a set of parentheses and a set of curly braces that enclose the function's body, without any function name. Anonymous functions are often used as callback functions, as function arguments or in immediately invoked function expressions (IIFE).

Here's an example of an anonymous function:
let sum = function(a, b) {
  return a + b;
} 

Note that in the example above, the function is assigned to a variable (sum), so it can be invoked later by calling that variable as a function. Anonymous functions can also be immediately invoked by enclosing the function definition in parentheses followed by an additional set of parentheses:

(function() {
  console.log("This is an immediately invoked anonymous function.");
})();

in this case, the function is defined and invoked immediately without being assigned to a variable

An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.

 */



// feature of js
/*

🌟 Core Features of JavaScript
✅ Lightweight and Interpreted
JavaScript is a lightweight language and runs directly in the browser. No need to compile manually.

✅ Dynamic Typing
You don’t need to declare variable types (like int, string, etc.).
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
It runs on browsers, mobile, desktop (with Electron), and servers (Node.js).

✅ Rich Standard Library.
Lots of built-in methods for arrays, strings, objects, dates, math, etc.

✅ Browser Integration.
JavaScript can directly manipulate the DOM, handle events, interact with browser APIs (like localStorage, fetch, etc.)

🧠 Extra: Modern JavaScript (ES6+ Features)
let, const for block-scoped variables

Arrow functions () => {}

Template literals `Hello ${name}`

Destructuring { name } = obj

Modules (import, export)

Classes

Promises & async/await
*/

// string method 
var str = '   hello-world   '
// str.trim()
var str2 = str.trim()
// console.log(charAt(str))
console.log(str.length) //17
console.log(str2.length) //// 11 
console.log('====111====')
let temp = str.slice(0, 4)
console.log(temp, "@@@ slice first ") // h 
console.log(typeof temp, "@@@ slice typeof check ") // string
console.log(str.slice(0, 4), "a slice first ") // h 
console.log(typeof str.slice(0, 4), "a slice typeof check ") // string 
console.log(str2.slice(0, 4), "a slice seclond ")  // hell 
//////////////////////////////////////////////////////////////////////////////////////////////

console.log(str.charAt(4))  //e 
console.log(str2.charAt(4))  //o 
console.log('=================================')
console.log(str.indexOf('h'))  //3
console.log(str.lastIndexOf('h')) //3
// ========================================================================================================================

// ========================================================================================================================
console.log('================================================================================================== =======')
let tempAr = [3, 4, 5, 6, 6, 2, 1]
console.log(tempAr?.slice(0, 2), " EEEEEEEEE__ ===== ")

//tostring()
//toUpperCase()
//toLowerCase()

let SUBSTRING;

/**
The substring() method is used to extract a part of a string, between two specified indexes (positions).

 The substring() method extracts characters from start to end (exclusive).
let str = "JavaScript";
let result = str.substring(0, 4);
console.log(result); // "Java"

 The substring() method does not change the original string.
 
 If startIndex > endIndex, JavaScript automatically swaps them.
console.log("Hello".substring(3, 1)); // "el"

 =======================================================================================================
 ❗Difference from slice():
Both are similar, but:

substring() does not support negative indexes

slice() does support negative values
 ======================================================================================================= 
 🔍 What is slice() in JavaScript?
 
 The slice() method is used to extract a part of a string or array and returns it as a new value — without changing the original.

 let str = "JavaScript";

console.log(str.slice(-6));       // "Script"
console.log(str.slice(-6, -3));   // "Scr"
-----------------------------------------------------

let arr = [10, 20, 30, 40, 50];

console.log(arr.slice(-3));      // [30, 40, 50]
console.log(arr.slice(-4, -1));  // [20, 30, 40]

 =======================================================================================================
===================================================

 */

/**
 * array method:
 * array length: it return the number of elements in an array.
 * array push: it add element to the end of the array. 
 * array pop: it remove the last element from an array and return remove element.
 * array shift. 
 * array unshift.
 * array sort .
 * array reverse:
 * 
 */
var ae = "eeee"
ae = 'helo'// reassign krra h ye 
console.log(ae) ///helo

obj = {
  firstName: 3,
  lastname: 4, age: 5, address: 6
}
for (let value in obj) {
  console.log(value)
}
//
// firstName
// lastname
// age
// address
/**
 * Object.entries takes an object and return the key value pairs 
 */
console.log(Object.entries(obj), "Object.entries(obj)")
/**
 * Variables declared with let and const are also hoisted but,
 *  unlike var , are not initialized with a default value. 
 */

// console.log(ab)
const ab = 9
{

}

function abc(a) {
  function sd(ad) {
    return `opo ${a} and ${ad}`
    // console.log('ppeor')
  }
  return sd
}
let rr = abc("hello")
console.log(rr('world'), "lp");   ///opo hello and world lp
// rr()
//===========================================================
let ee = ['rty', 'ppp', 'ertyu'];
function sol(string) {
  return string.length === 3
}
let res = ee.find(sol)
console.log(res) //rty

/**
 

 */

/**
 "debugger” in JavaScript?
 
 debugger is helpful for finding and fixing errors in JavaScript code.

 */

/**
🔍 What is NaN in JavaScript?
NaN stands for "Not-a-Number".

It’s a special value in JavaScript that means:

“This value is not a valid number.”

------------------------------------------------------------

typeof of NaN will return a Number.

To check if a value is NaN, we use the isNaN() function,

Note- isNaN() function converts the given value to a Number type, and then equates to NaN.

isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true 

 */

/**
 
Strict mode in JavaScript is a feature introduced in ECMAScript 5 (ES5) to enforce (implement)
 stricter parsing and error handling in our code,

characteristics
Duplicate arguments are not allowed by developers:

In 'non-strict' mode, JavaScript allows functions to have duplicate parameter names, which can lead to confusion or errors, as the last parameter with the same name overrides earlier ones. For example:
javascript


function example(a, a) {
  console.log(a); // Only the last 'a' is used
}
--------------------------------------------------------------------------------------------------
"use strict";
function example(a, a) { // SyntaxError: Duplicate parameter name not allowed in this context
  console.log(a);
}

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
Closures are functions that have access to variables from an outer function scope even after the outer function has finished executing. They “remember” the environment in which they were created.

Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

-----------------------------------------------------------------------------------------------------
*/

let different_type_of_errors_in_js

/*
What Are the Different Types of Errors in JavaScript?
JavaScript can throw a variety of errors, including:

Syntax errors: Syntax errors occur when the JavaScript code is not syntactically correct.
Runtime errors: Runtime errors occur when the JavaScript code is executed and there is a problem.
Logical errors: Logical errors occur when the JavaScript code does not do what it is supposed to do.


*/

let memoization;

/*
Q:) what is memoization?
Memoization in JavaScript is an optimization technique used to improve the performance of functions by caching their results based on the input parameters. When a function is called with the same inputs multiple times, memoization allows the function to return the cached result instead of recomputing it, saving time and computational resources.

----------------------------------------------------------------------------------------------------

Recursion is a technique where a function call itself until it arrive at a result 

----------------------------------------------------------------------------------------------------

Arrow functions are a concise shorter way for writing JavaScript functions.

---------------------------------------------------------------------------------------------------------
A generator function is a special type of function that can be paused and resumed during its execution.

Using with for...of
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (let num of range(1, 5)) {
  console.log(num); // Output: 1, 2, 3, 4, 5
}
  */

let WeakMap 

/*
---------------------------------------------------------------------------------------------------------
WeakMap in JavaScript is a collection of key/value pairs, where keys must be objects  and values can be any data type.

A WeakMap is a special kind of Map in JavaScript 

let weakMap = new WeakMap();

let obj = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(obj, "secret value");

console.log(weakMap.get(obj)); // "secret value"

Key Features of WeakMap
Keys Must Be Objects: 
Only objects (or symbols in newer JS versions) can be keys (e.g., {} or new Object()). Primitives like strings or numbers are not allowed.

Weak References: If a key object is no longer referenced elsewhere in the code, it can be garbage-collected, and its entry is automatically removed from the WeakMap.

Non-Iterable: You can’t loop through a WeakMap (no .keys(), .values(), or .entries()), ensuring privacy and preventing accidental leaks.

Limited Methods: Supports only .set(key, value), .get(key), .has(key), and .delete(key).


Benefits of WeakMap
Memory Efficiency:
Automatically cleans up entries when keys are no longer referenced, preventing memory leaks. Useful for managing large datasets (e.g., user sessions in Vuezen.io’s backend).

Private Data Storage:
Since WeakMap isn’t iterable, it’s great for storing private data tied to objects without exposing it. For example, storing user metadata without allowing external access.

No Key Leaks:
Unlike Map, where keys are strongly referenced and can cause memory leaks if not manually removed, WeakMap handles cleanup automatically.

Use in Libraries/Frameworks:
Ideal for associating metadata with DOM elements, objects, or API responses without affecting their lifecycle, common in frameworks like Vue.js or Node.js apps.


Limitations
Non-Iterable: Can’t loop through entries, so not suitable for cases where you need to access all keys/values.
Object Keys Only: Limits flexibility compared to Map, which allows any key type.
Debugging: Harder to inspect since you can’t see all entries.


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
---------------------------------------------------------------------------------------------------------

🔍 What is WeakSet?
A WeakSet is a special type of Set in JavaScript where:
 
It only stores objects (no primitive values like numbers or strings).

The objects in a WeakSet are weakly referenced, meaning:

If no other reference to an object exists, it can be garbage collected.

let weakSet = new WeakSet();

let user = { name: "Alice" };
let weakSet = new WeakSet();

weakSet.add(user);
console.log(weakSet.has(user)); // true

user = null;
// Now the object may be garbage collected

❌ What You Can’t Do with WeakSet:

weakSet.forEach(...);  // ❌ Not allowed
console.log(weakSet.size);  // ❌ Not available

🧠 Summary:
WeakSet is like a Set, but:

Only stores objects

Stored objects are weakly held

It’s not iterable and doesn’t expose its content
*/

/*
---------------------------------------------------------------------------------------------------------
What Is the Difference Between Function Declarations and Function Expressions?
Function declarations are defined using the function keyword, while function expressions are defined by assigning a function to a variable. Function declarations are hoisted, while function expressions are not.

//function declaration
function multiple (a*b){
return a*b
}

//function expression 
const ad =function (a,b){
return a+b}


console.log(3,3)//9
console.log(ad(2,3)) //5

---------------------------------------------------------------------------------------------------------
Both localStorage and sessionStorage are web storage objects in JavaScript, but they have different scopes and lifetimes.

localStorage save data even after the browser window is closed and is accessible across different browser tabs/windows of the same origin.

session Storage stores data for a single browser session and is accessible only within the same tab or window open.
Once the tab or window is closed, the data is cleared

---------------------------------------------------------------------------------------------------------
*/

/**
 * The reduce() function is used to reduce an array to a single value by applying a function to each element and accumulating the result.

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
console.log(t1, "rrrrr  ")

/**
 What Is the Difference Between an Array and an Object in JavaScript?
 An array is a data structure that can store a collection of values. 
 An object is a data structure that can store a collection of properties.
 
 Arrays are indexed by numbers.
 Arrays can only store primitive data types and objects.
 
 Objects are indexed by strings. 
  Objects can store primitive data types, objects and arrays.
 
 ---------------------------------------------------------------------------------------------------------
 Browser Object Model is known as BOM.Browser Object Model allows users to interact with the browser. 
 
 ---------------------------------------------------------------------------------------------------------

Prototype Design Pattern in JavaScript is a way to create new objects by copying an existing object, called a prototype, instead of starting from scratch. This pattern is useful when we want to create objects that are similar to an existing object, with some or all of its properties and values already set.

An HTTP status 204 No Content indicates that the server has successfully processed the request, but there's no content to return in the response body.

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

console.log(warrior); // { name: "Warrior", health: 100, attack: 10 }
console.log(mage); // { name: "Mage", health: 100, attack: 10 }
warrior.greet(); // Hi, I'm Warrior!
mage.greet(); // Hi, I'm Mage!

///
// 
/**
 "Keyword",          "const",  "let",  "var"
"Global Scope",       "No",   "No",   "Yes"
"Function Scope",     "Yes",   "Yes",  "Yes"
"Block Scope",        "Yes",   "Yes",  "No"
"Can Be Reassigned",   "No",  "Yes",  "Yes" 

 */

/**
 Introduced in the ES6 version, classes are nothing but syntactic sugars for constructor functions
 */
var x = 23;

(function () {
  var x = 43;
  (function random() {
    x++;
    console.log(x);
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
func1();
// 2 line  BB
// 12 lin dd

/**
 * Is JavaScript a pass-by-reference or pass-by-value language?
 JavaScript: Pass-by-Value (Always)

 In JavaScript, when we pass a variable to a function, the function gets a copy of the value. However, the tricky part comes when dealing with objects (including arrays and functions), because the "value" of an object is actually a reference (a memory address) to where the object’s data is stored.

--------------------------------------------------------------------------

Why It Feels Like Pass-by-Reference with Objects
When we pass an object to a function, the function gets a copy of the reference (the memory address), not the object itself.

If we modify the object’s properties using that reference, the changes affect the original object because both the original reference and the copied reference point to the same object in memory.

But if we try to replace the entire object (by assigning a new object to the parameter), the original object doesn’t change because you’re only modifying the copied reference, not the original one.

Case 1: Modifying an Object’s Properties (Looks Like Pass-by-Reference)
function modifyObject(obj) {
  obj.name = "Alice"; // Modifying the object's property
}

const myObject = { name: "Bob" };
modifyObject(myObject);
console.log(myObject.name); // Outputs: "Alice"


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

console.log(Boolean([]), "WWWWWWWWWWW")  /// true

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
  console.log(x + y + z);
}
sum(); // 4
// In the above program,
// The default value of x is 1
// The default value of y is set to x parameter
// The default value of z is the sum of x and y

/**
 
If you reference the parameter that has not been initialized yet, you will get an error. For example,

function sum( x = y, y = 1 ) {
    console.log( x + y);
}
sum(); 
Ad
Output
ReferenceError: Cannot access 'y' before initialization

-----------------------------------------------------------------------------------------------------

Example 2:
 Passing Function Value as Default Value
// using a function in default value expression

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
In JavaScript, when you pass undefined to a default parameter function, the function takes the default value.
 For example,

function test(x = 1) {
  console.log(x);
}
// passing undefined
// takes default value 1
test(undefined); // 1

---------------------------------------------------------------------------------------
ternary operator

The ternary operator in JavaScript is a shorthand for an if-else statement, written as condition ? valueIfTrue_statement : valueIfFalse_statement,

now if condition is true then just after question mark ? statement is run  else after colon statement run.

-----------------------------------------------------------------------------------------

Template literals in JavaScript use backticks (`) instead of quotes to create strings, allowing us to easily embed variables and expressions inside them without concatenation.
With template literals, we can use both single and double quotes inside a string.
-----------------------------------------------------------------------------------------


What is Arguments Binding?

When you call a function in JavaScript, the values you pass (arguments) are "bound" to the function's parameters in the order they are defined. This binding determines what values the parameters will hold inside the function.

function example(a, b) {
    console.log(a, b);
}
example(5, 10); // a is bound to 5, b is bound to 10

-----------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------

*/






/**
 * Type coercion in JavaScript only coerces to the string, number, and Boolean primitive types. There's no way in JavaScript to coerce a value type to object or function .
Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number etc. when different types of operators are applied to the values.
String to Number Conversion
  var w = 10 - '5';//5
        var x = 10 * '5';//50
        var y = 10 / '5';// 2
        var z = 10 % '5';//0
Boolean to Number
var x = true + 2;//3  
        var y = false + 2;//2
console.log(true=="true")// default boolean (true) 1 deta hai
4. The Equality Operator
      var x = (10 == '10');//true
   var y = (true == 1);//true
     var z = (true == 'true');//false

Scope chain: Whenever our code tries to access a variable during the function call, it starts the searching from local variables. And if the variable is not found, it'll continue searching in its outer scope or parent functions' scope until it reaches the global scope and completes searching for the variable there

What is the difference between exec () and test () methods in javascript?
test () and exec () are RegExp expression methods used in javascript. 
We'll use exec () to search a string for a specific pattern, and if it finds it, it'll return the pattern directly; else, it'll return an 'empty' result.
We will use a test () to find a string for a specific pattern. It will return the Boolean value 'true' on finding the given text otherwise, it will return 'false'

-------------------------------------------------------------------------------

Currying in JavaScript is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. Instead of taking all arguments at once, a curried (curry) function returns a new function for each argument until all arguments are provided, then it computes the result

 */

// Regular function
function add(a, b, c) {
  return a + b + c;
}

// Curried version
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// Usage
console.log(curryAdd(1)(2)(3)); // Output: 6

// Partial application
const add1 = curryAdd(1); // Returns a function waiting for b
const add1and2 = add1(2); // Returns a function waiting for c
console.log(add1and2(3)); // Output: 6

/**
 Benefits of Currying in JavaScript
 Function Reusability:
Curried functions are modular, enabling you to reuse logic with different arguments.
Delayed Execution:
Arguments are evaluated only when all are provided, allowing flexible control over when the function runs. This is useful for lazy evaluation or deferred computations.


Negatives of Currying in JavaScript
Increased Complexity:
Currying can make code harder to read and understand, especially for developers unfamiliar with functional programming. Nested function calls like f(a)(b)(c) can feel unintuitive compared to f(a, b, c).

------------------------------------------------------------------------------------
Scope Chain: in js 
 if the javascript engine does not find the variable in local scope, it tries to check for the variable in the outer scope. If the variable does not exist in the outer scope, it tries to find the variable in the global scope.
------------------------------------------------------------------------------------
 
What is the use of a constructor function in javascript?
Constructor functions are used to create objects in javascript.

When do we use constructor functions?

If we want to create multiple objects having similar properties and methods, constructor functions are used.

Note- The name of a constructor function should always be written in Pascal Notation: every word should start with a capital letter.
Example:

function Person(name,age,gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
}


var person1 = new Person("Vivek", 76, "male");
console.log(person1);

var person2 = new Person("Courtney", 34, "female");
console.log(person2);
In the code above, we have created a constructor function named Person. Whenever we want to create a new object of the type Person, We need to create it using the new keyword:

var person3 = new Person("Lilly", 17, "female");
The above line of code will create a new object of the type Person. Constructor functions allow us to group similar objects.
------------------------------------------------------------------------------------------------

What is DOM?
DOM stands for Document Object Model.  DOM is a programming interface for HTML and XML documents.
When the browser tries to render an HTML document, it creates an object based on the HTML document called DOM. Using this DOM, we can manipulate or change various elements inside the HTML document.
------------------------------------------------------------------------------------------------

What do you mean by BOM?
Browser Object Model is known as BOM. It allows users to interact with the browser. A browser's initial object is a window. As a result, you may call all of the window's functions directly or by referencing the window. The document, history, screen, navigator, location, and other attributes are available in the window object

------------------------------------------------------------------------------------------------

 What are classes in javascript?
Introduced in the ES6 version, classes are nothing but syntactic sugars for constructor functions. They provide a new way of declaring constructor functions in javascript.  Below are the examples of how classes are declared and used:

// Before ES6 version, using constructor functions
function Student(name,rollNumber,grade,section){
  this.name = name;
  this.rollNumber = rollNumber;
  this.grade = grade;
  this.section = section;
}

// Way to add methods to a constructor function
Student.prototype.getDetails = function(){
  return 'Name: ${this.name}, Roll no: ${this.rollNumber}, Grade: ${this.grade}, Section:${this.section}';
}


let student1 = new Student("Vivek", 354, "6th", "A");
student1.getDetails();
// Returns Name: Vivek, Roll no:354, Grade: 6th, Section:A

// ES6 version classes
class Student{
  constructor(name,rollNumber,grade,section){
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
    this.section = section;
  }

  // Methods can be directly added inside the class
  getDetails(){
    return 'Name: ${this.name}, Roll no: ${this.rollNumber}, Grade:${this.grade}, Section:${this.section}';
  }
}

let student2 = new Student("Garry", 673, "7th", "C");
student2.getDetails();
// Returns Name: Garry, Roll no:673, Grade: 7th, Section:C
Key points to remember about classes:

Unlike functions, classes are not hoisted. A class cannot be used before it is declared.
A class can inherit properties and methods from other classes by using the extend keyword.
All the syntaxes inside the class must follow the strict mode(‘use strict’) of javascript. An error will be thrown if the strict mode rules are not followed

------------------------------------------------------------------------------------------------
What would be the output of the below JavaScript code?
var a = 10;

if (function abc(){})

{

a += typeof abc;

}

console.log(a);

The output of this JavaScript code will be 10undefined. The if condition statement in the code evaluates using eval. Hence, eval(function abc(){}) will return function abc(){}.

Inside the if statement, executing typeof ABC returns undefined because the if statement code executes at run time while the statement inside the if condition is being evaluated.

------------------------------------------------------------------------------------------------


. What will be the output of the following code?
var Bar = Function Foo()

{

return 11;

};

typeof Foo();

The output would be a reference error since a function definition can only have a single reference variable as its name.  
------------------------------------------------------------------------------------------------
What will be the output of the following code?
var Student = {

  college: "abc",

};

var stud1 = Object.create(Student);

delete stud1.college;

console.log(stud1.company);

This is essentially a simple example of object-oriented programming.  Therefore, the output will be ‘abc’ as we are accessing the property of the student object.

------------------------------------------------------------------------------------------------
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}  

🔍 Explanation:
🔁 for (var i = 0; i < 10; i++)
This is a basic for loop that runs 10 times, with i going from 0 to 9.

🕒 setTimeout(() => console.log(b[i]), 1000);
This schedules a delayed execution of the function (after 1000ms = 1 second).

Inside the callback, b[i] is printed.

⚠️ The Gotcha: var Scope
The key thing here is:

var is function-scoped, not block-scoped.

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