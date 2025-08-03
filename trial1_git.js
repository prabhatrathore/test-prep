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

git checkout [branch-name]: Switches to another branch.
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

: A pull request (PR) is a GitHub feature to review changes from one branch to another

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
----------------------------------------------------------------------------------------------------------

What is the HEAD in Git?
Answer: HEAD is a pointer of the current branch or commit we’re working on. It typically points to the latest commit in the active branch.
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
What is a merge conflict and how do you resolve it?
Answer: A merge conflict occurs when Git cannot automatically resolve changes (e.g., same lines edited in two branches). To resolve:

----------------------------------------------------------------------------------------------------------
A fork is a copy of a repository under our GitHub account, allowing us to make changes without affecting the original. It’s used for contributing to open-source projects


What is the staging area in Git?
Answer: The staging area (or index) is an intermediate layer where changes are prepared before committing. Use git add [file] to stage changes

What is GitHub Actions, and how is it used?
Answer: GitHub Actions is a CI/CD tool for automating workflows (e.g., testing,& deployment).

*******************************************************************************************************

JavaScript Notes Summary
History of JavaScript

1995: Brendan Eich at Netscape created a scripting language in 10 days.
Original Names:
First called Mocha.
Renamed to LiveScript.
Finally named JavaScript for marketing, as Java was popular, but Java and JavaScript are unrelated.

-----------------------------------------------------------------------------------------------------
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

Since 2015, new features are released yearly by the TC39 committee

Convert String to Number:
Add a plus sign (+) before a string.
Example: let str = "169"; console.log(typeof (+str)); → Outputs number.
---------------------------------------------------------------------------------------------

Convert Number to String:
Add an empty string ("") to a number.
Example: let num = 10; console.log(typeof (num + "")); → Outputs string.
---------------------------------------------------------------------------------------------

Strings in JavaScript
Definition: Strings store text (words, sentences) and use zero-based indexing (first character is at index 0).
Examples:
let str = "pro"; 
(stores "pro").

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
--------------------------------------------------------------------------------

Undefined and Null

Undefined:
Returned when:
A variable is declared but not assigned a value.
Accessing a non-existing object property.
Accessing an array's element out of bounds.

Example:
 let str;
  console.log(str);  → Outputs undefined.
-------------------------------------------------------------------
Null:
Means "no value" and is explicitly assigned.
Type of null is object.
Treated as false in conditions.
Example: 
let val = null;
 console.log(typeof val); 
 → Outputs object.
-------------------------------------------------------------------

BigInt
Purpose: Handles large numbers beyond 2^53 - 1 (JavaScript’s safe integer limit).
Declaration:
Add n to a number: let num = 9816543219865252772n;.
Use BigInt(): let num = BigInt(9816543219865252772);.

Note: bigint Does not support decimal values.
---------------------------------------------------------------------------
Methods in Objects
Definition: A function inside an object is called a method.

Example:
const person = {
  name: "Alex",
  age: 21,
  about: function() {
    console.log(`My name is ${this.name}`);
  }
};

person.about(); // Outputs "My name is Alex"
-----------------------------------------------------------------------
------------------------------------------------------------------------------

Prototypes
Prototypes allow us to add properties or methods to an object constructor, making them available to all instances created from that constructor.

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
-----------------------------------------------------------
How it works:
Person is a constructor function.
Person.prototype.greet adds the greet method to the Person prototype.
All instances of Person (like person) inherit the greet method via the prototype chain.
Calling person.greet() accesses this.name from the instance, outputting "Hi, I'm John".

Prototypes are shared across all instances, making them memory-efficient for methods.

-------------------------------------------------------------------

The new Keyword
Purpose: Creates a new object from a constructor function.
Steps:
-> Creates a new empty object.
-> Sets the object’s prototype.
-> Points this to the new object.
-> Executes the constructor function with this.
-> Returns the new object.

*/

/**
// const  a2 = 10;
// function f() {
//     a2 = 9
//     console.log(a2)//assignment to constant variable
// }
// f();

// The code snippet provided declares a constant variable a2 and initializes it with the value of 10. Then, it defines a function f that attempts to reassign a new value of 9 to a2. However, when f is executed, it throws an error "assignment to constant variable" because a2 is a constant variable and cannot be reassigned a new value.

// In JavaScript, const is a keyword used to declare a variable whose value cannot be reassigned once it has been initialized. 
// This behavior is different from variables declared with var or let, which can be reassigned new values.

// In this case, since a2 is a constant variable, any attempt to modify its value after it has been initialized will result in an error being thrown at runtime. The error message "assignment to constant variable" indicates that you are attempting to modify a constant variable, which is not allowed.

// const  a2 = 10;90
// function f() {
//    let a2 = 9
//     console.log(a2)//9
// }
// f();
////////////////////////////////////////////////////////////////////
// let  a2 = 10;
// function f() {
//     a2 = 9  
//     console.log(a2)//9
// }
// f();
// console.log(a2,"aaaaa")//9
////////////////////////////////////////////////////////////////
let  a2 = 10;
function f(a2) {
    a2 = 9  
    console.log(a2)//9
}
f(a2);
console.log(a2,"2222222222222")//  10  
// //========================================

// //====================

a = {}
const b = { key: "b" }
const c = { key: "n" }
const d = { n: 3 }
a[b] = 98
console.log(a, "aaaaaa ")//{ '[object Object]': 98 }
console.log(JSON.stringify(a), "a22222aaaaa ")//{"[object Object]":98} 
console.log(a[b], "a[bbbbbb")//98
console.log(a, "##AS()*")//123   // { '[object Object]': 98 }
a[c] = 123
console.log(a, "@@AS()*")//123   // { '[object Object]': 123 }
a[d] = 6
console.log(a, "!!AS()*")//123  // { '[object Object]': 6 }
a['e'] = 1
a[{ d: 'update' }] = 31
a[{}] = 32
console.log(a[b], "()*")//123  //32 
console.log(a, "AS()*")//123    { '[object Object]': 32, e: 1 } AS()*
---------------------------------------------------------------------------------------

let string1 = '324e-1'
string1 = Number(string1)


console.log(string1, "string1string1")//    32.4 string1string1

// '324e-1' is in scientific notation, meaning:
// 324 × 10⁻¹ = 32.4

// ------------------------------------------------------------------------------------------
//setinterval 
//setinterval ,settimeout ki tarh hee h .
/**
 * settimout hamare function ko call kr rha tha kuch time baad 
 */
console.log('script start');
setInterval(() => {
    let sum = 0
    // for (let i = 10; i >= 0; i--) {
    //     sum += i
    // }
    // console.log('setinterval===', sum)
    while (sum < 10) {
        sum++
    };
    sum++
    // console.log("setinterval", Math.floor(Math.random() * 10));
}, 1000);

console.log('after script')


let kl = 4
function so() {
    console.log(kl)//Cannot access 'kl' before initialization
    let kl = 9
}
// so()

//callback understand
function task1(caalback) {
    console.log('function 1 is done')
    caalback()
};

task1(() => {
    console.log("2nd function is print")
});

//e.g3 on callback ==================

// function addTwoNumber(num1, num2, onsuccess, onfailure) {
//     console.log(`there is two num which we add ${num1},${num2}`)
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         onsuccess(num1, num2)

//     } else {
//         onfailure()
//     }
// }

// function onsuccess(number1, number2) {
//     console.log(number1 + number2)
// }
// function onfailure() {
//     console.log('wrong input')
//     console.log('invalid input ')
// }
// addTwoNumber(2, '3', onsuccess, onfailure)

//e.g4======================================= same qurstion

function addTwoNumber(num1, num2, onsuccess, onfailure) {
    // console.log(`there is two num which we add ${num1},${num2}`)
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        onsuccess(num1, num2)
    } else {
        onfailure()
    }
};

// function onsuccess(number1, number2) {
//     console.log(number1 + number2)
// }
// function onfailure() {
//     console.log('wrong input')
//     console.log('invalid input ')
// }

addTwoNumber(2, 3, (number1, number2) => {
    console.log(number1 + number2, 'onsuccess print ')
}, () => {
    console.log('wrong input')
    console.log('invalid input ')
});

// -------------------------------------------------------------------
//synchronous programmig vs asynchronous programming

//synchronous programming 
// console.log('beforee loop')
for (let i = 0; i < 1000; i++) {
    // console.log("inside", i)
}

// console.log('after loop')
//j.s is synchronous programming and single threaded.
//line by line execute hota hai code..
//===================================

//asynchronus programming
/**
 * 
 * first take a look at set time out function
 * set time out ek function lega as a input and saath mai lega time 
 * ye function kitni der baad run krana h 
 */
// console.log('script-start')

function start() {
    console.log('hello world,inside setitmeout =====')
}
setTimeout(start, 2000)

// console.log('script-end')

//e.g.2.==============settime out with 0 sec
// console.log('strart file ')
// setTimeout(() => { console.log('hello,settimeout with zero second') }, 0)

// console.log("befre looping")
//====================
for (let i = 0; i < 10; i++) {
    // console.log('inside for-loop', i)
}
// console.log("after settimenot")
//analyse

/**
 * first line execute, then j.s. ko nhi pta settimeout ke baare mai
 *  to ye browser ke pass bhj dega 
 * browser ke pass rhega aur execute krke result return kr dega. 
 *0 second baad 
 but js next line pr mmove krega aur execute krega aaage ka code 
 browser wala return last mai print hoga 
 */

//--------------------------------------------------------=
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolve');
    }, 2000);
});
// console.log('inbetween promise');
async function sol(req, res) {
    let arr = await promise1
    console.log(arr)
    console.log('promise after')
};
// sol()

for (var i = 0; i < 3; i++) { //change var , let const
    // change let ,var const 
}
console.log('===i"value===', i)

//=======parameter destructuring
let obj = {
    "name": "alex",
    age: 12,
    address: 'delhi'
};
function sol2({ name, age }) {
    console.log(name, '===name')//alex ===name
    console.log(age)  //12
};
sol2(obj)
console.log("=========================");
//=========================================

//============set========

let set2 = new Set()
// A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.

set2.add('e0ee')
set2.add('wjengwigw')
let t = { name: 'ram' }
set2.add(t)
// set2.clear()     // clear property :to clear the set 
//  set2.delete("eeeeeeeeee")//delete property :specific element to delete 
let result = set2.has("e0ee")// has property tell the element exist or not 
let result1 = set2.has(t)// has property tell the element exist or not 
console.log(result, "WSDCVBVCD", result1, "resultg22222")
// console.log('=====  ==============')
console.log(set2, "BBBBBB")
arr = [...set2];
console.log(arr, 'XSWEDC')
