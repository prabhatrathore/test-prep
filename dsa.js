
function findSecondSmallest(arr) {// hard one 
    if (arr.length < 2) return null;

    let first_smallest = Infinity; // 4 , -1  , -5
    let second_smallest = Infinity;  // infinity , 4 , 2,-1

    for (let num of arr) {
        if (num < first_smallest) {
            second_smallest = first_smallest; // infinity
            first_smallest = num;  // 4
        } else if (num > first_smallest && num < second_smallest) {
            second_smallest = num;// 2 
        }
    }
    console.log(first_smallest, 'first_smalless', second_smallest, "second_")
    return (second_smallest === Infinity) ? null : second_smallest;
}
function third(arr) {
    let first = Infinity
    let second = Infinity
    let third = Infinity
    for (let el of arr) {
        if (el < first) {
            third = second
            second = first
            first = el
        } else if (el > first && el < second) {
            third = second
            second = el
        } else if (el > second && el < third) {
            third = el
        }
    }
    console.log(first, 'fir', second, 'seco', third, 'third')
}
// console.log(third([4, 12, 2, 15, 10, 25]), "thirdthirdthirdthird"); // Output: 2 

function second(arr) {
    if (arr.length) return null
    let firstsmallest = Infinity
    let secondSmalles = Infinity
    for (let lee of arr) {
        if (lee < firstsmallest) {
            secondSmalles = firstsmallest
        }
    }
}

// console.log(second([4, -1, 2, -5, 30, 5]), "find__SecondSmallest"); // Output: -1
console.log(findSecondSmallest([4, 12, 2, -5, 10, 5]), "find__SecondSmallest"); // Output: 2 
// console.log(findSecondSmallest([1, -2, 3])); // Output: 1
// console.log(findSecondSmallest([2, 2, 2])); // Output: null
// console.log(findSecondSmallest([-5, -5, -4])); // Output: -4


function findSecondSmallest2(arr) {
    if (arr.length < 2) return null; // Not enough elements

    let smallest = Infinity;
    let secondSmallest = Infinity;
    let thirdSmallest = Infinity;
    let fourthSmallest = Infinity;

    // First pass to find smallest
    for (let num of arr) {
        if (num < smallest) {
            smallest = num;
        }
    }
    // console.log(smallest, "smalles")
    // console.log(secondSmallest, "second smalles")

    // Second pass to find second smallest
    for (let num of arr) {
        // console.log(num, secondSmallest, smallest, num < secondSmallest, num > smallest, 'num < > smallest',)
        if (num < secondSmallest && num > smallest) {
            //    return
            // console.log(num, 'numnum')
            secondSmallest = num;
        }
    }

    for (let num of arr) {
        // console.log(num, secondSmallest, smallest, num < secondSmallest, num > smallest, 'num < > smallest',)
        if (num < thirdSmallest && num > secondSmallest) {
            //    return
            thirdSmallest = num;
        }
    }
    console.log(thirdSmallest, 'thirdSmallestthirdSmallestthirdSmallest')
    for (let le of arr) {
        if (le < fourthSmallest && le > thirdSmallest) {
            fourthSmallest = le
        }
    }
    console.log(fourthSmallest, 'fourth smallestTTTTTTTTTTTTTTTTTT')
    // Check if second smallest exists
    return secondSmallest === Infinity ? null : secondSmallest;
}
// Example usage
const arr = [-1, 5, 2, 10, -8, 3, 0]; // 5, 2, 10,    --=>  -8, -1, 0, 2, 3, 5, 10     
console.log(`Second smallest number::::: ${findSecondSmallest2(arr)}`); // Output: -2


console.log(null == undefined, " console.log(null == undefined);");// true

// Given the following
let array = [2, 3, 4, 5, 7]
function rotateArr(arr, num) {
    for (let i = 0; i < num; i++) {
        let lastlement = arr[arr.length - 1]
        arr.pop()
        for (let j = arr.length - 1; j >= 0; j--) {
            // console.log(arr[j + 1],)
            arr[j + 1] = arr[j]
            // console.log(arr[j + 1], 'first', j, ';iiii', i)
        }
        arr[0] = lastlement
    }
    console.log(arr, 'arrrrrrrrr')
}
rotateArr(array, 6)
// Perform 3 right rotations:
// First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]

// return [4,5,7,2,3]

let t = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, [22, 34, 55], 11], 12], [13, 14, 15]];

let g = []
function simplify(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            simplify(arr[i])
        } else {
            g.push(arr[i])
        }
    }
}
// simplify(t)
console.log(g)