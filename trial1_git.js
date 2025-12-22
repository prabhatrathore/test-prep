/**
-----------------------------------------------------------------------------------------------------------
GIT 

What is the difference between Git and GitHub?
Git : Git is a distributed version control system (dvcs) for tracking code changes locally.
GitHub: GitHub is A hosting service provider for Git repositories, adding collaboration tools like pull requests and code reviews.
----------------------------------------------------------
 
Commands:
git stash : git stash is a Git command that temporary saves our uncommitted changes (both staged and unstashed) so we can work on something else without losing our progress. 

git stash pop	Restores stashed changes.
git stash pop → Takes the changes back out from temporary location ((from the locker)) and applies them to our current branch.

git status: git status shows the current state of the working directory, (staging area and untracked files). 
 
git add [file] : git add means Stages a file for the next commit.

git branch: Lists branches, with * indicating the active branch.
git checkout -b [branch-name]: Creates a new branch.

git checkout [branch-name]: Switches to another branch.

git diff branchB...branchA: Shows differences in branchA not in branchB.
--------------------------------------------------------------------------------

git clone <repo-url>	 Copies a remote repo to your machine.
git commit -m "message"	 Saves staged changes with a message.
git push	Sends our commits to the remote repository (GitHub/GitLab).
git pull	Gets latest changes from remote and merges into our branch.
git branch	Shows all branches.
git checkout <branch-name>  	Switches to another branch.
git checkout -b <new-branch>	Creates & switches to a new branch.

git merge <branch>	Merges a branch into the current branch.
git cherry-pick <commit-hash>	✅ Takes a specific commit from another branch and applies (it) to our current branch .
git log	Shows commit history.
git revert <commit-hash>	Reverts a commit safely (makes a new commit).
git reset --hard <commit-hash>	Resets to a previous commit (dangerous — deletes changes)

-------------------------------------------------------------------------------------------------------

What is a Git repository ? 
 A repository (repo) is a storage location for a project’s files and their version history. It can be local (on our machine) or remote (on GitHub). The .git directory stores metadata.

how do you initialize a Git repository?
Answer: Run 'git init' in a project directory to create a new Git repository, initializing a .git subdirectory.
------------------------------------------------------------------------------------------------------

What is a commit?
Answer: A commit is a snapshot of changes in a repository, saved with a descriptive message (e.g., git commit -m "Add login feature"). It’s identified by a unique SHA hash.

What is a branch in Git?
A branch is a separate line of development within a repository, allowing work on features or fixes bugs, without affecting the main branch (e.g., main).

 A pull request (PR) is a GitHub feature to review changes from one branch to another
----------------------------------------------------------------------------------------------------------

What is the difference between git fetch and git pull ? 
git fetch [alias] : Downloads updates from a remote repository without merging.
git pull : Fetch and merge remote changes into the current branch.
------------------------------------------------------------------------------------------------------------

What is a .gitignore file?
Answer: A .gitignore file, exclude files from being tracked by Git, preventing unwanted commits

How do you set up user information in Git?
Answer: Use:
git config --global user.name "[name]": Sets your name.
git config --global user.email "[email]": Sets your email.
----------------------------------------------------------------------------------------------------------

What is the HEAD in Git?
HEAD is a pointer of the current branch or commit we’re working on. (It typically points to the latest commit in the active branch.)
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
What is a merge conflict and how do you resolve it?
A merge conflict occurs when Git cannot automatically resolve changes (e.g., same lines edited in two branches). To resolve:

----------------------------------------------------------------------------------------------------------

A fork is a copy of a repository under our GitHub account, allowing us to make changes without affecting the original. It’s used for contributing to open-source projects

----------------------------------------------------------------------------------------------------------

What is the staging area in Git?
Answer: The staging area is an intermediate layer where changes are prepared before committing. Use git add [file] to stage changes.

----------------------------------------------------------------------------------------------------

What is GitHub Actions, and how is it used?
Answer: GitHub Actions is a CI/CD tool for automating workflows (e.g., testing & deployment).

****************************************************************** 
which git command allow you to extract commit from one branch with in repository and intigrate them into another ?

✅ git cherry-pick

Simple meaning:
git cherry-pick lets us take a specific commit from one branch and apply (it) to another branch.

Example:
git checkout main
git cherry-pick <commit-hash>
****************************************************************** 

first time code push to github  repo
git add . 
git commit -m "add"
git remote add origin https://github.com/yourusername/my-node-app.git
git branch -M main
git push -u origin main

****************************************************************** 
✅ 2. Remove a file from Git tracking but keep it on disk

This is used when a file is committed or staged, but you now want Git to stop tracking it.

Single file
git rm --cached fileName
-------------------------------------------------
Folder
git rm -r --cached folderName

*************************************/

console.log('first');
let arr = [1, 1, 1, , , , , 2, 3, 4, 5, , 5, 9, , 86, 53]
let tempArr = []

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
        if (!tempArr.includes(arr[i])) {
            tempArr.push(arr[i])
        }
    }
}
// console.log(tempArr, 'tempArrtempArre')   //
// [
//   1, 2,  3,  4,
//   5, 9, 86, 53
// ]

let t = []
let t_min = []
for (let i = 0; i < tempArr.length; i++) {
    let getMax = Math.max(...tempArr)
    // console.log(getMax, 'getmax')
    t.push(getMax)
    let findIndex = tempArr.indexOf(getMax)
    tempArr.splice(findIndex, 1)
    i--
    //------------------------fetch ascending order 
    //------------------------fetch ascending order 
    // let getMin=Math.min(...tempArr)
    // t_min.push(getMin)
    // let findIndex=tempArr.indexOf(getMin)
    // tempArr.splice(findIndex,1)
    // i--
}
// console.log(tempArr, 'temppp', t)  //[]  temppp  [ 86, 53, 9, 5, 4,  3, 2, 1 ]
// console.log(t_min, "tmiiiiiiiii")   // [ 1, 2, 3, 4, 5, 9, 53, 86]
// What is a first order function
// What are the differences between cookie, local storage and session storage
// What is eval

// What is the difference between window and document

function squre(num, power) {
    let tem = 1n
    for (let i = 0; i < power; i++) {
        tem = BigInt(tem) * BigInt(num)
        console.log(tem, "w", i)
    }
    console.log(tem, 'power value')
}
// squre(2, 534267)
// squre(2, 57)
function isPrime(num) {
    let isPrime = true
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false
        }
    }
    return isPrime
}

function findPrime(num) {
    let arr = []
    for (let i = 2; i < num; i++) {
        arr.push(i)
    }
    let finalArr = [2]
    // console.log(arr, 'aaaaa')
    for (let j = 2; j < arr.length; j++) {
        let findPrimeNumber = isPrime(arr[j])
        if (findPrimeNumber) {
            finalArr.push(arr[j])
        }
    }
    console.log(finalArr, 'finalArrfinalArrfinalArr')

}

// findPrime(100) 

/** 
console.log(a)// [Function: a]
console.log(a() )// first  aaa
console.log(b)  // undefined 
console.log(bg)  // bg is not defined
function a() {
    console.log("first  aaa")
}
var b = function bg() {
    console.log("bbbb")
}
*/

const arrw = [1, 2, 3, 4, 2, 3, 5, 6, 3, 5];
let td = []
let objg = {}

for (let el of arrw) {
    // console.log(el, 'eeeeee')
    // td?.push(el)
    // if (td?.includes(el)) {
    objg[el] = (objg[el] || 0) + 1
    // } 
}
for (let le in objg) {
    if (objg[le] > 1) {
        td?.push(le)
    }
}

console.log(objg, )  // { '1': 1, '2': 2, '3': 3, '4': 1, '5': 2, '6': 1 } 
console.log( td, 'wwww')  // [ '2', '3', '5' ]
//-----------------------------------------------

let str = 'second'
function sa(s) {
    s = 'third'/// variable 's value not changed here
    str = 'changed'// this work
}
// console.log(str, 'sss')// second
sa(str)
// console.log(str, 'sss') // changed



/**
-------------------------------------------------------------------------------------------------------
Project Walkthrough (Refined): Describe a complex feature you worked on end-to-end where you had to interact with both the frontend and backend (e.g., a multi-step form or complex dashboard). Detail the flow of data from the user interface to the database and back. (Focus on architecture and data flow.)

The user fills out a multi-step form (Personal Details → Documents → Preferences).
Before final submission, the frontend compiles all steps into a single payload and sends it to the backend using a secure POST request.

On Backend Side (Validation + Processing)
Layered architecture:

Routes → Controllers → Services → Mongo Models

On submission, the controller:
Validates request body using Joi
save this details to db 

Database Flow (MongoDB)
I used a normalized structure:

User Collection
name
email
contact

Application Collection
userId (ObjectId reference)
personalInfo
documents
preferences
status
------------------------------------------------------------------------------------------------------- 

API Design Choice: When would you choose to use a RESTful API over a GraphQL API (or vice-versa) for a new service? Explain the trade-offs in terms of data efficiency and client-side complexity.
I choose RESTful API when the service has well-defined resources, simple CRUD operations, and predictable data structures.
Simple, resource-based APIs (GET/POST/PUT/DELETE )
Low client complexity (client just hits fixed endpoints)
Caching is easier 
Easier to maintain 
------------------------------------------------------------------------------------------------------- 

Problem-Solving Scenario: Describe a time a live application experienced a performance degradation or bug that was difficult to reproduce locally. How did you approach debugging and identifying the root cause in the production/staging environment? (Focus on tools/process.)
I first checked production logs (and metrics using)
PM2 logs,   (process manager)

Since the issue didn’t appear locally, I added lightweight logging around suspicious code paths:
(console.time() in Node)
Database response time (mongoose.set("debug", true))
and then we resolve accordingly
-------------------------------------------------------------------------------------------------------

Database Scaling: You've noticed a particular database query is slowing down a critical API endpoint. List three distinct strategies (beyond just upgrading the server) you would investigate to optimize the performance.
1.Add or Improve Indexing
2.Introduce Caching Redis
For frequently accessed endpoints, I would cache the query result in Redis with an expiry (TTL).
3.Optimize Query & Data Model
I would check if the query can be rewritten more efficiently—reducing unnecessary fields,reduce db calls.
add pagination and limit 
------------------------------------------------------------------------------------------------------- 

Authentication vs. Authorization: Explain the difference between Authentication and Authorization. Describe how you would securely implement session management using JWTs (JSON Web Tokens) in your backend service.

Authentication is verifying who the user is.
Authorization is verifying what the user is allowed to do.
add here TTL for token. 
check roles of user before request is going to services handler
------------------------------------------------------------------------------------------------------- 

 Concurrency & Race Conditions: Briefly explain the concept of a race condition in a multi-user environment. Give a real-world software example and a specific method you'd use to prevent it (e.g., using locks or transactions).

 Answer: Concurrency & Race Conditions

A race condition happens when two or more users/processes try to access or modify the same data at the same time, and the final outcome depends on the unpredictable order of execution. ((This often causes inconsistent or incorrect results)).

Real-world example:
In an e-commerce system, two users try to purchase the last item in stock at the same moment. Both requests read stock = 1 before either updates it, so both orders get confirmed—even though only one item is available.

How I prevent it:
I handle this using atomic DB operations / transactions.
For example, with MongoDB I use a transaction with findOneAndUpdate + $inc (with a condition stock > 0).
Only the first transaction succeeds; the second fails gracefully.
------------------------------------------------------------------------------------------------

HTTP Method Use: What is the primary functional difference between the HTTP methods PUT and PATCH when designing a RESTful API, and when is each appropriate?

📌 When to use PUT?
When you want to fully update or replace a resource.
Example: Updating a full user profile with all fields.

📌 When to use PATCH?
When you want to modify only specific fields.
Example: Updating just the user’s email or phone number.
---------------------------------------------------------------------------------------------

Performance Optimization: List three specific techniques (e.g., related to assets, rendering, or network) you have used to measurably improve the load time or runtime performance of a web application.

Code Splitting & Lazy Loading:
I reduced initial bundle size by loading components only when needed. This significantly improved first-load time and reduced unnecessary JavaScript parsing.

Image Optimization (Compression + WebP + Responsive Images):
I optimized large assets by converting images to modern formats (WebP/AVIF) and serving responsive sizes. This reduced asset payload and improved page load speed.

Caching & CDN Delivery:
I implemented browser caching and delivered static assets via a CDN. This reduced server load and made repeat visits load much faster by serving resources from edge locations.

---------------------------------------------------------------------------------------------
Component Lifecycle & Re-rendering: In your primary frontend framework, describe what causes a component to re-render. How have you proactively optimized or avoided unnecessary re-renders in a complex UI?

Memoization (React.memo) – I wrap pure functional components to ensure they only re-render when their props actually change
---------------------------------------------------------------------------------------------

Browser Storage Trade-offs: When would you choose to store data in Local Storage versus Cookies versus Session Storage? 
Mention a key security or performance consideration for each choice.

Local Storage:
I use Local Storage for long-term, non-sensitive data (e.g., theme preference, cached UI settings).

Security consideration: It’s not secure (accessible via JS), so I never store tokens or sensitive info.

Performance consideration: Higher capacity and fast reads, but updates don’t trigger network requests.

Session Storage:
I use Session Storage for temporary, per-tab data (e.g., step forms, transient user state).

Security consideration: Also accessible via JS, same security limitations as Local Storage.

Performance consideration: Data is cleared automatically when the tab closes, preventing memory bloat.

Cookies:
we use Cookies when I need data to be sent to the server on every request, like session identifiers or auth tokens (with HttpOnly, Secure, SameSite).

Security consideration: Can be secured using HttpOnly to prevent XSS token theft.

Performance consideration: They add overhead to every HTTP request, so I keep them small to avoid slowing down network calls.
---------------------------------------------------------------------------------------------

Asynchronous UX: Describe a situation where a slow asynchronous operation (like a network request) created a poor User Experience (UX). How did you use visual feedback (e.g., skeletons, loading states) and error handling to improve it?

Instead of a blank screen, I displayed skeleton cards and charts. This reassured users that data was loading and improved perceived performance.

Loading States:
I implemented a global loader for the initial fetch and component-level spinners for secondary requests, so users always knew the app was working, not stuck.

Optimistic UI (where possible):
For certain actions like toggling a setting, I updated the UI immediately and synced the change in the background.

Error Handling:
I added clear error states with retry options (e.g., “Unable to load analytics — Retry”). This prevented users from being stuck on an empty screen.
---------------------------------------------------------------------------------------------

Testing Strategy: Explain the difference between Unit Tests and Integration Tests. If you were given limited time, which type of test would you prioritize for a new, critical business logic function, and why?

Unit Tests focus on testing a single function or component in isolation.
Integration Tests verify how multiple modules work together

If I had limited time and needed to test a critical business logic function, I would prioritize Unit Tests first.
Reason: Unit tests give fast feedback, isolate edge cases, and ensure the core logic is mathematically and functionally correct before integrating it with other parts. Once the core is stable, integration testing can be added later to validate end-to-end behavior.
---------------------------------------------------------------------------------------------

Git Workflow & Conflict: Describe the Git branching strategy we prefer for collaborative feature development. Detail the steps you take to safely and systematically resolve a complex merge conflict.

I prefer using a Feature Branch Workflow on top of a stable main (or master) branch. Each developer creates a separate feature branch from main, works independently, and submits a Pull Request for review before merging back.
---------------------------------------------------------------------------------------------

CI/CD & Deployment Basics: Describe the typical flow your code takes from a successful Git commit to being live and running in a production environment. Mention at least two distinct steps in the process (e.g., CI/CD, containerization).

Continuous Integration (CI):

When I push or merge code to the main branch, a CI pipeline triggers. It runs automated tests, linting, type checks, and builds the application. If any step fails, the pipeline stops to prevent bad code from moving forward.
---------------------------------------------------------------------------------------------

1️⃣ Amazon ECS (Elastic Container Service)
What it is:
A service to run and manage Docker containers.

Simple words:
ECS runs your Node.js app inside Docker containers and keeps them running, scaling, and restarting if they crash.

-------------------------------------------------------------------------------------------------------------------
2️⃣ Amazon RDS (PostgreSQL)
What it is:
A managed relational database service.

Simple words:
RDS is a ready-made SQL database (PostgreSQL) that AWS installs, updates, and backs up for you.
-------------------------------------------------------------------------------------------------------------------

3️⃣ Amazon DynamoDB
A serverless NoSQL database.

Simple words:
DynamoDB stores fast, flexible data without fixed tables or joins.

Example:
Store sessions, tokens, logs
Handle millions of requests automatically
No server management
-------------------------------------------------------------------------------------------------------------------
4️⃣ Amazon S3 (Simple Storage Service)

What it is:
An object storage service.

Simple words:
S3 stores files like images, videos, PDFs, and backup
-------------------------------------------------------------------------------------------------------------------
5️⃣ Amazon Elasticsearch (OpenSearch)
What it is:
A search and analytics engine.

Simple words:
Elasticsearch helps you search data very fast and analyze logs.

Example:
Search products by name
Full-text search
Analyze application logs
--------------------------------------------------
6️⃣ Amazon CloudFront
What it is:
A Content Delivery Network (CDN).

Simple words:
CloudFront delivers your images and static files from servers closest to users.

Example:
Faster image loading
Less load on backend
Global users get fast access
-----------------------------------------------------------------
7️⃣ Amazon ECR (Elastic Container Registry)
What it is:
A Docker image storage service.

Simple words:
ECR stores your Docker images securely so ECS can run them.

Example:

Push Docker image after build
ECS pulls image from ECR
Deploy new versions easily
-------------------------------------------------------------------------------------------------------------------



 */

const input = ["caa", "aaa", "aab"];

let tg = ''
let temp = []
const output = input.map((str) => {
    if (str[0] === 'a') {
        // console.log(str[str.length-1],'@@@@@@@@@@@@@@@pppp')
        temp.push(str[str.length-1])
    } else {
        // console.log(str[0],'!!!!!pppp')
        temp.push(str[0])
    }
}
);
// console.log(temp, 'tempppppppp')

console.log(output);
// ---------------------------------------------------

function longestConsecutive(nums) {
    if (nums.length === 0) return [];
    // console.log(nums, "before")

    // for (let i = nums.length; i > 0; i--) {
    //     for (let j = 0; j < i; j++) {
    //         if (nums[j] > nums[j + 1]) {
    //             [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
    //         }
    //     }
    // }
    // console.log(nums, "after----------------------------")
    // return
    // nums = [...new Set(nums)].sort((a, b) => a - b);
    // console.log(nums, "after")

    // let longest = [];
    // let current = [nums[0]];

    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] === nums[i - 1] + 1) {
    //         current.push(nums[i]);
    //     } else {
    //         if (current.length > longest.length) {
    //             longest = current;
    //         }
    //         current = [nums[i]];
    //     }
    // }
    // console.log(current, 'current', longest, "longestt")
    // return current.length > longest.length ? current : longest;
    //----------------------------------------------------------

}

const arrr = [201, 100, 4, 200, 1, 3, 2, 199, 203, 202, 204];
// console.log(longestConsecutive(arrr));
