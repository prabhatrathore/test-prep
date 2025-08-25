/**count sum of consecutive digit
 * [1,2,3,4,3,5,4,6,7,8]=>total element 10
 * num=4  means hum 4digit le rhe h onka sum dekh rhe h largest chaihye 
 * sum =25
 * 
 * condition agr num >arr hota h to error msg ayega
 * create a formula, kitne baar chalana hai loop   
 * 10-4+1=>7  itne loop chalenege
 */
var arr = [1, 2, 3, 4, 3, 5, 4, 6, 7, 8];  //not correct
var num = 4
var result = [];

var result3 = Math.min(...result)
console.log(result3, "11111111")
var a = Math.max(...result)//not correct
console.log(a, "22222222222")
console.log(result)//not correct

// ----------------------------------------------------------------------------------------
//solution by technical suneja
function sol(arr, n) {
    if (n > arr.length) {
        return 'num shoud be less than arr.length'
    } else {
        let result = 0;
        for (let i = 0; i < arr.length - n + 1; i++) {//7
            let tmp = 0;//
            for (let j = 0; j < n; j++) {
                tmp += arr[i + j]  //1  3   6  10
                // console.log(tmp, "=000000000")
            }
            console.log(tmp, "asd")
            if (tmp > result) {
                result = tmp;
            }
            // console.log(tmp)
        }
        return result //jisme bracket mai hota wahi declare krne hota
    }
}
let result2 = sol([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4)
console.log(result2, "largest value")

let res = 0
function g(arr, n) {
    for (let i = 0; i < arr.length - n + 1; i++) {

        let temp = 0
        for (let j = 0; j < n; j++) {
            temp = temp + arr[j + i]
        }
        if (temp > res) {
            res = temp
        }
    }
}
g([1, 2, 3, 4, 3, 5, 4, 6], 4)
console.log(res, "eeeee")