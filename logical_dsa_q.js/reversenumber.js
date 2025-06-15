
// console.log(Math.floor(606 % 10));
function sol(str) {
    let count = 0;
    // let str2 = 0
    if (str % 6 == 0) {
        count++
    };

    str = str.split("");
    // console.log(str);
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])
        if (str[i] % 6 == 0) {
            count++
            // i = (str[i] * 10)
            let j = 0
            if ((str[i] * 10) % 6 == 0) {
                // i = (str[i] * 10)
                console.log('=11111111', str[i] * 10, i)

            }

        }
        // if()

        // let _2 = str[i] + str[i + 1];
        // let _3 = str[i] + str[i + 1] + str[i + 2]
        // let _4 = 0;
        // if (_2 % 6 == 0) {
        //     count++
        //     console.log("=========1242352", _3)
        // }
        // if (+str[i] + +str[i + 1] % 6 == 0) {
        //     count++
        //     // console.log(str[i], str[i + 1], '=++==')
        // };
        // if (+str[i] + +str[i + 1] + +str[i + 2] + str[i + 3] % 6 == 0) {
        //     count++
        //     // console.log("===--222", str[i], str[i + 1], str[i + 2])
        // };

    };

    console.log(count)
}
sol("606");

// let rev = 0;  //6   33   22     11
// let num3 = 1236; //123  12   1   0

// let lastDigit; //6  3   2    1

// // console.log(num3 / 10)//ye quotient deta

// while (num3 != 0) {
//     lastDigit = num3 % 10;  //ye remainder dega // 6
//     rev = rev * 10 + lastDigit;
//     console.log(rev, 'rev value ')
//     num3 = Math.floor(num3 / 10);
//     console.log(num3, 'each time')
// }
// console.log("Reverse number : " + rev);


function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
let number = 5;
console.log(factorial(number));
