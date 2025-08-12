/**
 
 */

// Sample candidate data
const candidates = [
    { name: "Ram Kumar", age: 25, city: "Delhi" },
    { name: "Ramesh Singh", age: 30, city: "Mumbai" },
    { name: "Shyam Gupta", age: 28, city: "Bangalore" },
    { name: "Ramya Sharma", age: 22, city: "Chennai" }
];

// Function to print candidates whose names start with a given string
function printCandidatesByName(startsWith) {
    const filteredCandidates = candidates.filter(candidate =>
        candidate.name.toLowerCase().startsWith(startsWith.toLowerCase())
    );

    if (filteredCandidates.length === 0) {
        console.log(`No candidates found with name starting with "${startsWith}"`);
        return;
    }

    filteredCandidates.forEach(candidate => {
        console.log(`Name: ${candidate.name}, Age: ${candidate.age}, City: ${candidate.city}`);
    });
}

// Test
// printCandidatesByName("Ram");


function normalizeArray(arr) {
    // Check if array contains only numbers and is not empty
    if (arr.length === 0 || !arr.every(item => typeof item === 'number' && !isNaN(item))) {
        return "Array must contain only numbers and cannot be empty";
    }

    // Find min and max
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // If all values are the same, return an array of 0s (to avoid division by zero)
    if (min === max) {
        return arr.map(() => 0);
    }

    // Normalize to [0, 1]
    return arr.map(value => (value - min) / (max - min));
}

// Test cases
// console.log(normalizeArray([1, 2, 3, 4, 5])); // [0, 0.25, 0.5, 0.75, 1]
// console.log(normalizeArray([10, 10, 10])); // [0, 0, 0]
// console.log(normalizeArray([])); // "Array must contain only numbers and cannot be empty"

// ------------------------------------------------------------------------------------------------

function findMissingNumber(arr) {
    // Check if array is empty or too small
    if (arr.length < 2) {
        return "Array must have at least 2 elements to find a missing number";
    }

    // Sort the array
    arr.sort((a, b) => a - b);

    // Get the expected length (including the missing number)
    const n = arr.length + 1;
    console.log(n, 'nnnnnnnnnn')

    // Expected sum of numbers from arr[0] to arr[arr.length - 1] if no number were missing
    const expectedSum = (n * (arr[0] + arr[arr.length - 1])) / 2;
    console.log(expectedSum, 'expectedSum,expectedSum,')
    // Actual sum of the array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    console.log(actualSum, 'actual summmmmmm')
    // The missing number is the difference
    return expectedSum - actualSum;
}

// Test cases
// console.log(findMissingNumber([1, 2, 3, 5])); // Output: 
// console.log(findMissingNumber([1, 2, 4]), 'wwwwwwwwwwwwww'); // Output: 
// console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3
// console.log(findMissingNumber([5, 3, 2, 1])); // Output: 4
// console.log(findMissingNumber([10, 11, 13, 14])); // Output: 12


console.log(Boolean([]), "!!!!!!!!!!!!!!!");//true
// function ghjkl(arr) {
//     arr = arr.sort((a, b) => a - b)
//     console.log(arr, "Arrrrrrrrrr")
//     let findLength = arr.length + 1
//     console.log(findLength, 'wwwwwwwwwwwwwe3e23r23')
//     let find = (findLength * (arr[0] + arr[arr.length - 1])) / 2
//     console.log(find, "fsdwfwef")
//     let reduce = arr.reduce((a, b) => a + b, 0)
//     console.log(reduce, 'wwwwwwwwww')
//     console.log(find - reduce, "this value is missing ")
// }

// ghjkl([5, 3, 2, 1])

function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        // Create character count array (26 lowercase letters)
        const count = new Array(26).fill(0);
        for (const char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        // Convert count array to string key
        const key = count.join('#');
        // Add to map
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
}
function as(str) {
    let arr = {}
    str.forEach((a, b) => {
        // for(let le of  a){
        let simple_name = a.split("").sort().reverse("").join("")
        // console.log(simple_name, 'simplemanen')
        if (arr[simple_name]) {
            arr[simple_name].push(a)
        } else {
            arr[simple_name] = [a]
        }
    })
    console.log(Object.values(arr), "ArrrrrrrrQWQ")
}
// Example usage
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
as(input)
console.log(groupAnagrams(input));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]



function s(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j <= arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    console.log(arr, "AAAAAAAAAAAAA")
    return arr
}
s([1.9, 2.8, 3, 2, 1, 4.5, 7])


function df(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j <= arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    console.log(arr, "AEEEEEEEERERG")
}
// df([1.9, 2.8, 3, 2, 1, 4.5, 7])