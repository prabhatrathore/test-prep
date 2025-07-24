/**
 What is the async Keyword?
The async keyword is used to define an asynchronous function that returns a Promise.
An async function always returns a Promise, even if we don’t explicitly return one. we can use .then() to handle the resolved value.
Async/Await makes it easier to write promises. 
*/

async function name(parameter1, parameter2, parameterN) {
    // statements
}

/**
 What is the await Keyword?
The await keyword is used inside an async function to pause execution until a Promise resolves or rejects.

*/
// let result = await promise;
let benefit_of_async_await
/**
 Benefits of async/await

-- More Readable Code: async/await makes asynchronous code look synchronous, easier to read than callbacks or .then() chains.
-- Simpler Error Handling: Using try/catch is straightforward compared to handling errors in callbacks.
-- Easier Debugging: Since the code reads like synchronous code, debugging is more intuitive.
 */

let negative_or_demerits_of_using_async_Await
/**
 1. Sequential by Default (Slower if Not Managed)
Using await in a loop or multiple times runs tasks one after another, not in parallel.

// Bad: These run one after the other (slow)
await task1();
await task2();
await task3();
✅ Better (parallel)
await Promise.all([task1(), task2(), task3()]);
 */
/**
 Question: “What’s the difference between using .then() and async/await?”
Answer: Both handle asynchronous operations, but .then() chains Promise results and can lead to nested code.

async/await makes the code look synchronous, improving readability and error handling with try/catch.
*/
/*
Question: “Can we use await outside an async function?”
Answer: No, await can only be used inside an async function. Using it outside will cause a syntax error.
 */

/**
 JavaScript Comment
The JavaScript comments are meaningful way to deliver message. It is used to add information about the code, Warnings or Suggestions.

So that other developer can easily interpret(understand) the code.
The Java Script comment is ignored by the JavaScript engine 

Advantages of JavaScript Comments.

There are mainly two advantages of JS comments.
1. To make Code easy to understand.
2. To avoid the unnecessary code.
 */
/**
 JS variables
Variable can store some information, we can use that information later, We can change that information later.

Rules for naming the variables:
Name must start with a letter (ato z ), underscore or dollor sign.
After first letter we can use digit (0 to 9)
Javascript variable case sensitive 
Cannot start with numbers :
E.g. 1value (invalid)

E.g. _value  OR $value (both valid)
 */
/**
 Js local variable : Js local variable is declared inside block or function .it is accessible within function or block only.

Js global variable :it is accessible from any function. A variable that declared outside the function or declared with window object is known as global variable.
 */

/**
 var :The var is the oldest keyword to declare a variable in JavaScript. 
Scope: Global scoped or function scoped. The scope of the var keyword is the global or function scope. It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function is called function scope. 
 */
/**
 Example 1: Variable ‘a’ is declared globally. So, the scope of the variable ‘a’ is global, and it can be accessible everywhere in the program. The output shown is in the console.
 */
var a = 10
function f() {
    console.log(a)
}
f();
console.log(a);
// Output:
// 10
// 10
/**
Example 2: The variable ‘a’ is declared inside the function. If the user tries to access it outside the function, it will display the error. Users can declare the 2 variables with the same name using the var keyword. Also, the user can reassign the value into the var variable. The output shown in the console.
*/
function f() {
    // It can be accessible anywhere within this function
    var a = 10;
    console.log(a)
}
f();
// 'A' cannot be accessible outside of function
console.log(a);
/*Output:
10
ReferenceError: a is not defined. 
 */
/**
 Example 3: we can re-declare variable using var and we can update var variable. The output is shown in the console.

    var a = 10         
    var a = 8        // User can re-declare     // variable using var
    a = 7             // User can update var variable

Output:
7
 */

/**
 let keyword in JavaScript: The let keyword is an improved version of the var keyword. 

Scope: block scoped: The scope of a let variable is only block scoped. It can’t be accessible outside the particular block ({block}). Let’s see the below example.

    let a = 10;
    function f() {
        let b = 9
        console.log(b);
        console.log(a);
    }
    f();
Output:
9
10
 */
{// this is a block 
    var a = 10;
    console.log(a)
}
console.log(a)/////
// > 10
// > 10

/**
 Example 2: The code returns an error because we are accessing the let variable outside the function block.
    let a = 10;
    function f() {
        if (true) {
            let b = 9
 
            // It prints 9
            console.log(b);
        } 
        console.log(b);// It gives error as it defined in if block
    }
    f()
    console.log(a)    // It prints 10
Output:
9
ReferenceError: b is not defined
 */

/**
 Example 3: we cannot re-declare the variable defined with the let keyword but can update it.
    let a = 10 
    let a = 20	    // It is not allowed
    a = 4    // It is allowed
Output:
Uncaught SyntaxError: Identifier 'a' has already been declared
*/
/*
Example 4: we can declare the variable with the same name in different blocks using the let keyword.
  let a = 10
  if (true) {
    let a=9
    console.log(a) // It prints 9
  }
  console.log(a) // It prints 10     
Output:
9 
10
 */
/**
 Example 5: If we use the let variable before the declaration, it does not initialize with undefined
    console.log(a);
    let a = 10;
Output:
Uncaught ReferenceError: Cannot access 'a' before initialization
 */
/**
 'const' keyword in JavaScript: The const keyword has all the properties that are the same as the 'let' keyword, except the user cannot update it.

Scope: block scoped: When users declare a const variable, they need to initialize it, otherwise, it returns an error. The user cannot update the const variable once it is declared. 

Example 1: We are changing the value of the const variable so that it returns an error. The output is shown in the console.
*/

const a3s = 10;
function f() {
    // a3s = 9
    // console.log(a3) 
}
// f();

/*Output:
TypeError:Assignment to constant variable.
////////////////////
const a = 10;
function f() {
   const a = 9
    console.log(a)
}
f();//>9
///////////////////////////////////
const a = 10;
function f() {
   var/let a = 9
    console.log(a)
}
f();//9
////////////////////////////////////////
Example 2: Users cannot change the properties of the const object, but they can change the value of properties of the const object.
*/
const ag = {
    prop1: 10,
    prop2: 9
}
ag.prop1 = 13 // It is allowed
ag.newp = 29// new property can be add 
console.log(ag, "aaa::::::")
/*
// It is not allowed
ag = {
    b: 10,
    prop2: 9
}
Output:
Uncaught SyntaxError:Unexpected identifier
*/
