//  Rest operator (parameter):

// Rest parameter provides an improved way of handling the parameters of a function.
// rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array.

// Rest parameters can be used by applying three dots (...) before the parameters.
// **Note- Rest parameter should always be used at the last parameter of a function

// Syntax: Rest parameters Used in function parameters (function(...args)) or destructuring 
// const [first, ...rest] = array.

function sum(name, ...ags) {  // rest operator
}

let arr = [22, 33, 44, 55, 23, 34];

// --------------------------------------------------------------------------------------------
function sol(...numbers) {
    let total = 0
    for (let number of numbers) {
        total += number
        console.log(number, 'elelelel')//
    }
}
// sol(1, 2, 3, 4, 5, 6, 7)

//function returning function 
function myfunc() {
    function hello() {
        console.log('hellow orld')
        return "hello"
    }
    return hello
}
ab = myfunc()
// console.log(ab())// hello

/**
The spread operator (...) is used to “spread” or expand elements of an array, (object,) or string into individual items.
The spread operator is commonly used to make shallow copies of JS objects.

Examples:
With arrays:
*/
const arr12 = [1, 2];
const arr22 = [3, 4];
const combined = [...arr12, ...arr22];
// console.log(combined); // Output: [1, 2, 3, 4]
// ------------------------------------------------------------------------------
/*
With objects:
*/
const obj1 = { a: 1, b: 2 };
const obj21 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj21 };
// console.log(merged); // Output: { a: 1, b: 2, c: 3, d: 4 }

// with string
let gq = 'gather'
let gq2 = 'hello'
let t = [...gq, ...gq2]
// console.log(...gq,'@@@',t?.toString())

// Note: There must be only one rest operator in javascript functions.

let arr1 = [22, 33, 23, 4, 53, 3432, 42];
let arr2 = [...arr1]; //copy krra bs cloning nhi kri .
arr2.push(98);

// arr1.shift()
// console.log(arr1); // [22, 33, 23, 4, 53, 3432, 42];
// console.log(arr2); // [22, 33, 23, 4, 53, 3432, 42, 98]
// When we create a copy of an array using the spread operator, like let arr2 = [...arr1];
// 
//  we are creating a new array with the same elements as arr1. This means that 'arr2' and 'arr1' have different references in memory, and changing one does not affect the other. So when we add the value 98 to 'arr2' using the push() method, we are only changing the contents of 'arr2' and not 'arr1'.

// In other words, spread operator creates a new array with the same elements, but it doesn't create a reference to the original array. Therefore, any changes made to the new array won't affect the original array, and vice versa.

// So when we log arr1, it still contains the original elements [22, 33, 23, 3432, 42]. And when we log arr2, it contains the new elements [22, 33, 23, 3432, 42, 98] that were added using the push() method.

//====================================================
//======================================================
// Example of shallow copy using spread operator
const originalArray = [1, 2, [3, 4]];
const shallowCopy = [...originalArray];

// Modifying the nested array in the shallow copy, affects the original array
shallowCopy[2][0] = 5;
shallowCopy.push(1234)
// console.log(originalArray, "originalArray1"); // [1, 2, [5, 4]]
// console.log(shallowCopy, "shallowCopy2"); // [1, 2, [5, 4],1234]

// In this example, the originalArray contains an array [3, 4] as one of its elements. When we create a shallow copy of originalArray using the spread operator like const shallowCopy = [...originalArray];, we are creating a new array shallowCopy with the same elements as originalArray.

// However, since originalArray contains a nested array [3, 4], which is an object, the spread operator only creates a new reference to the nested array, not a new copy of it. This means that the nested array is still shared between originalArray and shallowCopy.

// So when we modify the first element of the nested array in shallowCopy using shallowCopy[2][0] = 5;,
//  we are actually modifying the same array that originalArray references. Therefore, when we log originalArray after modifying shallowCopy, we can see that the nested array is also modified.

// To avoid this, we would need to create a deep copy of originalArray, where all nested objects are copied as well.

//======================================================
//======================================================
// Original object with nested object
const originalObject = { a: 1, b: { c: 2 } };

// Deep copy using JSON parse/stringify method
const deepCopyObject = JSON.parse(JSON.stringify(originalObject));

// Modifying nested object in deep copy does not affect original object
deepCopyObject.b.c = 3;
// console.log(originalObject); // { a: 1, b: { c: 2 } }
// console.log(deepCopyObject); // { a: 1, b: { c: 3 } }

// In this example, we use the JSON.stringify() method to convert the original object to a JSON string, and then use the JSON.parse() method to create a new object from that JSON string. This method creates a new object with a new reference to all the nested objects, resulting in a deep copy of the original object.

// It's important to note that this method has some limitations, such as not being able to copy functions or circular references, and can also be less efficient for large or complex objects compared to the recursive method. However, it can be a useful alternative for simpler objects or cases where recursion is not practical or desirable.

//object literals
// An object literal is a way to create an object in JavaScript using curly braces {} with key-value pairs. It’s a simple, direct way to define and store data as properties and methods in a single structure.

let name = 'function literals';
let age = 33;
let obj = {
    name,       //agr property name and variable name same h to aise likh skte  
    age,
};
// console.log(obj );
//{ name: 'functionn literals', age: 33 }
//=========================111111111111111=====================

let n = 'name'
let obj2 = {
    [n + 'ofstudent']: "qwert222222",
    course: 'b.a.',
    about: function () {
        return `${this.nofstudent} is in the fucntion  `
    }
}
// console.log(obj2)
// {
//   nameofstudent: 'qwert222222',
//   course: 'b.a.',
//   about: [Function: about]
// }
// console.log(obj2.about(), "func"); //undefined is in the function.
//===============================================

let n1 = 'name'
let obj3 = {
    [n1 + 'ofstudent']: "qwert",
    course: 'b.a.',
    about() {    //
        return `${this.nameofstudent} is in the fucntion`
    }
}
// console.log(obj3)// { nameofstudent: 'qwert', course: 'b.a.', about: [Function: about] }
// console.log(obj3['about']());//qwert is in the function 
//================================================

let fname = 'fisrtname';
let lname = 'lastname';
function name2() {
    return { fname, lname }
};
let res = name2(fname, lname); //
console.log(res);// { fname: 'fisrtname', lname: 'lastname' }

console.log(typeof null)//object
// typeof null is "object" because of a historical bug in JavaScript’s type system, (and it remains for compatibility reasons).
///////////////////////////////////////////////

let num1 = 7
let num2 = '7'
// console.log(num1 == num2 ) //true
console.log(num1 === num2, 'wws')//false
console.log(num1 != num2, 'ww')//false
console.log(num1 !== num2, 'wws')//true
///////////////////////////////////////////////////////////////

let st = 'world hello'
const st2 = 'JS node.js'
st = st.concat(" ", st2, "dasdf", 'pppp', 'dd', 'vv')
// const ad=st.concat(st2)
// console.log(st, "Wddd")// world hello JS node.jsdasdfppppddvv Wddd
// console.log(st2, "WASDd") // JS node.js WASDd
const ad = st.concat(" ", st2, "dasdf", 'pppp', 'dd', 'vv')
// console.log(ad, "adddddddd")//world hello JS node.jsdasdfppppddvv JS node.jsdasdfppppddvv adddddddd

/**
//spread operator 
const arr1 = [1, 2, 3, 4,]
const arr2 = [3, 6, 7, 8]
arr1.push('pppppppppp')

const newarr = [...arr1, ...arr2] //spread operator create shallow copy (new copy)
// newarr.push('ppp')
console.log(newarr, 'spread operator')  // [ 1, 2, 3, 4, 'pppppppppp', 3, 6, 7, 8 ] spread operator

arr1.push('new1', 'new2')
console.log(arr1); //[ 1, 2, 3, 4, 'pppppppppp', 'new1', 'new2' ]

console.log(newarr, '=====outer ====');//[ 1, 2, 3, 4, 'pppppppppp', 3, 6, 7, 8 ] ===outer ==

//============================
// const newarr2=[...'abc'];

const newarr2 = [...'1234786968'];
console.log(newarr2);
//[
//     '1', '2', '3', '4',
//     '7', '8', '6', '9',
//     '6', '8'
//   ]
---------------------------------------------------------------------------------- 
// spread operator in objects
const obj = {
    name: 'anc',
    age: 32
};
const obj2 = {
    name: "ooooo",
    addresss: "delhi"
};
obj2.ratio = 2
const newobj = { ...obj, ...obj2 }
obj2.as = 112121  
console.log(newobj) // { name: 'ooooo', age: 32, addresss: 'delhi', ratio: 2}

//==============================

const newobj2 = { ...'abc' }
// console.log(newobj2)//{ '0': 'a', '1': 'b', '2': 'c' }

abc = [...'ppop'];
console.log(abc)//[ 'p', 'p', 'o', 'p' ]

//==========================
let newobj3 = { ...['item1', 'item2', 'item4', 'item5'] }
// console.log(newobj3)//{ '0': 'item1', '1': 'item2', '2': 'item4', '3': 'item5' }
-------------------------------------------------------------------------------------------------------

let newobj4 = [...['item1', 'item2', 'item4', 'item5']]
console.log(newobj4) //[ 'item1', 'item2', 'item4', 'item5' ]

//=================object destructuring
const obj3 = {
    band: 'annfo',
    age: 11,
    adrress: 'rza 31 dabri '
};
let { band, age: val2, adrress } = obj3
console.log(band) //annfo

console.log(val2) //11

// console.log(value3)
console.log(adrress)  //rza 31 dabri

//========================================
*/

/**
 let obj = {
    a: 322,
    b: 2,
    c: 5,
    name: { "lastName": 90 }
}
let obj2 = { ...obj }
obj2.name.lastName = "changesd"
obj2.a = "heeloo"
// console.log(obj2) // { a: 'heeloo', b: 2, c: 5, name: { lastName: 'changesd' } }

// console.log(obj) // { a: 322, b: 2, c: 5, name: { lastName: 'changesd' } }

let objDeep = JSON.parse(JSON.stringify(obj))
objDeep.name.lastName = "qwerty"
 console.log(objDeep ) // { a: 322, b: 2, c: 5, name: { lastName: 'qwerty' } } 
*/

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("r/esolve")
        // resolve("rrrrrrrrrrr")
        reject("reject------------")
    }, 1000);
})

promise1.then((a) => console.log(a, "thene coes")).catch((a) => console.log(a, 'catchcome'))
/*
async function sol() {
try {
let get = await promise
console.log(get, "Get")
}
catch (err) {
console.log(err, "errrrrr")
}
}
// sol()

// ////////////////////////////////////
// Concat()
// The concat() method provided by javascript helps in concatenation of two or more strings(String concat() ) or is used to merge two or more arrays.

// In case of arrays, concatenation method does not change the existing arrays but instead returns a new array.
// // normal array concat() method

// let arr = [1, 2, 3];
// let arr2 = [4, 5];
// let arr3 = arr.concat(arr2);

// console.log(arr); //   [1, 2, 3]
// console.log(arr3);//  [1, 2, 3, 4 ,5]

// arr=arr.concat(arr2)
// console.log(arr); //   [1, 2, 3, 4 ,5]

// =============================================================

// We can achieve the same output with the help of the spread operator, the code will look something like this:
// // spread operator doing the concat job

let arr = [1,2,3];
let arr2 = [4,5];
// arr=[...arr,...arr2]
arr3 = [...arr,...arr2];
console.log(arr3); // [ 1, 2, 3, 4, 5 ]
console.log(arr); //   [1, 2, 3]

// Note: Though we can achieve the same result, but it is not recommended to use the spread in this particular case, as for a large data set it will work slower as when compared to the native concat() method.
--------------------------------------------------------------------------------------------

// Copy (like splice method)
// In order to copy the content of array to another we can do something like this:
// copying without the spread operator

// let arr = ['a','b','c'];
// let arr2 = arr;
// console.log(arr2); // [ 'a', 'b', 'c' ]

// The above code works fine because we can copy the contents of one array to another, but under the hood, it’s very different as when we mutate new array it will also affect the old array(the one which we copied). See the code below:
--------------------------------------------------------------------------------------------------------------

// // changed the original array
// let arr = ['a','b','c'];
// let arr2 = arr;
// arr2.push('d');
// console.log(arr2);//['a','b','c','d]
// console.log(arr); // even affected the original array(arr)        ['a','b','c','d]

// In the above code we can clearly see that when we tried to insert an element inside the array, the original array is also altered which we didn’t intended and is not recommended. We can make use of the spread operator in this case, like this:
---------------------------------------------------------------------------------

// // spread operator for copying
// let arr = ['a','b','c'];
// let arr2 = [...arr];
// console.log(arr); // [ 'a', 'b', 'c' ]
// arr2.push('d'); //inserting an element at the end of arr2
// console.log(arr2); // [ 'a', 'b', 'c', 'd' ]
// console.log(arr); // [ 'a', 'b', 'c' ]
-----------------------------------------------------------------------------------------

// By using the spread operator we made sure that the original array is not affected whenever we alter the new array.

// Expand
// Whenever we want to expand an array into another we do something like this:

// // normally used expand method
// let arr = ['a','b'];
// let arr2 = [arr,'c','d'];
// console.log(arr2); // [ [ 'a', 'b' ], 'c', 'd' ]
// Even though we get the content on one array inside the other one, but actually it is array inside another array which is definitely what we didn’t want. If we want the content to be inside a single array we can make use of the spread operator.
// // expand using spread operator
// let arr = ['a','b'];
// let arr2 = [...arr,'c','d'];
// console.log(arr2); // [ 'a', 'b', 'c', 'd' ]
-------------------------------------------------------------------------------------------------

// Math
// The Math object in javascript has different properties that we can make use of to do what we want like finding the minimum from a list of numbers, finding maximum etc.
// Consider the case that we want to find the minimum from a list of numbers,we will write something like this:
*/
// console.log(Math.min(...[-1,2,3,11]),'[[[[[['); //-1
/*
// Now consider that we have an array instead of a list, this above Math object method won’t work and will return NaN, like:
// // min in an array using Math.min()
// let arr = [1,2,3,-1];
// console.log(Math.min(arr)); //NaN

// When …arr is used in the function call, it “expands” an iterable object 'arr' into the list of arguments
// In order to avoid this 'NaN' output, we make use of spread operator, like:
// with spread
// let arr = [1,2,3,-1];
// console.log(Math.min(...arr)); //-1

// Example of spread operator with objects

// ES6 has added spread property to object literals in javascript. The spread operator (…) with objects is used to create copies of existing objects with new or updated values.

// const user1 = {name: 'Jen',age: 22};
// const clonedUser = { ...user1 };
// console.log(clonedUser);  //{ name:"jen", age:22}

// =======================================================================

// Here we are spreading the 'user1' object. All key-value pairs of the 'user1' object are copied into the clonedUser object. Let’s look on another example of merging two objects using the spread operator.
// const user1 = {   name: 'Jen',   age: 22,  };
// const user2 = {   name: "Andrew", location: "Philadelphia" };
// const mergedUsers = {...user1, ...user2};
// console.log(mergedUsers)   //{name :"andrew",age:22,location:"Philadelphia"}
------------------------------------------------------------------------------------------------

// Output:
// mergedUsers is a copy of user1 and user2. Actually, every enumerable property on the objects will be copied to mergedUsers object. The spread operator is just a shorthand for the Object.assign() method but, they are some differences between the two.
*/
/**
//object => rest
var student = {
   name: "ram",
   age: 3,
   hobbies: ['as', 'sd', 'df'],
   address: {
       street: 2,
       name: 'wert',
       email: {
           first: 'a@gmail.com',
           second: "b@gmail.com"
       }
   }
}
// const age = student.age; //old methods 
// console.log(age)
------------------------------------------------------------------------------------------------------------
// const { age, name, hobbies, address: { email: { first } } } = student//obj destructuring new method h 
const { age, ...rest2 } = student
console.log(age)
console.log(rest2)
// console.log(first)

//spread operator 
var newStudent = {
   ...student,
   age: 33 //overrite kr diya new method h 
}
// console.log(student);
console.log(newStudent);
*
*/