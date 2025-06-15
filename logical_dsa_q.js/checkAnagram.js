// --- Directions
// Check to see if two provided strings are anagrams of eachother. 
// One string is an anagram of another if it uses the same characters 
// in the same quantity. Only consider characters, not spaces 
// or punctuation. Consider capital letters to be the same as lower case 
// --- Examples // anagrams('rail safety', 'fairy tales') --> True 
// anagrams('RAIL! SAFETY!', 'fairy tales') --> True
// anagrams('Hi there', 'Bye there') --> False


// function anagrams(stringA, stringB) {
//     // Normalize the strings by lowercasing and removing non-alphabetic characters
//     stringA = stringA.toLowerCase().replace(/[^a-z]/g, '');
//     stringB = stringB.toLowerCase().replace(/[^a-z]/g, '');
//     console.log(stringB, "stringB ")
//     // Compare the sorted arrays of characters
//     return stringA.split('').sort().join('') === stringB.split('').sort().join('');
// }


//   
// 
// // 
// .replace(/[^a-z]/g, '') is a regular expression pattern used with the .replace() method in JavaScript.

// This pattern is used to match any character that is not a lowercase letter (a to z) and replace it with an empty string. The /g at the end of the pattern is a flag that specifies to replace all occurrences of the pattern, rather than just the first.

// For example, if we have the string "Hello! This is a test string 123.", using the .replace(/[^a-z]/g, '') pattern would remove all non-lowercase letters, resulting in the string "ellohisisateststring".

// Here is a breakdown of the pattern:

// /: Start of the regular expression pattern.
// [^a-z]: Matches any character that is not a lowercase letter between a and z.
// /: End of the pattern.
// g: Flag that specifies to replace all occurrences of the pattern.
// '': The replacement string, which is an empty string that effectively removes the matched characters.
// 
// 
// 
// [^a-z]   explain this 
// [^a-z] is a regular expression pattern in JavaScript that matches any single character that is not a lowercase letter from a to z.

// Here's a breakdown of what each part of the pattern means:

// []: This indicates a character set, which means the pattern should match any character that falls within the set.
// ^: This is a negation character that matches any character that is not in the set. In this case, the set is all lowercase letters from a to z.
// a-z: This is a range that includes all lowercase letters from a to z.
// So [^a-z] will match any character that is not a lowercase letter between a and z. For example, it would match any uppercase letter, number, or symbol.

// It's worth noting that the ^ character has a different meaning outside of a character set. When used outside of a character set, it matches the beginning of a string. So ^ has different meanings depending on where it appears in a regular expression pattern.
// 



// anagrams("RAIL! SAFETY!", "fairy tales")



// //=======================================================
function checkStr(str) {
  let normalStr = ""
  for (let el of str) {
// console.log(el,"eeeeeeeee")
    if (el >= "a" && el <= "z") {
      normalStr += el
    } else if (
      el >= "A" && el <= "Z") {
      normalStr += el.toLowerCase()
    }
  }
  // console.log(normalStr, "normalstr4444444444")
  return normalStr
}

function sol1(str1, str2) {
// console.log(str2,"str22222222222")
  let str = checkStr(str1)
  let str3 = checkStr(str2)
  console.log(str, "str1", str3, "str2")
  return str.split('').sort().join("") == str3.split('').sort().join("")


}
console.log(sol1("RAIL! SAFETY!", "fairy tales"), "======e3")



function normalizeString(str) {
  let normalizedStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // console.log(char,"char233232")
    if (char >= 'a' && char <= 'z') {
      normalizedStr += char;
    } else if (char >= 'A' && char <= 'Z') {
      normalizedStr += char.toLowerCase();
    }
  }
  return normalizedStr;
}

function anagrams(stringA, stringB) {
  // Normalize the strings by lowercasing and removing non-alphabetic characters
  stringA = normalizeString(stringA);
  stringB = normalizeString(stringB);
  console.log(stringA, "stri1ngA", stringB, "stri2ng2222A")
  // Compare the sorted arrays of characters

  return stringA.split('').sort().join('') === stringB.split('').sort().join('');
}

let sol = anagrams("RAIL! SAFETY!", "fairy tales"); // Output: true

console.log(sol, "222222222222222222")



function countSubstringsDivisibleBy6(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let num = 0;
    for (let j = i; j < str.length; j++) {
      num = num * 10 + parseInt(str[j]);
      if (num % 3 === 0 && num % 2 === 0) {
        count++;
      }
    }
  }
  return count;
}

// example usage
console.log(countSubstringsDivisibleBy6('606')); // outputs 5