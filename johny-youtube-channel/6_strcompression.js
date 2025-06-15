/**
 * implement a method to perform  a basic string compression using the count of repeated characters
 * e.g.
 * 'aabcccccaaa'a2b1c5a3
 * 'abcd' :'abcd'
 */
function strCompression(str) {
    let count = 1; uniqueCount = ''; uniqueelement = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count++
        } else {
            uniqueCount = uniqueCount + str[i] + count
            count = 1
            uniqueelement++
        }
        // console.log(uniqueCount)
    }
    if (uniqueelement === str.length) return str
    else return uniqueCount

}
console.log({ 'aabcccccaaa': strCompression('aabcccccaaa'), 'abcd': strCompression('abcd') })

// https://www.youtube.com/watch?v=Y_GJHh9cZfY&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=13&ab_channel=BabAcademy