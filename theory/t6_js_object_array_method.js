let JavaScript_Objects
/*
JavaScript is object-based and prototype-based, but now also supports class-based syntax (from ES6).
we can create objects with or without using classes.

Creating Objects in JavaScript

There are 3 Ways to create objects.

🟢 1. Using Object Literal (Most Common Way)

let person = {
  name: "John",
  age: 30
};

console.log(person.name);  // Output: John

Using object literals: Object literals are a shorthand way of creating objects, and they are one of the most commonly used methods for creating objects in JavaScript. Object literals use curly braces {} to define the properties and values of an object.
------------------------------------------------------------------------------------------------

2) By creating instance of Object

The syntax of creating object directly.
Var object name = new Object();

Here, 'new' keyword is used to create object..

let obj = new Object();
obj.name = "John";
obj.age = 30;

console.log(obj.name);  // Output: John
console.log(obj.age);  // Output: 30

-------------------------------------------------------------------------------------
🔵 3. Using Constructor Function

function Person(name, age) {  
  this.name = name;
  this.age = age;
}

let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);

console.log(person1.name);  // Output: John
console.log(person2.age);   // Output: 25
------------------------------------------------------------------------------------------
An object constructor is a special type of function that is used to create objects in JavaScript. It is defined using the "new" operator, followed by the constructor name, and can be used to create multiple instances of the same object, each with its own set of properties and methods. 
Here is an example of how to use an object constructor in JavaScript:
*/

let JavaScript_Object_Methods
/*
1. Object.assign()
👉 Object.assign() is used to copy properties from one object (source) to another (target).
It adds or updates properties in the target object and returns the updated object.

Here's an example:
*/

var source = { name: 'John', age: 30 };
var target = { city: 'New York' };

Object.assign(target, source);
// console.log(target, 'ppqwsdcx'); // outputs: { city: 'New York', name: 'John', age: 30 }
// ---------------------------------------------------------------------------------------------------
var source = { name: 'John', age: 30, city: "delhi" };
var target = { city: 'New York' };

// Object.assign(target, source);
// console.log(target, 'ppqw'); // outputs: { city: 'delhi', name: 'John', age: 30 }

/*
2. Object.create() makes a new object using another object as its prototype.
Here's an example:
*/
var prototype = {
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  }
};

var john = Object.create(prototype)
john.name = "John";
john.sayHello(); // outputs "Hello, my name is John"
// console.log(john)
// { name: 'John' }

let object_define_property
/*
-----------------------------------------------------------------------------------------------------------
3. Object.define Property() This method is used to describe some behavioral attributes of the property.

 A method to add or modify a property on an object and control its behavior (e.g., writable, enumerable, configurable).

var person = {};

Object.defineProperty(person, 'name', {
value: 'John',
writable: false,
enumerable: true,
configurable: true
});

console.log(person.name); // outputs "John"
person.name = "Jane";
console.log(person.name); // still outputs "John"

In this example, the Object.defineProperty() method is used to add a property name to the person object. The value attribute is set to "John", and the writable attribute is set to false, so the value of the name property cannot be changed. The enumerable attribute is set to true, so the name property will show up in a for-in loop or when using Object.keys(). The configurable attribute is set to true, so the property can be deleted or its attributes can be modified later.
--------------------------------------------------------------------------------------------------
*/
let object_entries
/*
Object.entries() : This method returns an array with arrays of the key, Value pairs…

var person = { name: 'John', age: 30 };

var entries = Object.entries(person);
console.log(entries); // outputs: [ ['name', 'John'], ['age', 30] ]

*/

let object_freeze
/*
Object.freeze() is a method in JavaScript that prevents an object from being modified. It makes the object and its properties read-only, meaning that its properties cannot be added, removed, or modified. 

Here's an example:
var person = { name: 'John', age: 30 };
Object.freeze(person);

person.name = 'Jane';
console.log(person.name); // outputs: "John"

person.address = 'USA';
console.log(person.address); // undefined

delete person.age;
console.log(person.age); // 30

*/
Object.getOwnPropertyNames()
/*
9. Object.get Own Property Names()
The method returns an array of all properties found.

Here's an example:
var person = { name: 'John', age: 30 };

var properties = Object.getOwnPropertyNames(person);
console.log(properties); // outputs: [ 'name', 'age' ]

---------------------------------------------------------------------------------------------------

11. Object.get Prototype of ().
Returns the prototype (parent object) of a specified object.
const proto = { greet: () => "Hello" };
const obj = Object.create(proto);
console.log(Object.getPrototypeOf(obj) === proto); // true
----------------------------------------------------------------------------------

 Object.is ()
Checks if two values are the same, handling edge cases like NaN and -0.

console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false
console.log(NaN === NaN); // false (Object.is is stricter)

----------------------------------------------------------------------------------
 Object.is Frozen()
This method determines if an object was frozen…
Checks if an object is frozen (non-extensible, all properties non-writable and non-configurable).

const obj = { name: "John" };
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // true

----------------------------------------------------------------------------------
 Object.keys()
This method returns an array of a given object's own property names.
const obj = { name: "John", age: 30 };
console.log(Object.keys(obj)); // ["name", "age"]

------------------------------------------------------------------------------------------------

17. Object.prevent Extensions() Prevents adding new properties to an object but allows modifying/deleting existing ones.
const obj = { name: "John" };
Object.preventExtensions(obj);
obj.age = 30; // Ignored
console.log(obj.age); // undefined
------------------------------------------------------------------------------------------------

18. Object. set Prototype Of()
Sets the prototype of an object to another object
const proto = { greet: () => "Hello" };
const obj = {};
Object.setPrototypeOf(obj, proto);
console.log(obj.greet()); // Hello

------------------------------------------------------------------------------------------------

19. Object.Seal()
Prevents adding/deleting properties but allows modifying of existing property's values.
const obj = { name: "John" };
Object.seal(obj);
obj.name = "Jane"; // Allowed
obj.age = 30; // Ignored
delete obj.name; // Ignored
console.log(obj); // { name: "Jane" }

------------------------------------------------------------------------------------------------

20. Object. Values()
This method returns an array of values…
const obj = { name: "John", age: 30 };
console.log(Object.values(obj)); // ["John", 30]
----------------------------------------------------------------------------

*/
let aray;
/*
JavaScript Array
JavaScript array is an object that represents a collection of any type of elements. There are 3 Ways to construct array in Javascript:
*/
/*
1)JavaScript array literal:
 
Var arrayname = [value 1, Value 2...... ValueN];

2) JavaScript Array directly
  Var arra_name = new Array();
Here, new keyword is used to create instance of array.
----------------------------------------------------------------------------

 JavaScript array constructor: 
Here, we need to create instance of array by passing arguments in constructor so that we don't have to provide value explicitly.

In JavaScript, the Array constructor is used to create arrays.
Here's an example:
var numbers = new Array(1, 2, 3);
console.log(numbers); // outputs: [ 1, 2, 3 ]

var names = new Array('John', 'Jane', 'Jim');
console.log(names); // outputs: [ 'John', 'Jane', 'Jim' ]

------------------------------------------------------------------------------------
*/
let array_methods;
/*
JavaScript Array Methods
1. Concat()
It returns a new array object that contains two or more merged arrays.

2. copyWithin()
It Copies the part of the given array with its own elements and returns the modified array.

3. entries ()
It Creates an iterator object and a loop that iterates. Over each key/value pair.
4. every
It determines whether all the elements of an array. are staisfying the provided function Conditions.
5. flat U
It Creates a new array carrying Sub-array elements Concatenated recursively till the specified depth..

6. Flat MAP()
It maps all array elements via mapping function than flattens the result into a new array.

7. Fill()
It fills elements into an array with static values.

8. for Each()
It invokes the provided function once for each. element of an array.

9. includes()
It checks whether the given array contains the Specified element.

10. is Array()
It tests if the passed value ia an array.

11. join()
It joins the elements of an array as a string.

1.push() - Adds an element to the end of an array.

let fruits = ['apple', 'banana', 'cherry'];
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'orange']

1.pop() - Removes the last element of an array.

let fruits = ['apple', 'banana', 'cherry'];
fruits.pop();
console.log(fruits); // Output: ['apple', 'banana']

1.unshift() - Adds an element to the beginning of an array.
let fruits = ['apple', 'banana', 'cherry'];
fruits.unshift('orange');
console.log(fruits); // Output: ['orange', 'apple', 'banana', 'cherry']

1.shift() - Removes the first element of an array & Return that removed element.
let fruits = ['apple', 'banana', 'cherry'];
fruits.shift();
console.log(fruits); // Output: ['banana', 'cherry']

1.splice() - Adds and/or removes elements from an array.

let fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 1, 'orange');
console.log(fruits); // Output: ['apple', 'orange', 'cherry']
1.slice() - Extracts a portion of an array into a new array.

let fruits = ['apple', 'banana', 'cherry'];
let citrus = fruits.slice(1, 3);console.log(citrus); // Output: ['banana', 'cherry']
1.indexOf() - Searches an array for an element and returns its position.

let fruits = ['apple', 'banana', 'cherry'];
let index = fruits.indexOf('banana');
console.log(index); // Output: 1


1.join() - Joins all elements of an array into a string.

let fruits = ['apple', 'banana', 'cherry'];

let joined = fruits.join(', ');console.log(joined); // Output: 'apple, banana, cherry'


1.map() - Creates a new array with the results of calling a provided function on every element in the calling array.

let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function(number) {
return number * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8]
1.filter() - Creates a new array with all elements that pass the test implemented by the provided function.

let numbers = [1, 2, 3, 4];
let evens = numbers.filter(function(number) {
return number % 2 === 0;
});console.log

*/

JavaScript_string
/*  
JavaScript string
The JavaScript string is represents a sequence of characters.

There are 2 Ways to create string in Javascript

1 By string literal
The String literal is created using double quotes.

Var String name = "string value";

2:)  By string object
The syntax of creating string object using new keyword..
Var String name = new String ("String literal");

JavaScript String Methods
1. char At()
It provides the char value present at the specified index.
let str = "Hello World";
console.log(str.charAt(0)); // Output: "H"

2. Char Code At
It provides the Unicode value of a character present at the
Specified index.
let str = "Hello World";
console.log(str.charCodeAt(0)); // Output: 72
                                                  
3. Concat()                         
It provides a combination of two or more strings.          
let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2)); // Output: "Hello World"

4. index Of()
It provides the position of a chap value present in the given string.

let str = "Hello World";
console.log(str.indexOf("o")); // Output: 4

5. last Index Of ()
It provides the position of a char value present in the given String by searching a character from the last position.
let str = "Hello World";
console.log(str.lastIndexOf("o")); // Output: 7

6. Search()
It searches a specified regular expression in a given string and returns its position if a match occurs.

let str = "Hello World";
console.log(str.search(/o/)); // Output: 4

7. match()
It Searches a specified regular expression in a given string and returns that regular expression If a match occurs.
let str = "Hello World";
console.log(str.match(/o/)); // Output: [ "o" ]

8. replace()
It replaces a given string with the specified. replacement.

let str = "Hello World";
console.log(str.replace("World", "Universe")); // Output: "Hello Universe"

9. Substr()
📌 Not recommended / deprecated
📌 Takes start index and length

✔ When to use
When we want N characters from a start point
But avoid it because it’s deprecated

let str = "Hello World";
console.log(str.substr(0, 5)); // Output: "Hello"

10. Substring()
It is used to fetch the part of the given string On the basis of the specified index.

let str = "Hello World";
console.log(str.substring(0, 5)); // Output: "Hello"

11. toLowerCase()
It converts the given string into lowercase letter.

let str = "Hello World";
console.log(str.toLowerCase()); // Output: "hello world"

12. to Locale Lower Case()
It Converts the given string into lowercase letter on the basis of host?s current locale.

let str = "Hello World";
console.log(str.toLocaleLowerCase()); // Output: "hello world"

13. to Upper Case ()
It Converts the given string into uppercase letter.

let str = "Hello World";
console.log(str.toUpperCase()); // Output: "HELLO WORLD"
JavaScript provides several built-in methods for manipulating strings. Here are some of the most commonly used string methods along with code examples:

1.length: Returns the number of characters in a string.
javascriptCopy code
let str = "Hello World";console.log(str.length);  // Output: 11

1.concat(): Joins two or more strings and returns a new string.
javascriptCopy code
let str1 = "Hello";let str2 = " World";let result = str1.concat(str2);console.log(result);  // Output: "Hello World"

1.toUpperCase(): Converts all characters in a string to uppercase.
pythonCopy code
let str = "Hello World";
console.log(str.toUpperCase());  // Output: "HELLO WORLD"

1.toLowerCase(): Converts all characters in a string to lowercase.
pythonCopy code
let str = "Hello World";
console.log(str.toLowerCase());  // Output: "hello world"

1.indexOf(): Returns the first index of a specified character or substring in a string, or -1 if the character or substring is not found.
javascriptCopy code
let str = "Hello World";console.log(str.indexOf("o"));  // Output: 4

1.lastIndexOf(): Returns the last index of a specified character or substring in a string, or -1 if the character or substring is not found.
javascriptCopy code
let str = "Hello World";console.log(str.lastIndexOf("o"));  // Output: 7

1.replace(): Replaces a specified character or substring in a string with another character or substring.
pythonCopy code
let str = "Hello World";
console.log(str.replace("World", "JavaScript"));  // Output: "Hello JavaScript"

1.split(): Splits a string into an array of substrings based on a specified separator.
pythonCopy code
let str = "Hello World";
console.log(str.split(" "));  // Output: [ "Hello", "World" ]

*/
/*
 JavaScript Date Object:

The JavaScript date object can be used to get years, month and day. You Can display a timer on the Webpage by the help of Javascript date object.
Constructor
You can use 4 Variant of Date constructor to create date object.
2. Date (milliseconds) 3 Date (date String)
Date (year, month, day, hours, minutes, seconds, milliseconds).

JavaScript Date Methods
1.getDate()
It returns the integer value between 1 and 31 that represents the day for the specified date on the boss. of local time.

2. get Day()
It returns the integer value between 0 and 6 that repre sents the day of the Week on the basis of local time.

3. get Full Years)
It returns the integer value that represents the year. on the basis of local time.

4 get Hours() It returns the integer value between 0 and 23 that represents the hours on the basis of local time.

5. get Milliseconds()
it returns the Integer value between 0 and 999 that represents the milliseconds on the basis of local time.

6. get Manutes!) It returns the integer value between and sy
that represents the minutes on the basis of loool.
time.

7 get Month()
It Feturns the integer Value between 0 and 11 that represents the month on the basis of local time.

8. get Seconds() It returns the integer value between 0 and 60 that

9. get UTC Datel
represents the day for the specified date on the
basis of universal time
represents the seconds on the basis of local time. It returns the integer value between 1 and 31 that

10 get UTC Day!)

it returns the integer value between 0 and that represents the day of the week on the basis. of universal time

11. getUTC Full Years ()
it returns the integer value that represents the
year on the basis of universal time..
  */

/**
Comparison: Object vs Map

Iteration

object
Not directly iterable; use Object.keys(), Object.values(), or for...in.

map
Directly iterable with for...of, forEach, or entries/keys/values.
 
Property Access
object:
  Dot (obj.key) or bracket (obj["key"]) notation.
  
  map
  get(key) and set(key, value) methods.


***************************************************************************************
Purpose
object:
General-purpose key-value store, often used for simple data structures.

map
Specialized key-value store designed for flexibility and performance.

*/
