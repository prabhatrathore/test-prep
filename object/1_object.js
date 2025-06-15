/*
everything is object in js 
javacript is template based not class based means hum directly  object create kr skte .

there are three way to create object 
1:) object literal 
2:) by creating instance of object directly (using new keyword)
3:) by using an object constructor (using new keyword)
       2 aur 3 mai minor diference h 

 object by object literals

 syntax of creating object by objecct literals  
 object ={
    a:3,
    b:4
 }
*/
/**
 * creating by object instance
 * 
 * 
 * here new keyword is used to create object.
 * yaha new keyword ki help se new object create kr rhe h 
 */
var emp = new Object()

emp.id = 1;
emp.name = "ram";
emp.address = "delhi";
for (let value in emp) {
    console.log(value, ":", emp[value])
};

console.log('====11111111111===========================')
/**
 * by using object constructor.
 * 
 * u need to create function with argument . each argument value is assigned in the current object 
 * by using this keyword.
 * this keyword refers to current object.  
 * function banana jruri h    
 */
function employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;

}
var e = new employee(1, "rrrra", 220000) //ye constructor h 
// console.log(e)
for (let value in e) {
    console.log(value, ":", e[value])
}
console.log("=============2222222222222======")
