
let age = 3
let firstname = 'ram'
console.log(typeof age);       // number
console.log(typeof firstname);//string
console.log(typeof (age + '')); //string
age = String(age)
console.log(typeof age);//string
// console.log("===11111111111========")

let num1 = '23';
console.log(typeof num1);//string
console.log(typeof +num1)//number
// console.log('======22222222==========');

// string concatination
var str1 = "ram";
var str2 = 'shyam';
fullname = str1 + ' ' + str2;
console.log(fullname);//ram shyam
str1 = '34'
str2 = '23'
number = str1 + str2
console.log(number);//3423
// number = +str1 + +str2
number = Number(str1) + Number(str2)
console.log(number)//57
// console.log("=3333333333333========");

// template string
// in this we use backtick
let about = `my number ${str1} :number ${str2}`
console.log(about)
console.log("======44444444444444====");
//bigint

let number3 = BigInt(1)
let number4 = 3n
console.log(number3 + number4);//4n
//boolean & comparison operator
// == vs ===
let num4 = '4';
let num5 = 4
console.log(num4 == num5, 'wwwwwwww');//true
console.log(num4 === num5);//false
console.log(num4 < num5, 'gggggg')//false
console.log(num4 > num5);//false
console.log(num4 != num5, 'not-equal') //false 
console.log(num4 !== num5) //true
num4 = null
num5;
console.log(num4 < num5, 'aaaaaa ____gggggg')//false
console.log(num4 > num5);//false

num4 = "[]"
num5;
console.log(num4 < num5, '#####___gggggg')//false
console.log(num4 > num5);//false

let a = 1
let b = ""
// console.log(a&&b)// ""
// console.log("555555555555======")
let a1 = true;
let b1 = true
console.log(a1 && b1)//true
//================================
let a2 = false
let b2 = 0
console.log(a2 && b2)// 0
//==================================
a = false
b = 1
console.log(a && b)//false
//=====================================
a = 2
b = 0
console.log(a && b)//0
//================================
a = 2
b = false
console.log(a && b)//false
//=====================
a = 2
b = ''
console.log(a && b)//''
//=======================
a = 2
b = 7
console.log(a && b)//7
//=============
a = 2
b = true
console.log(a && b)//true 
//====================
a = 2
b = "e"
console.log(a && b)//"e"
//==================
//================================|| operartor
a = 2
b = "e"
console.log(a || b) //2
//===============================
a = 0
b = "e"
console.log(a || b)//e
//=======================
a = ""
b = "e"
console.log(a || b) //e
//============================
a = true
b = "e"
console.log(a || b)//true
//================================
let num = 3
let num2 = '3'
console.log(num != num2)