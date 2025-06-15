// 
/**
 * input : "HeyAmIThere"
 * output "Hey Am I There"
 */

const input = "HeyAmIThere";
const output = [];
let word = '';

for (let i = 0; i < input.length; i++) {
    if (input[i].toUpperCase() === input[i]) {
        if (word.length > 0) {
            output.push(word);
            word = '';
        }
        word = input[i];
    } else {
        word += input[i];
    }
}

if (word.length > 0) {
    output.push(word);
}
console.log(output, '&^%$');

let all = []
word = ""
for (let i = 0; i < input.length; i++) {
    if (input[i] == input[i].toUpperCase()) {
        if (word.length > 0) {
            all.push(word)
            word = ""
        }
        word = input[i]

    } else {
        word = word + input[i]
    }
}
if (word.length > 0) {
    all.push(word)
}
console.log(all, "ploi")


let input2 = "HeyAmIThere";
let output2 = []
let words = ""
for (let i = 0; i < input2.length; i++) {
    if (input2[i].toUpperCase() == input2[i]) {

        if (words.length > 0) {
            output2.push(words)
            words = ""
        } else {
            words = words + input2[i]
        }
    }
    words = words + input2[i]
}
// console.log(output2,"22222")
// console.log("e".charCodeAt(),"e2")
// console.log("E".charCodeAt(),"e3",(("E".charCodeAt())+32))
// console.log("E".charCodeAt(),"e4",input2.charAt(2))
let temp3 = []
let wordsTEmp2 = ""
input2 = "HeyAmIThere";
for (let j = 0; j < input2.length; j++) {
    if (input2[j].toUpperCase() == input2[j]) {
        if (wordsTEmp2.length > 0) {
            temp3.push(wordsTEmp2)
            wordsTEmp2 = ""
            wordsTEmp2 = wordsTEmp2 + input2[j]
        } else {
            wordsTEmp2 = wordsTEmp2 + input2[j]
        }
    } else {
        wordsTEmp2 = wordsTEmp2 + input2[j]
    }
    // console.log(temp3,"#",wordsTEmp2)
}
if (wordsTEmp2?.length > 0) {
    temp3.push(wordsTEmp2)
    wordsTEmp2 = ""
}
temp3 = temp3.toString()

console.log(temp3, "temp2222")



let x = {}, y = { name: "Ronny" }, z = { name: "John" };

x[y] = { name: "Vivek" };
x[z] = { name: "Akki" };

console.log(x[y]);

// Pundarikaksha Mishra6:04 PM
let a = 0;
let b = false;
console.log((a == b));
console.log((a === b));
