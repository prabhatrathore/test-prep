// what is modules
// ek file ke variable, function hum dusri file mai use kr skte h
//  with the help of export, import method


/**          file 1.js                                file 2.js 
 * export var name ='hello                 |     import {name} from './file1.js'
 *                                         |   import {hello} from './file1.js
 *                                         |     import{user} from ./file1.js
 *                                         |     
 * export function hello (){               |     console.log(name)
 *                                         | 
 *         }                               |    hello()
 * export class user{                      |
 *                                         |   let a = new user();
 * }                                        
 * 
 * in HTML file
 * <script type = 'module' src='./file2.js'></script>
 * 
 *   make pc to live server
 * using XAMPP or WAMP server 
 * live server extension on editors 
 * 
 * 
 * import * as yaho from './file1' 
 * means file1 ki jitni bhi variable ,function class sb ko import kr liya 
 * console.log(yaho.name) 
 *  
 */
/**use default 
 * in file1.js
 * export default function (){    //naame nhi hota . ye default funtionality h file ki 
 *  console.log("hello-world") * 
 * }
 * 
 * infile2.js=>>>>>
 * 
 * import (default as yaa) from './file1.js
 * 
 yaa()

 //////////////////////////////////////////////

  * in file1.js
 * export default function (){ //naame nhi hota . ye default funtionality h file ki 
 *  console.log("hello-world") * 
 *      }
 * 
 * infile2.js
 * import  yaa from './file1.js   //now automaticall ye file1 mai jo function default hoga usko lega a
 * andd is naame se fnction ko call kr skte . 
 * 
 yaa()
 */