// array destructuring
let array = ['value1', 'value2', 'avc', 'pop']
// let index1=array[0]//old way to fetch data from array
// let index2=array[1]//old way to fetch data from array
// ---------------------------------------------------------------------------------------------------------------

// let [index1,index2]=array//new method
let [index1, , , index2] = array //to skip particular index or value 
// index1='value changed '
console.log('index1 value ', index1)//index1 value------ value1
console.log('index2 value ', index2)// index2 value---- pop
console.log("====1111111111111=====")
//=========================================
//slice do shorten the array and create new array
let array2 = ['value1', 'value2', 'avc', 'pop', 'qwe', 'dfe', 'cde', 'zxs'];
let [index0, index3, index4] = array2
let myvar1 = array2.slice(3)
console.log(myvar1);
console.log("==22222222222========")
//========================================
let array3 = ['value1', 'value2', 'avc', 'pop', 'qwe', 'dfe', 'cde', 'zxs'];
let [key1, key2, ...allKey] = array3
console.log('key1', key1)
console.log('all-key', allKey)
console.log('==333333333333333333====')
a = ['e', 'r']
b = [...a] //f
console.log(a == b)//false
// console.log('===444444444444444=========')
a = ['e', 'r']
b = a.slice(0)//false
console.log(a == b)
// console.log('===5555555555555=========')
a = ['e', 'r']
b = ['e', 'r']
console.log(a == b)//f
// console.log("====66666666666======")
a = ['e', 'r']
b = a
console.log(a == b)//t
console.log(a === b)//t
// console.log("====77777777======")

console.log("===8888888888888====")


let obj1 = {
    firstName: "ram",
    adress: "india"
};
let obj2 = { ...obj1 };
obj1.age = 3;       //old 
obj2.firstName = 'shyam';  //old
obj2.adress = 'counrty'  //old
let { firstName, ...other } = obj1;
console.log(firstName)//ram
console.log(other)//{ adress: 'india', age: 3 }
console.log(obj2)// 
console.log(obj1, ' original ');
console.log("+==11111111===");



// ---------------------------------------------------------

/**
 * deafult parameter
 * rest parameter 
 * object destructuring
 * 
 * callback function  
 * 
 * 
 * important array method
 * foreach
 *  map 
 * filter 
 * reduce 
 * 
 */
let num = [2, 3, 4, 5, 6, 7]
let res = num.filter(number => number % 2 == 0)
console.log(res)

let res2 = num.every((n) => n % 2 == 0)
console.log(res2);
console.log('==111111111===')
let res3 = num.some((n) => n % 2 == 0)
console.log(res3);//true
//fill method




//fill method
//value start end 
let arr = new Array(10).fill(2)//create new array jisme 10 element ho wo bs 2 hone chahiye
console.log(arr);

console.log("==1111111111111===");
arr = [2, 3, 4, 5, 5, 7, 4, 3, 1];
arr.fill('str', 2, 5);
console.log(arr)//

//splice method
//start , delete, insert
arr = ['valuee 1']

let str = 'hello-world';
for (let string in str) {
    console.log(string)
}
/**
 * string , array are iterable iss pr for loop lge skte 
 * jiske pass length property hoti 
 *osko hum index se access kr skte 
 */

// ---------------------------------------------------------------------------------



 /**
 * sets => it is iterable
 * store data 
 * sets also have its own methods
 * no index-based access
 * order is not guaranteed
 * unique items only (no dublicate items allowed )
 */
let number = new Set([2, 4, 5, 6]);
//561
console.log(number);
console.log(number[2])//undefined
for (let value of number) {
    console.log(Array.isArray(value))//false
    console.log(value)
}
console.log("==111111111111111==");
arr = [1, 2, 3, 4, 5, 7, 8, 9, 4, 3, 1]
newSet = new Set(arr);
console.log(newSet)//Set(8) { 1, 2, 3, 4, 5, 7, 8, 9 }
console.log(...newSet)//1 2 3 4 5 7 8 9
console.log(arr, 'old array with dublicacte element');
