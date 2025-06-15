/*reverse string according to number of words 
given a string containing a number  of words . if the count of words in the  string
S is even then reverse its even position words else reverse its odd 
position push reversed words at the starting of a new string and append 
the remaining words as it is in order 
e.g
input : ashish yadav abhishek rajput sunil pundir

output :
ridnup tupjar vaday ashish abhishek sunil 

e.g.2:
input :
ashish yadav abhishek rajput sunil pundir prem
output:
merp linus kehsihba hsihsa yadav rajput pundir 

*/


let str = 'ashish yadav abhishek rajput sunil pundir prem';
function sol(str) {
    str = str.split(" ");//convert string to array 
    const arr = []
    for (let i = 0; i < str.length; i++) {
        if (str.length % 2 == 0) {  //even
            if (i % 2 != 0) {
                arr.unshift(str[i].split("").reverse('').join(''));
            } if (i % 2 == 0) {
                arr.push(str[i]);
            }
        } else {
            if (i % 2 == 0) {
                arr.unshift(str[i].split("").reverse('').join(''));
            } if (i % 2 != 0) {
                arr.push(str[i]);
            }
        }
    }
    console.log(arr,"asdf")
};
sol(str);