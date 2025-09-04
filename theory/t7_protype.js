/**
 
Question: “What’s a prototype in JavaScript?”
Answer: A prototype is an object that other objects can inherit properties and methods from. It’s like a shared toolbox. 

Prototype allows objects to share common properties and methods, making it easier to manage and reuse code.

For example, if we add a method to Person.prototype, all Person objects can use it without having their own copy.
*/
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
};

const person1 = new Person("Alex");
const person2 = new Person("Cody");

person1.sayHello(); // Outputs: Hello, I'm Alex
person2.sayHello(); // Outputs: Hello, I'm Cody

/**  What is a prototype chain with code example

 a prototype chain refers to the relationship between objects where one object can inherit properties and methods from another object. 
 
 Prototype allows objects to share common properties and methods, making it easier to manage and reuse code.


Every object has a prototype property that refers to another object. The prototype of an object is often referred to its "parent" or "base" object. When we try to access a property or method of an object, JavaScript first checks the object itself. If it doesn't find the property or method, it will look in its prototype and keep following the chain until it either finds the property or reaches the end of the chain (null).

Here is an example that demonstrates the prototype chain:

// Define a base object with a property and method

let animal = {
  type: "Unknown",
  describe: function() {
    return `This is a ${this.type} animal.`;
  }
};

// Create a new object that inherits from the base object
let cat = Object.create(animal);
cat.type = "Cat";

// Create another object that also inherits from the base object
let lion = Object.create(animal);
lion.type = "Lion";

// Check the prototype chain
console.log(cat.describe()); // "This is a Cat animal."
console.log(lion.describe()); // "This is a Lion animal."
console.log(cat.hasOwnProperty("type")); // true
console.log(lion.hasOwnProperty("type")); // true
console.log(cat.hasOwnProperty("describe")); // false
console.log(lion.hasOwnProperty("describe")); // false

You're correct that the describe() method is inherited by cat and lion from their parent object, animal. However, the reason that cat.hasOwnProperty("describe") and lion.hasOwnProperty("describe") both return false is because describe() is not actually a property that is "owned" by cat or lion.

When we call a method of an object in JavaScript, the JavaScript engine first looks for the method in the object itself. If the method is not found in the object, it looks for the method in the object's prototype. If the method is not found in the prototype, it looks for the method in the prototype's prototype, and so on, until the method is found or there are no more prototypes to search.
In the case of cat and lion, the describe() method is not actually a property of the objects themselves, but rather a property of the animal object that they inherit from. When you call cat.describe() or lion.describe(), the JavaScript engine looks for the describe() method in cat or lion, and when it doesn't find it, it looks for the method in the animal prototype.
Since the describe() method is not actually a property of cat or lion, cat.hasOwnProperty("describe") and lion.hasOwnProperty("describe") both return false. Instead, describe() is a property of the animal object, which is the prototype of both cat and lion.
---------------------------------------------------------------------------------------

A pure function is a function that returns the same output for the same inputs and does not have any side effects. That means it does not modify any variables outside its scope, does not perform any I/O operations (such as reading from or writing to the file system), and does not make any API calls that can change the state of the system.

Here's an example of a pure function in JavaScript:

function add(a, b) {
  return a + b;
}
In this example, add is a pure function because it takes two parameters a and b, and returns their sum. The function does not modify any external variables or have any side effects, so it always returns the same result for the same inputs.

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

------------------------------------------------------------------------------------------- 
What is a post message 
Post message is a method that enables cross-origin communication between Window objects.

Why do you need web storage 
Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Also, the information is never transferred to the server. Hence this is a more recommended approach than Cookies.

What is JSON and its common operations
JSON (JavaScript Object Notation) is a lightweight, text-based data format that uses JavaScript object syntax for structuring data. 
used for transmitting data between a server and a client in web applications. JSON files typically have a .json extension 
 (and use the MIME type application/json).

Common Operations with JSON
Parsing: Transforming a JSON-formatted string into a native JavaScript object.

Stringification: Converting a JavaScript object into a JSON-formatted string, commonly used for data transmission or storage.

 */