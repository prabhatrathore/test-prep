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
for (let i = 0; i < arr.length - num + 1; i++) {//not correct
    result.push(arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3])//not correct
};
var result3 = Math.min(...result)
console.log(result3, "11111111")
var a = Math.max(...result)//not correct
console.log(a, "22222222222")
console.log(result)//not correct

console.log("================33333333==============")

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

let n = 100
let array3 = []
for (let i = 2; i < n; i++) {
    array3.push(i)
}
let isPrime3 = []
array3.forEach((el) => {
    for (let i = 2; i < el; i++) {
        if (el % i == 0) {
            return false
        }
    }
    isPrime3.push(el)
    // console.log(isPrime3,"isprime3")

})
