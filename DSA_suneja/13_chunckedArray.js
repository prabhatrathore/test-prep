// write a function chunck(arr, n) that return chuncked array of size n at the least
/**
 * for e.g 
 * given[1,2,3,4,5,6,7,8,9],n =3
 * return [[1,2,3],[4,5,6],[7,8,9]]
 * 
 * given :[1,2,3,4,5,6,7,8],n=7
 * return :[[1,2,3,4,5,6,7],[8]]
 */
/***
 * steps: 1: create an array named 'chuncked =[]
 * get the last chuncked array within last = 'chunked'    
 */
function sol2(arr, n) {
    let arr2 = []
    let arr3 = []
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i])
        j++
        if (j == n) {
            arr3.push(arr2);
            arr2 = []
            // arr2.slice(0)
            j = 0
        }
    }
    if (arr2.length) {
        arr3.push(arr2)
    }
    return arr3
}
let result2 = sol2([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
console.log(result2,"asdads")

/***
 * question2:)
 * find an string has unique characters or not ?
 * steps:
 * 1: create an object with key and values pairs 
 * 2:check all keys'value has over 1 or not .
 * return true if all key's value has  1 value .
 * return false if all key's has value more than 1.   
 * 
 */
function sol(str) {
    if (str.length) {
        let obj = {}
        for (let char of str) {
            obj[char] ? obj[char]++ : obj[char] = 1
        }
        // console.log(obj)
        // let 
        for (let value in obj) {
            console.log(obj, "valuje", obj[value], "value", value)

            if (obj[value] != 1) {
                return false
            }
        }
        return true
        // return obj
    } else {
        return "provide valid string/charcarter"
    }
}
let result = sol('2342')
console.log(result)



