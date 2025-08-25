/**
 * playlist:
 * https://www.youtube.com/watch?v=8Sm_8ITMt08&list=PLzjZaW71kMwQRAtBdJAq3u64ZEw-0wxgI&ab_channel=HelloWorld
 * 
 * 
 * 
 * Q.2 You are given an array of length N (1 < N <= 100) and a number K.
 *  Print the array after K rotations in clockwise direction.
E.g. 
N = 10, K = 3
Arr = [1,2,3,4,5,6,7,8,9,10];
after K rotations;
Arr = [4,5,6,7,8,9,10,1,2,3];

Please mention use of any in-built javascript function is not allowed like 
shift, unshift, substr etc.

 */

function sol(array, k) {
    let i = array.length - 1 // 9
    // console.log(i);
    while (k > 0) { // 3 > 0
        let temp = array[0]; // 1
        // console.log(temp)
        for (let i = 0; i < array.length; i++) {// 0 1 2 3 4 5 6 7 8 
            array[i] = array[i + 1]  // 2, 3, 4, 5, 6, 7, 8, 9, 10, ""
            // console.log(arr)
        };
        arr[i] = temp;
        console.log(arr[i])
        k--;
    };
    return array;
};       //1, 2, 3, 4, 5, 6, 7, 8, 9, 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = sol(arr, 3);
console.log(res)


// console.log(3 % 10)
//===============================================

let n = arr.length
// leftRotate(arr, 3, n) //n=10

obj =
{
    1: "one",
    2: "two",
    3: "three",
};
function sol1(n) {

    for (let value in obj)
        if (n == value) {
            console.log(obj[value])
        } else {
            console.log('provide valid inut')
        }

}
// sol1(1)
/**
 * Q.1 Create a function that takes a number as an input and returns the
number in words( without using third-party packages).
Range 1-1000(both number inclcusive)
For example
Input -555 Output - FIve hundred and fifty five
Input -560 Output - FIve hundred and sixty


 */
function numberToWords(num) {
    if (num === 0) return "Zero";

    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
                  "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
                  "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty",
                  "Sixty", "Seventy", "Eighty", "Ninety"];

    function convert(n) {
        if (n < 20) return ones[n];
        if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + ones[n % 10] : "");
        if (n < 1000) {
            return ones[Math.floor(n / 100)] + " hundred" +
                   (n % 100 !== 0 ? " and " + convert(n % 100) : "");
        }
        return ""; // can extend for bigger numbers
    }

    let result = num < 0 ? convert(-num) : convert(num);

    // Capitalize first letter (like your example)
    return result.charAt(0).toUpperCase() + result.slice(1);
}

// Test cases
console.log(numberToWords(-555)); // Five hundred and fifty five
console.log(numberToWords(-560)); // Five hundred and sixty
