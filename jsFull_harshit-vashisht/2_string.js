let str = 'hello-world'
let result = str.substring(2, 5)// 
console.log(result) //llo
console.log(str)//hello-world
//substring means return the character at specified index and end is not included. create new string
//=============comparison
let a = 'c'
let b = 'b'
console.log(a < b, 'eeeeee')//false 

//===========================
console.log('add' < 'ab' == 'ad' < 'ab',"-======");//true
let ab = 'hello world man'.indexOf('z')
console.log(ab) //-1
//=================================
function existsInString(stringValue, search) {
    return stringValue.indexOf(search) !== -1;
}
console.log(existsInString('red', 'r')); // prints 'true';
console.log(existsInString('red', 'b')); // prints 'false'
console.log('============222222222====');
let firstName = 'ram-shyam';
console.log(firstName[4])  // s

console.log(firstName.length) //9
console.log(firstName[firstName.length - 2]);//a
//trim
let lastName = '        ram-shyam       '
console.log(lastName.length); //24
let res = lastName.trim()
console.log(res.length)//9
console.log(res)
console.log("================================");
console.log(res.toUpperCase());
//slice
let newString = res.slice(0, 3)
console.log(newString)
console.log('==========================================');

