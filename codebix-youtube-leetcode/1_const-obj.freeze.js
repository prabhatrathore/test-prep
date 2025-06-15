// CREATED A BLOG FOR THIS --DONE

/**
 * difference between const and object.freeze()
 * 
 * const applies to binding it means it will create a immutable binding 
 *  that mean we assign a new value to binding
 * 
 * object.freeze works on value and more specifically, object values .it makes an object immutable that means we cannot change the properties
 * 
 */

let obj = {
    name: "hello-world"
};
Object.freeze(obj)
obj.name = "next-value "//neither we change the value nor create a new property
obj.age = 22
console.log(obj,"object21")

function sol() {
    const a = b = 3
}
sol()
// console.log(a)//a is not defined
console.log(b)// 3
console.log(typeof a)// undefined
console.log(typeof b)// 3 









// In JavaScript, both const and freeze are used to declare variables with values that cannot be changed.

// const is a keyword used to declare a variable that cannot be reassigned a new value. This means that once a const variable is assigned a value, that value cannot be changed. For example:

// const PI = 3.14;
// PI = 3.1415; // This will throw an error
// freeze is a method that can be used on an object to make its properties immutable. Once an object is frozen, its properties cannot be added, deleted, or modified. For example:


// const myObj = { a: 1, b: 2 };
// Object.freeze(myObj);
// myObj.c = 3; // This will not add a new property because the object is frozen
// myObj.a = 5; // This will not modify the existing property because the object is frozen
// In summary, const is used to declare variables that cannot be reassigned, while freeze is used to make an object and its properties immutable.
