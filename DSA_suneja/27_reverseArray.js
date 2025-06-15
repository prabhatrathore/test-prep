/**
 * try not to use builtin function 
 * reverse the array or string
 */


// output:[]

function sol(arr) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++
        end--
    }
    console.log(arr)
}

let arr = [1, 6, 8, 93, 4,];
// sol(arr)

function sol2(str) {
    let str2 = ''
    for (let value of str) {
        str2 = value + str2
    }
    console.log(str2)

}
str = 'hello-world'
// sol2(str)


/**
 * find maximum and minimum element in array 
 */
function sol3(arr2) {
    let current = arr2[0]
    let smallestValue = arr2[0]
    for (let i = 1; i < arr2.length; i++) {
        if (current < arr2[i]) {
            current = arr2[i]
        }

        if (smallestValue > arr2[i]) {
            smallestValue = arr2[i]
        }
    }
    console.log(smallestValue)
    console.log(current)
};
let arr2 = [12, 14, 6, 28, 10, 11, 13, 15]
sol3(arr2)