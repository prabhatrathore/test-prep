const arrw = [1, 2, 3, 4, 2, 3, 5, 6, 3, 5];
let td = []
let objg = {}

for (let el of arrw) {
    console.log(el, 'eeeeee')
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

console.log(objg, 'wwww', td, 'wwww')

let str = 'second'
function sa(s) {
    s = 'third'/// variable 's value not changed
    str = 'changed'// this work
}
console.log(str, 'sss')
sa(str)
console.log(str, 'sss')
/**
-----------------------------------------------------------------------------------------------------------
GIT 

What is the difference between Git and GitHub?
Git : Git is a distributed version control system (dvcs) for tracking code changes locally.
GitHub: GitHub is A hosting service for Git repositories, adding collaboration tools like pull requests and code reviews.
----------------------------------------------------------
 
Commands:
git stash : git stash is a Git command that temporary saves our uncommitted changes (both staged and unstashed) so we can work on something else without losing our progress. 

git stash pop → Takes the changes back out from temporary location ((from the locker)) and applies them to our current branch.

git status: git status shows the current state of the working directory, staging area and untracked files. 
 
git add [file] : git add means Stages a file for the next commit.

git branch: Lists branches, with * indicating the active branch.
git checkout -b [branch-name]: Creates a new branch.

git checkout [branch-name]: Switches to another branch.
git merge [branch]: Merges the specified branch into the current branch.
git log: Shows commit history.

git diff branchB...branchA: Shows differences in branchA not in branchB.
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
git fetch [alias]: Downloads updates from a remote repository without merging.
git pull: Fetch and merge remote changes into the current branch.

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

*******************************************************************************************************/

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

/**
 updates

04-11-25
Surya hirepool -> isko Friday (07-11-25) ka time dia h -> interview ka link nhi aaya h abhi tk

techfourTechnology -> resume dia ->update lena h   

GRAPHQL-> hr nodejs 16 1025 delhi -> updatelena h -> screening round ho gya tha
----------------------------------------------------------------------------------------------

oodles tech 1st round virtual second round/manager round will be onsite,, 7 de rhe


05-11-2025
apply 
https://www.neuriot.com/join.html    -> 
 */

/**
 order module discussion 
 05-11-25
 https://www.ubereats.com/gb/store/colony-restaurant/XHwlKF22Wzetl3xtWvlDUg?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas
 yaha pr 
 
 1. modules 
 featured items kaisa aayenge ? 
 kon select krega ? konssa product konse number pr h ? 

 
 */