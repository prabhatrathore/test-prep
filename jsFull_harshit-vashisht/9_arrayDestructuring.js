// array destructuring
let array = ['value1', 'value2', 'avc', 'pop']
// let index1=array[0]//old
// let index2=array[1]//old

// let [index1,index2]=array//new method
let [index1, , , index2] = array //to skip particular index or value 
// index1='value changed '
console.log('index1 value ', index1)//index1 value value1
console.log('index2 value ', index2)// index2 value pop
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
console.log('===444444444444444=========')
a = ['e', 'r']
b = a.slice(0)//false
console.log(a == b)
console.log('===5555555555555=========')
a = ['e', 'r']
b = ['e', 'r']
console.log(a == b)//f
console.log("====66666666666======")
a = ['e', 'r']
b = a
console.log(a == b)//t
console.log(a === b)//t
console.log("====77777777======")

console.log("===8888888888888====")
