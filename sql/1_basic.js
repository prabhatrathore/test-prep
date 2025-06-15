/**
 * database is a collection of information organised for easy access, management and maintanance.
 * data base ka logical structure hona chaiye to osko hum data model bolte h 
 * 
 * two types of data models 
 * object based logical model 
 * record based logical model 
 * 
 * 
 * object based logical model:
 * in this entity relationship model aataa 
 * 
 * ye blue print bnakr deta 
 * 
 * e.g. employee, department 
 *  deparment      :  tech,
 *  employeee name :  sam  
 * to sam aur tech ke bich mai kya  relation h
 * ya fir do employee h :sam aur mat =>inn dono ke bich mai kya relation h 
 * ek manager ho skte dusra uske niche ho skta 
 * 
 * relational model mai row and column mai data store krte 
 * in relational model data ko hum tabular format mai store krte h
 * (rows and columns ) mai 
 *  
 * * record based logical model ======
 * isme aate h 
 * hierarchical data model: isme tree based structure hota (ye ulta tree h )
 * netword data model
 * relational data model  
 * 
 *  hierarchical data model:
 * isme ek root node hota h isme se multiple  branches nikalte h (ek hee root node hoga aur mutiple child honge )
 * 
 * network data model mai graph based model rhta h
   har ek node , ek record ko represent krega
   means hamare pass multiple parent node ho skte .
   and multiple child node ho skte 
 */
/**
 * DBMS operations 
 * adding new files 
 * insertion data 
 * retrieving data
 * modifying data 
 * removing data
 * removing files  
 * we can perform this operation 
 * 
 */
/**
 * ADVANTAGES OF DBMS   
 * SHARING of data across applications.(backend mai data ko share krna ke liye ).
 * enhanced security mechanism. (ye security deta h).
 * better transaction support.
 * backup and recovery  features.

 */
/**
 * INTRODUCTION OF RDBMS
 *  a relational database reffers to a databse that stores data in a structured format , using rows and columns (tabular format).
 * 
 * this makes it easier to locate and access specific values within the database.
 * it is "relational" because the values within each tables are related  to each other.
 *  tables may also be related to other tables. 
 *  the relational structure makes it possible to run queries across  multiple tables at once.
 */

/** 
 * FEATURES OF RDBMS
 * 
 * every piece of informtion is stored in the form of tables.
 * rdbms has primary keys for unique identification of rows.
 * it is used to identify within the employee. 
 * rdbms has foreign keys to ensure data integrity.
 * it is used to identify across different tables.
 * 
 * uses indexes for faster data retrieval. 
 */
/**
 * RDBMS VS TRADITIONAL APPROACH
 * the key difference is that rdbms (relational data base management system) applications. 
 * store data in a tabular form, whereas in traditional approach, application store data as files.
 * 
 * there can be , but there will be no 'relation' between   the tables , like a RDBMS.in traditonal approach data is generally store in either  a hirarchical form/ navigational form.  this means that a single data unit will have 0,1    or more      children nodes and 1 parent node.  
 * 
 */
/**
 * NORMALIZATION 
 * important in SQL 
 * jb hamare pass bahot bada/jyada data ho osko structure mai laane ke liye, normalization ka use krte 
 * decompose larger, complex table into simpler and smaller ones.
 * 
 * normal forms 
 * 1NF=>first normal form.
 * 2NF=>second normal form.
 * 3NF =>third normal form
 * 4NF,5NF  =>higher normal form
 * 
 * NEED FOR NORMALIZATION:
 * 
 * in order to produce good database design
 * to ensure all database operation to be efficiently performed.
 * avoid any expenses   DBMS operation (jyda time lega and jyada space lega ).
 * avoid unneccery time ja rha osko kam krta h 
 * avoid unneccery replication of infromation  
 */
/**
 * functional dependency :
 *  student_details    | course_details  | pre=requisite  | result_details  
 * 101 jack 11/2/1997  | m1 amths  14    | basic maths    | 03/11/1996   98  A
 *  
 *  consider the function:
 *  e.g. lets suppose
 * jack ko 98 marks mile. question is kis subject mai mile. 
 * to mark depend hai subjects pr aur student pr .
 * mark is functionally dependent on student and course.
 * course_name dependent h course ke upar 
 * grade dependent h marks ke upar.
 *   
 * 
 */
/**
 * functional dependency mai two types hote h
 * partial functional dependency.
 * transitive dependency.
 * 
 */

/**
 * PARTIAL FUNCTIONAL DEPENDENCY:
 * student ,course hamare main  attribute ho gye.
 * student # ==> mark (makr dependent h student and course pr).
 * course #    
 * 
 * course# ==> coursename (coursename dependent h course pr)
 * 
 * TRANSITIVE DEPENDENCY :
 * x,y,z are three  attribute.
 * 
 * x--->y  (y , x ke upr dependent h )
 * y--->z  (z, y ke upr dependent h)
 * means x--> z (so z, x ke upr dependent h)
 * 
 * student ==>  course ==>marks  ==> grade
 * course , student ke upr dependent h 
 * makrs ,course ke upar dependent h 
 * so grde , student ke upr dependent h.
 *  
 */
/**
 * NORMALIZATION
 * types of normal form 
 * 1nf
 * 2nf
 * 3nf
 * 
 * in 1nf => 
 * a relation schema  is in 1nf,
 *  if and only if :
 * all attribute in the relation are indivisible value (single value) 
 * and there are no repeating element or grp of elements.
 * 
 * upar waale student table mai har column mai multi value attribute h 
 * 
 * student marks table in 1nf
 * 
 * student#|stud_name|DOB    |course#|course_name|duration |dateof exam |marks |grade 
 * 101     | jacke   |11/2/97|m1     |adv math   | 4motnht |02/1/2022   |81    | a
 * 
 * 
 * 
 * SECOND NORMAL FORM  2NF  
 * A relation is said to be in 2nf , if and only if 
 * it is in 1st normal form  (agar wo 1nf mai h tabhi ho skta )
 * no partial dependency exists between non-key attribute and key attribute.
 * 
 *  in above table # waale primary attribute h ye uniquely identify krte h hamare records ko 
 * aur inpr multiple cheeze dependent h 
 * 'student name' , 'dob' , depend h 'student' pr..
 * ye partial hai but hume individual table chahiye 
 * 
 * student#==> studentname , dob   (inko alag table mai rakhenge )
 * course# ==> coursename,pre-requisite   (inko alag table mai rakhenge )
 * duration days , date of exam  (inko alag table mai rakhenge )
 * isse partial dependeny ko alag kr rhe h
 * 
 *  * SECOND NORMAL FORM  2NF  
                  student table
        student#  | student_name  |  date-of-birth
        101       |jack           | 01/01/1998
        
        result table
       student#  | course# |  marks | grade
       101       |  m1     | 77     | a
       
         
         course table
      course#  |  coursename |   prerequisite   |   duration of day | date of exam  
      m1       |   maths     |   basic maths    |  11               |01/02/2014
      
      ab ye 2nf mai ho gaya 

     
      ab hume 3nf mai  lana h 
      
      THIRD NORMAL FORM 3NF
      a relation  is said to be in 3nf if and only if :
      => it is in 2nf
     =>  no transitive dependency exists between non-key attribute and key attribute through another non key attribute.
*/

/**
 * third normalization (3nf);
 * e.g:
 *          result_table
 *    student #  |course #   |marks | grade 
 *      101      |  m1       | 99   |  a1
 * 
 *  student# course #==>marks  ( marks, course ke upar dependent h )
 *  student# ,course#==>grade (course , student ke upr dependent h)
 *  marks==> grade   (grade , marks ke upr hee dependent h ) ;
 * 
 * here i do 
 *       result table                                         mark grade table
 * student # |course# | marks |                             | marks   |  grade  |
 *    101    |  m1    |  97   |                             |  97     |     a   |
 * 
 * partial depenency aur transitive dependency hata diya 
 * ye proper structure mai h 
 * 
 */