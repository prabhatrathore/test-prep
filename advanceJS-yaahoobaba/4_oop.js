/**
 * OOPs 
 * object oriented programming.
 * oop coding ki methodolody(style/pattern ) hai.    
 * jo bade code ko chote code mai convert krne mai use hota 
 * iski help se kaafi jyada code ko moduler kr skte h and reuseable bna skte h
 * 

 * code more modular and reuseble
 * well organized code.
 * easier to debug 
 *  
 * best for medium to large website projects.
 *   
 */

/**
 *  
 e.g.
 jase ki agar hamare pass building ka blueprint hai to osse jo ghr banenge wo sb same/common honge because
 blueprint hee ek hai .

blue print ko kh skte hai 'class' and jitne bhi actual flats bankr aayenge onhe kh skte 'object'
object mai har cheez hogi jo class mai hogi . 

 object represent kr rha hai actual mai class kaisii hai. jo jo cheeze class mai hai wo sb object mai bhi hogi 
 class is the blueprint of the object .
 */

/**
 * e.g.2
 * ek class hai 'car' naam se.
 * class hai =>car
 * object=>  actual car (swift, i10);
 * 
 * car ki kuch property hoti hai jese 
 * properties:  value  (may be different ho skti)
 *   
 * color =>     white, black
 * engine =>    800cc, 700cc
 * seat=>       5seater, 7seater
 * ac =>        non ac , fully ac
 * price =>     10lac, 4lac
 * 
 * property will be differ class to class. 
 * class mai do cheeze hoti hai properties (variable), and methods(functions ) 
 * property ko class ke andar hee declare krte h  .bahar kiye gye variable declare 
 * andar access nhi hoga.
 */

/**
 *                   class (calculator naam se)
 *          property             methods
 *           let a;              sum(){
 *           let b;               c=a+b;      variable liya 'c' declare krra iss class mai. 
 *           let c;               return c          isi mai do variable ko add kr diya //
 *                                 }
 * methods ke andar onhi property ko use kr skte jise declare kri h and jo bahar define krri 
 * class se koi bhi property ose use nhi kr skte. 
 * 
 * class ki working oske methods ke andar define hoti h  
 * 
 */

class hello {
    mes() { //ye function define krra hai, function keyword nhi likhte //ise method bhi bol skte 
        console.log('hello-everyone')
    }
};

/**
 * ab iss method ko call krna hai to sbse phele humko iss class ka object banana hoga. 
 */

let a = new hello()//jo class naame hai, wahi dena hai 
//  ^  a , object bn gaya 

a.mes()
console.log('=======11111111111111111111=========');

/**
 * type of methods in js (TYPES)
 * 
 * constructor    =>  constructor(){     
  *                        console.log('heelo')
  *                    }
  *  
  *   hamesha constructor, 'constuctor' keyword se hee banana h .
  *      and ye apne app call hoga ye method.
  *   ye hum jb use krte hai jb hume obj initialise krna hota ya property ko define krna hota  
  * 
  * prototype method: e.g  mes()
  * inka naam hota h . apne aap call nhi hote, phelee object banana hoga iss method ka    
  * mes(){  
  *  console.log('hello-world) 
  * 
  *           };
  *  
  * static e.g.   static name(){
  *                           console.log('hello) 
  *                     }   
  * iske bina class ka  object banaye bhi use  kr skte 
  * 
    */
class student {
    constructor() {
        let name1;
        console.log("cosntructor called ")
    }
    hello() {
        console.log('hello21' + this.name1)
        return `'hello:::' + ${this.name1}`
    }
};
let b = new student();
// let c = new student();
b.name1 = ' heel - world '
console.log(b, 'bbbbbbbb');
//cosntructor called
//student { name1: ' heel - world ' }  bbbbbbbb
console.log("========2222222222========")
console.log(b.hello(), "hello22221"); //'hello:::' +  heel - world  hello22221

// console.log(b)

console.log("********************+==333333333333===***********");

class student2 {
    constructor(name, age) {
        this.age = age
        this.name1 = name //'this' represent kr rha 'b' object ko 3
        console.log("cosntructor caled2")
    }
    hello() {
        // console.log(`hello  ${this.name1} and ur age is ${this.age}`)
        return `hello  ${this.name1} and ur age is ${this.age}`
    }
    static statisMethod() {
        console.log('static function called ')
    }

}

b = new student2('harry-potter', 22);
//we can create multiple object of single class 
c = new student2('ram', 33)
console.log(b,"################ ")
//cosntructor caled
// student2 { age: 22, name1: 'harry-potter' }
// console.log('2222222222======2222222')
console.log(c.hello())
//hello  ram and ur age is 33

// console.log('33333333======333333')
console.log(b.hello())
//hello  harry-potter and ur age is 22
// console.log('44444444444======4444444444')
console.log(student2.statisMethod()) //bina object banaye bhi call kr skte 
//static function called

/**
 * iNHERITANCE 
 *  class A =========inheritance====>   class B ====================>  class c  (multi level inheritance)
 * propert and methods              property and methods           property and methods
 * 
 * class A is base class 
 * class B is   derived class.
 * ab class B ki bhi derived class bn skti h CLASS C 
 * to ab class c class b ki property ko inheritance kr skti and class A ki bhi 

*/

class fruits {              // base class h


}
class vegetables extends fruits {     //derived class h , ye fruit ki class ki proeprty/methods  ko use kr skta h 

}

let f = new fruits() // ye sirf fruit class ki property/ method ko use kr skta 
let g = new vegetables()//ye vegetable and fruits class ki property use kr skta .
// console.log('===1111111======================');

class employee {
    constructor(name1) {
        console.log('constructor called here ' + name1);
    };
};
// let d = new employee()

class manager extends employee {
    constructor(name1) {
        super()//ye ab check krega constructor base class mai to usko phele print krega ,inheritance 
        // ka part H   
        console.log('constructor2 called here2  ' + name1);
   
    }
};
let e = new manager('hello world ');// now manager inherit kr rha employee class ko to oska constructor apne app call hoga 
console.log("======999999999999=====================");

class employee2 {

    constructor(name1, age, salary) {
        this.empname = name1
        this.empage = age
        this.empsalary = salary
        console.log('constructor called here employee' + name1);
    }
    info() {
        console.log('Employee name :' + this.empname)
    }
}

class manager2 extends employee2 {//manager2 class inherit kr rhi employee2 class ko
    info() {
        super.info() //ye base class ke info method ko call kregi phele
        console.log('mnager name :constructor' + this.empname)
        // super.info() //ab ye last mai call hoga 
    }

};
let h = new manager2('hello world ');// now manager inherit kr rha employee class ko to oska constructor apne app call hoga 
h.info()
//constructor called here employeehello world     
// Employee name :hello world
// mnager name :constructorhello world

console.log("========88888888888888888===============");
class employee3 {
    constructor(name1, age, salary) {
        this.empname = name1
        this.empage = age
        this.empsalary = salary
        console.log('constructor called here employee ' + name1);
    }
    info() {
        console.log('Employee name :' + this.empname, 'age:', this.empage, 'salary :', this.empsalary)
    }
}

class manager3 extends employee3 {//manager3 class inherit kr rhi employee3 class ko
    constructor(name, age, salary) {
        super()
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    info() {
        super.info() //ye base class ke innfo method ko call kregi phele
        console.log('mnager name :constructor' + this.empname, 'age', this.age, 'salary: ', this.empsalary)
        // super.info() //ab ye last mai call hoga 
    }
};
let i = new manager2('manager-name ', 27, 300000);// now manager inherit kr rha employee class ko to oska constructor apne app call hoga 
i.info()
let j = new employee3('employeer-name', 22, 22000)
j.info()

class test extends manager3 {

}
let k = new test()



// //==========================================
// //=======================
// //==========================================
// OOP (Object-Oriented Programming) is a programming paradigm that is based on the concept of "objects", which can contain data and code that manipulates that data.

// Here is an example of OOP in JavaScript:


// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
  
//   start() {
//     console.log(`Starting the ${this.make} ${this.model}`);
//   }
// }

// const myCar = new Car("Tesla", "Model S");
// myCar.start();

// In this example, we defined a Car class with a constructor method that sets the make and model of the car. We also added a start method that logs a message to the console.

// We then created an instance of the Car class and called the start method on it. This outputs the following to the console:


// Starting the Tesla Model S