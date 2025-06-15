// Find the missing element from an ordered array arr[], consisting of N elements representing an Arithmetic Progression(AP).

// Note: There always exists an element which upon inserting into sequence forms Arithmetic progression. Boundary elements (first and last elements) are not missing.

// Example 1:

// Input:
// N = 6
// Arr[] = {2, 4, 8, 10, 12, 14}
// Output: 6
// Explanation: Actual AP should be 
// 2, 4, 6, 8, 10, 12, 14.

// Example 2:

// Input:
// N = 6
// Arr[] = {1, 6, 11, 16, 21, 31}
// Output: 26
// Explanation: Actual AP should be 
// 1, 6, 11, 16, 21, 26, 31.
let Arr = [2, 4, 8, 10, 12, 14]
function findMissing(arr) {
  const n = arr.length;
  // calculate common difference
  const diff = Math.floor((arr[n - 1] - arr[0]) / n);
  console.log(diff, 'diffff', n, 'nnnnnnnnn')
  // check each pair of consecutive elements
  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] - arr[i] !== diff) {
      // found missing element 
      console.log(arr[i] + arr[i + 1], "arr[i] + arr[i+1]) ")
      console.log(Math.floor((arr[i] + arr[i + 1]) / 2))
      return Math.floor((arr[i] + arr[i + 1]) / 2);
    }
  }
  // no missing element found
  return null;
}
findMissing(Arr)