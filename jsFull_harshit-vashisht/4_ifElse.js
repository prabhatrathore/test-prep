//if else condition
//if else if condition

// falsy value
/**
 * false,
 * "" (empty string)
 * null
 * undefined
 * 0
 */
// ternary ko conditional operator bhi bolte h

// if else if ladder
let age = 3;
if (age > 9) {
    console.log('go to school')
} else if (age > 12) {
    console.log('go to tuition')
} else if (age > 17) {
    console.log('ur now to staart erning')
} else if (age > 25) {
    console.log('ur age is 25')
} else if (age > 30) {
    console.log('now u settled')
} else {
    console.log('enjogyyyyy')
}
//====================================
//switch--statement---------
let day = 0
switch (day) {
    case 0:
        console.log('today is monday')
        break
    case 1:
        console.log('tuesday')
    case 2:
        console.log('wednesday')
    case 3:
        console.log('thrusday')
    case 4:
        console.log('friday')
    case 5:
        console.log('saturday')
    case 6:
        console.log('sunday')
    default:
        console.log('error')
}

let num = 0;
while (num <= 10) {
    // console.log(num)
    num++
}
//=========================
var total = 0;
let i = 0
while (i <= 10) {
    total = total + i
    i++
};
// console.log(total)
// find average
let arr = 100
let result = arr * (arr + 1) / 2
// console.log(result)
//=========================
// console.timeLog(Number.MAX_SAFE_INTEGER)
let num3 = 35828442842582454514984878978896511313551658272427n
// console.log(num3)

//==================================================
let str1 = 'har'
let str2 = 'shit'
str1 = 'rrrrrrrrrrrrrrrrrrrr'
let new1 = str1 + str2
console.log(new1)//rrrrrrrrrrrrrrrrrrrrshit
// str1.add('wwww')
str1 = 'eeeeeeeeeee'
console.log(str1)//eeeeeeeeeee
//=========================
a = 7
b = '7'
console.log(a != b);//false
console.log(a !== b)//true
console.log(a === b)//flse
console.log(a == b)//true
//=========================================
arr = [2, 4, 3, 5, 6, 7, 89, 2, 444, 33, 34, 23, 5365, 7, 4, , 55, , 98, 68445, 64, 55, 15]
even = []
odd = []
arr.forEach((element) => {
    element % 2 == 0 ? even.push(element) : odd.push(element);
})
console.log(even, 'even =no.=')
console.log("==========================");
if (true) {
    var aa = 'inside-if';   //change let or const 
}
console.log(aa)
function sol3() {
    if (true) {
        var firstName = 'inside funcion ';
        console.log(firstName);
    }
    if (true) {
        console.log(firstName);
    }
    console.log(firstName)
} sol3()
// console.log(firstName)