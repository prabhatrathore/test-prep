/**
 * recursion : when function call itself 
 * otherwise it will get called infinite times 
 * if a function call itself then there must be  an end point (logic hai ye ) 
 * there must be an endpoint iss function ko stop krne ke liye ,
 * warna ye function chalta rhega 
 * 
 * when function call itself is called recursion  
*/
// function ka fayda hota h write once call mutilple times 
// function contain block of statement 
let a1 = 0
function demo() {   //function with defination
    a1++
    console.log('demo', a1)
    demo()// error throgh kr dega:(rangeError: maximum call stack size exceeded).
    // a++
}
// demo()
/**
 * ek condition pr stop krna hoga wo h logic .
 * recursion mai ek condition hogi jaise hee condiition true hogi rcursion stop ho jayega 
 * 
 * 
 */
let counter = 1;
function demo2(num) {
    if (counter > num) {
        return;
    }
    counter++
    console.log(counter, '====')
    demo2()  //recursion 
}
// let result =
// demo2(12);
// console.log(result)

/**
 * q2: sorting using recursion function 
 * [2,3,1,4]=> default case 
 * steps: 
 * o index ka number 1 index ke no. se chota h (no action taken )
 * agar hota hai to swapping krni h 
 * [2,3,1,4]  => default case
 * [2,1,3,4] case 1
 * [1,2,3,4] final output 
 */

let i = 0;
let j = 1;
let array = [2, 3, 1, 5, 9, 101, 4];
let array2 = [];
function check(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            console.log(array[i], 'iiiiiiii');
            return false; //means sorted hai array          
        }
    };
    return true;
};
function sortCheck(arr) {
    if (check(array)) {
        array2 = array;
        return;
    } else if (arr[i] < arr[j]) {
        i++;
        j++;
        sortCheck(arr)
    } else {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i = 0;
        j = 1;
        sortCheck(arr)
    }
}
sortCheck(array);
console.log(array2, '===op')

console.log('======================');
let a = 2
function is(num) {
    if (a < num) {
        console.log(a)
        a++
    };
    is(num)
};
// is(10)