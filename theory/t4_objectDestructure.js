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