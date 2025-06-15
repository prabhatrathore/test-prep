/**
 * what is nodejs?
 * 
 * 
 * 
 * nodejs ek run time environment h jisko bnaya gaya tha chrome'v8 javacript engine mai 
 * 
 * WHEN TOO USE NODEJS 
 * 
 * input/output bound ke liye
 * data streaming application ke liye (netflix, facebook (scroll krte jaaye khatam nhi hoga))
 * real time chat applciation ke liye (whatsapp)
 * single threaded hai but multiple request ko ek sath  handle kr skta h.
 * non blocking hai node js 
 *  
 * node ke sath hee install ho jata h npm
 * 
  
 * CORE MODULES IN NODEJS
 * 
 * consider modules to be same as js library . a set of function we want to include in our application.
 * 
 * nodejs has a set of built-in modules which we can use without any further installation.
 * isse require krke use kr skte 
 *  
 * extra set of functionality chaiye to core modle
 * 
 * e.g. require(fs)   means file system 
 * bina install krre bhi use kr skte h  
 * 
 * node.js includes an additional data type called buffer. (not available in browser's js)
 * buffer is mainly used to store binary data.
 * while reading from a file or receiving packets  over the network.
 * 
 */
const fs = require('fs');
//create new file if not exist 
fs.writeFileSync("text.txt", "hello world")
fs.writeFileSync("text.txt", "hello world , new world")
fs.writeFileSync("text.txt", "hello world , new world  --------===")
fs.appendFileSync("text.txt", "added value ")
fs.writeFileSync("text.txt2", "hello world")
// const data = fs.readFileSync("text.txt")
// const data = fs.readFileSync("text.txt").toString()
const data = fs.readFileSync("text.txt", "utf8")
console.log(data)
//to rename file 
fs.renameSync("text.txt", "readAndwrite.txt")
//create folder 
// fs.mkdirSync("myapp")
// to delete file 
fs.unlinkSync('text.txt2')
//to delete foolder
// fs.rmdirSync('myapp')
/**
 * video 7 of thapa 
 * #7: Node.JS Asynchronous File System Core Modules | Reading and Writing File Asynchronously in Hindi
 * 
 */
fs.writeFile("world.txt", "here world ", (msg) => {// callback dena hii pdega
    console.log('completed==')

})
/**
 * jb bhi function ko as a argument pass krte h to wo callback hota 
 * we pass function as an argument jo hota a callback that gets called when that task completed 
 * the callback  has an argument that tells u whether the operation compleeted successsfully    
 */
//  https://www.youtube.com/watch?v=CgEZYq7A9xU&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=7&ab_channel=ThapaTechnical
// yaha se carryon krna h 