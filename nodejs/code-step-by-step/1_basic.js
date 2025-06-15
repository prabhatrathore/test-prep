/**
 * http kya krta hai 
 * nodejs ke andar server ke request ,response ko handle krta h
 * 
 * package.json file=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 * 
 * node js, single threded hai means ek time mai ek command ko run krti h 
 * node js ,asynchronous h 
 * https://www.youtube.com/watch?v=VrQgmNY96wo&t=3783s&ab_channel=CodeStepByStep
 */
const http = require('http')
http.createServer((req, res) => {
    res.write("thisisworld")
    res.end()  // end krne ke liye 
}).listen(3000)//create server ek function leta as parameter 

const fs = require('fs');
const input = process.argv;
fs.writeFileSync(input[2], input[3]);//first h file ka naame ,dusra h file ke andar ka text.


// console.log(input[0])