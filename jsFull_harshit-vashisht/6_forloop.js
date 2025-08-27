
let fruit = ['apple', 'mango', 'grapes', 'abc', 'cde']
console.log(fruit.length)//5
console.log(fruit[0])//apple
console.log(fruit[fruit.length - 1])//cde
console.log("1111111111111===========")

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i].toUpperCase())
    console.log(fruit[i].toLowerCase())
}
// console.log("22222222===========")

let i = 0
while (i < fruit.length) {
    console.log(fruit[i])
    i++
};
// console.log("333333333333===========")
//for of loop in array

for (let fruit1 of fruit) {
    console.log(fruit1, '===', fruit)
    console.log(fruit);
};
// console.log("44444444444444===========");

for (let fruits in fruit) {
    console.log(fruit[fruits], '=====', fruits)
};
// console.log("55555555555555555===========")

fruit.forEach((el) => {
    if (el.includes('a')) {
        console.log(el)
    }
    else {
        console.log('none')
    }
    // let result= el.indexOf('a')
    // let result= el.charAt(2) 
    // console.log(result)
});