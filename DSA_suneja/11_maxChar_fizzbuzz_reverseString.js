/**
 * how to find maximum charactor in an array .
 * and how many times it appears. 
 */
/**
 * steps to proceed to answer:
 * first make key-value pairs.
 */
// str = [...str];
// console.log(str)

let result = (string) => {
    let obj = {};
    // for (let value of str) {
    //     // console.log(value)
    //     obj[value] = (obj[value] || 0) + 1
    // }
    for (let value of string)
        obj[value] ? obj[value]++ : obj[value] = 1
    let num = 0
    let str4 = ''
    // console.log(obj);
    for (value in obj) {
        if (obj[value] >= num) {
            num = obj[value]
            str4 = value
        }

    }
    return `${str4} appeared : ${num} times`
}
let str = 'aabbbccccc'
console.log(result(str))
// console.log(obj)


/**
 * write a program to print to the screen number 1 to n.
 * for multiples of  3, print 'fizz',
 * for multiple of 5 print "buzz"
 * for multiple of of botth print "printbuzz"
 */
function sol(n) {
    n % 3 == 0 && n % 5 == 0 ? console.log('fizzbuzz') : n % 5 == 0 ? console.log('buzz') : n % 3 == 0 ? console.log('fizz') : console.log(n, "provide multiple of 3 ||5")
}
sol(16)
function sol2(n) {
    if (n % 3 == 0 && n % 5 == 0) {
        console.log('fizzbuzz')
    } else if (n % 3 == 0) {
        console.log('fizz')
    } else if (n % 5 == 0) {
        console.log('buzz')
    } else {
        console.log(n)
    }
}
sol2(15)
    //https://www.youtube.com/watch?v=cL1HB_IC9Fc&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=7&ab_channel=BabAcademy



    //-----------------------------------------------------------------------------------------



    /**
 * given a string  ,reverse it 
 * 'apple' =='elppa'
 */
/**
 * solution 1: 
 *  given string convert it into array 
 * reverse it the array 
 * turn the array back to the string 
 */
/**
 * sol 2:
 * given string -create empty string 
 * loop throgh each container
 * return the reversed
 */
// let arr = [...str];
// const reverse = (str) => {
//     let str1 = str.split("").reverse("").join("");
//     // let str2 = str1.reverse()
//     // arr = str2.join('')
//     console.log(str1)
//     // return arr
// }
// let str = 'mango';
// reverse(str)

const { arrayBuffer } = require("stream/consumers");

//================================================
(function (str) {   //anonymous function
    let str1 = '';
    for (let char of str) {
        str1 = char + str1
    };
    console.log(str1)
});
('welcome')
function reverse(str) {
    let str2 = ""
    for (let value of str) {
        str2 = value + str2
        // console.log(value)
    }
    console.log(str2)
} reverse("abcdefghijkl")

let arr = [2, 3, 5, 7, 1, 3, 2];
let sol21 = []
for (let i = 0; i < arr.length; i++) {
    sol21= arr[i] + sol21
}
console.log(...sol21, "111111111111111")




// ...........................................
