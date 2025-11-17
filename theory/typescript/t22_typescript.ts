/**
 waht is typescript? 
 it is programming laguage, made by microsoft 
 ts is superset of js .

 ((typescript is javascript with syntax for types .))

ts, first convert into js code & then run 
------------------------------------------------------------------------------------
difference between 🧠 TypeScript vs JavaScript — Quick Intro
 JavaScript (JS) is a dynamically typed language → meaning we can assign any type to any variable, anytime.

TypeScript (TS) is a superset of JS that adds static typing, meaning it checks variable types before running the code.
*/
var num1:number = 2;   // we do this typerscript also
var num1:number = 21; // we do this typerscript also
var benefit_of_typescrpt
/*
------------------------------------------------------------

 why typescript || ⚡️ Benefits of TypeScript over JavaScript
1. avoid bugs in development || Early Error Detection : 
2. increase development speed : 
3. Improved Code Readability & Maintenance 🧹
4. additional features (enum, interfaces,"type alias", property modifiers,)
5. Powerful OOP Support ⚙️
 ------------------------------------------------------------

 1. avoid bugs in development || Early Error Detection : 
  TypeScript catches errors during compile-time, not runtime.
 
 // TypeScript
 let num: number = 10;
 num = "Hello"; // ❌ Error: Type 'string' is not assignable to type 'number'
 -------------------------------------------------------------------

2. Improved Code Readability & Maintenance 🧹
When the team reads TS code, they instantly know what type each variable or function expects.
-------------------------------------------------------------------
Powerful OOP Support ⚙️
TypeScript supports classes, interfaces, inheritance, and access modifiers like public, private, protected.

------------------------------------------------------------
*/
// npx tsc filename --watch     ---> continuously check

var feature_of_ty
/*
feature of typescript
1. type alias
2. interface
3. decorators
4. generics 
5. namespaces 
6. type inference 
7. advance features

number,string,arr[] --> this are inbuild type 
for creating custom types, we use 'type alias'
*/
/**
 ---------------------------------------------------------------------
🧩 Interface vs Type in TypeScript
Both 'interface' and 'type' are used to define the structure (shape) of an object— like what properties and types it has.
 
⚔️ Interface vs Type — Main Differences 
Feature                 	interface                         	type
🧱 Use for   	  Defining object/class structure	         Defining anything (objects, unions, primitives, etc.)
🔁 Extending	  Use 'extends'	                             Use & (intersection)
🧩 Merging	    Can be merged if declared twice	         Cannot be merged
⚙️ Flexibility	Best for OOP-style code     	           More flexible & powerful

-------------------------------------------------------------------------------------------
🧪 Example: Extending---------------------------------------------

// Interface extending
interface Person {
  name: string;
}
interface Employee extends Person {
  salary: number;
}

// Type extending (using &)
type Person = { name: string }
type Employee = Person & { salary: number }
----------------------------------------------------------------
🧠 When to Use What?-----------------------------

👉 Use interface when:
we’re defining object/class structures.
we expect other developers to extend it later.

👉 Use 'type' when:

we need union types, intersections, or custom combinations.
we want a one-shot structure.

*/
type User = {
  name: string;
  age: number;
  addres?: String;
};

// const user: User = {
//   name: "w",
//   age: 1,
// };

function login(userData: User): User {
  return userData;
  //   return true;
}
login({ name: "a", age: 4 });

type ID = number | String;
const user1: ID = 3;

//----------INTERFACES-----------------------------------------------------------------------
/**
 interfaces 
 it is structure (shape) of an object 
 */
interface Transaction {
  payerAccountNumber: number;
  payeeAcountNumber: number;
}

interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: Boolean;
  transaction: Transaction[];
}
const transaction1: Transaction = {
  payeeAcountNumber: 2,
  payerAccountNumber: 4,
};

const transaction2: Transaction = {
  payeeAcountNumber: 22,
  payerAccountNumber: 24,
};

const bankAccount: BankAccount = {
  accountNumber: 123,
  accountHolder: "joe doe",
  balance: 123,
  isActive: true,
  transaction: [transaction2, transaction1],
};

//------------------------------extends use here------------------------
/*
in interface we have 'extend' keyword use to extend interface.
*/
interface Book {
  name: string;
  price: number;
}
interface Ebook extends Book {
  //   name: string;
  //   price: number;
  fileSize: number;
  format: string;
}
interface AudioBook extends Ebook {
  duration: number;
}
const bookobj: AudioBook = {
  fileSize: 3,
  format: "application/json",
  name: "s",
  price: 7,
  duration: 3,
};
//---------------------------------------------------------------------
interface abc {
  name: string;
  age: number;
}
interface abc {
  duration: number;
}

const obj23: abc = {
  name: "a",
  age: 5,
  duration: 9,
};
//==================================================
// if we want to create primitive than we use 'type' ,, if we want to work with object than use interface
type sanitizedString = string;
type evenNumber = number;

///-----------unions
type ID2 = number | string; //  id type will be number or string

/***********generic */
// with generics , we reuse the code , there is not dublication

/**
 
 */
