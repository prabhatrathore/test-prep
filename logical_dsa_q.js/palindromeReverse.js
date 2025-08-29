//question let a === //random number 23232
//wants === iska reverse  ,a   ka:  

let rev = 0;  //6   33   22     11
let num3 = 1236; //123  12   1   0
let lastDigit; //6  3   2    1


// console.log(num3 / 10,'p[p;lp[]')//ye quotient deta 
// while (num3 != 0) {
//     lastDigit = num3 % 10;      //ye remainder dega // 6  
//     rev = rev * 10 + lastDigit;
//     console.log(rev, 'rev value ')
//     num3 = Math.floor(num3 / 10);//quotation dega
//     console.log(num3, 'each time')
// };
while (num3 != 0) {


}


console.log("Reverse number : " + rev);
//==================================
let rev2 = 0;
// let input = 2234464758
let ab3 = 2453574;
rev2 = Number(String(ab3).split('').reverse().join(''))
// console.log(rev2)


console.log('============')
// console.log(+true)//1

let num4 = 2356789
num4 = num4 + ""
let temp = [...num4]
let num = +temp[temp.length - 1]
console.log(temp, "temp2")
let data = []

for (let i = num4.length - 2; i >= 0; i--) {
    // console.log(num4[i],"000")
    data.push(+num4[i])
    num = num * 10 + +num4[i]
}
// console.log(...data,"data34")
console.log(num, "num34")

let obj1 = { a: 11, b: 44, c: 3, d: 3 }
let obj2 = { a: 11, c: 3 }
let obj = {}
//output {a:11,c:3}
for (let el in obj1) {
    for (let elee in obj2) {
        if (el == elee) {

            if (obj1[el] == obj2[elee]) {
                obj[el] = obj1[el]
            }
        }
    }
}
console.log(obj, "object===========")
////////another method======================================
let ab = Object.keys(obj1)
console.log(ab, "ab333333")
let objnew = {}
ab.forEach((el) => {
    if (obj2.hasOwnProperty(el) && obj2[el] == obj1[el]) {
        objnew[el] = obj2[el]
    }
})
console.log(objnew, 'obj333333333333')


