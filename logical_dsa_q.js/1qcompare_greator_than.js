let arr = [1, 20, 2000, 202, 2];
let ascendingResult = arr.sort((x, y) => x - y)
console.log(ascendingResult)
let descending = arr.sort((x, y) => y - x)
console.log(descending)

let a = 33
// let a
let b = null
// a++
// b++
console.log(a,"aaaaaaaaa")
console.log(b,"bbbb")

// console.log(a)

// function first(str) {
//     console.log("first function"+str)
// }
// function second(callback) {
//     console.log("second function called ")
//     callback("this is calllback")
// }
// second(first)
// let promise= new Promise((res,rej )=>{
// res("")
// }).then()

console.log(40 > 38 > 30);

// This code is comparing if 40 is greater than 38 and 30. The output will be "false" because 40 is not greater than 30, even though it is greater than 38. JavaScript evaluates the comparison in this order: (40 > 38) > 30, and because the first part is true, it is converted to 1 (true) and then compared to 30 which is false.

console.log(30 < 38 < 40);

// This code logs the result of the comparison 30 < 38 < 40 to the console. The output will be true.

// The comparison operator < has higher precedence than < so the comparison is evaluated as (30 < 38) < 40 which evaluates to true < 40.

// In JavaScript, when a non-boolean value is used in a boolean context, it is first implicitly converted to a boolean. Since true is a truthy value, it is converted to true when used in a boolean context.

// Therefore, the comparison true < 40 evaluates to true.

// In simple words, this code is checking if 30 is less than 38 and 38 is less than 40. The output will be "true" because both conditions are true. 30 is less than 38 and 38 is less than 40.
