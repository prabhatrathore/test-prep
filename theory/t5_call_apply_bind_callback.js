/*
All three are used to set the value of 'this' inside a function.

call Method.--------------
'call' invoke a function immediately and set the value of 'this' inside that function. we can also pass arguments to the function one by one.
*/
function say(greet) {
    console.log(`${greet} ${this.name}`);
}
const user = { name: "Alex" };
say.call(user, "Hello"); // Outputs: Hello Alex

/*
2. apply Method
apply is similar to call, but instead of passing arguments one by one, we pass them as an array.
  It also invokes the function immediately and sets the value of 'this' .  
*/

function say(greet) {
    console.log(`${greet} ${this.name}`);
}

const user1 = { name: "Alex" };
say.apply(user1, ["Hi"]); // Outputs: Hi Alex

/* . bind Method
 bind doesn’t calls the function immediately. Instead, it creates a new function with a fixed 'this' value (and optional arguments) that we can call later.
*/

function say(greet) {
    console.log(`${greet} ${this.name}`);
}

const user2 = { name: "Alex" };
const myFun = say.bind(user2); // Creates a new function with `this` set to `user`
myFun("Hey"); // Outputs: Hey Alex

let callback
/* 
In JavaScript, a callback function is a function that is passed as an argument to another function and is executed by that function. Callbacks can be either synchronous or asynchronous, depending on how they are implemented.

A synchronous callback function is executed immediately by the function that it is passed to. The program will wait for the callback to finish executing before it moves on to the next line of code. Here's an example:

*/
function addNumbers(x, y, callback) {
  const result = x + y;
  callback(result);
}

function logResult(result) {
  console.log(`The result is ${result}`);
}

addNumbers(2, 3, logResult); // outputs "The result is 5"

/* 
Asynchronous Callback Example in JavaScript
*/
function fetchData(callback) {
  // Simulate a delay (like data coming from server)
  setTimeout(() => {
    const data = "User data from server";
    callback(data); // call the function after delay
  }, 2000); // 2-second delay
}

function displayData(data) {
  console.log("Received:", data);
}

fetchData(displayData);
console.log("Fetching data... Please wait...");

// Fetching data... Please wait...
// (After 2 seconds)
// Received: User data from server
//////////////////////////////////////////////////////////////////////////////////////////////