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