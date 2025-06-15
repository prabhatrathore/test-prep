var arr = [];
var arr2 = [];
console.log(arr, "arr`");
arr = "234";
console.log('5-2'==3,"+---333)")
console.log('5-2'=='3',"**+---333)")
console.log('5-1'-1=='3',"**+---3)")
console.log('5-1'-1==3,"////**+---3)")
console.log(isNaN() == isNaN(), "1")//true
console.log(isNaN(2) == isNaN(2), "21")//true
console.log(isNaN(2) == isNaN('2'), "212")//true
console.log(isNaN(2) == isNaN('4-2'), "2121")//false
console.log(isNaN(4-2) == isNaN('4-2'), "21241")//false
console.log(isNaN('4-2') == isNaN('4-2'), "2124321")//true
// In the first console.log(), isNaN() is called without any arguments. In this case, isNaN() returns true. This is because the result of isNaN() is always true when the argument passed to it cannot be converted to a number. Since no argument is passed, the expression isNaN() evaluates to true. Similarly, isNaN() with no argument on the right side of the comparison also returns true, and the two true values are compared with ==. This comparison returns true, so the first console.log() outputs true.
console.log(isNaN(4) == isNaN("4"), "13")//true
// In the second console.log(), isNaN(4) and isNaN("4") are both called separately. Since 4 is a number, isNaN(4) returns false. Similarly, "4" can be converted to a number, so isNaN("4") also returns false. Therefore, both sides of the comparison evaluate to false == false, which is true. So the second console.log() also outputs true.
console.log(Number.isNaN(NaN),"efweew"); // true
console.log(Number.isNaN(42)," dfvdfvdv");  // false
console.log(Number.isNaN('hello'),"dssfs"); // false
console.log(isNaN('hello'),"dss3rfs"); // ttttt
console.log(isNaN('hello')==isNaN('hello'),"dferccffff"); // ttttt

console.log(NaN == NaN, "2")
console.log(NaN === NaN, "2-");
console.log(true == 3, "3");
console.log(true == 1, "-3");//true
console.log(true == "3", "4");//false
console.log(true == "asd", "433");//false
console.log(true == "1", "4ef33");//true

console.log(false == "3", "5");//false
console.log(false === "3", "6");//false
console.log(false === "0", "6==");//false
console.log(false === 0, "-6==");//false
console.log(false == 0, "0-6==");//ttttttt
console.log(false == "", "=0-6==");//tttttt
console.log(false == undefined, "*=0-6==");//ffffff
console.log(false == null, "*=0-6eee==");//false
console.log(null == null, "*=0-ee6==");//ttttttttt
let r=null
let r1=null
console.log(r == r1, "eeeeew*=0-ee6==");//ttttttttt
console.log(r === r1, "eeeee6==");//ttttttttt
console.log(null === null, "*=0-wfd6==");//ttttt
console.log(null === NaN, "*1=0-df6==");//ffffff
console.log(null == NaN, "*2=0-6==");//fffff
console.log(null == "NaN", "*2=0-6==");
console.log(arr == arr2, "*33=0-6==");
console.log(arr === arr2, "*23=0-6==");
console.log({} === {}, "*14=0-6==");
console.log([] == [], "*4=0-6==");
console.log([] == [], "*46==");
console.log("" == "", "*47==");
console.log("" === "", "*48==");
console.log("" === "0", "*49==");
console.log("" == "0", "*50==");
console.log("hello" + "word" == "hello" + "word", "*51==");
console.log("hello" + "word" === "hello" + "word", "*52==");
console.log("hello" + "word" == "hello" + "word ", "*53==");

// console.log("hello" - "word" == "hello" - "word ", "*54==");
// console.log("hello" - "word", "*55==");
// console.log("hello" - "7", "*56==");
// console.log("hello" - 7, "*57==");
// console.log("hello" + 7, "*58==");
// console.log("hello" + NaN, "*59==");
// console.log("hello" + "NaN", "*60==");
// console.log("3" + "3", "*61==");
// console.log("3" - "3", "*610==");
// console.log("3" + "-3" + 22, "*62==");
// // The expression "3" + "-3" evaluates to the string "3-3". When the + operator is used with two strings, it concatenates them.
// // Then, the expression "3-3" + 22 evaluates to the string "3-322". Again, when the + operator is used with a string and a number, it converts the number to a string and concatenates it to the string.
// // Finally, the entire expression "3-322" + "*62==" is logged to the console.
// // The second console.log statement logs the number 32 and the string "*64==" to the console. Here's why:

// console.log("3" - "-3" + 26, "*64==");
// // minus operator first convert string into number ,then perform action 
// // The expression "3" - "-3" evaluates to the number 6. When the - operator is used with two strings, JavaScript tries to convert them to numbers before performing the operation. In this case, it can successfully convert both "3" and "-3" to numbers.
// // Then, the expression 6 + 26 evaluates to the number 32. When the + operator is used with two numbers, it adds them together.
// // Finally, the entire expression 32 + "*64==" is logged to the console. Because one of the operands is a string, JavaScript converts the number 32 to a string and concatenates it with the string "*64==".

// // let obj = {
// //   a: 6,
// //   b: 8,
// // };
// // const { b, a } = obj;

// // console.log(b, "65==");
// // let arr3 = [3, 4, 5, 7];
// // const [a1, b1, , y] = arr3;
// // console.log(b1,"66**")
// // console.log(y,"67**")
// // for(let i=0;i<5;i++){
// //     setTimeout(() => {
// //         console.log(i,"ui")
// //     }, 1000);
// // }
// // for(var i=0;i<5;i++){
// //     setTimeout(() => {
// //         console.log(i,"=ui")
// //     }, 1000);
// // }
// // for(const i=0;i<5;i++){
// //     setTimeout(() => {
// //         console.log(i,"11=ui")
// //     }, 1000);
// // }//assignment to constant variable 

 
// console.log(2-1n,"101=")
console.log(""+"","string102=")
console.log(""-"","string103=")
console.log("4"-"12","string104=")
console.log("4"+"-12","string105=")
console.log("4"+"-12"-"2","string106=")
// // In this case, it appears that the behavior of the expression "console.log("4"+"-12"-"2")" is browser-dependent. When I tested it in some browser consoles, including Chrome, it did indeed log NaN to the console, which is the correct behavior given that the string "4-12" cannot be converted to a number. However, it seems that in your environment or version of Chrome, the expression is logging the number 2 instead, which is unexpected.





// //primitive types
// let num =9
// let num2=num
// num++
// num2++
// console.log(num,"num1")
// console.log(num2,"num2")
// //reference types
let array1 = ["apple", "mango", "grapes"]
let array2 = array1
// array1.push("extra")
array2.push("extra2")

console.log(array1, "array1")
console.log(array2, "array2")
console.log(array1 == array2, "123")
console.log(array1 === array2, "12w3")
console.log([] === [], "-=123")
console.log([] == [], "-=09123")
let obj = { a: 3, b: 9 }
let obj2 = obj
// let obj2 = {...obj}
obj2['p']=90
console.log(obj,"objobj",obj2,"======----wef23")
console.log(obj == obj, "ob23")//tttttttt
console.log(obj === obj, "ob2335")//tttttt
console.log(obj === obj2, "ob233eee5")//tttt
console.log(obj == obj2, "odfvdfb233eee5")//tttt



if ("0") {
    console.log("true '0' ")//tr
} else {
    console.log("false  '0' ")
}
if ("false") {
    console.log("true 1")//ttttt
} else {
    console.log("false 2")
}
if (new Date()) {
    console.log("true 4")//ttttttt
} else {
    console.log("false 5")
}
if (-42) {
    console.log("true (-42")////
} else {
    console.log("false (-42")
}

if (24n) {
    console.log("true 6")//ttttttt
} else {
    console.log("false 7")
}

if (-3) {
    console.log("true 11 ")
} else {
    console.log("false  12")
}
if (Infinity) {
    console.log("true 13")//exec
} else {
    console.log("false 14")
}

if (-Infinity) {
    console.log("true Infinity  15")//execute
} else {
    console.log("false  16")
}
if (0) {
    console.log("true 17")
} else {
    console.log("false 18")//ffffffffff
}
if (-0) {
    console.log("true 19")
} else {
    console.log("false  20")//fffffffffff
}
// if (on(BigInt)) {
//     console.log("true ")//
// } else {
//     console.log("false")
// }

if (NaN) {//in terms of truthy/falsy values, NaN is considered falsy. 
    console.log("true 21")
} else {
    console.log("false  22")//ffffff
}

if (NaN == NaN) {
    console.log("true 23")
} else {
    console.log("false  24")//consider falsy value//this wil execute 
}
if (isNaN) {
    console.log("true 25")//this will execute 
} else {
    console.log("true 26")

}
if (isNaN == isNaN) {
    console.log("true 27")//execute this one 
} else {
    console.log("false  28")
}


console.log("A" - 1);//NaN
console.log(2 + "-2" + "2");//2-22
console.log(2 - "-2" + "2", "==1");//42 ==1

// When you execute console.log(2 + "-2" + "2"), the output in the console will be "2-22". Here's how this expression is evaluated step-by-step:

// The first operation is addition 2 + "-2", where the + operator is used with a number and a string. In this case, the number 2 will be coerced to a string to perform concatenation instead of addition. So, the expression will result in "2" + "-2" = "2-2".

// The second operation is another concatenation operation 2-2, which is actually a string "2-2" followed by the string "2". Since both operands are strings, the + operator performs concatenation instead of arithmetic addition. Therefore, the result of this operation will be "2-2" + "2" = "2-22".
// So, the final output of console.log(2 + "-2" + "2") will be the string "2-22".





console.log("Hello" - "World" + 78, "===9");//NaN ===9

console.log("Hello" - "World" + 78, "-8");//NaN -8
console.log(NaN === NaN, "33333")//false

console.log(NaN == NaN, "22222")//false  

// In JavaScript, both NaN===NaN and NaN==NaN are always false, regardless of the values being compared. This is because NaN (Not a Number) is a special value in JavaScript that represents an undefined or unrepresentable value resulting from an operation. It is not equal to any value, including itself.

// Therefore, the output of the first console.log(NaN===NaN,"33333") statement will be false 33333.

// Similarly, the output of the second console.log(NaN==NaN,"22222") statement will also be false 22222


const a = {
    user_id: "12323",
    is_flag_clip: 2
};
let { is_flag_clip, user_id } = a;
// console.log(is_flag_clip);//2

{
    var x = 9
}
console.log(x, "var")//can access the x variable
{ let n = 8 }
// console.log(n,"n")//cannot access variable//n is not defined
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve("resol")
    }, 1000)
})
// promise.then((el)=>console.log(el))

const res = async () => {
    try {
        let get = await promise
        console.log(get, "get23")
    } catch (err) {
        console.log(err, "err")
    }
}
res()
//////////////////////////////////////////////////////////////////////////////////////////
function func1() {
    setTimeout(() => {
        console.log(g, "gggggg33ggg")
        console.log(h, "hhhhh2hhh")
    }, 3000);
    var g = 4
    let h = 9
}
// func1()

console.log(null == null, "null")
console.log(null === null, "n2ull")
///////////////////////////////////////////////////
let random = { a: 33 }
random = "trign"
if(! typeof random=="String"){
    console.log("random")
}else{
    console.log(" string-random")///////this

}
if(""==""){
    console.log("empty true")///////////////////thi si will work
}else{
    console.log("empty false")
}
////////////////////////////////////////


// import fetch from "node-fetch";
// let fetch = require('node-fetch')

// const fetch = require("node-fetch");


// const xhr = new XMLHttpRequest();
// console.log(xhr)
//JSON mai key ko double-quotes mai dete hai mandatory h 
//  json object and j.s object dono alag h

//=============fetch======
const URL = 'http://jsonplaceholder.typicode.com/posts'

// fetch(url)//j.s. mai inbuilt h ye and ye khud get request krega by default
// const value = fetch(url);
// const ab = fetch(URL)
// console.log(ab)
// console.log(fetch(url))
// console.log(value)
//====================================================================

//async & await
async function getPosts() {//ye function bydefault  promise return krega 
    // const response = await fetch(URL)  // ye wait krega jabtak promise resolve ya reject  nhi ho jata
    // console.log(response)
}
getPosts()
// const ab = getPosts()
// console.log(ab)
//====================================
/**
 * diffference between library and framework
 */

var str = 'Hello world '
var res1 = str.charCodeAt(0)
console.log(res1,"str.charCodeAt(0)")
//================================
var str2 = 'hello world function'
var res2 = str2.endsWith('nn')
console.log(res2,"str2.endsWith('nn')")
//=================================
var str3 = String.fromCharCode(65)
console.log(str3,"String.fromCharCode(65)")
//=================================
var str4 = 'hello world'
var res5 = str4.repeat(3)
console.log(res5,"str4.repeat(3)")

//=================================
var str5 = 'welcome to india'
var res6 = str5.substring(1, 4)
console.log(res6,"str5.substring(1, 4)")
console.log(str5,"str5.substring(1, 4)23")
//===================
var str = ['apple', 'grapes', 'banana']
var res7 = str.entries();
console.log(res7,"str.entries();2");
//=======================