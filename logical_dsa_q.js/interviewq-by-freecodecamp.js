/**
 * check anagram 
 * two string are anagram if they'are made of the same characters with the same frequencies.
 */
function checkAnagram(str1, str2) {
    let obj1 = {}
    let obj2 = {}
    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] ? obj1[str1[i]]++ : obj1[str1[i]] = 1
    }
    for (let i = 0; i < str2.length; i++) {
        obj2[str2[i]] ? obj2[str2[i]]++ : obj2[str2[i]] = 1
    }
    // console.log(obj1)
    // console.log(obj2)

    for (let i in obj1) {
        // console.log(i, obj1[i])
        if (!obj2[i]) {
            return false
        }
        if (obj2[i] != obj1[i]) { return false }
    }
    return true
}
let res = checkAnagram("string", 'string')
console.log(res)


/**
 * if string are identical, then return false, -zero edits
 * create character maps of both  strings
 *  check if each character are of same type and value.
 * if the counter is 2 or more, then return false.
 *
 * return true, 
 * e.g.=>
 * (pale,ple)=>true
 * (pales,pale)=>true
 * (pale,kale)=>true
 * (pale,bake)=> false   relapce p with b and l with k 
 */

function checkString(str1, str2) {
    if (str1 == str2) { return false }
    let counter = 0
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] ? obj1[str1[i]]++ : obj1[str1[i]] = 1
    }
    // console.log(obj1)
    for (let i = 0; i < str2.length; i++) {
        obj2[str2[i]] ? obj2[str2[i]]++ : obj2[str2[i]] = 1
    }
    // console.log(obj2)
    for (let i in obj1) {
        // console.log(i, '-------')
        // console.log(obj2[i], '-------obj2[i')
        // console.log(obj1[i], '-----obj1[i--')
        if (obj1[i] != obj2[i]) {
            counter++
        }
        // console.log(counter)
        if (counter > 1) return false
    }
    // if (counter == 1) return true
    return true

}
// let res1 = checkString('pale', 'bake');
let res1 = checkString('pale', 'ple');
// console.log(res1,"res1111")
/**
 * find the longest word in array
 */
let str1 = 'the india is bigger than australia'
function findLongestWord(str) {
    str = str.split(' ')
    console.log(str, "str231")
    let longest = ''

    for (let i = 0; i < str.length; i++) {
        // console.log(str[i],"str[i]===")
        if (str[i].length > longest.length) {
            longest = str[i]
        }
    }

    console.log(longest, 'longest word & their length is :', longest.length)
}
// findLongestWord(str1)
/**
 * return the provided string with the first letter of each word capitalised. make sure the rest of the word is in lower case 
 */

function capitalisedFirstLetter(str) {
    let word = str.split(" ")
    for (let i = 0; i < word.length; i++) {
        // console.log(word[i].slice(1),"word[i].slice(1)")
        word[i] = word[i][0].toUpperCase() + word[i].slice(1)
    }

    console.log(word)
}
// capitalisedFirstLetter("i'm a litte tea pot")
console.log("======11111111111=====")
let str = "i'm a litte tea pot"

var convert = str.split(" ").map(word => word[0].toUpperCase()
    + word.slice(1)
)
// console.log(convert, '====1=1=1=1==11==');

/**question
 * input:[[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]
 * ouput:[5,27,39,1001]
 *                                         
 */
function findLargest(arr) {
    let longest = []
    for (let i = 0; i < arr.length; i++) {
        let large = 0
        for (let value = 0; value < arr[i].length; value++) {
            // console.log(arr[i][value])
            if (arr[i][value] > large) {
                large = arr[i][value]
            }
        }
        longest.push(large)
        large = ""
    }
    console.log(longest);
};
let array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
// findLargest(array)
//////////////////////////////
/**question:
 * check if a string which has two parameter (str,target) make sure str will end with target else return false 
 * bastina ,a =>true return 
 * connor, m=>false return
 */
console.log("======33333333======")
function checkStringEndWithTarget(str, target) {
    if (str[str.length - 1] == target) {
        return true
    }
    return false;
}
let checked = checkStringEndWithTarget("boolean", "n")
// console.log(checked)
/**
 * repeat a string 
 * e.g
 * (+,3)=>  "+++"
 * ('abc',3) => "abcabcabc"
 */
function repeatString(str, num) {

    let result = ''
    while (num > 0) {
        result = result + str
        num--
    }
    console.log(result)

}
// repeatString("*//", 3)


