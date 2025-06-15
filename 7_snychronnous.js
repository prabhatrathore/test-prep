//synchronous programmig vs asynchronous programming

//synchronous programming 
// console.log('beforee loop')
for (let i = 0; i < 1000; i++) {
    // console.log("inside", i)
}

// console.log('after loop')
//j.s is synchronous programming and single threaded.
//line by line execute hota hai code..
//===================================

//asynchronus programming
/**
 * 
 * first take a look at set time out function
 * set time out ek function lega as a input and saath mai lega time 
 * ye function kitni der baad run krana h 
 */
// console.log('script-start')

function start() {
    console.log('hello world,inside setitmeout =====')
}
setTimeout(start, 2000)

// console.log('script-end')

//e.g.2.==============settime out with 0 sec
// console.log('strart file ')
// setTimeout(() => { console.log('hello,settimeout with zero second') }, 0)

// console.log("befre looping")
//====================
for (let i = 0; i < 10; i++) {
    // console.log('inside for-loop', i)
}
// console.log("after settimenot")
//alanalyse

/**
 * first line execute , then j.s. ko nhi pta settimeout ke baare mai
 *  to ye browser ke pass bhj dega 
 * browser ke pass rhega aur execute krke result return kr dega. 
 *0 second baad 
 but js next line pr mmove krega aur execute krega aaage ka code 
 browser wala return last mai print hoga 
 */

//--------------------------------------------------------=
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolve');
    }, 2000);
});
// console.log('inbetween promise');
async function sol(req, res) {
    let arr = await promise1
    console.log(arr)
    console.log('promise after')
};
// sol()

for (var i = 0; i < 3; i++) { //change var , let const
    // change let ,var const 
}
console.log('===i"value===', i)

//=======parameter destructuring
let obj = {
    "name": "alex",
    age: 12,
    address: 'delhi'
};
function sol2({ name, age }) {
    console.log(name, '===name')//alex ===name
    console.log(age)  //12
};
sol2(obj)
console.log("=========================");
//=========================================
// callback
function first(name2) {
    console.log(name2) //doubt 
}
function second(seeg) {
    console.log('second function', '============')
    seeg("varun")
};
second(first)// doubt 

//============set========

let set2 = new Set()
// A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.

set2.add('e0ee')
set2.add('wjengwigw')
// set2.clear()     // clear property :to clear the set 
//  set2.delete("eeeeeeeeee")//delete property :specific element to delete 
let result = set2.has("eeeeeeeeee")// has property tell the element exist or not 
console.log(result)
console.log('=====  ==============')
console.log(set2)
arr = [...set2];
console.log(arr)