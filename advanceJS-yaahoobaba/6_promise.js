/**
 * 
 * 
 */

function sol(a, b) {
    return new Promise((resolve, rejects) => {
        let c = a / b;
        setTimeout(() => {

            if (a, b) {
                resolve(`u r answer is : ${c}`)
            } else {
                rejects(`filed to calulate`)
            }
        },200)
    },)

}
sol(2, 3)
    .then((msg) => { console.log(msg, 'winn') })
    .catch((msg) => { console.log(msg, 'wrror occured') });
console.log("==============1111111===============");

/**
* prmoise.all()
* agar ek se jyada h promise,  10,100 to har ek ke liye possible nhi h individual case likhna 

so that case promise.all() ka use kr skte ye check krega saare promise ko  
if all promsie resolve tabhi then function call hoga , 
saare promise resolve hote h tabhi then function call, nhi to catch function call hoga 
*/

let p1 = new Promise((resolve, rejects) => {
    setTimeout(() => {
        // console.log("first promise resolve")
        resolve("first 10", 10)
    }, 1000);
});

let p2 = new Promise((resolve, rejects) => {
    setTimeout(() => {
        // console.log("secomd promise falied");
        // rejects("failed ", 20)
        resolve("second", 120)
    }, 2000);
});

let p3 = new Promise((resolve, rejects) => {
    setTimeout(() => {
        // console.log("third promise resolve")
        resolve("third ", 30)
    }, 3000);
});

Promise.all([p1, p2, p3])
    .then((msg) => { console.log(`msg: ${msg}`, 'success') })
    .catch((error) => { console.log(error, "err111") });//array mai promise de skte 

//another wway to write the code
console.log("===============2222222222==222");
let promisecall = function (returndata, message) {
    return function (resolve, rejects) {
        setTimeout(() => {
            console.log(`the ${message} promise has resolve `)
            resolve(returndata)
        }, returndata * 100);
    }
}