// in array destructuring
let arr = ['name', 22, 'india', ['male', 20000]];
var [user, age = 9, country, [gender, salary]] = arr;//age default value 9
console.log(user); //name
console.log(age);// 22
console.log(country);//india
console.log(salary);//20000
console.log(gender);

console.log("===111111111111111111111======");
//=================================================
let arr2 = ['nme', 22, 'india', ['male', 20000]];
var [user, ...args] = arr2;
console.log(user);
console.log(args[2][1], 'argu');//20000 argu
console.log("====22222222222222222222=======");

let obj = {
    name: "qwert",
    age: 22,
    address: { a: "india", b: { c: "inside", d: { e: "finally" } } }

};
let { name: n, age: a, address: { a: example, b: { c: pop } } } = obj;
console.log(a);//22
console.log(n)//qwert
console.log(example)//india
// console.log(b)//
console.log(pop)//inside
