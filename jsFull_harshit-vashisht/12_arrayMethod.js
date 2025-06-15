//fill method
//value start end 
let arr = new Array(10).fill(2)//create new array jisme 10 element ho wo bs 2 hone chahiye
console.log(arr);

console.log("==1111111111111===");
arr = [2, 3, 4, 5, 5, 7, 4, 3, 1];
arr.fill('str', 2, 5);
console.log(arr)//

//splice method
//start , delete, insert
arr = ['valuee 1']

let str = 'hello-world';
for (let string in str) {
    console.log(string)
}
/**
 * string , array are iterable iss pr for loop lge skte 
 * jiske pass length property hoti 
 *osko hum index se access kr skte 
 */