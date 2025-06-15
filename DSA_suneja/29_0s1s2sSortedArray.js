/**
 * 
 * 
 */
// console.log(arr.sort());=======without inbuild function=====
function sol(arr) {
    let l1 = 0;  // 1
    let m0 = 0  // 3
    let n2 = arr.length - 1  // 8;
    // console.log(n2)
    for (let i = 0; i < arr.length; i++) {
        if (arr[m0] == 1) {
            m0++
        } else if (arr[m0] == 0) {
            [arr[m0], arr[l1]] = [arr[l1], arr[m0]];
            l1++
            m0++

        } else if (arr[m0] == 2) {
            [arr[m0], arr[n2]] = [arr[n2], arr[m0]]
            n2--

        }
    }
    console.log(arr, 'sorted');
}

let arr = [0, 2, 1, 2, 2, 2, 1, 1, 0, 0];
// arr = [1, 1, 0, 0, 2, 0, 1, 2, 1, 0]
//    [0, 0, 0, 0, 1, 1, 1,1, 1, 2]
//            l
//                          m
//           n 
sol(arr)
//https://www.youtube.com/c/DhruvGoyal/playlists


function sol2(arr) {
    let _1s = []
    let _2s = []
    let _0s = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            _0s.push(arr[i])
        } else if (arr[i] == 1) {
            _1s.push(arr[i])
        } else {
            _2s.push(arr[i])
        }
    }
    console.log(_0s.concat(_1s).concat(_2s))
}
sol2([0, 1, 2, 1, 2, 1, 2, 0, 0])