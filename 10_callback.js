/**
 * 
 * A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished executed.

*/
//===============================================================================
//doing same things with easy 
function change(element, text, style, time, onsuccess, onfailure) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = style
            if (onsuccess) {
                onsuccess()
            }
        } else {
            if (onfailure) { onfailure() }
            // console.log('element not exist')
        }
    }, time)

}

///////////====================promises======================================

//promise represent krta hai future value hame abhi nhi pta ,baad mai pta chlegi 
console.log("script start");
let arr = ['box', 'pen', ''];
const promise = new Promise((res, rej) => {  //here we create a promise object 
    if (arr.includes('box') && arr.includes('pen') && arr.includes('erase')) {
        res('goods available');
    } else {
        rej('not good available');
    }
});
promise.then((msg) => {
    console.log('goods available', msg);
}).catch((msg) => {
    console.log('not having', msg);
});
// then and catch , method hai 
//promise j.s ka feature nhi h ,,,browser ka feature h
//promise ek object hee hai 
// promise ko consume browser and result dega object ke andar
console.log("script end");

//script end, ke baad hee promise wala kaam hoga
//====function return promise
const bucket = ['rice', 'vegetable', ''];
function sol() {
    return new Promise((resolve, reject) => {
        if (bucket.includes('rice') && bucket.includes('vegetable') && bucket.includes('salt')) {
            resolve('successfull')//string ki jagah [],{} bhi de skte 
        } else {
            reject('failure');
        };
    });
};
sol().then((msg) => {
    console.log(msg, 'food is ready')
}).catch((msg) => {
    console.log(msg, 'not ready')
});

//====promise and settimeout 
//i want to resolve and reject promise after 2 second
function sol2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let value = false;
            if (value) {
                resolve()
            } else {
                reject()
            }
        }, 2000)
    })

}
sol2()
    .then(() => { console.log("resolve---") })
    .catch(() => { console.log('reject==') })




    