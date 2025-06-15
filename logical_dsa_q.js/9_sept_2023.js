let str="apple"
// output   "aelpp"
// sort this str 
 str="hlo world i am there"

// ============== with split() method 
//  str=str.split(" ")
// //  output "Hlo World I Am There"
// for(let i=0;i< str.length;i++){  
//     let temp=""
//     for(let j=0;j<str[i].length;j++){
//         if(j==0){
//           temp=    str[i][j].toUpperCase()
//         }
//     }
//     str[i]=temp.concat(str[i].slice(1))
// }
// console.log(str,"SS")
//==================================================
// without split

let str2=[]
let temp=''
for(let i=0;i<str.length-1;i++){
    temp=temp+str[i]
    if(str[i]==" "){
str2.push(temp)
temp=[]
    }
}
// console.log(str2)
///
let arr=[{name:"A",gender:"male"},{name:"b",gender:"female"},{name:"D",gender:"female"},{name:"c",gender:"not say"}, ]
let couintForNonMale=0
arr.forEach((el)=>{
    if(el.gender!=='male')couintForNonMale++
})
console.log(couintForNonMale,"###########3")
for(let i=0;i<couintForNonMale;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[j].gender!='male'){
            arr.splice(j,1)
        }
    }
}
console.log(arr,"arr")














