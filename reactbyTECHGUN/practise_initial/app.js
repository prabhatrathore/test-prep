//old method todecalre function

// function old(name) {
//     console.log(name)
// }
// old("aqwer")

// let old2 = (name2) => {  //arroq function
//     console.log(name2)
// }
// old2("zxcv")

// import { ab, sell2, obj as data } from './practise1.js' //file ka naame proper dena hota 

// console.log(data)
// console.log(ab)
// sell2()


import * as bundle from './practise1.js' //now create an object called bundle 
//jo bhi hai iss folder mai wo sb jo export hai wo property ban gyi bundle ki 

// console.log(sell())
console.log(bundle.data)
console.log(bundle.ab)
bundle.sell2()
// console.log(sell2("pppppppppp")) 




import data from './practise2.js' //ab hum iska naam change kr skte bina 'as' lgaye 

console.log(data, 'from practise.js file ')

//CLASS and OBJECT next topic
// class ek blueprint hota jisse object bante hai 
console.log("=============================")
class customer {
    constructor(n) {
        this.name = n ///ye property banaya h 
    }

    buy() {
        console.log('class......', this.name)
    }
}
let customer1 = new customer("ronny") //customer1 ek object ban gaya h 
console.log(customer1);
// customer1.buy()

class guestCustomer extends customer { //isko inheritance bolte h 
    hello = () => {
        console.log('guestcustomer class extends  ')
    }
    age = 22;

}
let guestObj = new guestCustomer('guest-name-')
// guestObj.hello()
// guestObj.buy()
// console.log(guestObj.name)
console.log(guestObj);
console.log("+======spread operator ==========rest operator=========")
/**
 * kisi bhi object ko ya array ko copy krne ke liye ya expend krne ke
 *
 * rest operator function ke argument mai pass hota jisse flxibility ho
 * jitne bhi parameter bheje sb lele
 */
//destrcuting on array and object

//reference and primitive types 
/**
 * in primitive types 
 */

let obj = {
    name: "abc"
}
let obj2 = obj //yaha assign ho rhi obj //ye point kr rha h obj ko 
let obj3 = { ...obj }//yaha copy ho gaya pura obj .
obj3.name = 'aryan'
obj.name = "name-change"
console.log(obj2);
console.log(obj3);
// console.log()

//Map function
//ye new array create krta hai aur fir uske change kr skte h elemnt ko...
