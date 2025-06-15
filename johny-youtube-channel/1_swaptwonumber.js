/**
 * https://www.youtube.com/watch?v=3MO36P_GWl0&list=PL98MbIu3NiM2XZHdROMjfnJj_EW50EuXp&ab_channel=Johnny
 * 
 * swap two number  
 * input: a=10, b = 2
 * ouput: a=2, b=10
 */
let a = 10
let b = 2
a = a + b//12 
b = a - b//10
a = a - b//2
console.log(a, b)
/**
 * 2nd approach
 * XOR approach
 * in XOR 
 * a   b   result
 * 1   1    0
 * 0   0    0
 * 1   0    1
 * 0   1    1
 * 
 * if both value has same then output willbe zero 
 * else has diffrent value they give 1
  */
let d = 4
let e = 8
d = d ^ e //inbinary term 4 will be 0100,, 8 will be 1000   //  d=1100 (result)
e = d ^ e //                      1100 ^ 1000   //  0100= e   means 4        
d = d ^ e    //                    1100^0100    //  d=1000 means 8

/**
 * es6 notation 
 * 
 */

let g = 4
let h = 9
// [g, h] = [h, g]//ReferenceError: Cannot access 'h' before initialization
// console.log(g, h);
/**
 * next approach
 */
let i = 4
let j = 9
i = (i * j) / (j = i)//9
// j = (i * j) / (i = j)

console.log(i, j, 'nest-method')