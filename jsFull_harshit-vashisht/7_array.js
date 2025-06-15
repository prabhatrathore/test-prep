/**
 * important array method 
 * foreach
 * map
 * filter reduce
 */
arr = [2, 4, 6, 8, 7, 1];
function myfunct(num, index) { //2nd parameter idex hai default 
    // console.log(`element is :${num},index is ${index}`)

}
arr.forEach(myfunct)
// 73495 22621===mandira from eduvanz

arr.forEach((num, index) => {
    if (num % 2 == 0) {
        console.log(`num is ${num},even`);
    }
    console.log(num * 2)
    console.log(`element is ${num}, index is ${index},==============`)
})
arr = [
    { name: "ram", age: 12, address: "india" },
    { name: "shyam", age: 19, address: "us" },
    { name: "mohan", age: 16, address: "u.k" },
    { name: "lakhan", age: 14, address: "china" },
];
arr.forEach((name, index) => { console.log(`element is ${name.name}, index is ${index}`) })

//map method

arr.map((name, age) => { //2nd parameter automatically index hee hoga 
    console.log('age', age)
});
console.log("======1111111111111=====");

arr.map((name, age) => { //2nd parameter automatically index hee hoga 
    if (name.age >= 16) {
        console.log('above 16 ', name.name)
    }
});
//filter 
//reduce
arr = [1, 2, 3, 4, 5]
var ab = arr.reduce((total, init) => {
    // total + init
    return total + init
    console.log(total, '=========', init)
});
console.log(ab)
console.log("======2222222222222=====");

let arr1 = [2, 3, 5, 4, 3, 2]
arr1.push(9)// add eleement to original array
// console.log(arr1)
//====================
let arr2 = ['a', 'b', 'c', 'd', 'e', 'f']
let arr3 = arr2.push('gg')
// console.log(arr3)//also give lenght of original array 
// console.log(arr2)
//===========================
ab = 2
// console.log(ab**.5)//
// ============================
// cnvert numbert  to string

// console.log(typeof (ab+''))

ab = String(ab)
console.log(typeof ab)
//=============================
let str = '443'
console.log(typeof +str)//convert string to number //number
//============================
console.log(3 !== '3');//false
console.log(2 != '2');//true     
//=============================
let age = 39;
let result = age >= 18 ? 'u can vote' : 'u r kid'
console.log(result)
//=============================