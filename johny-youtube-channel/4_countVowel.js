/**
 * count vowel in a string
 * input : hello world
 * output: e ,o
 * 2 
 */
function countVowel(str) {
    let count = 0
    let obj = {}
    for (let i of str) {
        obj[i] ? obj[i]++ : obj[i] = 1
    }
    for (let i in obj) {
        if (i == 'a' || i == "e" || i == "i" || i == "o" || i == 'u') {
            count++
        }
    }
    console.log(count)

}
countVowel('hellow-worldeee')

//220===110==55==