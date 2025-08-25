/**
 * find palindrome 
 * 'abba' =true
 * 'seggfcew' = false
 */
let str = 'abba'
let str2 = ""
// let str2 = str.split("").reverse("").join("");
for (let value of str) {
    str2 = value + str2
}
console.log(str2)
// console.log(str2)
// str = [...str]
// str2 = [...str2]
// console.log(str)
let ispalindrome = true;
for (let i = 0; i < str.length; i++) {
    if (str[i] != str2[i]) {
        ispalindrome = false
    }
}
console.log(ispalindrome, "1111111111")
// ---------------------------------------------------------------------------------------------

let str3 = (str) => {
    let str2 = str.split("").reverse("").join("");
    return str2 === str
}
// console.log(str3('ab3ba'))
// console.log('abba' === 'abbae')

// //=======================================
(function (str) {
    let reversed = '';
    for (let x of str) {
        console.log('before')
        reversed = x + reversed
        // console.log(reversed)
        // console.log("after")
    }
    console.log(reversed === str)
})
    ("abba")