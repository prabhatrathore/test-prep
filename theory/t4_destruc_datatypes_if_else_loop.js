let JavaScript_Data_Types
/*
JavaScript Data Types
JavaScript provides different data-types to hold different types of Values. 
There are two types of data types in Java Script:

1. Primitive data type: it means, it represent single value, pass by value, immutable. 
2. Non- primitive data type: an object which represents a collection of values,an array, function 
*/

// var a = 40//holding number
var b = "Rahul"; // holding String

/*
JavaScript Primitive data types
String: represents Sequence of characters e.g. "hello"
Number: represents numeric Values e.g. 100
Boolean Represents boolean Value either false or true
Undefined: represents undefined Value.
Null: represents null i.e. no value at all.
BigInt - This data type is used to store numbers which are above the limitation of the Number data type.
Symbol - It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value.
Example :

var symbol1 = Symbol('symbol');
typeof Symbol('symbol') // Returns Symbol
-------------------------------------------------------
*/
const s1 = Symbol("id");
const s2 = Symbol("id");

// console.log(s1 === s2); // false
const gh2 = s1
// console.log(gh2==s1,"aaaaa")//true

/*
✔️ Even though both symbols have the same description "id",
they are completely unique and different.

❓ Why use Symbol?
To create unique property keys in objects that will never clash with other keys.
----------------------------------------------------------------------------------
🔧 Practical Use Case:
  const id = Symbol("id");

const user = {
  name: "Prabhat",
  [id]: 123
};

console.log(user); // { name: 'Prabhat', [Symbol(id)]: 123 }
console.log(user[id]); // 123
💡 Key Points about Symbol:
Cannot be auto-converted to string: If you try alert(id), it throws error. You must use id.toString().

*/
/*----------------------------------------------------------------------------------------------------------

1:)Primitive: Primitive value are immutable. Primitive are pass by value, store single values at a time 

typeof of primitive types :
typeof "John Doe" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns "undefined"
typeof null // Returns "object" (kind of a bug in JavaScript)
typeof Nan // Returns "number"
typeof Symbol('symbol') // Returns Symbol
*/

/**
var y = 234;
var z = y;
In the above example, the assign operator knows that the value assigned to y is a primitive type (number type in this case), so when the second line code executes, where the value of y is assigned to z, the assign operator takes the value of y (234) and allocates a new space in the memory and returns the address. Therefore, variable z is not pointing to the location of variable y, instead, it is pointing to a new location in the memory.

var y = #8454; // y pointing to address of the value 234
var z = y; 
var z = #5411; // z pointing to a completely new address of the value 234
     
// Changing the value of y
y = 23;
console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z .

From the above example, we can see that primitive data types when passed to another variable, are passed by value. Instead of just assigning the same address to another variable, the value is passed and new space of memory is created.
 
 */
/*
In JavaScript, when we pass a primitive data type (such as Number, String, Boolean, Undefined, Null, or Symbol) to a function, it is passed by value. This means that a copy of the value is created and passed to the function, so that the original value remains unchanged.
For example:
*/

let x = 10;

function changeValue(num) {
  num = 20;
}
changeValue(x);
console.log(x);  // Output : 10

/*
In this example, the 'changeValue' function takes a num parameter, which is a primitive data type (Number). When we call changeValue(x), a copy of the value of x (10) is passed to the function. Within the function, we assign a new value of 20 to num. However, this change does not affect the original value of x, which remains 10.
This is because primitive data types are passed by value in JavaScript, meaning that a copy of the value is created and passed to the function, so that the original value remains unchanged.

2:) Non Primitive
(To store multiple values)->( value are mutable) (pass by reference):Object, Array, function.

Non-primitive types
To store multiple and complex values, non-primitive data types are used.

In JavaScript, when we pass an object (including arrays and functions) to a function, it is passed by reference. This means that a reference to the object is passed to the function.
For example:
*/
let person = { name: "John Doe", age: 26 };

function changeName(obj) {
  obj.name = "Jane Do111e";
}

changeName(person);
console.log(person.name);  // Output: "Jane Do111e"
/*
In this example, the changeName function takes an 'obj' parameter, which is an object. When we call changeName(person), a reference to the person object is passed to the function. Within the function, we change the name property of the object to "Jane Doe".

Since objects are passed by reference in JavaScript, 'this' change is reflected in the original person object, so that its name property is now "Jane Doe".
This is because objects in JavaScript are passed by reference, meaning that a reference to the object, rather than a copy of its value is passed to the function. Any changes made to the object within the function are reflected in the original object, as it is the same object.

13)The parseInt() function is used to convert numbers between different bases. 
parseInt() takes the string to be converted as its first parameter. 
The second parameter is the base of the given string.

3. What is mutable?  
Ans - A mutable object is an object whose state can be modified after creation. 
Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values.

Immutables are the those, whose state cannot be changed once it is created. Strings and Numbers are Immutable.  
 
*/
let x1 = {}, y = { name: "Ronny" }, z = { name: "John" };
let t;
let t1 = {}
x1[y] = { name: "Vivek" };

x1[z] = { name: "Akki" };
x1[t] = { name: "AkkiAAA" };

console.log(x1[y]);  /// { name: 'Akki' }
console.log(x1[t1], 'D');//{ name: 'Akki' } D
console.log(x1, 'ggggg'); //{ '[object Object]': { name: 'Akki' } } ggggg
/*
In JavaScript, when an object is used as a key in another object, it is automatically converted to a string using the toString() method. In this case, both y and z are objects, so they will be converted to strings and used as keys in the x1 object.

Here's what's happening in the code:
let x1 = {}, y = {name:"Ronny"}, z = {name:"John"};
x1[y] = {name:"Vivek"}; // Set x1["[object Object]"] = {name:"Vivek"}
x1[z] = {name:"Akki"};  // Set x1["[object Object]"] = {name:"Akki"}
console.log(x[y]);     // Logs {name:"Akki"}
*/
/*
In this code, the x1 object is being assigned two properties: x1[y] and x1[z]. Since y and z are both objects, they are both converted to the string "[object Object]" and used as keys in the x object.

The first assignment sets the x["[object Object]"] property to {name:"Vivek"}. The second assignment overwrites the x["[object Object]"] property with {name:"Akki"}.
When console.log(x[y]) is called, it retrieves the value of x["[object Object]"], which is {name:"Akki"} because it was the last value assigned to that key.

*/
let a1 = 0;
let b1 = false;
console.log((a1 == b1));//true
console.log((a1 === b1));///false

/*
what is concurrent in node js.
Concurrency is an essential feature of Node. js that enables it to handle large numbers of I/O operations simultaneously, without blocking the execution thread. This concurrency model allows Node.js to handle many requests concurrently, resulting in improved application performance.
*/


let javasccript_if_else
/*
Java Script If- else

The Java Script if-else statement is used to
execute the code whether condition is true or false. 
There are three forms of if statement in
JavaScript.
1.If Statement
2.If else statement. 
3.If else if statement.

Java Script If Statement 
It evaluates the Content only if expression is true.
Example
*/
var a13 = 20;
if (a13 > 10) {
  // document. Write ("value of a is grater than 10");

}
/*
JavaScript if... else statement 
If evaluates the content whether condition is true of false.

Example
Var a = 20;
if (a% 2 = 0) {
document. Write ("a is even number");
3 else {
document. Write ("a is odd number ");.
-------------------------------------------------------------------------
JavaScript If... else if statement
It evaluates the content only if expression is true.
Example
Var a = 20;
if (a== 10){
document. Write ("a is equal to 10");

else if (a = = 15) {
document. Write ("a is equal to 15");
else if (a== 20){
document. Write ("a is equal to 20");
else{
document. Write ("a is not equal to 10, 15 or 20"); 3

----------------------------------------------------------------------------------
 JavaScript Switch Statement
Use the switch statement to select one of many code blocks to be executed.

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/

//object destructuring 
//  destructuring is a new way to extract elements from an object or an array

const obj3 = {
    band: 'annfo-=-=3',
    age: 11231,
    adrress: 'rza 31 dabri',
    city: 'new delhi',
    country: 'india'
};

let { band, age: f, age: val2, ...restProperty } = obj3
// console.log(band) // annfo-=-=3
// console.log(f,':::"""') // 11231
// console.log(val2) // 11231
// console.log(restProperty) // { adrress: 'rza 31 dabri ', city: 'new delhi', country: 'india' };

//====================object inside array 

let arr = [
    { userId: 2, abc: 21, firstname: 'ram' },
    { userId: 3, city: "new-delhi" },
    { name: "ram", userId: 32, address: "rza 31 dabri" }
];

for (let value of arr) {
    // console.log(value)
    // console.log(value.userId, '///////')
};
//2   ////////
// 3  /////////
// 32 ////////

const [user1, { city }, { name: username }] = arr
// const [user1, city2,] = arr

// console.log(user1, '=========');//{ userId: 2, abc: 21, firstname: 'ram' } =========
// console.log(city2); //{ userId: 3, city: 'new-delhi' }
// console.log(username,"nhy")//ram 

var a;
b = null
// console.log(a == b, '///////') //true
a++
b++
console.log(a)  // NaN
console.log(b)// 1

// -----------------------------------------------------------------------------

// in array destructuring
arr = ['name', 22, 'india', ['male', 20000]];
var [user, age = 9, country, [gender, salary]] = arr;//age default value 9
// console.log(user); //name
// console.log(age);// 22
// console.log(country);//india
// console.log(salary);//20000
// console.log(gender);//male

//=================================================
let arr2 = ['nme', 22, 'india', ['male', 20000]];
var [user, ...args] = arr2;
// console.log(user);// nme
// console.log(args[2][1], 'argu');//20000 argu

let obj = {
    name: "qwert",
    age: 22,
    address: { a: "india", b: { c: "inside", d: { e: "finally" } } }

};
let { name: n, age: a13, address: { a: example, b: { c: pop } } } = obj;
console.log(a13);//22
console.log(n)//qwert
console.log(example)//india
// console.log(b)//
console.log(pop)//inside