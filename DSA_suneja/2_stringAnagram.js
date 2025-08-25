// string : anagram
// hello == 'lhleo  '
// condition to anagram
// first condition : both side ki string ki length equal honi chaihye
// check length for both strings

// ------------------------------------------------------------------

// number and character same hone chahiye tbhi ye anagram h... arrangement koi bhi ho .
/**    
 * h:1 
 * e:1 
 * l:2 
 * 0:1 
 * condition 
 * length check (for both strings)      
*/
function strre(str1, str2) {
    let result = true
    let obj = {}
    for (let le of str1) {
        obj[le] = (obj[le] || 0) + 1
    }
    // console.log(obj, 'objbjbjbj')
    for (let le of str2) {
        if (!obj[le]) {
            result = false
        }
        obj[le] = --obj[le]
    }
    // console.log(obj, 'ojjjjjj')//
    Object.values(obj)?.forEach((a, b) => {
        if (a > 0 || a < 0) {
            // console.log(obj, '[[[[[[', a, ';;;')
            result = false
        }
    });
    // console.log(obj, 'ojj FGVFGV')
    return result
}
var result = strre('helloe', 'olleh')
// console.log(result, 'strrestrrestrrestrre')

function sol(string1, string2) {
    if (string1.length !== string2.length) {
        return `length not eqUAL false `
    }
    let obj = {}
    for (let value of string1) {
        obj[value] = (obj[value] || 0) + 1
    }
    console.log(obj, "string1 obj")
    for (let value2 of string2) {
        // console.log(value2)
        // console.log(obj[value2], obj)
        if (!obj[value2]) {
            return false
        }
        obj[value2] -= 1;
    };
    return true;
};
// var result = sol('hello', 'ollhe')
// console.log(result)
// linear time complexity  O(N )
let temparr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

function sol2(string, string2) {
    // if (string.length != string2.length) {
    //     return ` this is not anagram`
    // }
    let obj = {};
    for (let value of string) {
        // if(!temparr.includes(value)){
        obj[value] = (obj[value] || 0) + 1
        // }
    }
    // console.log(obj, "PPPPPPPPPPPPPP", string2)
    for (let value2 of string2) {
        console.log(obj[value2], 'obj[value2]', value2, 'value2222')
        if (!obj[value2]) {
            return false
        }
        obj[value2] = obj[value2] - 1
    }
    for (let le in obj) {
        if (!temparr.includes(le)) {
            if (obj[le] > 0) {
                return false
            }
        }
        // console.log(le,"lelelelelel")
    }
    // console.log(obj,'ppppqqq')
    return true
};

let arb = sol2('string2!#', 'srting2');
// console.log(arb, "eeeeeeeeeeeee");