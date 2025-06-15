let str = "stringgg"
// str=str.toLocaleUpperCase()//convert to upper case
// console.log(str, "@@#1")


str.toLocaleUpperCase()//anothing

let obj = {
    name: "ram", address: "delhi", phone: 12345
}
// console.log(Object.entries(obj),"entries")
//answer [ [ 'name', 'ram' ], [ 'address', 'delhi' ], [ 'phone', 12345 ] ] 

//callback example
function first(ab) {
    console.log(ab, "1234")
}
function second(cb1) {
    cb1("ramjan")
}
// second(first)

let arr = [1, 2, 2, 2, 3, 3, 4, 4]
// let items = new Set(arr)
// console.log(items,"it222")//Set(4) { 1, 2, 3, 4 }
// console.log([...items],"items2222")//[ 1, 2, 3, 4 ] 

// // items.clear()
let singeValue = []
for (let el of arr) {
    // console.log(singeValue.includes(el),"ploik")
    if (singeValue.includes(el)) { } else { singeValue.push(el) }
}
// console.log(singeValue,"456235")

///////////////////////////////////////////////////////////////////////////////////
let string = "helloworldhereistheworldodcomputer h e l l "
let temparr2 = []
for (let el of string) {
    if (!temparr2.includes(el)) {
        temparr2.push(el)
    }
}
// console.log(temparr2, "temparra 22")
///////////////////////////////////////////////////////////////////////////////////
/**
In JavaScript, new Map() creates a Map object, which is a collection of key-value pairs where keys and values can be of any type (e.g., strings, numbers, objects, etc.). Unlike regular objects, Maps maintain the insertion order of elements and allow keys of any data type, not just strings or symbols.

Simple Definition
A Map is like a dictionary or lookup table that stores data as pairs of keys and values. we can add, retrieve, update, or remove key-value pairs, and it remembers the order in which you added them
 
 */
let objItems = new Map()
objItems.set(2, 2)
objItems.set(12, 22)
// console.log(objItems,"objItems")

let obj1 = {
    name: "abc", age: 23
}
let obj2 = {
    name: "xyz",
    age: 13,
    about: function sol(params) {
        console.log(this.name, this.age)
    }
}

obj2.about?.call(obj1)
// obj2.about()

function sol(parm, arr) {
    console.log(parm + parm.name, "aoy", arr)//[object Object]xyz aoy [ 'hi' ] 
    console.log(JSON.stringify(parm) + parm.name, "aoy", arr)//{"name":"xyz","age":13}xyz aoy [ 'hi' ]
}
// sol(obj2,["hi"])

let obj3 = new Object(null)
console.log(obj3, "231==")//{}
obj3.name = "update"
console.log(obj3, "231")//{name :'update'}
obj3 - Object.create({})
obj3.age = 9
console.log(obj3, "obj3333")//{ name: 'update', age: 9 }