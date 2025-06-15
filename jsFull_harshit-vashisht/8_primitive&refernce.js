//pass by value 
//it create independent variable in stack 
// so there is no connection between these variable
let arr = 'hello'
console.log(arr.toUpperCase())
console.log('=1111111111111111111=====')
//==========================================
let num = 9
let num2 = num
console.log(num) //9
console.log(num2)  //9
num = num + 3
console.log(num)  //12
console.log(num2)  //9 //no connection 

let arr2 = 'more'
let arr4 = arr2
console.log(arr2)  //more
console.log(arr4)  //more
arr2 = 'vinod'
console.log(arr2)  //vinod
console.log(arr4)  //more
console.log('===22222222222222222======');


//==========passby reference
//it create only one object in heap and allocated same address to both these variable 
//so we can go to this addrress and change the data and
// it reflect on both the objects.
let obj = {
    a: 3,
    b: 4
};
let obj2 = obj
console.log(obj)
console.log(obj2)
obj.c = "plm"
console.log(obj)
console.log(obj2)
console.log('===33333333333333======')

let arr5 = ['value1', 'value2'];
let arr7 = arr5
let arr6 = [...arr5];
arr5.push('addeddvalue1')
console.log(arr6)
//============================================