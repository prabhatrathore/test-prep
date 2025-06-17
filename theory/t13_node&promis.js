

/**
  Definition

  Node.js is a JavaScript runtime environment that enables server-side JavaScript execution, allowing developers to build web applications using a single language across client and server.
  
 
 Purpose --------------------------------

Provides an efficient and scalable platform for developing high-performance web applications.
Ideal for real-time applications, such as chat apps, streaming services, and e-commerce platforms.

Core Architecture-------------------------

Built on V8 JavaScript Engine.

1. Utilizes Google’s V8 engine, which compiles JavaScript to native machine code for fast execution.
Inherits a single-threaded design from V8, aligning with JavaScript’s browser-based origins.

2. Single-Threaded Event Loop

Processes tasks (e.g., HTTP requests) asynchronously using a single-threaded event loop.

Queues incoming requests and responds when data is ready, avoiding the need for multiple threads.

(Simplifies development by eliminating complexities of multi-threaded programming.)

Event-Driven, Non-Blocking I/O Model-----------------

Handles I/O operations (e.g., file system, network requests) asynchronously, preventing blocking of the main thread.

Enables efficient management of a large number of concurrent connections with minimal overhead.

-------------------------------------------------------

Key Advantages

1. Seamless JavaScript Integration
 Allows developers to use JavaScript for both client-side and server-side development, streamlining workflows.

 Scalability

 Non-blocking I/O and event-driven architecture support high concurrency, making it suitable for scalable applications.

 Performance---------------------------

 Optimized for real-time applications due to its lightweight and asynchronous nature.

 Ecosystem

 Backed by a large, active community contributing to a vast ecosystem of modules, packages (via npm), and tools.

 Supports diverse use cases, from APIs to microservices.

Node.js is asynchronous and event-driven. All API's of Node.js library are non-blocking, and its server doesn't wait for an API to return data. It moves to the next API after calling it, and a notification mechanism of Events of Node.js responds to the server from the previous API call.

 ---------------------------------

 Limitations

 Single-Threaded Design Constraints

 CPU-Bound Tasks: Heavy computations (e.g., image processing, cryptography) can block the event loop, degrading performance.

 (Cryptography is the process of hiding or coding information)
 
Impact: Delays in processing other tasks, leading to reduced responsiveness.

 Mitigation Strategies
Node.js is single-threaded by default — it handles all tasks using one main thread (thanks to the event loop).

That’s fine for tasks like reading files, accessing a database, or handling many users.
BUT… 😣

If we give Node.js a CPU-heavy task (like image processing, complex calculations, or data crunching), it will block the main thread.

This means:

Other users have to wait 😤

The app may become slow or unresponsive ⚠️

✅ Mitigation: Worker Threads--------------------------------------------------
To fix this, Node.js gives us a tool: worker_threads module.

Think of Worker Threads like hiring an assistant 👨‍💼🧠:

You give heavy tasks to this assistant.

Your main thread keeps working smoothly and doesn't get overloaded.

Example tasks to offload:

Big loops or calculations
Image/video processing
Compression/encryption

--------------------------example ---------------------------

const { Worker } = require('worker_threads');

new Worker(`
  for (let i = 0; i < 1e9; i++) {}
  console.log("Worker done");
`, { eval: true });

console.log("Main thread keeps working!");

---------------------------------------------------------------------------------------------------------
 Clustering: Leverage Node.js’s cluster module to utilize multiple CPU cores by running multiple processes.


----------------------------------------------------------------------------------------------------
explain the different purposes of Node.js:

1.Real-time web applications: Node.js is great for building web applications that require real-time communication between the server and the client, such as chat applications, online gaming platforms, and live streaming services.

2.Network applications: Node.js is also useful for building network applications, such as proxies,. Its non-blocking I/O model makes it efficient at handling many connections simultaneously.

4.General purpose applications: Node.js can also be used for building general purpose applications, such as command line tools, desktop applications, and serverless applications. Its flexibility and ease of use make it a popular choice for developers working on a wide range of projects.

-------------------------------------------------------------------------------------------------------------
some features of Node.js?
It is fast, scalable, open-source, and asynchronous.

----------------------------------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////////////////////=========*********
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is an open source framework developed and maintained by the Node.js foundation.

-------------------------------------------------------------------------------------------------------------

Why does Google use V8 for Node.js?
Google uses V8 for Node.js because it is faster and more efficient. It compiles the JavaScript code directly into machine code.
     The running engine for Node.js is V8 (Google Chrome).

-------------------------------------------------------------------------------------------------------------
Unit testing in Node.js is a process of testing individual units of code.
-------------------------------------------------------------------------------------------------------------
Some examples of async functions are setTimeout(), setInterval(),
-------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------

What are security implementations within Node.js?
The different types of security implementations within Node.js include error handling, authentications and authorization, data sanitization, encryption, and logging and monitoring.

-------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------
*/
let event_loop_explain

/*
The event loop in Node.js is a mechanism that allows it to handle multiple tasks asynchronously using a single-threaded architecture.

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
These are provided by the browser (or Node) to handle asynchronous stuff outside the main thread.

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

🔁 4. Event Loop – The Boss
The Event Loop keeps checking:

“Is the call stack empty?”
If yes, it picks the first task from the Callback Queue and pushes it into the Call Stack to execute.

So here:

After console.log("3") finishes, the call stack becomes empty.

Event Loop picks () => console.log("2") and runs it.


---------------------------------------------------------------------------------------------------------


Node.js uses an event loop to handle multiple requests at the same time.

After the server makes an API call, the event loop continues to run, and when the API call completes, a notification mechanism called an event emitter sends an event to the server with the result of the API call. The server then responds to the client with the result.

So, to summarize, the notification mechanism of Events of Node.js responds to the server from the previous API call, not directly to the client.

----------------------------------------------------------------------------------
Node.js is very fast because it builds on Google Chrome?s V8 JavaScript engine. 
Node.js is single threaded but highly scalable.
Node.js provides a facility of no buffering. Its application never buffers any data. Node.js outputs the data in chunks.

-------------------------------------------------------------------------------------------------------------
*/
let Nodejs_web_application_architecture

/*
--------------------------------------------------------------------------------------------------------
Explain Node.js web application architecture?
A web application distinguishes into 4 layers:

Client Layer: Web browsers or mobile apps that send HTTP requests to the server.

Server Layer: Web server that receives client requests and sends responses.

Business Layer: Application server that processes requests, interacting with the data layer.

Data Layer: The Data layer contains databases or any source of data.
------------------------------------------------------

 In simple terms, I/O (input/output) refers to the process of transferring data between our program and anything outside.

-----------------------------------------------------------------------------------------------------------------
8) How many types of API functions are available in Node.js?
There are two types of API functions in Node.js:
Asynchronous, Non-blocking functions
Synchronous, Blocking functions

----------------------------------------------------------------------------------------------

Can we run Node.js on Windows?
Yes, Node.js can be run on Windows

----------------------------------------------------------------------------------------------

What are the two data types categories in Node.js?

Node.js supports two categories of data type - primitive and non-primitive.

----------------------------------------------------------------------------------------------

*/

let what_are_the_api_in_nodejs

/*
Node.js provides a large number of built-in APIs, including but not limited to:

1.File System (fs) API - for working with the file system, including reading and writing files.
2.HTTP and HTTPS API - for creating web servers and making HTTP/HTTPS requests.
3.Network Socket (net) API - for creating TCP/UDP servers and clients.
4.Child Processes (child_process) API - for creating child processes and communicating with them.
5.Process (process) API - for accessing information about the current Node.js process, such as environment variables and command line arguments.
6.Console (console) API - for logging messages to the console.
7.Stream (stream) API - for working with data streams, such as reading or writing data in chunks.
8.Crypto (crypto) API - for working with cryptography, such as creating hash digests, encrypting or decrypting data, or generating secure random numbers.
9.Events (events) API - for creating and working with custom events and event listeners.
10.Timers (timers) API - for scheduling code execution after a certain delay or at certain intervals.

These are just a few examples of the many built-in APIs that Node.js provides. Additionally, there are numerous third-party modules and libraries available for Node.js that provide additional APIs and functionality

Sure, here are a few examples of using some of the built-in APIs in Node.js:

1.const fs = require('fs');
2.
3.fs.readFile('myfile.txt', 'utf8', (err, data) => {
4.  if (err) throw err;
5.  console.log(data);
6.});
7.
8.

-----------------------------------------------------------------------------

HTTP API - creating a simple HTTP server:

1.const http = require('http');
2.const server = http.createServer((req, res) => {
3.  res.writeHead(200, {'Content-Type': 'text/plain'});
4.  res.end('Hello, World!');
5.});
6.
7.server.listen(3000, () => {
8.  console.log('Server listening on port 3000');
9.});
10.
*/

/*

------------------------------------------------------------------------------------------------------

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


-------------------------------------------

-----------------------------------------------------------------------------------------

	
    Platform dependency: Node.js is mostly used on the server-side and is used in server-side development.


------------------------------------------------------------------------------------------
 Explain the working of Node.js?

When clients interact with a web application, they send requests to the web server. These requests can be for getting data, deleting data, or updating data.
 these requests are added to the Event Queue, which is like a to-do list for the program. The Event Loop then processes the requests one by one.

If a request is simple and doesn't require any external resources, like reading a simple file, it's processed immediately by the Event Loop and returned to the client.

But if a request is complex and requires access to external resources, like accessing a database, a separate thread from the Thread Pool is assigned to handle that request. 

This thread is responsible for completing the task and sending the response back to the Event Loop, which then sends the response back to the client.

Overall, this approach allows for non-blocking requests to be processed quickly, while still allowing for complex blocking requests to be handled without slowing down the program. It's like having multiple workers completing different tasks at the same time to make the overall process more efficient.

----------------------------------------------------------------------------------------------

How can you manage the packages in our Node.js project?

To keep track of the packages we've installed, we can use a configuration file called package.json. This file lists all the packages our project depends on, along with their versions. This makes it easy to share our project with others
package.json store all meta data stored.

Another useful file is package-lock.json, which records the exact versions of packages that were installed on our system

------------------------------------------------------------------------------------

Q.1:What are modules in Nodejs. Do you know any commonly used modules 
Ans. Module is a function or grp of similar function. They are grouped together within a file and contain the code to execute a specific task when called.  

Some are : built in module 
Node.js has a set of built-in modules which we can use without any further installation  

There are three types: 
1.Core Modules Node.js has many built-in modules that are part of the platform and comes with Node.js installation.
 Core modules can be loaded into the program by using the require function. 
 Example util, http, https  
Syntax-> const module = require('module_name')

2. Local Modules we can create our own modules, and easily include them in our applications. 
e.g : 
 local modules are created locally in our Node.js application.  
Example- file name->action.js  

Action .js (ke andar kuch bhi(function or code) likhe, ose bolte hai local Module  )
Const add = function (x, y) { return x + y; };  
Const  sub = function (x, y) { return x - y; }; 
 Const  mult = function (x, y) { return x * y; };  

3. Third Party Modules Third-party modules are modules that are available online using the Node Package Manager(NPM).  Some of the popular third-party modules are mongoose, express etc  
Example:  
•npm install express 
 •npm install mongoose   

---------------------------------------------------------------------------------------------------------
Q2 . How do you write functions and global variables in a module A and use them in module B 
Module A=> 
const isString = function (value) { 
    if (typeof value === 'string' && value.trim().length === 0) return false
//it checks the value contain only space or not 
    return true; 
} 
module.exports.isString=isString 

module B=> 
const validate = require("../Util/Validation") 
 if (!validate.isString(title)) 
        { 
            return res.status(400).send({ status: false, message: "Please provide title or title field" }); 
        } 
///////////////////////////////////////////////////////////////////////////////


Q3 . How do you import an external package. What code do you use for this? 
With the use of “npm i module_name”  we can install external packages into our project.  
For importing external package  
we use require()  
var name = require(”module_name”)  
---------------------------------------------------------------------------------------
Q 4. What is express?  
Express is light weight web framework of node.js 
   
core features of Express framework − 
Express is used for designing and building web applications quickly and easily. 
 
1)express : Allows us to set up middlewares to respond to HTTP Requests. 
------------------------------------------------------------------------------


 Q 5.How do you create routes in an express application?////// 

 In route.js 

const express = require('express'); 
 const router = express.Router(); //ye connection bna rha hai 
The express.Router() function is used to create a new router object. This function is used when we want to create a new router object in our program to handle requests.


. router.post('/register',USERController.createUser)  
. module.exports = router;  

 in index.js
const route = require('./routes/route.js'); 
app.use('/', route);   (ye global middleware h)  


Body-parser 
Body-parser is third party NPM and work as a middleware which helps to convert  
(the data of requestbody) 
 into JSON format. 
app.use('/', route) is global middleware.  

6. What are middlewares and why do you need them? 
 Middleware is a function that gets executed during the request-response cycle of an application. 
middleware sits between endpoint and handlers.
it manages the flow of control,
 code reusability
 
 -----------------------------------------------------------------------------------------------
What are the four functions of middleware systems?
Data management, application services, messaging, authentication, and API management are all commonly handled by middleware. 

----------------------------------------------------------

What are the 3 types of middleware?
Middleware functions can be divided into three main categories: application-specific, information-exchange and management and support middleware


Middleware is software that acts as a bridge between different applications, systems, or components, enabling them to communicate and share data. It’s often used in distributed systems, web development (like in Node.js), or networked applications. The statement you provided categorizes middleware into three types: application-specific, information-exchange, and management and support middleware. Below, I’ll explain each category in simple terms, with a focus on their role in systems like Node.js (since you mentioned the "Node shell" earlier).

1. Application-Specific Middleware
What It Is: This type of middleware is designed for a specific application or purpose. It handles tasks unique to a particular program or system, tailored to its needs.
How It Works: It processes requests or data in a way that’s customized for the application’s logic or requirements.


information-Exchange Middleware
 This middleware focuses on enabling communication and data exchange between different systems, applications, or services, often across networks or platforms.
How It Works: It standardizes or translates data formats, protocols, or messages so that different systems (e.g., a web server and a database) can understand each other.


Management and Support Middleware
What It Is: This middleware provides tools and services to manage, monitor, or support the operation of applications or systems, often focusing on performance, security, or maintenance.
How It Works: It handles tasks like logging, error handling, load balancing, or ensuring system reliability, rather than directly processing application data.



const express = require('express');
const app = express();

// 1. Application-Specific Middleware (custom for this app)
app.use((req, res, next) => {
  if (req.query.user === 'admin') {
    req.isAdmin = true; // Custom logic for this app
  }
  next();
});

// 2. Information-Exchange Middleware (e.g., parsing JSON data)
app.use(express.json()); // Handles JSON data exchange between client and server

// 3. Management and Support Middleware (e.g., logging)
const morgan = require('morgan');
app.use(morgan('dev')); // Logs requests for monitoring

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => console.log('Server running on port 3000'));



----------------------------------------------------------
object is an instance of class

An object in JavaScript is a data structure that stores data as key-value pairs, allowing us to group related properties and methods together.

----------------------------------------------------------

Q 7. What are route and application level middlewares?/////// 

Route based middlewares  

class {
key =value
}
Router level middleware work just like application level middleware except they are bound to an instance(object) of 

express.Router() 

Application level middleware are bound to an instance of express, using app.use()

Routes are the way in which the client requests are handled by the application endpoints or it is a mechanism where HTTP requests are routed to the code that handles them.
Application Level Middleware are bound to an instance of express, using app.use() also called as global middleware.
Application Level Middleware is used globally for example whenever an API is hit the app.use method hits first then goes to the routes part of it. 
 
Q 8. How do you decide which code should go in an application level middleware vs which one is suitable for a route level middleware /////////// 
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
Types of Middleware:

Application-Level Middleware: Applied globally to all routes in the Express app.
// app.use(express.json());

Route-Level Middleware: Applied to specific routes or groups of routes.
Using app.use() or router.use() with a specific path, or attached to individual route handlers.

-------------------------------------------------------------------------------------------
How to Decide: Application-Level vs. Route-Level Middleware

Scope of Functionality:
Application-Level: If the middleware applies to all requests or a broad set of routes (e.g., logging every request, parsing request bodies, setting CORS headers).
Route-Level: If the middleware is specific to certain routes (e.g., checking if a user is authorized to access a specific endpoint like /api/users/:id).
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
 
Q 9. Name the middlewares you have used in your assignments and project implementation. 
middlewares are 
a. multer (Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. )
 b. bodyparser 
 c. application- level middleware app.use() => i have use to find date and current route hit and ip 
 d.///////////////// router- level middleware- i have use to manipulate request and response like i have you for validation of emails, password and token et 

10. What is the main purpose of debugger in VS Code (or other IDEs) 
 .we can check bugs in our code by applying markers and see execution line by line. and fix the bugs in our code

Let us understand this with the help of an example.  

Console.log("Hi"); // First 
 Console.log("Ash") ;// Second  
Console.log("How are you"); // Third  

So the answer will be like 
 Hi than Ash than How are you  
-----------------------------------------------------------------------------------------------
Q 11. What all options are there in a debugger? 
Pause,stepover,disconnect,step into,step out.  

-----------------------------------------------------------------------------------------------

Q 13. What does synchronous mean? 
Synchronous 
 synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed. 
 synchronous code will block further execution of the remaining code until it finishes the current one  

Q 14. Where would you use synchronous functions? 
Ans: Where we want line by line execution of the code. 

Q 15. What does asynchronous mean?  
Ans: Asynchronous means not waiting for an operation to finish. 
Asynchronous JavaScript: Asynchronous code allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one. 

const getProductDetails = async function (req, res) { 
} 



Q 16. Where would you use asynchronous functions? 
functions running in parallel with other functions are called asynchronous . 

A good example is JavaScript setTimeout().

 a. when our project or peace of project works on parallelization. Or performing independent tasks in parallel.  
b.Where we dont need to work sequentially
c. we can achieve the outcomes much faster
 

 14. Where would you use synchronous functions? 
 Answer 
a. when our project or peace of project works on Serialization. Or performing dependent tasks in sequence. 
 b.Where we need to work sequentially.  
c. we can achieve the outcomes accurately and it makes our system easier to evolve and more resilient to failure.  
For example- let take a project where product, customer and order is their here all the feature are related to each other so this features are inter-depended, so we will use synchronous function. 
 

 */

/**
 // promise.resolve

 /**
 * ye koi bhi value lega aur return mai promise dega.
 * //then method hamesha promise return krta hai isse fir hum promise ki chain create kr skte .
 */


const promise = Promise.resolve(7)//ye koi bhi value lega aur return mai promise dega
promise.then((value) => { console.log(value) })
//ya fir 
Promise.resolve('3').then((value) => { console.log(value) })
//======================================================
function sol() { //promise chaning
    return new Promise((resolve, reject) => {
        resolve('foo')
    })
}
sol()
    .then((value) => {
        console.log(value, 'pppppp')
        value += ' baar '
        return value //yaha promise return ho rha h. mtlb abb hum promise pr .then lga skte h
    }
    ).then((value) => {
        console.log(value, "nbhgvf")
        value += ' one'
        return value
    }).then((value) => {    //then sirf promise pr lgta hai
        console.log(value) //
    })



/**
 


 


let arr = ['a', 'v', 'x', 'e']
// console.log(...arr)

let str = "string"
str = str.toUpperCase()
// console.log(str,"str1`2")
arr = ["apple", "grapes", "banana"]
for (let i = 0; i < arr.length; i++) {
arr[i] = arr[i].toUpperCase()
}
//  console.log(arr,"arr341")
let obj = {
name: "abc",
age: 3,
address: "delhi"
}
//  console.log(Object.keys(obj),"12345")
console.log(typeof Object.keys(obj), "123456789")//object
console.log(Array.isArray(Object.keys(obj)), "qwerty")//true




/**

all concept of promises in javascript?

In JavaScript, promises are a way to handle asynchronous operations. They are objects that represent the eventual completion or failure of an asynchronous operation and allow you to write asynchronous code. 
 Promises have become a core part of JavaScript and are widely used in modern JavaScript applications. Here are the key concepts related to promises:

Promise States: A promise can be in one of three states:

Pending: The initial state before the promise is fulfilled or rejected.
Fulfilled: The state when the promise is successfully resolved with a value.
Rejected: The state when the promise encounters an error or fails, providing a reason for the failure.
Promise Creation: Promises are created using the Promise constructor. The constructor takes a single function (executor) as an argument, which is called immediately and receives two functions as parameters: resolve and reject. You use these functions to either fulfill or reject the promise based on the outcome of your asynchronous operation.

Chaining: Promises allow you to chain multiple asynchronous operations together. The then() method is used to attach fulfillment and rejection handlers to a promise. Each then() call returns a new promise, which enables chaining. Chained promises allow you to sequence asynchronous operations in a more readable and manageable way.

Handling Errors: Promises provide a mechanism to handle errors using the catch() method or by attaching a rejection handler using then(). If any promise in a chain is rejected, the control skips to the nearest rejection handler, allowing you to handle errors gracefully.

Promise.all(): The Promise.all() method takes an array of promises as an argument and returns a new promise. This new promise is fulfilled when all the promises in the array are fulfilled, or it is rejected when any of the promises in the array is rejected. It allows you to wait for multiple asynchronous operations to complete simultaneously.

Promise.race(): The Promise.race() method takes an array of promises as an argument and returns a new promise. This new promise is settled as soon as any of the promises in the array is settled, whether fulfilled or rejected. It can be used when you want to respond to the result of the first asynchronous operation that completes.

Promise.resolve() and Promise.reject(): These static methods are used to create already fulfilled or already rejected promises, respectively. Promise.resolve() creates a promise that is resolved with a given value, while Promise.reject() creates a promise that is rejected with a given reason.

Async/Await : Introduced in newer versions of JavaScript, the async/await syntax provides a more synchronous style of writing asynchronous code using promises. The async keyword is used to define an asynchronous function, and the await keyword is used to pause the execution of the function until a promise is fulfilled or rejected.

These are the fundamental concepts of promises in JavaScript. Understanding and utilizing promises effectively can greatly improve the readability and maintainability of your asynchronous code.


*/


/**
 * 
 * 
// for (let i=0;i<4;i++){
//     setInterval(()=>{
// console.log(i,"#@# ii")
//     },4000)
//     setTimeout(()=>{
// console.log(i,"@#$ ii2")
//     },4000)
// }  // gives 0,1,2,3 

// for (var i=0;i<4;i++){
//     setInterval(()=>{
// console.log(i," var #@# ii")
//     },4000)
//     setTimeout(()=>{
// console.log(i,"var @#$ ii2")
//     },4000)
// }
//giivies 4 4 4 4 

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise11")
        resolve("resole deata")
        // resolve("rejectt deata")
    }, 3000)
})
async function sol() {
    let get = await promise
    console.log(get, "GEtee")
    console.log("promise inside ==== ")
}
sol()

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise-= 23")
        resolve("solctuion")
    }, 3000)
}).then((sol) => {
    console.log(sol, "after promise ")
})
 */




///
// 
let obj = {
    name: "ram",
    age: 9,
    address: "delhi"
}
function sol(greet) {
    console.log(greet, this.name + this.age)
}
sol.call(obj, 'hello')
//===================
sol.apply(obj, ['hi good'])
//============
let obj_invite = sol.bind(obj)
obj_invite("greeek")
///====================

//  let f=JSON.parse("text")
// console.log(f)

//=========
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("first")
        resolve()
    }, 2000)
}).then(() => { console.log("firstsecond") })
// console.log(ab)
//  */





let aq = [2, 3, 4, 5, 6, 7]
arr = aq.fill(0, 1, 22)
console.log(arr)

// This JavaScript code creates an array aq with values [2, 3, 4, 5, 6, 7]. It then calls the fill method on this array with three arguments:


// The first argument 0 specifies the value to fill the array with.

// The second argument 1 specifies the index at which to start filling the array. In this case, it starts filling from index 1, which corresponds to the second element in the array.

// The third argument 22 specifies the index at which to stop filling the array. However, since this index is greater than the length of the array, it is ignored and the filling continues until the end of the array.

// Therefore, the resulting array arr will be [2, 0, 0, 0, 0, 0], since all elements from index 1 onwards are replaced with 0 by the fill method. This modified array is then logged to the console.



/***
 
Node.js REPL Shell
The Node.js REPL is an interactive shell that comes with Node.js, allowing developers to execute JavaScript code line-by-line in a command-line environment. It’s often referred to as the "Node shell" because it provides a way to interact with Node.js directly from the terminal or command prompt.

Key Features of the Node.js REPL:
Read-Eval-Print Loop: You type JavaScript code, the REPL evaluates it, prints the result, and waits for the next input.
Access: Start it by typing node in your terminal (after installing Node.js) without specifying a file. This opens the REPL with a > prompt.
Use Cases:
Testing JavaScript Code: Quickly test snippets of JavaScript or Node.js-specific code without writing a full script.
Debugging: Experiment with Node.js modules, APIs, or logic interactively.
Learning: Explore JavaScript or Node.js features in real-time.

$ node
> console.log('Hello, Node!')
Hello, Node!
undefined
> let x = 5; x * 2
10
> .exit

Limitations:
No direct access to shell commands (e.g., ls or cd) like in a traditional terminal shell.
Multiline input (e.g., loops) can be clunky unless you use the .editor mode.

------------------------------------------------------------------------------------------------

Why is NodeJS preferred over other backend technologies like Java and PHP?
Here are some reasons why NodeJS is preferred:

Fast Performance: NodeJS is known for its speed in handling I/O-heavy tasks.
NPM Ecosystem: Node Package Manager offers over 50,000 bundles to help developers speed up development.
Real-Time Applications: Perfect for data-intensive, real-time apps as it doesn't wait for APIs to return data.
Unified Codebase: The Same code is used for both server and client, improving synchronization.
Easy for JavaScript Developers: Since NodeJS is based on JavaScript, web developers can easily integrate it into their projects.


 */



