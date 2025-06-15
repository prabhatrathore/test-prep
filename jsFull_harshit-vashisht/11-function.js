/**
 * deafult parameter
 * rest parameter 
 * object destructuring
 * 
 * callback function  
 * 
 * 
 * important array method
 * foreach
 *  map 
 * filter 
 * reduce 
 * 
 */
let num = [2, 3, 4, 5, 6, 7]
let res = num.filter(number => number % 2 == 0)
console.log(res)

let res2 = num.every((n) => n % 2 == 0)
console.log(res2);
console.log('==111111111===')
let res3 = num.some((n) => n % 2 == 0)
console.log(res3);//true
//fill method