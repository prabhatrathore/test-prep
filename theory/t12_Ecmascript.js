/** 
1. EcmaScript (ES) Overview
ECMAScript is the standard for JavaScript,defined by Ecma International to ensure JavaScript works the same way across different browsers and platforms.

EcmaScript provides rules for JavaScript, ensuring code runs the same way everywhere.

2. ES1 (1997)
 The first EcmaScript version, released in 1997.
 “First Ecmascript: ES1 → 1997.”

Features:
Basic JavaScript functionality: variables, functions, loops, conditionals, and objects.
Core syntax for scripting in browsers (e.g., alert(), DOM manipulation).
----------------------------------------------------------------------------------------------

ES1 formalized JavaScript’s core, like declaring variables (var) and writing functions.
Example: 
var x = 10; 
function sayHello() {
 alert("Hello!");
  }.


3. ES5 (2009)
 The fifth EcmaScript version, released in 2009, with significant new features.

“ES5 → 2009 (lots of new features).”
* Key Features:
1:) Strict Mode:
2:) JSON Support:----------------------
3:) Array Methods:----------------------------------
            Introduced methods like forEach, map, filter, reduce, every, some.

4:) Object Property Enhancements:
    Added Object.create(), Object.defineProperty(), and getter/setter syntax.--------------

---------------------------------------------------------------------------------------
 Strict Mode:
Enables stricter parsing and error handling.
Activated with "use strict"; at the start of a script or function.

Example:
 "use strict";
  x = 10; → Throws error (undeclared variable).

Explanation: Prevents common mistakes (e.g., using undeclared variables), improving code reliability.

JSON Support:----------------------
Added JSON.parse() and JSON.stringify() for working with JSON data.
Example: let obj = JSON.parse('{"name": "Alex"}');.

Explanation: Simplifies data exchange between client and server, crucial for APIs.
Array Methods:----------------------------------
Introduced methods like forEach, map, filter, reduce, every, some.

Example: [1, 2, 3].map(x => x * 2); → Returns [2, 4, 6].

Explanation: Makes array manipulation easier and more functional, reducing manual loops.

Object Property Enhancements:

Added Object.create(), Object.defineProperty(), and getter/setter syntax.--------------

Example: Object.defineProperty(obj, "name", { value: "Alex", writable: false });.
Explanation: Improves object manipulation and encapsulation, useful for frameworks.
Significance:
ES5 made JavaScript more robust for large-scale applications.
Widely supported, still used in legacy projects.

*********************************************************************************************
--------------------------------------------------------------------------------------------

4. ES6 (2015, also called ES2015 or Modern JavaScript)

 The sixth EcmaScript version, released in 2015, considered the biggest update to JavaScript.

 “ES6 (ES2015) → 2015 (Biggest update for JS). ES6 is also known as Modern Javascript.”

Let and Const:********************************************
Arrow Functions:************************************************
Template Literals:***********************
Destructuring:***********************************************
Default Parameters:----------------------------------------------
classes**************************************
Spread and Rest Operators:*******************************
Modules: import and export for modular code.***************

---------------------------------------------------------------------------------

let: Block-scoped variable (unlike var, which is function-scoped).
const: Block-scoped, cannot be reassigned (but mutable for objects/arrays).
Example:
 let x = 10;
  const y = 20;.
Explanation: Improves variable scoping, reducing bugs from var’s hoisting.

Arrow Functions:************************************************
Shorter syntax for functions, with lexical this binding.
Example: const add = (a, b) => a + b;.

Explanation: Simplifies function writing and fixes this issues in callbacks.
-------------------------------------------------------------------------------------------------
Template Literals:***********************

String interpolation with backticks (`) and ${}.

Example:
 let name = "Alex";
  console.log(Hello, ${name}!);.

Explanation: Makes string formatting easier and more readable.
--------------------------------------------------------------------------------------------------
Destructuring:***********************************************

Extracts values from arrays/objects into variables.
Example: let {name, age} = {name: "Alex", age: 21};.
Explanation: Simplifies data extraction, common in modern frameworks.
--------------------------------------------------------------------------------------------------

Default Parameters:----------------------------------------------
Functions can have default values for parameters.
Example:
 function greet(name = "Guest") {
  return Hi, ${name}; 
  }.

Explanation: Reduces need for manual default checks.

Spread and Rest Operators:
Spread (...): Expands arrays/objects.
Rest (...): Collects arguments into an array.
Example: let arr = [1, 2, ...[3, 4]]; // [1, 2, 3, 4].
Explanation: Simplifies array/object manipulation and function arguments.
-------------------------------------------------------------------------------------------

Classes:

Syntactic sugar for constructor functions.
Example:
 class Person {
  constructor(name) {
   this.name = name;
    } 
   }.

Explanation: Makes object-oriented programming more intuitive.
Modules:
import and export for modular code.

Example:
 export const add = (a, b) => a + b;

 import { add } from './math.js';.
  
Explanation: Enables code organization, crucial for large projects.
Promises:
Handles asynchronous operations.

Example: new Promise((resolve) => 
    setTimeout(() => 
        resolve("Done"), 1000)
);.

Explanation: Simplifies async code compared to callbacks.
Map and Set 

Map: Key-value pairs with any key type.
Set: Collection of unique values.
Example: let set = new Set([1, 1, 2]); // Set {1, 2}.
Explanation: Provides advanced data structures for efficient storage.

Significance:
ES6 transformed JavaScript into a modern, versatile language.
Features like arrow functions, destructuring, and modules are standard in frameworks like React and Node.js.
Known as “Modern JavaScript” due to its widespread adoption.

5. Annual Releases (Post-2015)
 Starting in 2015, the TC39 committee decided to release new JavaScript features every year.

 “Ecma have a technical community known as TC39 had decided that for 2015. We release java script with new features every year (Annual release).”
Key Features (Selected Post-ES6 Features):
-------------------------------------------------------------------------------------------

ES2016 (ES7):*--------------------------------------------
Array.prototype.includes:
Checks if an array contains a value.
Example: [1, 2, 3].includes(2); // true.

Explanation: Simpler than indexOf for existence checks.
Exponentiation Operator (**):

Example: 2 ** 3; // 8.
Explanation: Cleaner syntax for power calculations.
***********************************************************************************************

ES2017 (ES8):
Async/Await:-------------------------------
Simplifies working with Promises.

Example: async function fetchData() { let data = await fetch(url); return data; }.
Explanation: Makes async code look synchronous, improving readability.

Object.entries() and Object.values():---------------------------

Example: Object.entries({a: 1, b: 2}); // [['a', 1], ['b', 2]].
Explanation: Easier object iteration.
---------------------------------------------------------------------------------------------------------

ES2018 (ES9):-----------------------------------
Rest/Spread for Objects:

Example: let {x, ...rest} = {x: 1, y: 2, z: 3}; // rest = {y: 2, z: 3}.
Explanation: Extends spread/rest to objects, useful for cloning or filtering.

ES2019 (ES10):
Array.flat():
Flattens nested arrays.
Example: [1, [2, [3]]].flat(); // [1, 2, [3]].
Explanation: Simplifies array processing.
*********************************************************************************

ES2020 (ES11):
BigInt 
Optional Chaining (?.):
------------------------------------------------
BigInt 
Handles large integers.
Example: let num = 9816543219865252772n;.
Explanation: Solves precision issues for large numbers.
-----------------------------------------------------------------------
Optional Chaining (?.):
Safely accesses nested properties.
Example: let name = user?.profile?.name;.
Explanation: Prevents errors when properties are undefined.

***********************************************************************
ES2021 (ES12) and Beyond:
Logical Assignment Operators (||=, &&=, ??=):
Example: x ||= 10; (assigns 10 if x is falsy).
Explanation: Shortens conditional assignments.

Private Class Fields (ES2022):

Example: class MyClass {
 #privateField = 10;
  }.

Explanation: Enhances encapsulation in classes.
Significance:
Annual releases ensure JavaScript evolves incrementally, adding features like async/await and BigInt without breaking existing code
.
Developers can adopt new features as browsers support them.


Ternary Operator :
Pre-ES6 feature, but popularized in modern JavaScript.
Example: let result = age >= 18 ? "Adult" : "Minor";.
Explanation: Shortens if-else statements, common in ES6+ codebases.


String Methods :

Methods like trim(), slice(), indexOf(), etc., are pre-ES6 but enhanced in ES5/ES6 with better performance.
Example: " hello ".trim(); // "hello".
Explanation: Essential for text manipulation, widely used in modern apps.

--------------------------------------------------------------------------------------
Prototypes 
Core JavaScript feature, enhanced in ES5/ES6 with Object.create() and classes.
Example: Person.prototype.greet = function() {
                console.log("Hi");
                 };.

Explanation: Enables inheritance, foundational for ES6 classes.

Pre-ES6, but critical in ES6+ for functional programming.
Example: say.call(user, "Hello");.

Explanation: Controls this, useful in frameworks like React.

Explanation of Features in Simple Terms

ES1: Gave JavaScript its basic building blocks (variables, functions), like the foundation of a house.
ES5: Added tools like strict mode and JSON to make JavaScript safer and better for web apps, like adding walls and doors.
ES6: Modernized JavaScript with let, arrow functions, and modules, making it easier to write clean, scalable code, like adding modern furniture and tech.

Other Features: Tools like ternary operators and string methods are like handy gadgets, making coding faster and easier.


Why These Features Matter:
ES5: Still relevant for legacy code and understanding strict mode or JSON in APIs.

ES6: Core for modern frameworks (React, Node.js) due to modules, classes, and arrow functions.
Post-ES6: Features like async/await and optional chaining are expected in 2025 interviews, especially for full-stack roles.


Common Interview Questions:

Explain arrow functions and their benefits. (ES6)
Answer: Shorter syntax, lexical this, great for callbacks.

How does async/await improve Promises? (ES2017)
Answer: Makes async code readable, avoids callback hell.

What is optional chaining, and why is it useful? (ES2020)
Answer: Safely accesses nested properties, prevents errors.


 */