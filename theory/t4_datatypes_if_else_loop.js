let JavaScript_Data_Types
/*
JavaScript Data Types
JavaScript provides different data-types to hold different types of Values. 
There are two types of data types in Java Script:

1. Primitive data type: it means ,it represent single value ,pass by value, immutable
2. Non- primitive data type: an object which represents a collection of values,an array, function
*/

// var a = 40//holding number
var b = "Rahul"; // holding String
/*
JavaScript Primitive data types
String: represents Sequence of characters e.g. "hello" 
Number: represents numeric Values e.g. 100
Boolean Represents boolean Value either false or true
Undefined: represents undefined Value.
Null: represents null i.e. no value at all.
BigInt - This data type is used to store numbers which are above the limitation of the Number data type.
Symbol - It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value.
Example :

var symbol1 = Symbol('symbol');
typeof Symbol('symbol') // Returns Symbol
-------------------------------------------------------
const s1 = Symbol("id");
const s2 = Symbol("id");

console.log(s1 === s2); // false
✔️ Even though both symbols have the same description "id",
they are completely unique and different.

❓ Why use Symbol?
To create unique property keys in objects that will never clash with other keys.
----------------------------------------------------------------------------------
🔧 Practical Use Case:
  const id = Symbol("id");

const user = {
  name: "Prabhat",
  [id]: 123
};

console.log(user); // { name: 'Prabhat', [Symbol(id)]: 123 }
console.log(user[id]); // 123
💡 Key Points about Symbol:
Cannot be auto-converted to string: If you try alert(id), it throws error. You must use id.toString().

*/
/*----------------------------------------------------------------------------------------------------------

1:)Primitive: Primitive value are immutable. Primitive are pass by value.means To store single values at a time 

Primitive types: Primitive data types can store only a single value.

typeof of primitive types :
typeof "John Doe" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns "undefined"
typeof null // Returns "object" (kind of a bug in JavaScript)
typeof Symbol('symbol') // Returns Symbol
*/

/**
var y = 234;
var z = y;
In the above example, the assign operator knows that the value assigned to y is a primitive type (number type in this case), so when the second line code executes, where the value of y is assigned to z, the assign operator takes the value of y (234) and allocates a new space in the memory and returns the address. Therefore, variable z is not pointing to the location of variable y, instead, it is pointing to a new location in the memory.

var y = #8454; // y pointing to address of the value 234
var z = y; 
var z = #5411; // z pointing to a completely new address of the value 234
     
// Changing the value of y
y = 23;
console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z .

From the above example, we can see that primitive data types when passed to another variable, are passed by value. Instead of just assigning the same address to another variable, the value is passed and new space of memory is created.
 
 */

/*
In JavaScript, when we pass a primitive data type (such as Number, String, Boolean, Undefined, Null, or Symbol) to a function, it is passed by value. This means that a copy of the value is created and passed to the function, so that the original value remains unchanged.

For example:
*/

let x = 10;

function changeValue(num) {
  num = 20;
}

changeValue(x);
console.log(x);  // Output : 10

/*
In this example, the 'changeValue' function takes a num parameter, which is a primitive data type (Number). When we call changeValue(x), a copy of the value of x (10) is passed to the function. Within the function, we assign a new value of 20 to num. However, this change does not affect the original value of x, which remains 10.
This is because primitive data types are passed by value in JavaScript, meaning that a copy of the value is created and passed to the function, so that the original value remains unchanged

2:) Non Primitive
(To store multiple values)->( value are mutable) (pass by reference):Object,Array.

Non-primitive types
To store multiple and complex values, non-primitive data types are used.

In JavaScript, when we pass an object (including arrays and functions) to a function, it is passed by reference. This means that a reference to the object, is passed to the function.
For example:
*/
let person = { name: "John Doe", age: 26 };

function changeName(obj) {
  obj.name = "Jane Do111e";
}

changeName(person);
console.log(person.name);  // Output: "Jane Do111e"

/*
In this example, the changeName function takes an obj parameter, which is an object. When we call changeName(person), a reference to the person object is passed to the function. Within the function, we change the name property of the object to "Jane Doe".

Since objects are passed by reference in JavaScript, this change is reflected in the original person object, so that its name property is now "Jane Doe".
This is because objects in JavaScript are passed by reference, meaning that a reference to the object, rather than a copy of its value, is passed to the function. Any changes made to the object within the function are therefore reflected in the original object, as it is the same object.

11) The keyword is a reference variable that refers to the current object. For example :

13)The parseInt() function is used to convert numbers between different bases. 
parseInt() takes the string to be converted as its first parameter. 
The second parameter is the base of the given string.

Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values.

3. What is mutable?  
Ans - A mutable object is an object whose state can be modified after it is created. 

Immutables are the those, whose state cannot be changed once it is created. Strings and Numbers are Immutable.  
 
*/

let x1 = {}, y = { name: "Ronny" }, z = { name: "John" };
let t;
let t1 = {}
x1[y] = { name: "Vivek" };

x1[z] = { name: "Akki" };

console.log(x1[y]);  /// { name: 'Akki' }
console.log(x1[t1], 'D');//{ name: 'Akki' } D
console.log(x1, 'ggggg'); //{ '[object Object]': { name: 'Akki' } } ggggg
/*
In JavaScript, when an object is used as a key in another object, it is automatically converted to a string using the toString() method. In this case, both y and z are objects, so they will be converted to strings and used as keys in the x1 object.

Here's what's happening in the code:
let x1 = {}, y = {name:"Ronny"}, z = {name:"John"};
x1[y] = {name:"Vivek"}; // Set x1["[object Object]"] = {name:"Vivek"}
x1[z] = {name:"Akki"};  // Set x1["[object Object]"] = {name:"Akki"}
console.log(x[y]);     // Logs {name:"Akki"}

*/

/*
In this code, the x1 object is being assigned two properties: x1[y] and x1[z]. Since y and z are both objects, they are both converted to the string "[object Object]" and used as keys in the x object.

The first assignment sets the x["[object Object]"] property to {name:"Vivek"}. The second assignment overwrites the x["[object Object]"] property with {name:"Akki"}.
When console.log(x[y]) is called, it retrieves the value of x["[object Object]"], which is {name:"Akki"} because it was the last value assigned to that key.

*/
let a1 = 0;
let b1 = false;
console.log((a1 == b1));//true
console.log((a1 === b1));///false

/*
what is concurrent  in node js
Concurrency is an essential feature of Node. js that enables it to handle large numbers of I/O operations simultaneously, without blocking the execution thread. This concurrency model allows Node. js to handle many requests concurrently, resulting in improved application performance.

*/

/*
JavaScript Operators
JavaScript Operators are symbols that are used to perform Operations on operands.


Arithmetic Operators: use to perform arithmetic operation on the operands.
E.g:
 
Operator	Description	Example
+	Addition	10+20 = 30
-	Subtraction	20-10 = 10
*	Multiplication	10*20 = 200
/	Division	20/10 = 2
%	Modulus (Remainder)	20%10 = 0
++	Increment	var a=10; a++; Now a = 11
--	Decrement	var a=10; a--; Now a = 9


Comparison Operators:

The JavaScript comparison operator compares the two operands. The comparison operators are as follows:
Operator	Description	Example
==	Is equal to	10==20 = false
===	Identical (equal and of same type)	10==20 = false
!=	Not equal to	10!=20 = true
!==	Not Identical	20!==20 = false
>	Greater than	20>10 = true
>=	Greater than or equal to	20>=10 = true
<	Less than	20<10 = false
<=	Less than or equal to	20<=10 = false



Logical Operators:

The following operators are known as JavaScript logical operators.

&&	Logical AND	(10==20 && 20==33) = false
||	Logical OR	(10==20 || 20==33) = false
!	Logical Not	!(10==20) = true

OR ( | | ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.

AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.



Assignment Operators: 
The following operators are known as JavaScript assignment operators.
Operator	Description	Example
=	Assign	10+10 = 20
+=	Add and assign	var a=10; a+=20; Now a = 30
-=	Subtract and assign	var a=20; a-=10; Now a = 10
*=	Multiply and assign	var a=10; a*=20; Now a = 200
/=	Divide and assign	var a=10; a/=2; Now a = 5
%=	Modulus and assign	var a=10; a%=2; Now a = 0



Java Script Special Operators
The following Operators are known as JavaScript Special operators.

(?:) : Conditional Operator returns Value based on
the Condition. It is like if- else. Comma Operator allows multiple expressions to be evaluated as single statement.

Delete: Delete Operator deletes a property from the object.

In: In Operator checks if object has the given property.

Instanceof: Checks if the object is an instance of given type

New: 	Creates an instance

Typeof: Checks the type of object .

Void : it discards the expression's return value. 
Yield: checks what is returned in a generator by the generator's interator.
*/


/*

*/
/*

*/
/*
Java Script If- else

The Java Script if-else statement is used to
execute the code whether condition is true or false. 
There are three forms of if statement in
JavaScript.
1.If Statement
2.If else statement. 
3.If else if statement.

Java Script If Statement 
It evaluates the Content only if expression is true.
Example
*/
var a13 = 20;
if (a13 > 10) {
  // document. Write ("value of a is grater than 10");

}
/*

JavaScript if... else statement 

If evaluates the content whether condition is true of false.

Example
<script>
Var a = 20;
if (a% 2 = 0) {
document. Write ("a is even number");
3 else {
document. Write ("a is odd number ");.
</script>

JavaScript If... else if statement

It evaluates the content only if expression is true.
Example
<script>
Var a = 20;
if (a== 10){
document. Write ("a is equal to 10");
Defe
14
else if (a = = 15) {
document. Write ("a is equal to 15");
3
else if (a== 20){
document. Write ("a is equal to 20");
else{
document. Write ("a is not equal to 10, 15 or 20"); 3
</script>





 JavaScript Switch Statement
Use the switch statement to select one of many code blocks to be executed.

Syntax
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

JavaScript Loops
The JavaScript loops are used to iterate (to say or do again or again and again) the piece of code using for, while, do while or for-in loops. It makes the code compact. It is mostly used in array.
There are four types of loops in JavaScript.
1.for loop
2.while loop
3.do-while loop
4.for-in loop

1) JavaScript For loop
The JavaScript for loop iterates the elements for the fixed number of times. It should be used if number of iteration is known. The syntax of for loop is given below.
for (initialization; condition; increment)  
  {  
      code to be executed  
  }  
Let’s see the simple example of for loop in javascript.

1.<script>  
2.for (i=1; i<=5; i++)  
3.{  
4.document.write(i + "<br/>")  
5.}  
6.</script>  




2) JavaScript while loop
1.The while loop in JavaScript is a control structure that allows you to repeatedly execute a block of code as long as a certain condition is true. The basic syntax of a while loop is:while (condition)  
2.{  
3.    code to be executed  
4.}  

while (condition) {
  // code to be executed
}
Here, condition is a boolean expression that evaluates to either true or false. If the condition is true, the code within the loop is executed. Once the code has finished executing, the condition is re-evaluated. If the condition is still true, the code within the loop is executed again. This continues until the condition evaluates to false, at which point the loop terminates and the program continues with the next line of code after the loop.
For example:
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
In this example, the while loop continues to execute as long as count is less than or equal to 5. On each iteration of the loop, the value of count is printed to the console and then incremented by 1. This continues until count is 6, at which point the condition count <= 5 evaluates to false and the loop terminates. The final output of this code will be:

1
2
3
4
5





3) JavaScript do while loop
The JavaScript do while loop iterates the elements for the infinite number of times like while loop. But, code is executed at least once whether condition is true or false. The syntax of do while loop is given below.
1.do{  
2.    code to be executed  
3.}while (condition);  



4) JavaScript for in loop
The JavaScript for in loop is used to iterate the properties of an object. 





*/
/*
Pre-increment (++x): Increments the variable first, then returns the new value.
Post-increment (x++): Returns the current value, then increments the variable.

*/
let x2 = 5;
console.log(++x2, 'WWWWWW'); // 6
console.log(x2, "!!!!!!!!!!"); // 6 

let y2 = 10;
console.log(y2++); //10 
console.log(y2, "hj22"); // 11


let a4 = 3;
let b2 = a4++ + ++a4;  //(3 + 5 )
console.log(b2); //8  ...
console.log(a4); //5


let n = 2;
let result = n++ * ++n;  // ( 2 * 4 )
console.log(result);//8
console.log(n); //4

for (let i = 0; i < 3; i++) {
  console.log(i++);
}
// 0
// 2

function test(x) {
  return ++x + x++;    //  2 + 2
}
let x3 = 1;
console.log(test(x3));  //  4   --doubt
console.log(x3);   // 1


let x4 = 5;
console.log(x4++ + ++x4 + x4);  // 19  --doubt // (5+7+7)
console.log(x4);  //  7
// JavaScript evaluates expressions left-to-right, and each increment changes x.

let num = 0;
if (++num) {
  console.log("Positive: " + num);
} else {
  console.log("Zero or Negative: " + num);
}
//Positive: 1

let arr = [10, 20, 30];
let i = 0;
console.log(arr[i++]);//10 
console.log(arr[i]);  // 20


let a = 4;
let b5 = a++ + ++a + a--;   // 4  + 6 +6
console.log(a, b5);  // 5, 16


/*

*/
/*

*/
/*

*/
/*

*/