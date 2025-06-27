// CREATED A BLOG FOR THIS --DONE

/**
  difference between const and object.freeze()
 
 const: Prevents reassigning a variable to a new value, but allows modifying the content of objects or arrays.
 Object.freeze(): Makes an object's properties immutable, so we can't be changed, added, or removed.
  
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


const arr = [1, 2];
arr.push(3); // Works (modifies content)
arr = [4, 5]; // Error (can't reassign)

const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // Fails (properties immutable)


// Array with Freeze:

const numbers = [1, 2, 3];
Object.freeze(numbers);
numbers.push(4); // Fails: Cannot modify array
numbers[0] = 5; // Fails: Cannot change elements

// Nested Objects (Shallow Freeze)
const data = { user: { name: "John" } };
Object.freeze(data);
data.user.name = "Jane"; // Works: Nested objects are not frozen
data.user = {}; // Fails: Cannot change top-level property



// const is a keyword used to declare a variable that cannot be reassigned a new value. This means that once a const variable is assigned a value, that value cannot be changed. For example:

// const PI = 3.14;
// PI = 3.1415; // This will throw an error
// freeze is a method that can be used on an object to make its properties immutable. Once an object is frozen, its properties cannot be added, deleted, or modified. For example:


// const myObj = { a: 1, b: 2 };
// Object.freeze(myObj);
// myObj.c = 3; // This will not add a new property because the object is frozen
// myObj.a = 5; // This will not modify the existing property because the object is frozen
// In summary, const is used to declare variables that cannot be reassigned, while freeze is used to make an object and its properties immutable.
