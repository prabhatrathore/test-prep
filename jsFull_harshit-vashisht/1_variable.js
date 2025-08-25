/**
 * intro to variable 
 * variable can store some information. we can use or change that information later.
 */

// declaring a variable 
var firstName = 'ram'
console.log(firstName)

firstName = 'shyam'  //reassgin kr skte 
console.log(firstName)

var firstName = 'sita'  //re declare kr ste hai 
console.log(firstName)

/**
  rules for naming variable.
  we cannot start with number 
  example:- 
  1value (invalid)
  value1 (valid)
  
  we use only _underscore and or $ dollar sign 
  fist_name (valid)
  _firstName (valid)
 * 
 * frist$name (valid)
 * $firstName (valid)
 * 
 * we cannot use spaces 
 * first name (valid)
 * 
 * convention 
 * start with small letter and use camelcase  
 */
/**
 * let keyword 
 * it has block scope.
 */
let lastName = 'shyam';
// let lastName = "sonu"// cannot redeclared the same variable

lastName = "sita "//assign the value is possible
console.log(lastName);

/**
 * in const variable : neither redeclare nor reassign the value after the declaring the variable
 */

const name1 = 'ram';
// name1 = 'sonu'; //type error :assignment to constant variable 
// console.log(name1)

let num = 22;
// console.log(typeof (num + '')) //change number to string
// console.log(typeof String(num))
//===============================

let str1 = '21'
let str2 = '11'
// console.log(+str1+ +str2,":::::::???") // add two num //32
//===============================
// console.log(2 !== '2',"EEEEEEEEEEEEe") //true
// console.log(1==='1') //false
// console.log(1 && "0", "11111111111");//0 becasue ye dono true hai aur last wala show hoga 
//========================================

let num2 = 9
let winning = Math.floor(Math.random() * 10);
// console.log(winning)
if (num2 == winning) {
    // console.log('u winn')
} else {
    // console.log('u loose')
}
//========================================
let day = 2 //replace of 'if' 
switch (day) {
    case 0:
        console.log('sunday');
        break;
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('friday');
        break;
    default:
        console.log('error occur');
};
//=============================================
let total = 0;
let i = 0
while (i < 100) {
    total += i
    // console.log(i)
    i++
}
// console.log(total)
// ====================================
let fruit = ['mango', 'apple', 'grapes']
ab = fruit[0].charAt(3)
// console.log(ab, '2222=2=2=2=2=2') // g
// console.log([0]) // [ 0 ]
// console.log(fruit[0].length)//5
//==================================

//==> passby value
let a = 0
let b = a
// console.log(a)//0
// console.log(b) //0
a++
// console.log(a) // 1
// console.log(b,"WWWWWWWWWWWww")//0
//==================================

// how to clone array 
let array = [1, 2, 3, 4, 5];
let array2 = array.slice(0);//created new array in memory and allocated new address 
let array3 = array //allocate same array and address

// console.log(array == array2) // false
// console.log(array) // [ 1, 2, 3, 4, 5 ]
// console.log(array2) // [ 1, 2, 3, 4, 5 ]
// console.log(array===array3,"????????")//pass by referenceThe  //true
//  slice() method does not change the original array.
//===========================================

let ab2 = '234'
arr2 = [1, 2, 3, 4, 5]
// console.log(arr2 == array,'-----pl,lp')// false
// console.log(ab2.reverse)
//  =================================

// object store key value Pair
// object dont have index 
// how to access data from object
// how to add key value pairs in object 

//difference between dot and bracket notation 
let key = 'email';
const obj = {
    name: 'abc',
    age: 21,
    address: "new delhi",
    "person hobbies": ['guitar', 'sitar', 'hitar']
};
// console.log(obj["person hobbies"])//bracket  

obj[key] = "qwert@gmail.com"// fetch key variable value as key
obj['gender'] = 'male'

// console.log(obj)
// {
//   name: 'abc',
//   age: 21,
//   address: 'new delhi',
//   'person hobbies': [ 'guitar', 'sitar', 'hitar' ],
//   email: 'qwert@gmail.com',
//   gender: 'male'
// }

// how to iterate Object.
//only for in loop
for (let key in obj) { // attribute name = key 
    // console.log(key, '======', obj[key])
};
/**
 * name ====== abc
age ====== 21
address ====== new delhi
person hobbies ====== [ 'guitar', 'sitar', 'hitar' ]
email ====== qwert@gmail.com
gender ====== male
 */
//  console.log (Object.keys(obj))// return the key(property) name  in array format
//  [ 'name', 'age', 'address', 'person hobbies', 'email', 'gender' ]


//  console.log(typeof (Object.keys(obj)))  //object
//==========================================
const val = Array.isArray(Object.keys(obj))
// console.log(val, '/////////')  //true;

//==================The Object.keys() method returns an array of a given object's own
//   enumerable property names, iterated in the same order that a normal loop would.   
for (let value of Object.keys(obj)) { //object.key return array 
    console.log(value, ":", obj[value], 'of-loop')
};
/**
 * name : abc of-loop
age : 21 of-loop
address : new delhi of-loop
person hobbies : [ 'guitar', 'sitar', 'hitar' ] of-loop
email : qwert@gmail.com of-loop
gender : male of-loop
 */

//=commputed property
const key1 = 'value1';
const key2 = 'value2';

const get = 'asnwer1';
const get2 = 'answer2';

const obj2 = {
    [key1]: get,
    [key2]: get2,
};
// console.log(obj2 )   //{ value1: 'asnwer1', value2: 'answer2' }
//====================other method to do the same things
const obj3 = {};
obj3[key1] = get;
console.log(obj3)
// { value1: 'asnwer1' }
//=====================================
console.log(ab)  //undefined   
var ab = '3'
//==================================
sol();
function sol() {
    console.log('hellllll')
    // return 'hello-world'
};
//===================================
a = 1234
b = String(a)
// console.log(typeof b)
c = b.split('')
d = c.reverse("").join('')
console.log(d)


// C: \Program Files\Git\bin
// C: \Program Files\Git\cmd