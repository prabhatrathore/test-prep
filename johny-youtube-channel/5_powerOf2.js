/**
 * power of 2
 * input: 1
 * ouput: true
 * expalanation = 2 power 0 is 1
 * 
 * input:16
 * output:true
 * explaination: 2 power 4 is 16
 * 
 * input 220
 * output:false
 * 
 */
function powerOf2(num) {
    //     if (num % 2 == 0) {
    //         return true
    //     }
    // return false
    //     return powerOf2(num % 2)

    while (num > 1) {
        num = Math.ceil(num / 2)
        console.log(num)
        if (num == 0) {
            return true
        }
    }
    return false
}
const res = powerOf2(16)
console.log(res)
//solution by bobby
function power(x) {
    return x && (x & (x - 1)) === 0

}
console.log(power(220)) //doubt 

// https://www.youtube.com/watch?v=GvRrmAR5vZ8&list=PL98MbIu3NiM2XZHdROMjfnJj_EW50EuXp&index=14&ab_channel=Johnny

function powerOf(x) {

    while ((x % 2) == 0 && x > 1)
        x /= 2
    return (x == 1)
}

console.log(powerOf(4))
console.log(powerOf(224))
console.log(powerOf(16))

// https://www.youtube.com/watch?v=yLPmxiiqt-0&list=PL98MbIu3NiM2XZHdROMjfnJj_EW50EuXp&index=17&ab_channel=Johnny