/**
 * sbse jyda time selection sort leta h 
 * first 
 * bubble sort jiski time complexity hoti h O(n^2)
 * iss sort ka main kaam hai highest element no. ko last mai lana 
 * 
 * sorting algorithm where the largest values bubbled up at the top.
 */

function sol(arr) {
    for (let i = arr.length; i > 0; i--) {//6 
        console.log(i)
        // let isSwapped;
        for (let j = 0; j < i; j++) {  //1 2 3 4 5
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                // isSwapped = true;
            }
        }
        // if (!isSwapped) {
        //     break;
        // }
    }
    return arr

}
let array = [4, 3, 7, 5, 9, 6];
const res = sol(array);
console.log(res);

//
let arr = [1, 1, 1, , , , , 2, 3, 4, 5, , 5, 9, , 86, 53]
//output [ 86, 53, 9, 5, 4, 3, 2, 1 ]

let t = []
for (let i = 0; i < arr.length; i++) {
    let largest = 0
    for (let j = 0; j < arr.length; j++) {
        if (typeof arr[j] == 'number') {
            if (arr[j] > largest) {
                largest = arr[j]
            }
        }
    }
    let checck = arr.indexOf(largest)
    if (checck != -1) {
        arr.splice(checck, 1)
    }
    if (!t.includes(largest)) {
        t.push(largest)
    }
}
console.log(t)