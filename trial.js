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

let string1 = '324e-1'
string1 = Number(string1)



console.log(string1, "string1string1")//    32.4 string1string1


// '324e-1' is in scientific notation, meaning:
// 324 × 10⁻¹ = 32.4