/**
 * AJAX   =>
 * asynchronous   j.S.   and     xml  (ek tarike ka data format hota h)
 * 
 * ajax is technique for creating fast and dynamic web pages .
 * fetch method best hai and replace kr diya AJAX method ko
 * 
 */
/**
 * fetch() method kii help se hum sab kuch kr skte h jo hum AJAX se krte h 
 * 
 * with the help fetch : we do insert, update, read, delete, easily  
 *  ye fast hai js ke xhttprequest se (ajax )se 
 * 
 */

/**
 * basic syntax:
 * fetch ()
 * fetch(file/url):  => file ka path ya url dena h. 
 * fetch ( ) method return krta h promise .
 * fetch(file/url).then();//fetch method ka kaam successfully return ho gaya h to aage ka 
 * kam krte h then method mai.
 * 
 * ab ye then function bhi promise return krta 
 * ab iske andar bhi function bnate jisme response aata server se
 * fetch(file/url).then((response)=>{
 * 
 * });
 * ye jo path se data aayega wo data hum send krenge iss function mai aa jayega 
 * ab iss response ko bhi return kr dete 
 * return response.data (response = variable name hoga)
 * data(jis type ka data return huya server se )
 * (text ya json ho skta ) iske accoording hum use krenge method text method ya json method 
 * 
 * ye return krra h data ye jayega dusre then function mai
 * 
 * e.g.
 * fetch(file/url).then((response)=>{ //ye then bhi rpomise return krta h 
 * return response.data;
 * }).then((result)=>{
 * console.log(result)  // ye ho gaya promsie ke success ka case 
 * }).catch((error)=>{
 * console.log(error)  // error handling ke liye 
 * }) 
 * 
 * fetch () methods works on live server
 *
 */