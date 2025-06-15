/**
 * sum sqr diffrences
 * 
 * e.g. 10
 * sum of the sqr of the first ten natural no. is 
 * 1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2 + 7^2 + 8^2 + 9^2 + 10^2 = 385
 * sqr of the sum of the first ten natural no. is 
 * (1+2+3+4+...10)^2
 * 55^2 = 3025
 * 
 * difference between is 
 * 3025-385 = 2640
 *
 */
function diff(n) {
    let sumOfSqr = 0
    let sum = 0
    for (let i = 1; i <= 10; i++) {
        sumOfSqr = sumOfSqr + i * i
        sum = sum + i
    }
    sum = sum * sum

    // console.log(sum)
    return sum - sumOfSqr

};
console.log(diff(10))
/**
 * includes method return true || false
 * 
 * index method return index else -1 
 */
let arr = [2, 3, 4, 5, 67]
console.log(arr.includes(2), "11111")
let str = "hello world"
console.log(str.includes("hello"))

let str1 = "fool"
let str3 = "li"
console.log(str1.indexOf(str3), "index-method");
console.log(arr.indexOf(31), "index-method in array");
/**
 * match  method 
 */
console.log("====11111111111111=====");

var sent = "tutorials is very new"
var count = sent.match(/w1 /g) //give number of time appears 
var cc = count ? count.length : false
console.log(cc, "match=emthod")
console.log("====2222222222=====");

var j = "foo"
var regex = /oo/  //give true
console.log(regex.test(j))

//search
var st = "a rainy work"
var n = st.search("rainy")
console.log(n)
console.log("===3333333333333===")
/**
 * how to delete property from object
 */
let obj = {
    name: "asok"
}
console.log(obj.hasOwnProperty("name"))
delete obj.name
console.log(obj)
//replace 
str3 = "a beatiful summer has own art summer , summer has own days"
console.log(str3.replaceAll('summer', "winter"))
console.log(str3.replace('summer', "winter"));

let str4 = "dog has own dog house and dog car and dog and dog "
console.log(str4.replace(/dog/g, 'cat'))
////////////////////////////
/**
 * split() method array mai convert krta h
 * join method remove array structure '[]'
 */