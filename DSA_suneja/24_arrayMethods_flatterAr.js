//array methods
let arr = [1, 2, 3, 4];
let arr2 = arr.concat([5, 6])
arr.push(0, 9, 8)
console.log(arr)


function flattenArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// Example usage:
const nestedArray = [1, [2, 3, [4,[11,33,[44,55,[66,77]]], 5]], 6];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]



function flattenObject(obj, parentKey = '', sep = '.') {
  let result = {};
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}${sep}${key}` : key;
      
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        Object.assign(result, flattenObject(obj[key], newKey, sep));
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  
  return result;
}

// Example usage:
const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
  f: 4,
};
console.log(flattenObject(nestedObject)); 
console.log(typeof nestedObject.a,"@@@@@@@@@@"); 
// Output: { a: 1, 'b.c': 2, 'b.d.e': 3, f: 4 }