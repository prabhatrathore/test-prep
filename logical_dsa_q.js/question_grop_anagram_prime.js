
// // Given an array of strings strs, group the anagrams together.
// // You can return the answer in any order.
// // Input: 
let strs = ["eat", "tea", "tan", "ate", "nat", "bat", "bike"]
// // Output: [["bat"],["bike"],["nat","tan"],["ate","eat","tea"]]

//////////////////////////////////////////////////////////////////
let tempArr = []
obj = {}
for (let i = 0; i < strs.length; i++) {
    let temp = strs[i].split("").sort().join("")
    if (obj[temp]) {
        obj[temp].push(strs[i])
    } else {
        obj[temp] = [strs[i]]
    }
}
console.log(obj)
console.log(Object.values(obj), "3")
////////////

///////////////////////////////////////////////////
let num = 100
let temp = []
let arr = []

function check(num) {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}
for (let i = 0; i < num; i++) {
    if (check(i)) {
        arr.push(i)
    }
}
// console.log((arr), "Arr23")
////////////////////////////////// find l.c.m.
let randomNum = 81
let randomNum2 = 729
let temp2 = []
for (let i = 0; i < randomNum; i++) {
    if (randomNum % i == 0 && randomNum2 % i == 0) {
        temp2.push(i)
    }
}
console.log(temp2[temp2.length-1],"temp22222") 
console.log(temp2,"temp2))))))))") 
//////////////////////////////
firs = "fist"

// console.log(firs,"firs")
firs = "second"
// console.log(firs,"again")
first = "   t  "
first = first.trim()
// console.log(first.trim().length)
// console.log(first.length)//1
//=============================
first = "schoolofchildren"
first = first.slice(2, 5)
// console.log(first)//hoo