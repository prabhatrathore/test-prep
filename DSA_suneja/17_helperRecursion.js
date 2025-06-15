/**
 * helper recursive function 
 * input=>[1,2,3,4,5,6,7,8,9,10]
 * output=>[1,3,5,7,9]
 *  odd number identify
 * 
 * helper recursive function means :
 * ek function ke andar ka function ko recursively call krna 
 * andar wala function help krega parent function ki 
 * bahar waale function ko call na krva kr andar waale function ko call krvana h 
 */

function findOdd(arr) {
    let newArray = [];
    function helperRecursive(inputArray) {
        if (inputArray.length === 0) {
            return //means khaali return kr dega    
        }
        if (inputArray[0] % 2 != 0) {
            newArray.push(inputArray[0])
        };
        helperRecursive(inputArray.slice(1))
        // console.log(newArray)
    }
    helperRecursive(arr)  //first time call kr rhe
    return newArray
    // console.log(newArray)
}
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const res = findOdd(array) //first time call krra h ye
console.log(res)