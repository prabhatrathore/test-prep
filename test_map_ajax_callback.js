let str = "stringgg"
// str = str.toLocaleUpperCase()//convert to upper case
// console.log(str, "@@#1")

str.toLocaleUpperCase()//anothing happen here because we cannot assign 'this' to variable 

let obj = {
    name: "ram",
    address: "delhi",
    phone: 12345
}
// console.log(Object.entries(obj),"entries")
//answer [ [ 'name', 'ram' ], [ 'address', 'delhi' ], [ 'phone', 12345 ] ] 

//callback example
function first(ab) {
    console.log(ab, "1234")
}
function second(cb1) {
    cb1("ramjan")
}
// second(first)

let arr = [1, 2, 2, 2, 3, 3, 4, 4]
// let items = new Set(arr)
// console.log(items,"it222")//Set(4) { 1, 2, 3, 4 }
// console.log([...items],"items2222")//[ 1, 2, 3, 4 ] 

// // items.clear()
let singeValue = []
for (let el of arr) {
    // console.log(singeValue.includes(el),"ploik")
    if (singeValue.includes(el)) { } else { singeValue.push(el) }
}
// console.log(singeValue,"456235")

///////////////////////////////////////////////////////////////////////////////////
let string = "helloworldhereistheworldodcomputer h e l l "
let temparr2 = []
for (let el of string) {
    if (!temparr2.includes(el)) {
        temparr2.push(el)
    }
}
// console.log(temparr2, "temparra 22")
///////////////////////////////////////////////////////////////////////////////////

// -------------------------------------------------------------------------------
let obj1 = {
    name: "abc",
    age: 23
}

let obj2 = {
    name: "xyz",
    age: 13,
    about: function sol(params) {
        console.log(this.name, this.age, "call the function ++++")
    }
}

// obj2.about?.call(obj1)
// obj2.about()
// ---------------------------------------------------------------------------

function sol(parm, arr) {
    console.log(parm + parm.name, "aoy", arr)//[object Object]xyz aoy [ 'hi' ] 
    console.log(JSON.stringify(parm) + parm.name, "aoy", arr)//{"name":"xyz","age":13}xyz aoy [ 'hi' ]
}
// sol(obj2,["hi"])
// ------------------------------------------------------------------------
let obj3 = new Object(null)
// console.log(obj3, "231==")//{}
obj3.name = "update"
// console.log(obj3, "231")//{name :'update'}
obj3 = Object.create({})
obj3.age = 9
// console.log(obj3, "obj3333")//{  age: 9 }

// ------------------------------------------------------------------------

/**
AJAX (Asynchronous JavaScript and XML)

✅ What is AJAX?
AJAX is a technique that allows webpages to communicate with the server without reloading the page.

✅ Think of it like: Chat app messages updating without refreshing the whole page.

✅ Why use AJAX?
To send/receive data in the background
Page content updates without refresh
Better user experience

✅ How does it work?
AJAX uses HTTP protocol to send/receive data between Client (Browser) and Server.

✅ We used to use XML, but now it's mostly JSON.
🔸 Ways to make AJAX Requests:
1️⃣ XMLHttpRequest (Old way)

------------------------------------------------------------------
let xhr = new XMLHttpRequest();
xhr.open("GET", "data.json", true);
xhr.onload = function () {
  console.log(xhr.responseText);
};
xhr.send();
-------------------------------------------------------------------------

⛔ Old and verbose. Not commonly used now.

2️⃣ Fetch API (Modern way)

fetch("data.json")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

  ✅ Modern and cleaner.

3️⃣ Axios (Third-party library)
axios.get("data.json")
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
✅ Easy and handles errors better
✅ Supports older browsers too

 */
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


console.log("script start");
arr = ['box', 'pen', ''];
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

// Promise is a JavaScript feature (part of ES6).
//promise ek object hee hai 
console.log("script end");
// -----------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------
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

// why json over ajax
/**
 JSON (JavaScript Object Notation) is preferred over other data formats 
 
Lightweight and Simple: JSON is a compact, text-based format that's easy to read and write for both humans and machines. It uses key-value pairs, making it simpler than XML, which has verbose tags.

Native JavaScript Support: JSON is a subset of JavaScript, so it’s directly parsed into JavaScript objects using JSON.parse(). This eliminates extra parsing steps needed for XML, making it faster and more efficient.

Smaller Data Size: JSON results in smaller payloads compared to XML, reducing network transfer time ( in AJAX requests,) which improves performance.

Wide Compatibility: JSON is supported by (virtually) all modern APIs and programming languages, making it a universal choice for data exchange in AJAX calls.

Easier to Work With: JSON’s structure (objects, arrays, strings, numbers) aligns naturally with JavaScript, allowing straightforward manipulation compared to XML’s complex DOM parsing.

Example:
Using JSON with AJAX:

fetch('/api/data')
  .then(response => response.json()) // Directly parse JSON
  .then(data => console.log(data.name)); // Access data easily
With XML, you’d need to parse the XML DOM, which is more cumbersome:

fetch('/api/data')
  .then(response => response.text())
  .then(xml => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'text/xml');
    console.log(xmlDoc.getElementsByTagName('name')[0].textContent);
  });

  Why JSON Wins:
JSON’s simplicity, speed, and ease of use in JavaScript make it the go-to choice for AJAX over XML or other formats. If you need specific use cases or examples, let me know!
 */


