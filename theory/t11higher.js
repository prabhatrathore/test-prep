/**
 
In JavaScript, new Map() creates a Map object, which is a collection of key-value pairs where keys and values can be of any type (e.g., strings, numbers, objects, etc.). Unlike regular objects, Maps maintain the insertion order of elements and allow keys of any data type, not just strings or symbols.

we can add, retrieve, update, or remove key-value pairs, and it remembers the order in which we added them.

Purpose: Similar to objects but allows any value as keys.
Example:
const person = new Map();
person.set("Name", "Alex");
console.log(person); // Outputs: Map { "Name" => "Alex" }
-----------------------------------------------------------------------------

Methods:
get(key): Gets the value for a key.
set(key, value): Adds or updates a key-value pair.
delete(key): Removes a key-value pair.
clear(): Removes all key-value pairs.
has(key): Checks if a key exists (returns true or false).
keys(): Returns an iterator of all keys.

 */

// example 
let objItems = new Map()
objItems.set(2, 2)
objItems.set(12, 22)
// console.log(objItems,"objItems")
// console.log(o)
let object1 = new Map()
let temp = { name: "map first" }
object1.set(temp, "first map initialise")
// object1.clear()
// object1.delete(temp)
// console.log(object1, '???????????????????????????????', object1.has(temp),  object1.get(temp),object1.keys())

/**
 
  map Function
 The map function takes an array, applies a transformation to each element, and returns a new array with the transformed values. The new array always has the same number of elements as the original array

 filter Function
 The filter function takes an array, checks each element against a condition, and returns a new array with only the elements that pass the condition.

 Array Method .forEach()
The .forEach() method executes a callback function on each of the elements in an array in order.
const numbers = [28, 77, 45, 99, 27]; 
numbers.forEach(number => {  
  console.log(number);
}); 

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
What is the use of a type of operator?
The typeof operator in JavaScript is a built-in operator that allows us to determine the data type of a value or variable.

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
q:) What is the use of isNaN function?
isNaN converts the argument to a Number and returns true if the resulting value NOT a Number

typeof of a NaN will return a Number . 
To check if a value is NaN, we use the isNaN() function,

**Note- isNaN() function converts the given value to a Number type, and then equates to NaN.
isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true

.......................................................................

Equality Coercion

 while using the ‘==’ operator, coercion takes place.
The ‘==’ operator, converts both the operands to the same type and then compares them.
Example:
var a = 12;
var b = "12";
a == b // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.
Coercion does not take place when using the ‘===’ operator. Both operands(value) are not converted to the same type in the case of ‘===’ operator.

Example:
var a = 226;
var b = "226";
a === b // Returns false because coercion does not take place and the operands are of different types. Hence they are not equal.
.......................................................................

When do we use constructor functions?
If we want to create multiple objects having similar properties and methods, constructor functions are used.
**Note- Name of a constructor function should always be written in Pascal Notation: every word should start with a capital letter.
.......................................................................
. What is Callback?
It is a function that is to be executed after another function has finished executing, hence the name ‘call back‘.
In JavaScript, a callback function is a function that is passed into another function as an argument. 

Because of this, functions can take functions as arguments, and can be returned by other functions
.......................................................................
A Higher-Order Function (HOF) is a function that does at least one of the following:

Takes a function as an argument (like a callback).
Returns a function as its result

Many built-in JavaScript methods are HOFs because they take a callback function as an argument. Examples include map, filter, and forEach, which you’ve already encountered.

Example with map (from your previous question):

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Outputs: [2, 4, 6, 8]

-------------------------------------------------------------------------------------------------
Why Are Higher-Order Functions Useful?
Code Reusability: HOFs let you reuse logic by passing different functions as arguments (e.g., map can transform arrays in many ways).
Abstraction: They hide complex details, making your code cleaner (e.g., filter handles the looping logic for you).

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
Answer: bind is an HOF because it returns a new function with a fixed this value (as discussed in your earlier question about call, apply, bind).
Example:
javascript

Copy
function sayHi() {
    console.log("Hi, " + this.name);
}
const user = { name: "Alex" };
const boundFunction = sayHi.bind(user);
boundFunction(); // Outputs: Hi, Alex
.......................................................................


9) What do you understand by the first class function in JavaScript?
🔹 1. First-Class Functions in JavaScript
✅ Meaning:
In JavaScript, functions are treated like values (just like numbers or strings).

This means you can:

Store them in variables
Pass them as arguments to other functions
Return them from functions

🧠 Simple Definition:
"Functions that can be assigned to a variable, passed as arguments, or returned — just like regular data — are called first-class functions."

🧪 Example:
const greet = function() {
  console.log("Hello!");
};

function saySomething(fn) {
  fn();  // calling the function passed as argument
}

saySomething(greet);  // Output: Hello!

----------------------------------------------------------------------------------------------

🔹 2. Higher-Order Functions
✅ Meaning:
A higher-order function is a function that takes another function as an argument OR returns a function.

In short:

“Function that works with other functions — either by taking them or returning them.”

✨ Examples:
1. Takes a function as an argument:
function myHigherOrderFunction(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

function square(x) {
  return x * x;
}

console.log(myHigherOrderFunction([1, 2, 3], square));
// Output: [1, 4, 9]

2. Returns a function:

function addNumber(n) {
  return function(x) {
    return x + n;
  };
}

const addFive = addNumber(5);
console.log(addFive(10));  // Output: 15

✅ Built-in Higher-Order Functions in JS:
Some popular ones:

map()
filter()
reduce()

🔚 Summary
Concept	                 Explanation
First-Class Function	Functions are treated like variables (can be stored, passed, returned)
Higher-Order Function	Functions that take or return other functions
    
.......................................................................
.......................................................................
.......................................................................
.......................................................................
.......................................................................
.......................................................................
*/
