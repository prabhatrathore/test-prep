const { copyFileSync } = require("fs")

function sol() {
    var a = b = 3//iss line ka mtlb ye h ki ==>
    // b=3 //global sscope ho gaya ye isilye access ho pa rha 
    // var a = b//ye function scope 
}
sol()
// console.log(a)//a is not defined
console.log(b)// 3 
console.log(typeof a)// undefined
console.log(typeof b)// 3 
/**
 * 
 */
function sol1() {
    {
        return {
            name: "hello"
        }
    }
}
console.log(sol1());

console.log(1 + -"1" + "2")
console.log("a" + "b" + "2")
console.log("a" - "b" + "2")
console.log("a" - "b" + 2)
console.log("1111111111=======");
// hoisting mai hum ek function declare krne se phele use kr skte  
var a = 2
function sol2() {
    a = 10
    return;
    var a = function () { }//yaha hoisting concept use ho rha 
}
sol2();
console.log(a)
/**
 * https://www.youtube.com/watch?v=R-ZyQ80Bgmo&list=PL8p2I9GklV44pN_8iYi2pPl2Gw4Pwb70f&index=4&ab_channel=CodeStepByStep
 */
console.log({} == {})       ///  ""
// console.log({} === {})   //  ""
/**
 * jab hum do variable comaapre krte h waha onki value compare hoti but 
 * jb yaha do object comapre krenge to inki memory location ki value coomapre hogi
 */
console.log("22222222=======")
let a1 = {}
let b1 = a1
console.log(a1 == b1)
console.log(a1 === b1)
console.log("333333333333=======")

function test() {
    function foo() {
        return 100
    }
    return foo()
    function foo() {
        return 10
    }

}
console.log(test());//output 10 aaya 
/**
 * isme hoisting ka use hya 
 * 
 * function test() {
    function foo() {   //first function ko override kr liye 2nd ffunction n     
        return 100
    }
     function foo() {
        return 10
    }
    return foo()
}
 */
/**
 * promise:
 * resolve, reject finally 
 *finally means it will run definately either promise is resolve or reject
 */
/**
 * lexical scope ?
 * inner function , outer function ke variable ko access krta h  
 *  
 * closure 
 * execution time ke upar lexical scope ko remmeber (yaad rkhta h )
 * inner function , outer function ke variable ko access krta h, execution time ke upar 
 */
console.log("333333=========333333")
function hello() {   // e.g. of lexical scope 
    var a = 9
    function inner() {
        return a
    }
    return inner()
}
console.log(hello())

function hello1() {   // e.g. of closure means execution time ke upr outer function ke variable ko remember rkhna 
    var a = 91
    function inner() {
        return a
    }
    return inner
}
var innerFunc = hello1()
console.log(innerFunc())

function closure() {
    var a = 6
    function inner(num) {
        return a + num
    }
    return inner
}
let res = closure()
console.log(res(10))
function closure2(b) {

    return (a) => {
        return a + b
    }
}
let value3 = closure2(6)
console.log(value3(8))

function s() {

    console.log(age)
    console.log(name)
    var age = 99
    let name = 'tt'
}
s()