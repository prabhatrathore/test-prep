// console.log(this)
//640
//call 

function sol() {
    console.log('return the call function ')
}
sol.call()
console.log("==================================");
let obj1 = {
    name: "aryan",
    age: 21,
    about() {
        console.log(this.name, '& their age is: ', this.age)
    }
}
obj1.about()
let obj2 = {
    name: 'shayam',
    age: 23
};
obj1.about.call(obj2)
console.log("======2=222============");

obj1 = {
    name: "aryan",
    age: 21,
    about(hobby,) {
        console.log(this.name, '& their age is: ', this.age, hobby)
    }
}

obj2 = {
    name: 'shayam',
    age: 23
};
obj1.about.call(obj2, 'guiter')
console.log("======================1111======");
function about(hobby, favartor) {
    console.log(this.name, this.age, hobby, favartor)
};

obj2 = {
    name: 'shayam-rotmar',
    age: 23
};
about.call(obj2, 'qqqq', 'wwwwwwww')
console.log("=====================4444=====");

//apply===============================;;
function about(musician, hobby) {
    console.log(this.firstname, this.age, hobby, musician)
};
obj2 = {
    firstname: 'raju- sonu ',
    age: 22
};
about.call(obj2, 'guiter');
console.log("============5555555===========");

function personalInfo(musician, hobby) {
    console.log(this.firstname, this.age, hobby, musician)
};
obj2 = {
    firstname: 'raju- sonu22222 ',
    age: 22,
    about: personalInfo
};
obj3 = {
    firstname: 'raju-3 ',
    age: 22,
    about: personalInfo
};
obj4 = {
    firstname: 'raju-4 ',
    age: 22,
    about: personalInfo
};
//650