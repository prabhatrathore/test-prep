// Can you describe your experience in developing RESTful APIs using Node.js and Express?
/**
 I have over 3 years of experience developing RESTful APIs using Node.js and Express.
I start by setting up an Express.js server with a clear folder structure (routes, controllers,services, models, middlewares).

For database integration, I have worked with both MySQL (using Sequelize/Raw queries) and MongoDB (using Mongoose), depending on project needs.

I design APIs following REST principles — clean endpoints, proper HTTP methods (GET, POST, PUT, DELETE), and meaningful status codes.

I use middleware for authentication (JWT),  request validation (Joi).
I ensure security by implementing cors, .

For performance, I integrate Redis for caching frequently accessed data and implement pagination & filtering on large datasets.

*/
/**
  Definition
  Node.js is a open-source, cross-platform JavaScript runtime environment that enables server-side JavaScript execution, (( allowing developers to build web applications using a single language across client and server)).
  
 Purpose -----------------------------------------------------------------------------------------------
node.js Provides an efficient and scalable platform for developing high-performance web applications.
Ideal for real-time applications, such as chat apps, streaming services, and e-commerce platforms.

Core Architecture-------------------------

node.js Built on chrome's V8 JavaScript Engine for speed.

1. Utilizes Google chrome’s V8 engine, which compiles JavaScript to native machine code for fast execution.
Inherits a single-threaded design from V8, aligning with JavaScript’s browser-based origins.

2. Single-Threaded Event Loop
Processes tasks (e.g., HTTP requests) asynchronously using a single-threaded event loop.
Queues incoming requests and responds when data is ready, avoiding the need for multiple threads.
(Simplifies development by eliminating complexities of multi-threaded programming.)

Event-Driven, Non-Blocking I/O Model-----------------
Handles I/O operations (e.g., file system, network requests) asynchronously, preventing blocking of the main thread.
Enables efficient management of a large number of concurrent connections with minimal overhead.

Cross-platform means Node.js can run on multiple operating systems without needing major changes.
-------------------------------------------------------

Key Advantages

1. Seamless JavaScript Integration
 Allows developers to use JavaScript for both client-side and server-side development, streamlining workflows.

 Scalability.
 Non-blocking I/O and event-driven architecture support high concurrency, making it suitable for scalable applications.

 Performance---------------------------
 Optimized for real-time applications due to its lightweight and asynchronous nature.

 Ecosystem
 Backed by a large, active community contributing to a vast ecosystem of modules, packages (via npm), and tools.

 Supports diverse use cases, from APIs to microservices.

Node.js is asynchronous and event-driven. All API's of Node.js library are non-blocking, and its server doesn't wait for an API to return data. It moves to the next API after calling it, and a notification mechanism of Events of Node.js responds to the server from the previous API call.
 -------------------------------------------------------------------------------------

(Cryptography is the process of hiding (or coding) information)
 
 Limitations of node.js
 🔹 Single-threaded problem:
Node.js runs on one main thread.
Good for I/O tasks (reading files, database calls).
Bad for CPU-heavy tasks (image processing, encryption, big calculations).

❌ Why bad?
Heavy tasks block the main thread.
Other users/tasks have to wait.
App becomes slow or unresponsive.
--------------------------------------------------

✅ Solution: Worker Threads
Use worker_threads module.

Like giving heavy work to an assistant, so main thread remains free.
📌 Example tasks to offload:
Image/video processing
Big calculations
Compression or encryption

--------------------------example ---------------------------

const { Worker } = require('worker_threads');

new Worker(`
  for (let i = 0; i < 1e9; i++) {}
  console.log("Worker done");
`, { eval: true });

console.log("Main thread keeps working!");

---------------------------------------------------------------------------------------------------------
/*
1.How do you handle requests and responses in a Node.js server?
In Node.js, we can use the built-in http module to create a server that listens for incoming requests and sends back responses. To handle requests, we can use the request event on the server object, which provides information about the request such as the HTTP method, URL, and headers. To send a response, we can use the response object, which has methods like write() and end() to send data back to the client
------------------------------------------------------------------
const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Hello from Express Server!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

------------------------------------------------------------------
express internally uses the http module
But it simplifies routing, request handling, and response sending
Instead of writing logic for different methods and URLs manually, Express provides app.get(), app.post(), etc.
**************************************************

Can you describe your experience with using npm, the Node.js package manager?
or 
How do you manage packages in your NodeJS project?

Npm is a package manager for Node.js that allows us to install and manage third-party libraries and packages in our Node.js projects. 
******************************************************************************************

How do you debug Node.js applications
✅ 1. Using console.log()
The simplest method.

Insert console.log() statements to print variable values or flow status.
✅ 2. Using Node.js built-in debugger
Run with the inspect flag:

✅ 3. Using Chrome DevTools
Start Node with inspect:
**************************************************

 Clustering in Node.js
Clustering is a technique in Node.js to create multiple processes (workers) that run simultaneously and share the same server port.
 It enhances performance and reliability by distributing incoming connections across multiple workers.

Since Node.js is single-threaded by default, node.js runs on a single process, utilizing only one CPU core. The cluster module allows us to create multiple worker processes that share the same server port, enabling parallel processing and better handling of concurrent requests.

Key Concepts of Clustering
Master Process: The main process that spawns and manages worker processes.

Worker Processes: Child processes that handle incoming requests. Each worker runs its own event loop and can process tasks independently.

Load Balancing: The master process distributes incoming connections across workers.
Inter-Process Communication (IPC): Workers can communicate with the master process or other workers using messaging.

How Clustering Works
The cluster module forks multiple worker processes (usually one per CPU core).
The master process listens for incoming connections and delegates them to workers.
Each worker runs the same application code but operates independently, handling its share of requests.
If a worker crashes, the master can restart it to maintain reliability.

Example: Basic Clustering in Node.js
Here’s a simple example using the cluster module to create a clustered HTTP server:

--------------------------------------------------------------------------

Explain some of the cluster methods in NodeJS
Fork(): It creates a new child process from the master. The isMaster returns true if the current process is master or else false.

isWorker: It returns true if the current process is a worker or else false.
process: It returns the child process which is global.
send(): It sends a message from worker to master or vice versa. 
kill(): It is used to kill the current worker.
--------------------------------------------------------------------------

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length; // Number of CPU cores

if (cluster.isMaster) {
  // Master process
  console.log(`Master ${process.pid} is running`);

  // Fork workers equal to the number of CPU cores
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Handle worker exit
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    // Restart the worker
    cluster.fork();
  });
} else {
  // Worker process
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello from worker ${process.pid}`);
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}

Explanation of the Code
Check if Master: cluster.isMaster determines if the process is the master. If true, it spawns workers.
Fork Workers: The master forks a worker for each CPU core using cluster.fork().
Worker Crash Handling: The exit event listener restarts a worker if it crashes.
Worker Process: Each worker creates an HTTP server listening on port 8000. The master distributes incoming requests among workers.

Shared Port: All workers share the same port (8000), and the master handles load balancing.
--------------------------------------------------

Benefits of Clustering

Improved Performance: Utilizes multiple CPU cores, increasing throughput for CPU-intensive tasks or high-concurrency scenarios.
Scalability: Handles more simultaneous connections, ideal for web servers or APIs.
Resilience: The master can restart crashed workers, improving reliability.
No External Dependencies: The cluster module is built into Node.js, requiring no additional packages.
---------------------------------------------------------------

Limitations

State Management: Workers don’t share memory, so state (e.g., sessions) must be managed externally (e.g., using Redis or a database).

Not for All Workloads: Clustering is most effective for I/O-heavy applications (e.g., HTTP servers). CPU-bound tasks may require other solutions like worker threads.

Increased Complexity: Managing multiple processes and IPC adds complexity to the application.

Best Practices----------------------------

Match Worker Count to CPU Cores: Use os.cpus().length to determine the number of workers for optimal resource utilization.

Handle Worker Crashes: Implement cluster.on('exit') to restart failed workers.

Use External State Management: For applications requiring shared state, use tools like Redis or a database.

Monitor Performance: Test whether clustering improves performance for your specific use case, as overhead from forking processes can sometimes outweigh benefits for low-traffic apps.
Consider PM2 for Production: While the cluster module is great for simple clustering, tools like PM2 offer advanced features like process management, monitoring, and zero-downtime restarts.
Example with PM2
For production, you might use PM2 to manage clustering. Install PM2:

bash


npm install -g pm2
Run your app with clustering:

--------------------------------------------------------------------
pm2 start app.js -i max
The -i max flag tells PM2 to create a worker for each CPU core.

When to Use Clustering
High-Traffic Web Servers: Clustering shines in handling many HTTP requests concurrently.
API Servers: Distributes API requests across workers for better throughput.
Real-Time Apps: For apps using WebSockets (e.g., with Socket.IO), clustering can help scale connections.

----------------------------------------------------------------------------
When Not to Use Clustering 
Single-Threaded Tasks: If your app is heavily CPU-bound (e.g., machine learning inference), consider worker threads or offloading to a separate service.
Low Traffic: For small-scale apps, the overhead of managing workers may not be worth it.
--------------------------------------------------------------------------------
Advanced Clustering
For more complex scenarios, you can:

Use sticky sessions for WebSocket or session-based apps (e.g., with the sticky-session package).
Implement custom load balancing by configuring how the master distributes connections.
Use worker threads (via the worker_threads module) within workers for CPU-intensive tasks.
If you need a deeper dive into any specific aspect (e.g., IPC, sticky sessions, or performance testing), let me know!
*/

fork_and_spawn_in_node.js
/*
Node’s child_process module gives several ways to create child processes. Two commonly used ones are:

Key Differences

Feature            	spawn                                                  	fork
Purpose	             Runs any command or executable	                         Runs a Node.js script
Process Type	     General child process                                   Node.js child process
Communication	     Streams (stdin, stdout, stderr)	                       IPC channel + streams
Use Case         	 External commands, streaming data                     	 Node.js scripts, parallel tasks
Performance	       Lightweight for external commands	                     Slightly heavier due to Node.js env
Node.js Specific  	No, works with any command                  	         Yes, only for Node.js scripts

----------------------------------------------------------------------------------------------------------------
The spawn function is designed to run any command or executable as a general child process, using streams (stdin, stdout, stderr) for communication, making it lightweight for external commands and streaming data, and is not specific to Node.js. 

((In contrast, the fork function is tailored for running Node.js scripts as a Node.js-specific child process, utilizing an IPC channel alongside streams for communication, suited for parallel tasks in Node.js, but is slightly heavier due to the Node.js environment setup.)))
----------------------------------------------------------------------------------------------------

What is a, fork in NodeJS?
Fork is a method in NodeJS that is used to create child processes. It helps to handle the increasing workload. It creates a new instance of the v8 engine which enables multiple processes to run the code.
----------------------------------------------------------------------------------------------------
*/
explain the different purposes of Node.js:
/*
1.Real-time web applications: Node.js is great for building web applications that require real-time communication between the server and the client, such as chat applications, online gaming platforms, and live streaming services.

2.Network applications: Node.js is also useful for building network applications, such as proxies,. Its non-blocking I/O model makes it efficient at handling many connections simultaneously.

4.General purpose applications: Node.js can also be used for building general purpose applications, such as command line tools, desktop applications, and serverless applications. Its flexibility and ease of use make it a popular choice for developers working on a wide range of projects.

-------------------------------------------------------------------------------------------------------------
some features of Node.js?
Node.js is fast, scalable, open-source, and asynchronous.

----------------------------------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////=========*********
(((Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. )))

Q 4. What is express?  
Express is light weight web framework of node.js    
express is fast, unopiniated (no proper file structure provided), minimalist web framwork for node.js 
It is an open source framework developed and maintained by the Node.js foundation.

core features of Express framework − 
Express is used for designing and building web applications quickly and easily. 
 
1)express : Allows us to set up middlewares to respond to HTTP Requests. 
-------------------------------------------------------------------------------------------------------------

Why use Node.js?
Node.js makes building scalable network programs easy. Some of its advantages include:

It is generally fast.
It rarely blocks.
It offers a unified programming language and data type.
Everything is asynchronous. 
It yields great concurrency.
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
The different types of security implementations within Node.js include error handling, authentications and authorization, data sanitization, encryption, logging and monitoring.
-------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------
  */
  Node.js uses an event loop to handle multiple requests at the same time.
  /*
  After the client makes an API call, the event loop continues to run, and when the API call completes, a notification mechanism called an event emitter sends an event to the server with the result of the API call. The server send back responds to the client with the result.

  So, to summarize, the notification mechanism of Events of Node.js responds to the server from the previous API call, not directly to the client.

  ------------------------
  The event loop is a mechanism that processes asynchronous tasks in a single thread by continuously checking and executing callback functions.
----------------------------------------------------------------------------------
Node.js is very fast because it builds on Google Chrome's V8 JavaScript engine. 
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
Yes, Node.js can be run on Windows.
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


const fs = require('fs');
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
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
let r;
/*
------------------------------------------------------------------------------------------------------
-------------------------------------------
-----------------------------------------------------------------------------------------
	
    Platform dependency: Node.js is mostly used on the server-side and is used in server-side development.

-------------------------------------------------------------------------------------------------------------*/
 Explain the working of Node.js ?
  /*
  Client sends request → Example: browser hitting your Node.js server (get data, update, delete, etc.).
 
  Request goes into Event Queue → Think of it as a waiting line (to-do list).
 Event Loop checks requests one by one:
 If it’s a simple task (like returning “Hello World” or reading a cached file), the Event Loop itself handles it and sends response back.
If it’s a complex task (like DB query, file read/write, network call), the Event Loop passes  to the Thread Pool (libuv).
Thread Pool does heavy work in background and, once done, gives result back to the Event Loop.
Event Loop finally sends response to client.

  Overall, this approach allows for non-blocking requests to be processed quickly, while still allowing for complex blocking requests to be handled without slowing down the program. It's like having multiple workers completing different tasks at the same time to make the overall process more efficient.
  
  ----------------------------------------------------------------------------------------------
  
  How can you manage the packages in our Node.js project?
  
  To keep track of the packages we've installed, we can use a configuration file called package.json. This file lists all the packages our project depends on, along with their versions. This makes it easy to share our project with others.
  package.json store all meta data stored .
  
  Another useful file is package-lock.json, which records the exact versions of packages that were installed on our system.
  
  ------------------------------------------------------------------------------------
  -*/

  Q.1:What are modules in Nodejs.Do you know any commonly used modules
/*
A modules in Node.js is a block of code that provides specific functionality, which can be reused across different parts of an application. 

There are three types of modules: 
1.Core Modules
2. Local Modules
3. Third Party Modules

1.Core Modules: 
Node.js has a set of built-in modules which we can use without any further installation  

Core modules can be loaded into the program by using the 'require' function. 
 Example util, http, https  
Syntax-> const module = require('module_name')
----------------------------------------------------------------------------------------------------------

2. Local Modules: we can create our own modules, and easily include them in our applications. 
e.g : 
 local modules are created locally in our Node.js application.  
Example- file name->action.js  

Action .js (ke andar kuch bhi(function or code) likhe, ose bolte hai local Module  )
Const add = function (x, y) { return x + y; };  
Const  sub = function (x, y) { return x - y; }; 
 Const  mult = function (x, y) { return x * y; };  

3. Third Party Modules: Third-party modules are modules that are available online using the Node Package Manager(NPM).  Some of the popular third-party modules are mongoose, express etc  
Example:  
•npm install express 
 •npm install mongoose   

---------------------------------------------------------------------------------------------------------*/
Q2.How do you write functions and global variables in a module A and use them in module B
/*
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

 Q 5.How do you create routes in an express application?////// 

 In route.js 

const express = require('express'); 
 const router = express.Router(); //ye connection bna rha hai . 
The express.Router() function is used to create a new router object. This function is used when we want to create a new router object in our program to handle requests.

. router.post('/register',USERController.createUser)  
. module.exports = router;  

 in index.js
const route = require('./routes/route.js'); 
app.use('/', route);   (ye global middleware h)
-----------------------------------------------------------------------------------------
*/

/*
object is an instance of class

An object in JavaScript is a data structure that stores data as key-value pairs, allowing us to group related properties and methods together.
----------------------------------------------------------------------------------------------

Body-parser 
Body-parser is third party NPM and work as a middleware which helps to convert  
(the data of requestbody) 
 into JSON format. 
app.use('/', route) is global middleware.  
*/

middlewares

 /*
6. What are middlewares and why do you need them? 
 Middleware is a function that gets executed during the request-response cycle of an application performing tasks like logging, authentication, and data processing. 
middleware sits between endpoint and handlers.
it manages the flow of control & code reusability 
 
 -----------------------------------------------------------------------------------------------
What are the four functions of middleware systems?
Data management,API management, messaging, authentication, ((and, application services))  are all commonly handled by middleware. 

----------------------------------------------------------
What are the 3 types of middleware?
Middleware functions can be divided into three main categories:
 1. application-specific middleware,
 2. information-exchange  middleware 
 3. management and support middleware
-------------------------------------------------------------------------------------

1. Application-Specific Middleware
 Purpose: Custom logic for a specific application.
  When to Use: When we need something that applies to our whole app, but with custom rules.

Example:
app.use((req, res, next) => {
  if (req.query.user === 'admin') {
    req.isAdmin = true; // Custom logic for this app
  }
  next();
});
-------------------------------------------------------------------------

information-Exchange Middleware  (e.g., parsing JSON data)
This middleware focuses on enabling communication and data exchange between different systems, applications, or services, often across networks .

Example: Parsing JSON data so the server understands the client’s request.
-------------------------------------------------------------------------
app.use(express.json()); // parses incoming JSON
-------------------------------------------------------------------------

Management and Support Middleware  (e.g., logging)
 Purpose: Monitors, manages, or supports the app — often for security, performance, or debugging.
 Example: It handles tasks like logging, error handling, load balancing

const morgan = require('morgan');
app.use(morgan('dev')); // Logs requests for monitoring


----------------------------------------------------------

----------------------------------------------------------
Application-Level vs Route-Level Middleware
Application-Level Middleware
 The entire Express app using app.use().

Applies to: All routes (global).
When to Use: If the task is needed for every request.
Examples:

Logging every request
CORS handling
Parsing JSON bodies
Authentication for all APIs
app.use(express.json()); // applies everywhere



-------------------------------------------------------------------------------------------
Route-Level Middleware
Bound to: Specific routes or router instances.
Applies to: Only the routes you attach it to.
When to Use: If the task is needed only for certain endpoints.

Examples:
Admin access check
Route-specific validation
Route-specific logging
app.get('/admin', checkAdmin, (req, res) => {
  res.send('Admin Panel');
});

How to Decide: Application-Level vs Route-Level

"Does this apply to all routes?" → Application-Level ✅
"Is this only for one or few routes?" → Route-Level ✅

💡 Quick Rule:
Application-Level = Global tasks.
Route-Level = Targeted tasks.
-------------------------------------------------------------------------------------------*/
 
Q 9. Name the middlewares you have used in your assignments and project implementation.
/*
middlewares are 
a. multer (Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. )
 b. bodyparser 
 c. application- level middleware app.use() => i have use to find date and current route hit and ip 
 d.///////////////// router- level middleware- i have use to manipulate request and response like i have you for validation of emails, password and token et 
------------------------------------------------------------------------------------------------

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
*/
let promise_defination
/**
all concept of promises in javascript?

In JavaScript, promises are a way to handle asynchronous operations. promise are objects that represent the eventual completion or failure of an asynchronous operation and allow us to write asynchronous code in a more manageable way than using callbacks.

 Promises have become a core part of JavaScript and are widely used in modern JavaScript applications. Here are the key concepts related to promises

Promise States: A promise can be in one of three states:

Pending: The initial state before the promise is fulfilled or rejected.
Fulfilled: The state when the promise is successfully resolved with a value.
Rejected: The state when the promise encounters an error or fails, providing a reason for the failure.
Settled - This state represents that the promise has been either rejected or fulfilled.

Promise Creation: Promises are created using the Promise constructor. The constructor takes a single function (executor) as an argument, which is called immediately and receives two functions as parameters: resolve and reject. we use these functions to either fulfill or reject the promise based on the outcome of our asynchronous operation.

Chaining: Promises allow us to chain multiple asynchronous operations together. The then() method is used to attach fulfillment and rejection handlers to a promise. Each then() call returns a new promise, which enables chaining. Chained promises allow you to sequence asynchronous operations in a more readable and manageable way.

Handling Errors: Promises provide a mechanism to handle errors using the catch() method or by attaching a rejection handler using then(). If any promise in a chain is rejected, the control skips to the nearest rejection handler, allowing you to handle errors gracefully.

Promise.all(): The Promise.all() method takes an array of promises as an argument and returns a new promise. This new promise is fulfilled when all the promises in the array are fulfilled, or it is rejected when any of the promises in the array is rejected. It allows you to wait for multiple asynchronous operations to complete simultaneously.

Promise.race() : The Promise.race() method takes an array of promises as an argument and returns a new promise. This new promise is settled as soon as any of the promises in the array is settled, whether fulfilled or rejected. It can be used when we want to respond to the result of the first asynchronous operation that completes.

Promise.resolve() and Promise.reject(): These static methods are used to create already fulfilled or already rejected promises, respectively. Promise.resolve() creates a promise that is resolved with a given value, while Promise.reject() creates a promise that is rejected with a given reason.
-----------------------------------------------------------------------------
Promise.allSettled()
It takes an array of promises and returns a single promise.
That promise always resolves when all input promises have settled (either fulfilled or rejected).

--------------------------------------------------------------------------------------
exxample: 
const p1 = Promise.resolve(42);
const p2 = Promise.reject("Error happened");
const p3 = new Promise(resolve => setTimeout(() => resolve("Done!"), 500));

Promise.allSettled([p1, p2, p3])
  .then(results => {
    console.log(results);
  });
output :::::::::::::::::::::::::::::::::
[
  { status: 'fulfilled', value: 42 },
  { status: 'rejected', reason: 'Error happened' },
  { status: 'fulfilled', value: 'Done!' }
]

--------------------------------------------------------------------------------------
🔹 Example 2 – Compare with Promise.all()
const p1 = Promise.resolve("A");
const p2 = Promise.reject("B failed");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
  .then(values => console.log("All success:", values))
  .catch(err => console.log("Stopped at error:", err));

// With allSettled
Promise.allSettled([p1, p2, p3])
  .then(results => console.log("All results:", results));

  --------------------------------------------------------------------------------------
  
  Promise.any()
  🔹 What is Promise.any()?
It takes an array of promises and returns a single promise.
It resolves as soon as the first promise fulfills.
If all promises reject, it rejects with an AggregateError (special error type that holds all rejection reasons).

example 1::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const p1 = Promise.reject("❌ Failed 1");
const p2 = new Promise(resolve => setTimeout(() => resolve("✅ Success 2"), 200));
const p3 = new Promise(resolve => setTimeout(() => resolve("✅ Success 3"), 500));

Promise.any([p1, p2, p3])
  .then(value => console.log("First fulfilled:", value))
  .catch(err => console.log("All failed:", err));
solution : 
First fulfilled: ✅ Success 2

example 2::::::::::::::::::::::::::::::::::::::::::::::::::::All Fail
const p1 = Promise.reject("❌ Error 1");
const p2 = Promise.reject("❌ Error 2");

Promise.any([p1, p2])
  .then(value => console.log("First fulfilled:", value))
  .catch(err => {
    console.log("All failed!");
    console.log(err instanceof AggregateError); // true
    console.log(err.errors); // [ '❌ Error 1', '❌ Error 2' ]
  });
result:::::::::::::::::::::::::
  All failed!
true
[ '❌ Error 1', '❌ Error 2' ]


--------------------------------------------------------------------------------------
Async/Await : Introduced in newer versions of JavaScript, the async/await syntax provides a more synchronous style of writing asynchronous code using promises. The async keyword is used to define an asynchronous function, and the await keyword is used to pause the execution of the function until a promise is fulfilled or rejected.

*/
// Syntax defines the set of rules for writing programs. 

/**
// for (let i=0;i<4;i++){
//     setInterval(()=>{
// console.log(i,"#@# ii")
//     },4000)
---------------------------------------------------------------
//     setTimeout(()=>{
// console.log(i,"@#$ ii2")
//     },4000)
// }  // gives 0,1,2,3 
-------------------------------------------
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
//  let f=JSON.parse("text")
// console.log(f)

//========================================================================
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

Node.js REPL Shell
/***
Node.js REPL Shell
REPL in NodeJS stands for Read, Evaluate, Print, and Loop. it's an interactive environment for executing Node.js code and
debugging. 

Read: It reads the input provided by the user (JavaScript expressions or commands).
Eval: It evaluates the input (executes the code).
Print: It prints the result of the evaluation to the console.
Loop: It loops back, allowing you to enter more code and get immediate result

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

/**
-----------------------------------------------------------------------------------******--------

What are the main disadvantages of NodeJS?
Here are some main disadvantages of NodeJS listed below:

Single-threaded nature: It may not fully utilize multi-core CPUs, limiting performance.
NoSQL preference: Relational databases like MySQL aren't commonly used.
Rapid API changes: Frequent updates can introduce instability and compatibility issues.
 ----------------------------------------------------------------------------------------------

✅ What is a Buffer in Node.js?
A buffer is a temporary storage space for binary data, allowing Node.js to handle raw data directly.

📌 Key points
It is like an array, but stores only binary data.
Used when dealing with file systems, streams, or network data.

---------------------------------------------------------------------------------------
*/
let streams
/*
What are streams in NodeJS?
In NodeJS, streams are a powerful way to handle data in chunks rather than loading the entire data into memory all at once.

((Streams allow for the efficient processing of large volumes of data, especially where the data size is too large to fit into memory all at once)).

There are four types of the Streams:

Readable Streams: These streams allow us to read data. For example, reading data from a file or receiving HTTP request data. Example:
fs.createReadStream() or http.IncomingMessage.

Writable Streams: These streams allow us to write data. For example, writing data to a file or sending HTTP response data. Example:
 fs.createWriteStream() or http.ServerResponse.
 
 Duplex Streams: These are both readable and writable. we can both read and write data using the same stream. Example: A TCP socket.

 Transform Streams: These are a type of duplex stream where the data is transformed or modify as it is read and written. Example: A zlib stream to compress or decompress data.

-------------------------------------------------------------------------------------------
What is piping in NodeJS?
In NodeJS, piping refers to the process of passing the output of one stream directly into another stream. It allows data to flow through multiple streams without needing to store it in memory ((or temporarily write it to disk)). 
-------------------------------------------------------------------------------------------

 Explain the crypto module in NodeJS.
The crypto module is used for encrypting, decrypting, or hashing any type of data. This encryption and decryption basically help to secure and add a layer of authentication to the data. The main use case of the crypto module is to convert the plain readable text to an encrypted format and decrypt it when required.
---------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------
  Explain the use of the passport module in NodeJS
The passport module is used for adding authentication features to our website or web app. It implements authentication measure which helps to perform sign-in operations
--------------------------------------------------------------------------------
What is CORS in NodeJS?
CORS stands for Cross-Origin Resource Sharing.
cors is a security feature in browsers.
cors decides which websites can request data from our server.

📌 Why is it needed?
By default, browsers block requests coming from different origins (domain, port, or protocol) for security reasons.
-----------------------------------------------------------------------------------------
Explain the tls module in NodeJS..
The tls module provides an implementation of the Transport Layer Security (TLS) and Secure Socket Layer (SSL) protocols that are built on top of OpenSSL. 
It helps us to establish a secure connection on the network.
----------------------------------------------------------------------------------------------

Can you access DOM in Node?
No, you cannot access the DOM in NodeJS because NodeJS is a server-side environment, while the DOM (Document Object Model) is a client-side concept used in browsers to interact with HTML and XML documents.

--------------------------------------------------------------------------------------------
How to manage sessions in NodeJS?
Sessions in Node.js can be managed using the express-session module, which stores session data on the server.
 It helps in saving the data in the key-value pair. 

--------------------------------------------------------------------------------------
 
concept of stub in Node.js?
Stubs are used in writing tests which are an important part of development.
--------------------------------------------------------------------------------------

Describe the exit codes of Node.js?
Exit codes give us an idea of how a process got terminated or the reason behind termination. 
--------------------------------------------------------------------------------------

✅ What is an Event Emitter in Node.js?
EventEmitter is a class in Node.js used to handle events.
EventEmitter allows objects to emit (send) events and listen (react) to events.

EventEmitter lets our app do something when a specific event happens.
--------------------------------------------------------------------------------------

 Differentiate between process.nextTick() and setImmediate()  in node.js 

 ✅ process.nextTick()
process.nextTick() is a function in Node.js that schedules a callback to run immediately after the current function finishes execution, but before the event loop continues.

✅ setImmediate()
setImmediate() is a function in Node.js that schedules a callback to run on the next iteration (cycle) of the event loop, after I/O events are processed.


What is Libuv?
Libuv is a library used by Node.js to handle asynchronous I/O operations in a non-blocking way.
Libuv is the engine that powers Node.js to handle multiple tasks without getting blocked.


Libuv provides the event loop.
The event loop is the mechanism that uses Libuv to run asynchronous tasks efficiently.
//////////////////////////////
Event Loop is like a manager, checking a task list and doing tasks one by one quickly.
Libuv is the engine that powers this manager to handle everything smoothly. 
---------------------------------------------------------------------------------------------------

Continuous Integration and Continuous Deployment (CI/CD) in Node.js Development
Continuous Integration (CI) and Continuous Deployment (CD) automate the process of testing and deploying Node.js applications:

CI: Automatically build and test code changes in a shared repository whenever a new commit is pushed.
CD: Automatically deploy tested code changes to production or staging environments based on predefined criteria (e.g., passing tests, code review approval).

--------------------------------------------------------------------------------
What is a test pyramid in NodeJS?
The Test Pyramid is a strategy for structuring tests in a software project to ensure efficiency, maintainability, and good coverage. It consists of three levels: 
--------------------------------------------------------------------------------

Unit Tests (Base): Test individual components or functions in isolation. These tests are fast and numerous. Example: Testing a single function like add(1, 2).
Integration Tests (Middle): Test interactions between components to ensure they work together. These are slower than unit tests but cover more functionality. Example: Testing API routes to ensure they connect properly with the database.
End-to-End Tests (Top): Test the entire application flow from the user interface to the backend. These are slow and fewer in number. Example: Simulating user login and navigating the application
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
Explain the packages used for file uploading in NodeJS.the
The package used for file uploading in NodeJS is Multer. 

--------------------------------------------------------------------------------
Explain the util module in NodeJS
The Util module in NodeJS provides access to various utility functions. There are various utility modules available in the NodeJS module library.

OS Module: Operating System-based utility modules for NodeJS are provided by the OS module. 
Path Module: The path module in NodeJS is used for transforming and handling various file paths. 
DNS Module: DNS Module enables us to use the underlying Operating System name resolution functionalities. The actual DNS lookup is also performed by the DNS Module. 
Net Module: Net Module in NodeJS is used for the creation of both client and server. Similar to DNS Module this module also provides an asynchronous network wrapper.
--------------------------------------------------------------------------------

How to handle environment variables in NodeJS?
We use process.env to handle environment variables in NodeJS. We can specify environment configurations as well as keys in the .env file. 
--------------------------------------------------------------------------------

For NodeJS, why does Google use the V8 engine?
Google for the V8 engine for NodeJS of the following reasons mentioned below:

High Performance: V8 is a highly optimized JavaScript engine designed for speed. It compiles JavaScript directly into machine code, which makes it much faster than interpreted JavaScript.
Just-In-Time (JIT) Compilation: V8 uses JIT compilation, which translates JavaScript code into machine code during execution, enabling faster execution compared to traditional interpretation.
Cross-platform Compatibility: V8 is cross-platform due to which the NodeJS application can run on that platforms.
Integration with Google Chrome: The Google Chrome by using the V8 engine in the NodeJS ensures consistency in performance and features.
Asynchronous I/O Efficiency: The V8 engine can handle the non-blocking, asynchronous I/O operations which is important for handling the multiple tasks in NodeJS.


--------------------------------------------------------------------------------
What tools can be used to assure consistent code style?
ESLint can be used with any IDE to ensure a consistent coding style which further helps in maintaining the codebase.
--------------------------------------------------------------------------------
Why is Node.js single-threaded?
node.js was designed to be single thredded.
Node.js was created explicitly as an experiment in async processing. 

((This was to try a new theory of doing async processing on a single thread over the existing thread-based implementation of scaling via different frameworks)).


Is Node.js single-threaded?
Yes, Node.js is single-threaded but uses event-driven architecture and non-blocking I/O to handle multiple requests efficiently. 

What is the default scope of Node.js application?
local

How to check equality of two nodes?
isEqualNode()

----------------------------------------------------------------------------------------------------
How does Node.js handle concurrency despite being single-threaded.?
Node.js handles concurrency through asynchronous, non-blocking operations, allowing multiple tasks to run
simultaneously within a single thread.

What is control flow in Node.js?
Control flow in NodeJS refers to the sequence in which statements and functions are executed.it manage
asynchronous operations and error handling to ensure smooth program flow.
-----------------------------------------------------------

What is the difference between Node.js
and AJAX?
Node.js is a server-side runtime environment, while
AJAX is a client-side technique for asynchronously
updating parts of a web page.

-----------------------------------------------------------
What is event-driven programming
in Node.js?
Event-driven programming synchronizes multiple
events using event loops and callback functions to
simplify program flow.

-----------------------------------------------------------
What is callback hell?
Callback hell refers to the problematic situation caused by deeply nested callbacks, making code difficult to read and maintain.
-----------------------------------------------------------
Explain the use of timers module in
Node.js.
The timers module allows execution of code after a specified delay or immediately in the next event loop cycle using functions like setTimeout() and setImmediate()
-----------------------------------------------------------

 setTimeout() method
 function greet() {
  console.log("Hello after 2 seconds!");
}
setTimeout(greet, 2000); // Calls the 'greet' function after 2000 milliseconds (2 seconds)
console.log("This message appears immediately.");
--------------------------------------------------------------------------------
setImmediate() method
console.log('Start');
setImmediate(() => {
  console.log('setImmediate callback executed');
});
console.log('End');
output:
Start
End
setImmediate callback executed
******************************************************************
setInterval() method
const intervalID = setInterval(myCallback, 500,);

function myCallback(a, b) {
  console.log(a);
  console.log(b);
}

-----------------------------------------------------------
What are child processes in Node.js?
Child processes allow Node.js to handle multiple tasks concurrently by creating subprocesses that can run independently.
-----------------------------------------------------------
-----------------------------------------------------------


---------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
Differences between js event loop and node event loop ?

🔹 JavaScript Event Loop (Browser)

Runs inside browser's JS engine (Chrome, Firefox, etc.).

Responsible for handling:
1:)Call Stack (for executing synchronous code).
2:) Web APIs (for handling DOM, timers, fetch, etc).
3:) Callback Queue ((task ,message)queue ) (macrotasks)-→ e.g.,  setTimeout, setInterval, ((setImmediate (browser doesn’t have setImmediate) ))
4:) Microtask Queue which has higher priority → e.g., Promise.then, (promises, mutation observers).
---------------------------------------------------------------------------------
example : 
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));

console.log("End");

-----------------------------------------------------------------------
Start
End
Promise   // microtask runs before
Timeout
-=-=-=-=============================---------------------------------------------

🔹 Node.js Event Loop

Node.js uses libuv (C++ library) to handle async I/O.
Event loop is more complex than browser because Node.js has:

File system I/O
Network calls
Streams
Timers
process.nextTick
----------------------------------------------------------------------
Event loop in Node has 6 phases:
1:) Timers →  Runs callbacks scheduled by setTimeout and setInterval.
2:) Pending callbacks → executes I/O callbacks (like TCP errors).
3:) Idle, prepare → internal use.......  Only Node’s internal modules (like libuv) use it.
4:) Poll → 
The most important phase. Handles:
New incoming connections (like HTTP requests).
Reading/writing files (fs module).
Executing I/O callbacks.

5:) Check phase →   Executes callbacks scheduled by setImmediate().

6:) Close callbacks → Executes callbacks for things that are closed, like socket.on("close", ...) 
------------------------------------------------------------------------------------
👉 Priority of queues in Node:
process.nextTick → Always runs before promises.
Microtasks (Promise.then) → Runs after current phase, before going to next phase.
-------------------------------------------------------------------------------------------------
⚡ Example in Node:

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);
setImmediate(() => console.log("Immediate"));
process.nextTick(() => console.log("NextTick"));
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
---------------------------------------------------------------------------------------

Output in Node.js:

Start
End
NextTick    // higher priority
Promise
Timeout / Immediate (order may vary)
**************************************************************

3:) Idle, prepare 
🔹 Can developers use it?
❌ No.
There are no APIs (like setTimeout, setImmediate, etc.) that allow us to directly schedule callbacks into the Idle/Prepare phase.
Only Node’s internal modules (like libuv) use it.
--------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------
Differences between micro and macro task ? 
🔹 Microtasks

Very small, high-priority tasks.
Always executed immediately after the current phase,but before moving to the next phase.

Examples in Node.js:
process.nextTick() (special, even higher priority)
Promise.then() / catch() / finally()
queueMicrotask()
-------------------------------------------------------------
👉 Key Point: Microtasks run before macrotasks.
👉 Even if timers are ready, microtasks will empty first.
--------------------------------------------------------------------------
🔹 Macrotasks

Bigger tasks scheduled for later phases ( of the event loop.)
Executed one at a time in specific phases (Timers, Poll, Check).

Examples in Node.js:
setTimeout
setInterval
setImmediate

I/O callbacks (like fs.readFile)
👉 Key Point: Macrotasks happen after microtasks have finished.
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
🔑 Rules of Execution

All synchronous code runs first (top to bottom).
Then the microtasks queue runs (e.g. Promise.then, process.nextTick).
Then the macrotasks queue runs (e.g. setTimeout, setInterval, setImmediate).
This repeats in cycles.

example 
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");

👉 Execution order:
"A" → sync
"D" → sync
"C" → microtask (Promise)
"B" → macrotask (setTimeout)
--------------------------------------------------------------------------------
🔑 Memory in JavaScript

1. Memory Lifecycle

Every program (including JS) goes through:
Allocate memory → when we create variables, objects, functions, etc.
Use memory → read/write values, execute functions.
Release memory → when data is no longer needed, garbage collector frees it.

2. Memory Types

Stack (Primitive values & function calls)
Stores simple values: numbers, strings, booleans, null, undefined.

(Also stores function execution context.)

Heap (Objects & reference types)
Stores objects, arrays, functions.
Memory is allocated dynamically.
-------------------------------------------------------------------------------------
*/