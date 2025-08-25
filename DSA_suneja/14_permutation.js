/**
 * given two string write a method to decide if one is permutation of the other.
  
 * steps:
 * 1 : check if they are the same exact  strings -else
 * 2: check the length of both string -else
 * 3:create object of each one.
 * 4: check if the object character count are equal -else
 * return true  
 */

function sol(str1, str2) {
    let obj = {}
    if (str1.length != str2.length) {
        return false
    }
    for (let i of str1) {
        obj[i] ? obj[i]++ : obj[i] = 1
    }
    result1 = true
    for (let i of str2) {
        obj[i] ? obj[i]-- : result1 = false
    }
    return result1
}
let result = sol('qwert12', 'qwert12')
console.log(result, "result=")