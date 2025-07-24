/**
🔹 JavaScript Cheat Sheet
📌 Basics
var / let / const – Variable declarations
Data Types – primitive(string, number, boolean, null, undefined, symbol, bigint,) & non-primitive data type(object,array)
Type Coercion – Implicit vs Explicit
== vs === –> Loose comparision vs Strict equality comparision

📌 Functions
Function Declaration
Function Expression
Arrow Functions
First-Class Functions – Functions as values
Higher-Order Functions – Accept/return functions

📌 Scope & Closures
Global vs Local Scope
Lexical Scope
Closure – Inner function remembers outer function's variables.

📌 Asynchronous JS
Callbacks
Promises
Async/Await
Event Loop -> (Call Stack, Callback Queue, Web APIs). 

📌 Objects & Arrays
Object.assign(), spread/rest, destructuring, map(), filter(), reduce(), forEach()

📌 ES6+ ( 2015 ) Features : 
Destructuring
Template Literals
Modules (import/export)
Default Parameters
Optional Chaining (?.)
Nullish Coalescing (??) 
----------------------------------------------------------------------

The nullish coalescing operator (??) in JavaScript is a logical operator, pick a default value if a variable is null or undefined. It returns the left-hand value if it's not null or undefined, otherwise it returns the right-hand value.

How It Works
The ?? operator checks if the left-hand operand is nullish (null or undefined).
If the left-hand operand is nullish, then it return right-hand operand.
Nullish means only null or undefined. Other falsy values like 0, false, or "" (empty string) are not considered nullish.

It’s different from the logical OR operator (||), which treats all falsy values (e.g., 0, false, "", NaN) as conditions to fall back to the default.
---------------------------------------------------------------------------
Example 1: 
let user = null;
let defaultName = "Guest";
console.log(user ?? defaultName); // Output: "Guest"
--------------------------------------------------------------------

user = "Alice";
console.log(user ?? defaultName); // Output: "Alice"
-----------------------------------------------------------------------------------

Example 2: Difference Between ?? and ||
let value = 0;
console.log(value || 42); // Output: 42 (because 0 is falsy)
console.log(value ?? 42); // Output: 0 (because 0 is not nullish)
----------------------------------------------------------------------------------

Example 3: Chaining with Multiple Values
let a = null;
let b = undefined;
let c = "Hello";
console.log(a ?? b ?? c); // Output: "Hello"
-------------------------------------------------------------------------

Example 4: With Objects
let config = {
  timeout: null,
  retries: 3
};

let timeout = config.timeout ?? 5000;
console.log(timeout); // Output: 5000 (because config.timeout is null)
---------------------------------------------------------------------------------

Example 5: Combining with Optional Chaining (?.)
let user = {
  settings: {
    theme: null
  }
};

let theme = user.settings?.theme ?? "default";
console.log(theme); // Output: "default"
-------------------------------------------------------------------------------------------

🔹 Node.js Cheat Sheet
📌 Core Concepts -->  Single-threaded, Non-blocking I/O

Modules: require / import
---------------------------------------------------------------------------------------------
In Node.js, modules are reusable pieces of code that we can include in your program.
1. require
 A 'require' function used in Node.js to load modules (built-in, external, or your own files).
Used in: CommonJS modules (the older, default module system in Node.js).
---------------------------------------------------------------------------

2. import
 A modern way to load modules, part of the ES Modules..
How it works:
have "type": "module" in package.json.
---------------------------------------------------------------------------
Global objects: __dirname, process, Buffer
------------------------------------------------------

📌 Modules
fs – File system
path – File paths
http – Server creation
events – EventEmitter
worker_threads – CPU intensive task handling

📌 Package Management
npm / yarn
package.json, dependencies, devDependencies

📌 Frameworks
Express.js – Web server
Middleware – functions with req, res, next

📌 Environment
.env + dotenv – manage secrets
*/
let git
/*
🔹 Git Cheat Sheet
📌 Git Basics

bash
git init                  # Initialize repo
git clone <url>           # Clone repo
git add .                 # Stage all files
git commit -m "msg"       # Commit changes
git status                # Show file changes
git log                   # View commit history

📌 Branching

git branch                # List branches
git checkout -b feature   # New branch
git merge feature         # Merge branch
git rebase main           # Rebase

📌 Remote Commands

git remote -v             # Show remotes
git push origin main      # Push code
git pull origin main      # Pull code

📌 Undo/Reset

git reset --soft HEAD~1   # Undo last commit (keep changes)
git checkout -- <file>    # Discard changes in file
*/
let redis
/*
🔹 Redis Cheat Sheet

📌 Basics
In-memory key-value store
Used for caching, sessions, real-time data

📌 Commands
SET key value             # Set key
GET key                   # Get value
DEL key                   # Delete key
EXPIRE key seconds        # Set TTL
INCR key                  # Increment
DECR key                  # Decrement
LPUSH list val            # Push to list
LRANGE list 0 -1          # Get all list items

📌 Pub/Sub
PUBLISH channel msg
SUBSCRIBE channel
📌 Node Integration
Use ioredis or redis npm package
*/
let aws
/*
🔹 AWS Cheat Sheet

📌 Common Services
Service	Use Case
EC2	Virtual servers
S3	File storage
RDS	Relational DB (MySQL, etc)
Lambda	Serverless functions
CloudWatch	Monitoring/logs
IAM	Access control
VPC	Network configuration

📌 AWS CLI
aws configure               # Set credentials
aws s3 ls                   # List buckets
aws ec2 describe-instances  # List EC2s

📌 EC2
Launch VM
Use SSH to connect
Install apps manually

📌 S3
aws s3 cp file.txt s3://mybucket/

📌 Lambda
Upload Node.js/Python function

Trigger via HTTP or S3 events 
 */

let Variables_and_Datatypes_in_JavaScript
/**
A variable is like a container that holds data that can be reused or updated later in the program. In JavaScript, variables are declared using the keywords var, let, or const.

2.datatypes
primitive datatypes: number, string, boolean, undefined, null, symbol, bigint.
non- primitive datatypes : object, arrray, function

===========================================================================
*/

// 3. Global and Local variables in JavaScript
/*
---------------------------------------------------------------------------
 * JavaScript Let

 Key Features of let
1. Block Scope
2. Hoisting  :  While variables declared with let are hoisted, they are not initialized.
3. No Redeclaration

Temporal Dead Zone (TDZ)
------------------------------------------------------------------

JavaScript const
1. Block Scope
2. No Reassignment
3. Must Be Initialized at the time declaration.
4. Immutable Binding, Not Value
'const' makes the 'variable' binding immutable, but if the value is an object or array, we can still modify its properties or contents.
5. No Redeclaration
*/
const obj = { name: "Pranjal" };
obj.name = "Nanda";
obj.new = "Nanda-new";
// console.log(obj.name); // nanda
// console.log(obj); // { name: 'Nanda', new: 'Nanda-new' }

const arr = [1, 2, 3];
arr.push(4);
// console.log(arr);  // [ 1, 2, 3, 4 ]
/*
--------------------------------------------------------------------------------------------
 Features of var Keyword
function testVar() {
    var x = 10;
    console.log(x); // Output: 10
}
console.log(x); // Error: x is not defined
-------------------------------------------------------------------------------------------
The variable "x" is declared using 'var' inside the 'testVar' function, so it is only accessible within that function. Trying to access 'x' outside the function results in an 'error'.
Since 'x' is not defined globally, calling console.log(x); outside testVar causes a ReferenceError, as 'x' does not exist in the global scope.

3. Re-declaration of Variables
 */

let JS_Operators_or_operation
/**
  JavaScript operators are symbols or keywords used to perform operations on values and variables. They are the building blocks of JavaScript expressions and can manipulate data in various ways.

1. JavaScript Arithmetic Operators.
2. JavaScript Assignment Operators.
3. JavaScript Comparison Operators.
4. JavaScript Logical Operators.
5. JavaScript ternary Operators.
6. JavaScript Unary Operators.
-----------------------------------------------------------------------------------------------

1. JavaScript Arithmetic Operators
Arithmetic Operators perform mathematical calculations like addition, subtraction, multiplication, etc.

const sum = 5 + 3; // Addition
const diff = 10 - 2; // Subtraction
const p = 4 * 2; // Multiplication
const q = 8 / 2; // Division
console.log(sum, diff, p, q);
Output
8 8 8 4
--------------------------------------------------------------------------------------------------

2. JavaScript Assignment Operators
Assignment operators are used to assign values to variables. They can also perform operations like addition or multiplication before assigning the value.

let n = 10;
n += 5;
n *= 2;
console.log(n);
Output
30
------------------------------------------------------------------------------------------------------

3. JavaScript Comparison Operators
Comparison operators compare two values and return a boolean (true or false). They are useful for making decisions in conditional statements.

console.log(10 > 5);
console.log(10 === "10");

Output
true
false
> checks if the left value is greater than the right.
=== checks for strict equality (both type and value).
Other operators include <, <=, >=, and !==.
--------------------------------------------------------------------------------------------------------
JavaScript Logical Operators: manipulate Boolean values 
--------------------------------------------------------------------------------------------------------

JavaScript Bitwise Operators
Bitwise operators perform operations on binary representations of numbers.

They manipulate individual bits (0s and 1s) of numbers to perform operations like AND, OR, XOR, NOT, and bit shifts. These are useful for low-level tasks, performance optimization, or handling flags.

Key Bitwise Operators

AND (&):
Compares each bit of two numbers. Returns 1 only if both bits are 1.

let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011
console.log(a & b);  // Output: 1 (Binary: 0001)
Explanation: Only the last bit is 1 in both (0101 & 0011 = 0001).

OR (|):
Compares each bit. Returns 1 if at least one bit is 1.

let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011
console.log(a | b);  // Output: 7 (Binary: 0111)
Explanation: Bits are 1 where either number has 1 (0101 | 0011 = 0111).

--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
const res = 5 & 1; // Bitwise AND
console.log(res);

Output
1
& performs a bitwise AND.
| performs a bitwise OR.
^ performs a bitwise XOR.
~ performs a bitwise NOT.
--------------------------------------------------------------------------------------------------------
 JavaScript Ternary Operator
The ternary operator is a shorthand for conditional statements. It takes three operands.

const age = 18;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);

Output
Adult
condition ? expression1 : expression2 evaluates expression1 if the condition is true, otherwise evaluates expression2.
-----------------------------------------------------------------------------------------------

7. JavaScript Comma Operator
Comma Operator (,) mainly evaluates its operands (value) from left to right sequentially and returns the value of the rightmost operand (value).

let n1, n2
const res = (n1 = 1, n2 = 2, n1 + n2);
console.log(res);

Output
3
-------------------------------------------------------------------------------------------------

JavaScript Unary Operators
Unary operators operate on a single operand (e.g., increment, decrement).

let x = 5;
console.log(++x); // Pre-increment
console.log(x--); // Post-decrement (Output: 6, then x becomes 5)

Output
6
6
++ increments the value by 1.
-- decrements the value by 1.

--> typeof returns the type of a variable.

--------------------------------------------------------------------------------------------------

9. JavaScript Relational Operators
JavaScript Relational operators are used to compare its operands and determine the relationship between them. They return a Boolean value (true or false) based on the comparison result.

const obj = { length: 10 };
console.log("length" in obj);
console.log([] instanceof Array);

Output
true
true
in checks if a property exists in an object.
instanceof checks if an object is an instance of a constructor.
------------------------------------------------------------------------------------------------------

10. JavaScript BigInt Operators.
BigInt operators allow calculations with numbers beyond the safe integer range.
-------------------------------------------------------------------------------------------
const big1 = 123456789012345678901234567890n;
const big2 = 987654321098765432109876543210n;
console.log(big1 + big2);

Output
1111111110111111111011111111100n

------------------------------------------------------------------------------
Operations like addition, subtraction, and multiplication work with BigInt.
Use n suffix to denote BigInt literals.
-----------------------------------------------------------------------------------------------

11. JavaScript String Operators
JavaScript String Operators include concatenation (+) and concatenation assignment (+=), used to join strings or combine strings with other data types.
-------------------------------------------------------------
const s = "Hello" + " " + "World";
console.log(s);

Output
Hello World

+ concatenates strings.
+= appends to an existing string.

---------------------------------------------------------------------------------------------
12. JavaScript Chaining Operator (?.)
The optional chaining operator allows safe access to deeply nested properties without throwing errors if the property doesn’t exist.
------------------------------------------------------------------------------------------------

const obj = { name: "Aman", address: { city: "Delhi" } };
console.log(obj.address?.city);
console.log(obj.contact?.phone);
--------------------------------------
Output
Delhi
undefined
?. safely accesses a property or method.
Returns undefined if the property doesn’t exist.
--------------------------------------------------------------------------------------------------------
*/
let type_of_statement_in_js
/**
 1. Variable Declarations (var, let, const)
 2. Assignment Statement: An assignment statement is used to assign a value to a variable.
 3. Expression Statements.
 4. Control Flow Statements.
 Control flow statements are used to control the order in which statements are executed in a program. Examples include if, else, switch, while, and for loops.

5. Function Declarations.
  A function declaration is a statement that defines a function in JavaScript. Functions are reusable peice (blocks) of code designed to perform specific tasks.

function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Alisha"));
---------------------------------------------------------------------------------------------------------

7. Throw Statement
The throw statement is used to create custom errors in JavaScript. It is often used in conjunction with try...catch to handle errors.

function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older");
    }
}
----------------------------------------------------------------------------------------------------------
8. Try...Catch Statement
The try...catch statement is used to handle exceptions in JavaScript. The code inside the try block is executed, and if an error occurs, the code inside the catch block will handle the error.

try {
    let result = someUndefinedFunction(); // This will throw an error
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
}
---------------------------------------------------------------------------------------------------
9. Break and Continue Statements
The break and continue statements are used within loops. break exits the loop, while continue skips to the next iteration.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Exits the loop when i equals 5
    }
    console.log(i);
}
*/

// JavaScript Loops

/**
Loops in JavaScript are used to reduce repetitive tasks by continuosly executing a block of code as long as a specified condition is true.

1. JavaScript for Loop
The for loop repeats a block of code a specific number of times. It contains initialization, condition, and increment/decrement in one line.

Syntax
for (initialization; condition; increment/decrement) {
    // Code to execute
}

2. JavaScript while Loop
The while loop executes as long as the condition is true. It can be thought of as a repeating if statement. 

Syntax:
while (condition) {
    // Code to execute
    }
    */
let i = 0
while (i < 5) {
    console.log(`execture :${i}`, i)
    i++
}
/*
3. JavaScript do-while Loop
The do-while loop is similar to while loop except it executes the code block at least once before checking the condition.

Syntax
do {
// Code to execute
} while (condition);

let i = 0;
do {
console.log("Iteration:", i);
i++;
} while (i < 3);
-----------------------------------------------------------------------------------------

4. JavaScript for-in Loop
The for...in loop is used to iterate over the properties of an object or array 's element. It only iterate over keys of an object which have their enumerable property set to “true”.

Syntax
*/
for (let key in object) {
// Code to execute
}

const obj = { name: "Ashish", age: 25 };
for (let key in obj) {
console.log(key, ":", obj[key]);
}
for(let w in [3,4,5,6]){
    console.log(w,"www")
}
/*
------------------------------------------------------------------------------------------------

5. JavaScript for-of Loop
The for...of loop is used to iterate over iterable objects like arrays, strings, or sets. It directly iterate the value and has more concise syntax than for loop.

Syntax
for (let value of iterable) {
// Code to execute
}
let a = [1, 2, 3, 4, 5];
for (let val of a) {
console.log(val);
}
*/
