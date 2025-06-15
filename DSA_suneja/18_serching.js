/**
 * search means find krna 
 * google ek search engine h , yaha hum kuch bhi search kr skte 
 * 
 */
arr = ['ram', 'shyam', 'sonu', 'monu']
console.log(arr.indexOf('ram'))//ye index dega agr element nhi h present fir -1, dega 
console.log(arr.includes('shyam'))// ye boolean dega ,agr present nhi h to false dega    

/**linear search algorithm 
 * 
 * 
 */
// else.g 
function linearSearch(array, target) {  //.includes ka replace 
    for (let i = 0; i < array.length; i++) {
        if (array[i] == target) {
            return i
        }
    }
    return -1
}
linearSearch([1, 2, 3, 4, 5, 67, 22], 2)
console.log('==========================33333=====');

arr1 = [
    { name: 'ram1', age: 2, address: "rza 31 dabri extension" },
    { name: 'ram2', age: 21, address: " 31 dabri" },
    { name: 'ram3', age: 24, address: " dabri extension" },
]
function name1(arr, target) {

    for (let value of arr) {
        if (value['name'] == target) {
            return true
        }
    } return false

}
let res = name1(arr1, "ram")
console.log(res)