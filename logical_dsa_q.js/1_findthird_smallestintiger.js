function findThirdSmallest(arr) {
    // Input validation
    if (!Array.isArray(arr) || arr.length < 3) {
        return "Array must have at least 3 elements";
    }
    if (!arr.every(item => typeof item === 'number' && !isNaN(item))) {
        return "Array must contain only numbers";
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    console.log(
        arr,"arr sorted "
    )
    // Use a Set to remove duplicates if needed (optional)
    // const uniqueArr = [...new Set(arr)];
    const uniqueArr = [...arr];
    // if (uniqueArr.length < 3) {
    //     return "Array must have at least 3 unique elements";
    // }

    // Function to find the kth smallest number using partition (like QuickSelect)
    function quickSelect(arr, k) {
        if (arr.length === 1) return arr[0];

        console.log(Math.random(), 'r(Math.random())', arr.length)
        console.log(Math.floor(Math.random() * arr.length), 'Math.floor(Math.random() * arr.length)')
        return
        const pivot = arr[Math.floor(Math.random() * arr.length)];
        console.log(pivot, 'piotttttttt')
        const left = arr.filter(x => x < pivot);
        console.log(left, "leftttt")
        const middle = arr.filter(x => x === pivot);
        console.log(middle, "middle")
        const right = arr.filter(x => x > pivot);
        console.log(right, "rightttt")

        if (k <= left.length) {
            return quickSelect(left, k);
        } else if (k <= left.length + middle.length) {
            return pivot;
        } else {
            return quickSelect(right, k - left.length - middle.length);
        }
    }

    // Find the 3rd smallest (k = 3)
    return quickSelect(uniqueArr, 3);
}

// Test cases
// console.log(findThirdSmallest([5, 2, 8, 1, 9, 3])); // Output: 3
console.log(findThirdSmallest([1, 2, 3, 5, 8, 9])); // Output: 3
// console.log(findThirdSmallest([1, 1, 2, 3, 4])); // Output: 3 (if duplicates are ignored)
// console.log(findThirdSmallest([1, 1, 1])); // Output: "Array must have at least 3 unique elements"