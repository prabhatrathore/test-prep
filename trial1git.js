/**
 


-----------------------------------------------------------------------------------------------------------
GIT 

What is the difference between Git and GitHub?
Answer:
Git: A distributed version control system (dvcs) for tracking code changes locally.
GitHub: A hosting service for Git repositories, adding collaboration tools like pull requests and code reviews.
----------------------------------------------------------

Commands:
git status: Shows modified files and staging status.
git add [file]: Stages a file for the next commit.

git branch: Lists branches, with * indicating the active branch.
git branch [branch-name]: Creates a new branch.

git checkout: Switches to another branch (incomplete; should be git checkout [branch-name]).
git merge [branch]: Merges the specified branch into the current branch.
git log: Shows commit history.

git diff branchB...branchA: Shows differences in branchA not in branchB.

-------------------------------------------------------------------------------------------------------

What is a Git repository?
Answer: A repository (repo) is a storage location for a project’s files and their version history. It can be local (on your machine) or remote (on GitHub). The .git directory stores metadata.

how do you initialize a Git repository?
Answer: Run 'git init' in a project directory to create a new Git repository, initializing a .git subdirectory.

------------------------------------------------------------------------------------------------------

What is a commit?
Answer: A commit is a snapshot of changes in a repository, saved with a descriptive message (e.g., git commit -m "Add login feature"). It’s identified by a unique SHA hash.

What does git status do?
Answer: git status Shows the current state of the working directory and staging area, listing modified, staged, and untracked files.

What is a branch in Git?
Answer: A branch is a separate line of development within a repository, allowing work on features or fixes without affecting the main branch (e.g., main).

: A pull request (PR) is a GitHub feature to propose and review changes from one branch to another


What is the difference between git fetch and git pull?
Answer:
git fetch [alias]: Downloads updates from a remote repository without merging.
git pull: Fetches and merges remote changes into the current branch.


What is a .gitignore file?
Answer: A .gitignore file, exclude files from being tracked by Git, preventing unwanted commits

How do you set up user information in Git?
Answer: Use:
git config --global user.name "[name]": Sets your name.
git config --global user.email "[email]": Sets your email.


What is the HEAD in Git?
Answer: HEAD is a pointer of the current branch or commit we’re working on. It typically points to the latest commit in the active branch.

What is a merge conflict and how do you resolve it?
Answer: A merge conflict occurs when Git cannot automatically resolve changes (e.g., same lines edited in two branches). To resolve:

----------------------------------------------------------------------------------------------------------
A fork is a copy of a repository under our GitHub account, allowing us to make changes without affecting the original. It’s used for contributing to open-source projects


What is the staging area in Git?
Answer: The staging area (or index) is an intermediate layer where changes are prepared before committing. Use git add [file] to stage changes

What is GitHub Actions, and how is it used?
Answer: GitHub Actions is a CI/CD tool for automating workflows (e.g., testing, deployment).

*******************************************************************************************************
JavaScript Notes Summary
History of JavaScript

1995: Brendan Eich at Netscape created a scripting language in 10 days.
Original Names:
First called Mocha.
Renamed to LiveScript.
Finally named JavaScript for marketing, as Java was popular, but Java and JavaScript are unrelated.


Browser Wars:
Netscape used JavaScript.
Microsoft’s Internet Explorer copied features and created JScript.


EcmaScript:
To standardize scripting across browsers, Ecma International (founded 1996) created EcmaScript.
JavaScript + Ecma rules = EcmaScript.
Key versions:
ES1 (1997): First version.
ES5 (2009): Added new features.
ES6 (2015): Major update, also called Modern JavaScript.


Since 2015, new features are released yearly by the TC39 committee.



Convert String to Number:
Add a plus sign (+) before a string.
Example: let str = "169"; console.log(typeof (+str)); → Outputs number.


Convert Number to String:
Add an empty string ("") to a number.
Example: let num = 10; console.log(typeof (num + "")); → Outputs string.



Strings in JavaScript

Definition: Strings store text (words, sentences) and use zero-based indexing (first character is at index 0).
Examples:
let str = "pro"; (stores "pro").


Common String Methods:
trim(): Removes extra spaces.
slice(): Extracts part of a string.
charAt(): Gets a character at a specific index.
toString(): Converts to string.
concat(): Joins strings.
substring(): Extracts part of a string.
indexOf(): Finds the position of a substring.
toUpperCase(): Converts to uppercase.
lastIndexOf(): Finds the last position of a substring.
toLowerCase(): Converts to lowercase.



Undefined and Null

Undefined:
Returned when:
A variable is declared but not assigned a value.
Accessing a non-existing object property.
Accessing an array element out of bounds.


Example: let str; console.log(str); → Outputs undefined.


Null:
Means "no value" and is explicitly assigned.
Type of null is object.
Treated as false in conditions.
Example: let val = null; console.log(typeof val); → Outputs object.


BigInt

Purpose: Handles large numbers beyond 2^53 - 1 (JavaScript’s safe integer limit).
Declaration:
Add n to a number: let num = 9816543219865252772n;.
Use BigInt(): let num = BigInt(9816543219865252772);.


Note: Does not support decimal values.

Ternary Operator

Definition: A short way to write conditional statements (also called conditional operator).
Syntax: let variable = condition ? valueIfTrue : valueIfFalse;.
Example:let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // Outputs "Adult"


Explanation: If age >= 18 is true, result is "Adult", else "Minor".

Map Data Structure

Purpose: Similar to objects but allows any value as keys (objects only allow strings or symbols).
Example:const person = new Map();
person.set("Name", "Alex");
console.log(person); // Outputs: Map { "Name" => "Alex" }


Methods:
get(key): Gets the value for a key.
set(key, value): Adds or updates a key-value pair.
delete(key): Removes a key-value pair.
clear(): Removes all key-value pairs.
has(key): Checks if a key exists (returns true or false).
keys(): Returns an iterator of all keys.



Methods in Objects

Definition: A function inside an object is called a method.

Example:const person = {
  name: "Alex",
  age: 21,
  about: function() {
    console.log(`My name is ${this.name}`);
  }
};

person.about(); // Outputs "My name is Alex"



The this Keyword

Purpose: Refers to the object executing the current code.

Example:

function info() {
  console.log(`My name is ${this.name}`);
}

const person = { name: "Cody", about: info };
person.about(); // Outputs "My name is Cody"


Explanation: this refers to the person object when about is called.

Call, Apply, and Bind Methods

Purpose: Control the value of this in functions.
Call:
Invokes a function with a specified this and arguments.

Example:
function say(greet) {
  console.log(`${greet} ${this.name}`);
}
const user = { name: "Alex" };
say.call(user, "Hello"); // Outputs "Hello Alex"

------------------------------------------------

Apply:
Like call, but arguments are passed as an array.
Example:say.apply(user, ["Hi"]); // Outputs "Hi Alex"

---------------------------------------------------------------------------

Bind:
Returns a new function with a fixed this and optional arguments.
Example:const myFun = say.bind(user);
myFun("Hey"); // Outputs "Hey Alex"

------------------------------------------------------------------------------


Prototypes

Purpose: Add new properties or methods to an object constructor.
Example:
function Person() {
  this.name = "John";
  this.age = 23;
}
Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};
const person = new Person();
person.greet(); // Outputs "Hi, I'm John"



The new Keyword

Purpose: Creates a new object from a constructor function.
Steps:
Creates a new empty object.
Sets the object’s prototype.
Points this to the new object.
Executes the constructor function with this.
Returns the new object.


*/

/*
**************************************************

Clustering in Node.js leverages multiple CPU cores to improve the performance of a Node.js application. Since Node.js is single-threaded by default, it runs on a single process, utilizing only one CPU core. The cluster module in Node.js allows us to create multiple worker processes that share the same server port, enabling parallel processing and better handling of concurrent requests.


Key Concepts of Clustering
Master Process: The main process that spawns and manages worker processes.

Worker Processes: Child processes that handle incoming requests. Each worker runs its own event loop and can process tasks independently.

Load Balancing: The master process distributes incoming connections across workers, typically in a round-robin fashion.
Inter-Process Communication (IPC): Workers can communicate with the master process or other workers using messaging.

How Clustering Works
The cluster module forks multiple worker processes (usually one per CPU core).
The master process listens for incoming connections and delegates them to workers.
Each worker runs the same application code but operates independently, handling its share of requests.
If a worker crashes, the master can restart it to maintain reliability.
Example: Basic Clustering in Node.js
Here’s a simple example using the cluster module to create a clustered HTTP server:


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
Benefits of Clustering
Improved Performance: Utilizes multiple CPU cores, increasing throughput for CPU-intensive tasks or high-concurrency scenarios.
Scalability: Handles more simultaneous connections, ideal for web servers or APIs.
Resilience: The master can restart crashed workers, improving reliability.
No External Dependencies: The cluster module is built into Node.js, requiring no additional packages.
Limitations
State Management: Workers don’t share memory, so state (e.g., sessions) must be managed externally (e.g., using Redis or a database).
Not for All Workloads: Clustering is most effective for I/O-heavy applications (e.g., HTTP servers). CPU-bound tasks may require other solutions like worker threads.
Increased Complexity: Managing multiple processes and IPC adds complexity to the application.
Best Practices
Match Worker Count to CPU Cores: Use os.cpus().length to determine the number of workers for optimal resource utilization.
Handle Worker Crashes: Implement cluster.on('exit') to restart failed workers.
Use External State Management: For applications requiring shared state, use tools like Redis or a database.
Monitor Performance: Test whether clustering improves performance for your specific use case, as overhead from forking processes can sometimes outweigh benefits for low-traffic apps.
Consider PM2 for Production: While the cluster module is great for simple clustering, tools like PM2 offer advanced features like process management, monitoring, and zero-downtime restarts.
Example with PM2
For production, you might use PM2 to manage clustering. Install PM2:

bash

Copy
npm install -g pm2
Run your app with clustering:

bash

Copy
pm2 start app.js -i max
The -i max flag tells PM2 to create a worker for each CPU core.

When to Use Clustering
High-Traffic Web Servers: Clustering shines in handling many HTTP requests concurrently.
API Servers: Distributes API requests across workers for better throughput.
Real-Time Apps: For apps using WebSockets (e.g., with Socket.IO), clustering can help scale connections.

When Not to Use Clustering 
Single-Threaded Tasks: If your app is heavily CPU-bound (e.g., machine learning inference), consider worker threads or offloading to a separate service.
Low Traffic: For small-scale apps, the overhead of managing workers may not be worth it.
Advanced Clustering
For more complex scenarios, you can:

Use sticky sessions for WebSocket or session-based apps (e.g., with the sticky-session package).
Implement custom load balancing by configuring how the master distributes connections.
Use worker threads (via the worker_threads module) within workers for CPU-intensive tasks.
If you need a deeper dive into any specific aspect (e.g., IPC, sticky sessions, or performance testing), let me know!






*/