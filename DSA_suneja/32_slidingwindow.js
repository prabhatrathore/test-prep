/**
 * sliding window technique 
 * input [2, 3, 6, 9, 4, 2, 35, 7]  n=3
 * find out maximum: 44  
 */

let arr = [2, 3, 6, 9, 4, 2, 35, 7]; ṇ
let n = 3;
let result = 0;
for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
        temp = temp + arr[i + j];
        // temp.push(arr[i + j])
    }
    console.log(temp, 'temp999999999')
    if (temp > result) {
        result = temp
    }
}
console.log(result);
/**
 * do type ke qustion bnate h sliding window pr
 * fix size and variable size 
 * 
 */
/**
 * maximum sum subarray of size k |sliding window
 */
