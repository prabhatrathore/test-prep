//code step by step
//https://www.youtube.com/watch?v=SFgppU2J8To&ab_channel=CodeStepByStep
let a = [];
let b = []
console.log(a == b);//false, memory cehck ho rhii hai 
console.log(a === b);//false, memory checck ho rhi h
//============================
a = []// memory location #14235 isi ko "b " mai dala 
b = a    //'a' ko 'b' mai assign kr diya 
console.log(a == b);//true address same h , bus adres allocate krra h
console.log(a === b);// tru e,same address allocate krra h 
console.log("==========================================================");
a = [20]
b = [20]
console.log(a[0] == b[0]);//true qki ellement comapre ho rha 
console.log(a[0] === b[0]);//truee,  qki element comapre ho rha 
console.log("==========================================================");
let z = [1, 2, 3, 4, 5]
console.log(...z)//yaha destructuring ho rha hai ..array break kr diya  
console.log("=====@@@=================================================");
console.log(typeof NaN)//number hota 
a = 10 - -10
console.log(a)// minus , minus plus hota
console.log("==========================================================");
let data = { name: "anil" }
// console.log(delete data.name) //true menas ye property delete ho gyi
console.log(delete data); // yaha delete property object kode delete nhi kr skti 
// console.log("==========================================================");
// console.log("==========================================================");
// console.log("==========================================================");
// console.log("==========================================================");
// console.log("==========================================================");
