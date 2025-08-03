/**
 * In JavaScript, 'this' keyword refers to the object where it is called.

1. this Inside Global Scope
When this is used alone, this refers to the global object (window object in browsers). For example,
--------------------------------------------------------------------------------

'this' refers to the object that is currently executing the function or method.

'this' keyword is used in a constructor function, this refers to the object when the object is created using constructor function

Example:
----------------------------------------------------------------------
function info() {
  console.log(`My name is ${this.name}`);
}

const person = { name: "Cody", about: info };
person.about(); // Outputs "My name is Cody"

Explanation: this refers to the person object when about is called.
-------------------------------------------------------------------------------
// constructor function
function Person () {
    this.name = 'John',
}
// create object
const person1 = new Person();
// access properties
console.log(person1.name);  // John

*/

let a = this;
console.log(a);  // Window {}

this.name = 'Sarah';
console.log(this.name); // Sarah
// Here, this.name is the same as this.name.

/*

2. this Inside Function
When this is used in a function, this refers to the global object (window object in browsers). For example,

function greet() {

    // this inside function
    // this refers to the global object
    console.log(this);
}

greet(); // Window {}

3. 'this' Inside Constructor Function
In JavaScript, constructor functions are used to create objects. When a function is used as a constructor function, this refers to the object inside which it is used. For example,
*/
function Person() {
    this.name = 'Jack';
    console.log(this);
}

let person1 = new Person();
console.log(person1.name);
// Output
// Person {name: "Jack"}
// Jack

function P(name) {
    this.name = name

}
let t = new P("ramji")
console.log(t, 'tttt')
/*
-------------------------------------------------------------------
Here, this refers to the person1 object. That's why, person1.name gives us Jack.

Note: When this is used with ES6 classes, it refers to the object inside which it is used (similar to constructor functions).

4. this Inside Object Method
When this is used inside an object's method, this refers to the object itself . For example,

const person = {
    name : 'Jack',
    age: 25,

    // this inside method
    // this refers to the object itself
    greet() {
        console.log(this);
        console.log(this.name);
    }
}

person.greet();
Output
{name: "Jack", age: 25, greet: ƒ}
Jack
In the above example, this refers to the person object.
------------------------------------------------------------------------------------------------

5. this Inside Inner Function
When we access this inside an inner function (inside a method), this refers to the global object. For example,

const person = {
    name : 'Jack',
    age: 25,

    // this inside method
    // this refers to the object itself
    greet() {
        console.log(this);        // {name: "Jack", age ...}
        console.log(this.age);  // 25

        // inner function
        function innerFunc() {
        
            // this refers to the global object
            console.log(this);       // Window { ... }
            console.log(this.age);    // undefined
            
        }
        innerFunc();
    }
}

person.greet();
Output

{name: "Jack", age: 25, greet: ƒ}
25
Window { …}
undefined
Ad
Here, this inside innerFunc() refers to the global object because innerFunc() is inside a method.

However, this.age outside innerFunc() refers to the person object.

6. this Inside Arrow Function
Inside the arrow function, this refers to the parent scope. For example,

const greet = () => {
    console.log(this);
}
greet(); // Window {...}
Arrow functions do not have their own this. When you use this inside an arrow function, this refers to its parent scope object. For example,

const greet = {
    name: 'Jack',

    // method
    sayHi () {
        let hi = () => console.log(this.name);
        hi();
    }
}

greet.sayHi(); // Jack
Here, this.name inside the hi() function refers to the greet object.

You can also use the arrow function to solve the issue of having undefined when using a function inside a method (as seen in Example 5). For example,

const person = {
    name : 'Jack',
    age: 25,

    // this inside method
    // this refers to the object itself
    greet() {
        console.log(this);
        console.log(this.age);

        // inner function
        let innerFunc = () => {
        
            // this refers to the global object
            console.log(this);
            console.log(this.age);
            
        }

        innerFunc();

    }
}

person.greet();
Output

{name: "Jack", age: 25, greet: ƒ}
25
{name: "Jack", age: 25, greet: ƒ}
25
Here, innerFunc() is defined using the arrow function. It takes this from its parent scope. Hence, this.age gives 25.

When the arrow function is used with this, it refers to the outer scope.

7. this Inside Function with Strict Mode
When this is used in a function with strict mode, this is undefined. For example,

'use strict';
this.name = 'Jack';
function greet() {

    // this refers to undefined
    console.log(this);
}
greet(); // undefined
Note: When using this inside a function with strict mode, you can use JavaScript Function call().

For example,

'use strict';
this.name = 'Jack';

function greet() {
    console.log(this.name);
}

greet.call(this); // Jack
When you pass this with the call() function, greet() is treated as the method of the this object (global object in this case).
 */
function A(n) {
    this.name = n
}
let te = new A("shyaaaam")
console.log(te, "ffffffffff")