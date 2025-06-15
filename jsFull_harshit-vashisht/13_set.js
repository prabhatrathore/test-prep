/**
 * sets => it is iterable
 * store data 
 * sets also have its own methods
 * no index-based access
 * order is not guaranteed
 * unique items only (no dublicate items allowed )
 */
let number = new Set([2, 4, 5, 6]);
//561
console.log(number);
console.log(number[2])//undefined
for (let value of number) {
    console.log(Array.isArray(value))//false
    console.log(value)
}
console.log("==111111111111111==");
arr = [1, 2, 3, 4, 5, 7, 8, 9, 04, 3, 1]
newSet = new Set(arr);
console.log(newSet)//Set(8) { 1, 2, 3, 4, 5, 7, 8, 9 }
console.log(...newSet)//1 2 3 4 5 7 8 9
console.log(arr, 'old array with dublicacte element');
