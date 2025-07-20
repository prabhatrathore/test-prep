/**
 * what is SQL ? (structured query language)
 * database ke sath kaam krna hai to hume database managment kii jarurat h 
 * 
 * database management system mai create, manipulate, share/access krna ho to kaise krre?
 * 
 * to hume language aana chahiye jo database ko smj aaye 
 * 
 *  wo language h SQL  
 * 
 * why sql?
 * sql is widely popular because it offers  the following advantages:
 * 
 * allow users to communicate i.e. access and manipulate the DB.
 * allow user to retrieve data from DB.
 * allow user to create, update, modify and delete the DB
  
 * SQL is a language for defining the structure od a DB.
   
 * what is data?
 * simple facts and figures.
 * 
 * in sql , data limited rhega tabular format mai 
 * 
 * what is DATABASE  ?
 * db is a organised collection of data/information so that it can be easily accessed, managed and updated.
 * 
 */
/**
 * sql constraints (basic rule);
 * constraint             description     
 * not null  ==     ensure that a column does not have a NULL value. (mandatory haii jarurui hai daalna)
 * default   ==     provide a default value for a column when none is specified
 * unique   ==     ensure that all value in a column are  different.(e.g.employee id )
 * primary  ==    identifies each row/record in a DB table uniquely.( unique + NOT NULL ka combination h)
 *                 
 * check    ==      ensure that all value in column satisfy certain condition
 * index    ==    create and  retrieve data from DB very quickly.
 *  
 *
 * subsets of sql
 * sql command group  sub query languages h
 * 
 * DDL(data defination language): creation of objects
 * DML(DATA MANIPULATION LANGUAGE): manipulation of data
 * DCL(DATA control language): assignment and removal of permissions.
 * TCL(transation control language ): saving and restoring chnges to a database.
 * 
 * 
 * DDL mai hum new object bana skte h or hata skte h
 * 
 * command                               description
 * create       ===    creates objects in the database/database objects.
 * alter        ===    alters the structure of the DB /DB objects. (ek table hai osme ek naya column     ad      kr skte).
  
 * drop         ===    delete obj from DB (delete all record and table also permanently);
 * truncate     ===    remove all records from a table permanently.(logicall structure rhega);
 * rename       ===    rename an object.
  
 * create command
 *  syntax       table'name
 * CREATE TABLE employees (                  //
  *  emp_id INT (10) NOT NULL,       // datatype hai => int length hai => 10 contraint =>not null 
 * first_name VARCHAR (20) ,                
 *  last_name VARCHAR (20) NOT NULL,               
 * salary int(10) NOT NULL,                          
 * PRIMARY KEY (emp_id) )                             
 * 
 * 49min tk 
 * https://www.youtube.com/watch?v=1dWCqjhvF58&ab_channel=GreatLearning
 * 
 */
