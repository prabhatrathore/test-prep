/**divide and conqeror technique.
 * find the index of element in given sorted array 
 * [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
 * result,output index :+>  6
 * 
 * condition :
 * min=0;
 * max=arr.length-1,  14 (element =15)
 *  mid = (min+max)/2  =>7
 * if arr[mid]<target
 * left = mid+1; 
 * arr[mid]>target
 * right=mid-1   , min=0 max =6    [1, 2, 3, 4, 5, 6, 7]
 * (min+max)/2 =3 
 * mid+1=>4  (min), max=6   [ 5, 6, 7]
 * (min+max)/2 =>5+1 =>6(min), max =>6
 *  min+max/2=>6
 * arr[mid]==target return mid
 */
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let target = 7
function sol(arr, target) {
    let left = 0 // 1 4 6
    let right = arr.length - 1 //14 6
    // console.log(right)
    while (left <= right) {
        let mid = Math.ceil((left + right) / 2)// 7 3 5 6
        console.log('mid ' + mid + '   min ' + left + '   max ' + right)
        if (arr[mid] == target) {
            return mid
        } else if (arr[mid] > target) //8>7
        {
            right = mid - 1
            // right -= 1
        }
        else {
            left = mid + 1
            // left += 1
        }
    };
    // console.log(right)
};
let result = sol([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7);
console.log(result);
//time complexity binary hogi O(log(n)) linear se bahAtr MAANI  jaati h 

let a = [1, 2, 3]; let b = [1, 2, 3]; console.log(a == b);


/**
 * 
 Let's break down the JavaScript code console.log([1, 2, 3] + [4, 5, 6]).

In JavaScript, the + operator behaves differently depending on the operands. Here, you're adding two arrays: [1, 2, 3] and [4, 5, 6].

Array to String Conversion: When you use the + operator with arrays, JavaScript first converts both arrays to strings. For arrays, this conversion results in their elements being joined with commas. So:
[1, 2, 3] becomes the string "1,2,3"
[4, 5, 6] becomes the string "4,5,6"
String Concatenation: The + operator then concatenates these two strings:
"1,2,3" + "4,5,6" results in "1,2,34,5,6"
Output: The console.log prints this concatenated string:
text

Copy
1,2,34,5,6
 */