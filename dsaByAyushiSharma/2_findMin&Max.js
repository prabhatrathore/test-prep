// input [2,3,4,5,1];

// output
// max no is 5
// min is 1
let arr = [22, 13, 115, 11];
// arr.sort()
// console.log(arr)
let max = arr[0]
let min = arr[0]
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
    if (arr[i] < min) {
        min = arr[i]
    }

};

console.log(max);
console.log(min);