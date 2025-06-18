//object destructuring 

// Object destructuring is a new way to extract elements from an object or an array

const obj3 = {
    band: 'annfo-=-=3',
    age: 11231,
    adrress: 'rza 31 dabri',
    city: 'new delhi',
    country: 'india'
};

let { band, age: val2, ...restProperty } = obj3
console.log(band) //annfo-=-=3
console.log(val2) // 11231
console.log(restProperty) //
//{ adrress: 'rza 31 dabri ', city: 'new delhi', country: 'india' };
console.log('=111111111111 ==');

//====================object inside array 

let arr = [
    { userId: 2, abc: 21, firstname: 'ram' },
    { userId: 3, city: "new-delhi" },
    { name: "ram", userId: 32, address: "rza 31 dabri" }
];

for (let value of arr) {
    // console.log(value)
    console.log(value.userId, '///////////')
};//2 ////////
// 3 /////////
// 32 ////////

const [user1, { city }, { name: username }] = arr
// const [user1, city2,] = arr

console.log(user1, '=========');//{ userId: 2, abc: 21, firstname: 'ram' } =========
// console.log(city2); //{ userId: 3, city: 'new-delhi' }
console.log(username,"nhy")//ram 
console.log('==2222222===')
var a;
b = null
console.log(a == b, '///////') //true
a++
b++
console.log(a)  // NaN
console.log(b)// 1

// -----------------------------------------------------------------------------

// in array destructuring
 arr = ['name', 22, 'india', ['male', 20000]];
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
