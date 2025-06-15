//setinterval 
//setinterval ,settimeout ki tarh hee h .
/**
 * settimout hamare function ko call kr rha tha kuch time baad 
 */
console.log('script start');
setInterval(() => {
    let sum = 0
    // for (let i = 10; i >= 0; i--) {
    //     sum += i
    // }
    // console.log('setinterval===', sum)
    while (sum < 10) { 
        sum++
    };
    sum++
    // console.log("setinterval", Math.floor(Math.random() * 10));
}, 1000);

console.log('after script')



let kl=4
function so(){
    console.log(kl)//Cannot access 'kl' before initialization
    let kl=9
}
so()
//callback understand
function task1(caalback) {
    console.log('function 1 is done')
    caalback()
};
task1(() => {
    console.log("2nd function is print")
});

//e.g3 on callback ==================

// function addTwoNumber(num1, num2, onsuccess, onfailure) {
//     console.log(`there is two num which we add ${num1},${num2}`)
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         onsuccess(num1, num2)

//     } else {
//         onfailure()
//     }
// }

// function onsuccess(number1, number2) {
//     console.log(number1 + number2)
// }
// function onfailure() {
//     console.log('wrong input')
//     console.log('invalid input ')
// }
// addTwoNumber(2, '3', onsuccess, onfailure)

//e.g4======================================= same qurstion

function addTwoNumber(num1, num2, onsuccess, onfailure) {
    console.log(`there is two num which we add ${num1},${num2}`)
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        onsuccess(num1, num2)
    } else {
        onfailure()
    }
};
// function onsuccess(number1, number2) {
//     console.log(number1 + number2)
// }
// function onfailure() {
//     console.log('wrong input')
//     console.log('invalid input ')
// }
addTwoNumber(2, 3, (number1, number2) => {
    console.log(number1 + number2, 'onsuccess print ')
}, () => {
    console.log('wrong input')
    console.log('invalid input ')
});
