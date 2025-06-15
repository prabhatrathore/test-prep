/**
 * remove duplicates from sorted array 
 * input :[0,0,0,1,1,1,2,2,2,2,3,3,4,4,]
 * output :[ 0,1,2,3,4 ]
 */
let arr = [0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
        arr.splice(i, 1)
        i--
    }
}
// console.log(arr,"first approach");
/**
 * 2nd approach ,two pointer approach
 */  //        i  j                     i  j
let arr2 = [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4];
let newArray = []
let i = 0;  //1
for (let j = 1; j <= arr2.length; j++) {  //[0, 1, 2, 1, 2, 3, 4, 5];
    if (arr2[i] != arr2[j]) {               //        i     j
        newArray.push(arr2[i])
        // console.log(newArray, "55555555")
        i++
        arr2[i] = arr2[j]
    }

}
console.log(newArray, "2nd approach---two-pointer")
