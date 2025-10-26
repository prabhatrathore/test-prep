/**
 waht is typescript? 
 it is programming laguage , made by microsoft 
 typescript is javascript with syntax for types 


 why typescript 
 avoid bugs in development
increase development speed : 
additional features (enum, interfaces, property modifiers)

ts code first convert into js code & then run 
ts is superset of js 
 

feature of typeescript
type alias

number,string,arr[]  -> this are inbuild type

for creating custom types we use 'type alias'

*/
type User = {
  name: string;
  age: number;
  addres?: String;
};

const user: User = {
  name: "w",
  age: 1,
};

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
 it is shape of an object 
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
in interface we have 'extend' keyword use to extend interface
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
  duration:3
};
//---------------------------------------------------------------------
interface abc{
    name:string,
    age:number
}
interface abc{
    duration:number 
} 

const obj2:abc={
name:"a",age:5,duration:9
}
//==================================================
// if we want to create primitive than we use type ,, if we want to work with object than use interface
type sanitizedString=string 
type evenNumber=number 


///-----------unions 
type ID2 =number|string //  id type will be number or string 
 
/***********generic */
// with generics , we reuse the code , there is not dublication