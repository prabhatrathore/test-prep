/**
 * move negative element to one siide of an array
 */
function moveNegativeElement(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    console.log(arr)

}
let arr = [1, 5, -4, -7, 3, 9, 4, -1];
moveNegativeElement(arr)