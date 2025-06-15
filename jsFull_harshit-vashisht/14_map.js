//map :a map is similar to  object, keys in objects are only string  and symbols.
// but in map we use any value as key.

const person = new Map()
person.set('srve', "pppp")
person.set(12, 'plk')
console.log(person)

//method in map:
let person2 = person.get(12)// get method
console.log(person2)
// let delPerson = person.delete(11)  //delete method
console.log(person);
console.log(person2);

for (let value of person) {
    console.log(Array.isArray(value))
}

//clear method=====================
// person.clear();
// console.log(person, 'clear method');
//has method return true if key is exist 
let personPresent = person.has(12)
console.log(personPresent)
//=======================================
console.log(person.keys(), 'key ')//=return the keys present in it 
//Encapsulation means information hiding
// segregate : +++==to separate one group of people or things from the rest
// व्‍यक्तियों या वस्‍तुओं के एक समूह को दूसरे से अलग करना

//==================================================
//======================================
//=. Express framework – Express is a minimal and flexible Node js web application
// framework that provides a robust set of features for the web and mobile applications


//612
// obtional chaining
let obj = {
    name: "hello-world",
    address: 'r z a 31 dabri  extension new delhi'
}
console.log(obj?.address)
//first check obj hai ya nhi(return undefine, aage nhi jayega)
//  then check address hai ya nhi 