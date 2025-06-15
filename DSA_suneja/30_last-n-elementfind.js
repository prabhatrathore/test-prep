/*
write a functioon that takes an array and a number as argument .
it should return the last element of array 

input :[1 ,2, 3, 4, 5, 6, 7] ,4
output: [ 4,5,6,7]
*/
function sol(arr, n) {
    let arr2 = []
    for (let i = arr.length - 1; i > 0; i--) {
        if (i >= n) {
            arr2 = arr2 + + arr[i]
            // arr2.push(arr[i])
        }
        // console.log(i)
    }
    console.log([...arr2]);
}
let arr = [1, 2, 3, 4, 5, 6]
let n = 2
sol(arr, n)
console.log("===================");
console.log(typeof ['array'])

/**
 * write a function that takes a string as argument  remove the frist 3 character of string,
 * return the result 
 */
function removeChar(str) {
    let str2 = ""
    for (let i = 0; i < str.length; i++) {
        // console.log(str.indexOf('l'))
        // console.log(str[i]);
        if (i < 3) {
            continue
        } else {
            str2 = str2 + (str[i])
        }
        // return true
    }
    return str2

}
const reso = removeChar("hello-world ");
console.log(reso)//lo-world
console.log("+====333333333333333333=================")
/**
 * write a function that takes a string as argument  remove the last 3 character of string,
 * return the result 
 */
function removeCharLast(str) {
    // str = str.split("")
    // console.log(str)
    let str2 = ""
    for (let i = 0; i < str.length; i++) {//7 -3 =4 
        // console.log(str.indexOf('l'))
        // console.log(str.length);
        if ((str.length - 1) - 2 <= i) {
            continue;
        } else {
            str2 = str2 + (str[i])
        }
        // return true
    }
    return str2;
}
const reso2 = removeCharLast("harry-potter");
console.log(reso2)
console.log("+====4444444444444444===========")
/**
 * write a function that takes a string as argument  print only three 3 character of string,
 * return the result 
 */
function printchar(str) {
    // str = str.split("")
    // console.log(str)
    let str2 = ""
    for (let i = 0; i < str.length; i++) {//7 -3 =4 
        // console.log(str.indexOf('l'))
        // console.log(str.length);

        if (i < 3) {
            str2 = str2 + (str[i])
        }
        // return true
    }
    return str2;
}
const reso3 = printchar("shyam-ram");
console.log(reso3)
console.log("555555555555555==============")
/**
 * 
 * write a function that takes a  string  as argument
 * extract the first half of string , return the result.
 * input: "abcdefgh"
 * output: "abc"
 * input:1234,
 * output: 12
 */

function firstHalf(str) {
    let str2 = ''
    let mid = Math.floor(str.length / 2)
    for (let i = 0; i < str.length; i++) {
        if (i < mid) {
            str2 = str2 + str[i]
        }
    }
    console.log(str2)

}
let str = 'abcdefg';

firstHalf(str);
