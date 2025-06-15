console.log("ppppp")

/**
 * SQL (MYSQL)
 * RDBMS is a relational database management system and works on relational database.
 *   
 * it stores data in form of entity as tables
 * it stores data as a form of table 
 *  it uses SQL (db mai query krne ke liye)  to query database 
 * 
 * SQL ke andar postgress, mysql aa jaate 
 * 
 * NOSQL (MONGO DB)============================================================
 * it is a non relational, document-oriented database management  system and works
 * on document based database.
 * 
 * mongodb store data in form of documents
 * 
 * mongodb uses BSON to querry database.
 * BSON stands for binary JSON. 
 * BSON is just binary JSON (a superset of JSON with some more data types).
 * 
 *    bson  BSON===============================
 * BSON is faster  and JSON is   comparatively less fast.
 * BSON consume more space    and JSON consumes comparatively less space
   BSON use faster encoding and decoding  technique  
   json has no such technque


 * 
 * in cmd 
 * dekhne ke liye all databases
 * show dbs
 * 
 * use databasename (use work , agar iss naame ka db present nhi  h to bana dega aur present h to ispr kaam kr skte the, active db ho jayega  )
 * 
 * create collection 
 * db.collectionName.documentName({name:"abc",type:"qwe",age:22}) 
 * 
 *      to show current active db
 * db   (db likhna h bs )
 * 
 * show collections (dekhnne ke liye kitne collection )
 * db.collectionname.find()
 * 
 * agr exit krna h to control+c two baar press krna h  
 *
 * upDATE docuent (  CRUD  )
 * 
 * updateOne()  => db.collectionname.updateOne(fiter, upadte)
 * updateMany() => db.collectionname.updateMany(fiter, upadte)
 * 
 * $set operator is used to replace the value of a field with the specified value.
 * 
 *  
 * 
 *  


   */
var plusOne = function (digits) {
  var ar = 0
  for (let el of digits) {
    ar = ar + "" + el

  }

  ar = BigInt(ar)
  ar++
  // ar.toString()
  ar = ar + ""
  // console.log(ar)
  var ab = []
  for (let el of ar) {
    ab.push(parseInt(el))
  }
  // var ab=[...ar]
  // console.log(ab)
  return ab
};
var digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
console.log(plusOne(digits))
console.log('wwwww')