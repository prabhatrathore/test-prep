/**
 * if ur number is 5 u would have:
 * 5! =5*4*3*2*1
 * the pattern would be 
 * 
 * 
 */
function factorial(num) {
    let result = 1
    if (num == 0 || num == 1) {
        console.log(1)
    }
    else {
        for (let i = 1; i <= num; i++) {
            result = result * i
            // console.log(i)
        }
    }
    console.log(result)
}
factorial(6)