/**
 usb:-- Universal Serial Bus 
 png : Portable Network Graphics
 jpeg : Joint Photographic Experts Group 

 ------------------------------------------------------------------------------------
 1. What is SQL?
 SQL (Structured Query Language) is a standard programming language used to
 interact with relational databases. It is used to store, retrieve, update, and delete
 data. SQL is also used to create and modify database structures such as tables,
 views, and indexes.

 Example:
 SELECT * FROM Employees;
 This query retrieves all the records from the Employees table.

 ------------------------------------------------------------------------------------
What is the Difference Between WHERE and HAVING?

'where' we use filter row before 'grouping' 

'filter' , filter group after 'grouping'.
------------------
filter type 
'where' is row level filter 

having is group level filter
----------------------------------
execution order 
where, apply before GROUP BY 
HAVING,  applied after GROUP BY
------------------------------------------------------------------------------------

What is Self Join?
Self Join is a type of join where a table is joined with itself to compare rows within the same table.
------------------------------------------------------------------------------------

What is Cross Join?
Cross Join returns the Cartesian product of two tables, meaning it combines every row from the
first table with every row from the second table. It does not require any condition.

------------------------------------------------------------------------------------
------------------------------------------------------------------------------------

 What is Primary Key?
 A Primary Key is a column in a table that uniquely identifies
 each row in that table. It does not allow NULL values and must always contain unique
 values.
 Key Features:
 Uniquely identifies each record
 Cannot have duplicate values
 Cannot contain NULL values
 Only one primary key is allowed per table

 ------------------------------------------------------------------------------------
What are the types of SQL commands?
SQL commands are divided into 5 main types (categories):

🔹 1. DDL (Data Definition Language)
👉 Used to define or change the structure of the database (tables, schemas, indexes).

Examples:
CREATE → create table, database, etc.
ALTER → modify table structure (add column, change type).
DROP → delete table or database.
TRUNCATE → remove all rows from a table (but keep structure).

🔹 2. DML (Data Manipulation Language)
👉 Used to manipulate data inside the tables.
Examples:
INSERT → add new records.
UPDATE → modify existing records.
DELETE → remove records.

🔹 3. DQL (Data Query Language)
👉 Used to query (fetch) data.
Only main command: SELECT.

🔹 4. DCL (Data Control Language)
👉 Used to control access/permissions.

Examples:
GRANT → give access rights.
REVOKE → remove access rights.

🔹 5. TCL (Transaction Control Language)
👉 Used to manage transactions in a database (commit, rollback).

Examples:
COMMIT → save changes permanently.
ROLLBACK → undo changes.
SAVEPOINT → set a checkpoint inside a transaction.

👉 Interview tip: If they ask “Main 3 types?”, just say DDL, DML, DCL (older classification).
If they ask “Modern classification?”, add DQL + TCL also.
 ------------------------------------------------------------------------------------

HTTP vs HTTPS
HTTP (HyperText Transfer Protocol)  
HTTP is a protocol for transferring data over the web. 'http' is the foundation of communication between a client (e.g., browser) and a server.

Port: Uses port 80 by default.

Security: Not secure—data is sent in plain text, making it vulnerable to interception (e.g., man-in-the-middle attacks).
Use Case: Suitable for non-sensitive data (e.g., static websites).

HTTPS (HTTP Secure)

Definition: HTTPS is HTTP with an added layer of security using SSL/TLS (Secure Sockets Layer/Transport Layer Security) encryption.

Port: Uses port 443 by default.
Security: Encrypts data between the client and server, ensuring privacy, integrity, and authentication.
Use Case: Essential for sensitive data (e.g., login forms, payment gateways).
Certificate: Requires an SSL/TLS certificate issued by a Certificate Authority (CA) to verify the server’s identity.

--------------------------------------------------------------------------------------------------------------

🔹 Integrity (in security) means
The data is not altered, modified, or tampered with while traveling between client and server.
--------------------------------------------------------------------------------------------------------------

How Does a URL Work?
A URL (Uniform Resource Locator) is an address that identifies a resource on the internet.

How a URL Works (Step-by-Step)

1:) User Enters URL: The user types a URL (e.g., https://www.example.com/candidates?name=Ram) into their browser.

(domain name system)

2:) DNS Resolution: The browser sends the domain (www.example.com) to a DNS server, which resolves it to an IP address (e.g., 192.0.2.1).

3:) Connection to Server:
The browser establishes a connection to the server at the IP address on port 443 (for HTTPS).
For HTTPS, an SSL/TLS handshake occurs: the server presents its SSL certificate, the client verifies it, and they negotiate an encryption key.
*/

function findSecondSmallest(arr) {// hard one 
    if (arr.length < 2) return null;

    let first_smallest = Infinity; // 4 , -1  , -5
    let second_smallest = Infinity;  // infinity , 4 , 2,-1

    for (let num of arr) {
        if (num < first_smallest) {
            second_smallest = first_smallest; // infinity
            first_smallest = num;  // 4
        } else if (num > first_smallest && num < second_smallest) {
            second_smallest = num;// 2 
        }
    }
    console.log(first_smallest, 'first_smalless', second_smallest, "second_")
    return (second_smallest === Infinity) ? null : second_smallest;
}
function third(arr) {
    let first = Infinity
    let second = Infinity
    let third = Infinity
    for (let el of arr) {
        if (el < first) {
            third = second
            second = first
            first = el
        } else if (el > first && el < second) {
            third = second
            second = el
        } else if (el > second && el < third) {
            third = el
        }
    }
    console.log(first, 'fir', second, 'seco', third, 'third')
}
// console.log(third([4, 12, 2, 15, 10, 25]), "thirdthirdthirdthird"); // Output: 2 

function second(arr) {
    if (arr.length) return null
    let firstsmallest = Infinity
    let secondSmalles = Infinity
    for (let lee of arr) {
        if (lee < firstsmallest) {
            secondSmalles = firstsmallest
        }
    }
}

// console.log(second([4, -1, 2, -5, 30, 5]), "find__SecondSmallest"); // Output: -1
console.log(findSecondSmallest([4, 12, 2, -5, 10, 5]), "find__SecondSmallest"); // Output: 2 
// console.log(findSecondSmallest([1, -2, 3])); // Output: 1
// console.log(findSecondSmallest([2, 2, 2])); // Output: null
// console.log(findSecondSmallest([-5, -5, -4])); // Output: -4


function findSecondSmallest2(arr) {
    if (arr.length < 2) return null; // Not enough elements

    let smallest = Infinity;
    let secondSmallest = Infinity;
    let thirdSmallest = Infinity;
    let fourthSmallest = Infinity;

    // First pass to find smallest
    for (let num of arr) {
        if (num < smallest) {
            smallest = num;
        }
    }
    // console.log(smallest, "smalles")
    // console.log(secondSmallest, "second smalles")

    // Second pass to find second smallest
    for (let num of arr) {
        // console.log(num, secondSmallest, smallest, num < secondSmallest, num > smallest, 'num < > smallest',)
        if (num < secondSmallest && num > smallest) {
            //    return
            // console.log(num, 'numnum')
            secondSmallest = num;
        }
    }

    for (let num of arr) {
        // console.log(num, secondSmallest, smallest, num < secondSmallest, num > smallest, 'num < > smallest',)
        if (num < thirdSmallest && num > secondSmallest) {
            //    return
            thirdSmallest = num;
        }
    }
    console.log(thirdSmallest, 'thirdSmallestthirdSmallestthirdSmallest')
    for (let le of arr) {
        if (le < fourthSmallest && le > thirdSmallest) {
            fourthSmallest = le
        }
    }
    console.log(fourthSmallest, 'fourth smallestTTTTTTTTTTTTTTTTTT')
    // Check if second smallest exists
    return secondSmallest === Infinity ? null : secondSmallest;
}
// Example usage
const arr = [-1, 5, 2, 10, -8, 3, 0]; // 5, 2, 10,    --=>  -8, -1, 0, 2, 3, 5, 10     
console.log(`Second smallest number::::: ${findSecondSmallest2(arr)}`); // Output: -2


console.log(null == undefined, " console.log(null == undefined);");

/**
ORM converts code objects to database tables.

An ORM (Object-Relational Mapping) is a tool that acts as a bridge between a relational database and object-oriented programming languages like JavaScript (in the context of our Node.js/Sequelize project).

👉 ORM is a tool that connects our code to our database.
👉 It changes code objects into database tables.
🔹 Why use it?

✅ we can work with the database using simple code instead of writing complex SQL queries. 
------------------------------------------------------------------------------------------------------

Q:) What is a database.  
A database is a storage container that holds data we can access, modify and analyze. 
or
A database is an organized collection of data that is stored and managed electronically. 

------------------------------------------------------------------------------------------------------

Q:) How would you scale MySQL for SupplyMatch as the platform grows to millions of transactions?

A: Scaling MySQL for handling increased transactions, users, and data volume. Strategies include:

  Vertical Scaling: Increase server resources (CPU, RAM, SSD) to handle more load.

------------------------------------------------------------------------------------------------------------
Horizontal Scaling: includes

1:) ✅ Sharding :
splitting up data across multiple servers              (each server holds a shard).
Each shard is a different database server with a subset of data.
Used for horizontal scaling to handle huge traffic and data load.

2:) ✅ Partitioning
Splits one table into smaller parts called partitions.
All partitions are still in the same database server.

3:) Indexing and Optimization: Add indexes on frequently queried columns (e.g., product_id, stock_quantity) and optimize queries

Caching: Use Redis. 
-----------------------------------------------------------------------------------------------------------

Q:) How do you handle deadlocks in MySQL for a high-concurrency platform ? 
Deadlocks occur when two or more transactions lock resources in a conflicting order.
Each one is waiting for the other to finish and release its lock. Both blocking each other’s way

🔹 In MySQL (InnoDB)
✅ MySQL automatically detects deadlocks
✅ It stops one transaction so the other can continue
---------------------------------------------------------------------------------------------

How would you secure a MySQL database data?
User Authentication : Create role-based users with minimal privileges.
Encryption: Enable SSL/TLS for data in transit.
Access Control: Restrict access to specific IPs:
role based access : 
---------------------------------------------------------------------------------------------------

MySQL supports several JOIN types, each serving specific purposes:

INNER JOIN: INNER JOIN means Returns only matching records from both tables.
LEFT (OUTER) JOIN: Returns all records from the left table, with matching records from the right ( NULL if no match ).
RIGHT (OUTER) JOIN: Returns all records from the right table, with matching records from the left (NULL if no match).

FULL (OUTER) JOIN: Returns all records from both tables, with NULLs for non-matching rows (not natively supported in MySQL, emulated with UNION).

****INNER JOIN*************************************************************************** 

SELECT p.name, i.stock_quantity
FROM product p 
INNER JOIN inventory i ON p.product_id = i.product_id
WHERE i.stock_inventory > 0 
---------------------------------------------------------------------------------------- 
----------------------------------------------------------------------------------------

************left join**********************************************************************
SELECT p.name, COALESCE(i.stock_quantity, 0) AS stock
FROM products p
LEFT JOIN inventory i ON p.product_id = i.product_id;

-----------------------------------------------------------------------------------
name   | stock
-------|------
Laptop | 100
Phone  | 50
Tablet | 0

***********************
SELECT i.product_id, p.name, i.stock_quantity
FROM products p
RIGHT JOIN inventory i ON p.product_id = i.product_id;

product_id | name   | stock_quantity
-----------|--------|---------------
1          | Laptop | 100
2          | Phone  | 50
999        | NULL   | 200

*************************************************************

Q:) What are the main data types available in MySQL?
A:) MySQL supports a variety of data types categorized as:

Numeric: INT, DECIMAL, FLOAT, DOUBLE etc.
String: CHAR, VARCHAR, TEXT, BLOB.
Date/time: DATE, DATETIME, TIMESTAMP, TIME.
JSON: For storing JSON objects.

************************************************************************************

String Types (CHAR, VARCHAR, TEXT, BLOB):

These are four text or non-numeric data.
CHAR: Stores fixed-length text (like "ABC" always takes the same space).
VARCHAR: Stores variable-length text (like names or descriptions) that can change in size.
TEXT: Stores large amounts of text, like paragraphs or articles.
BLOB: Stores binary data, like images, videos, or files, not just text.

************************************************************************************
Date/Time Types (DATE, DATETIME, TIMESTAMP, TIME):

These are four dates and times.
DATE: Stores just a date (like 2025-06-08).
DATETIME: Stores both date and time (like 2025-06-08 17:37:00).
TIMESTAMP: Similar to DATETIME but often used for tracking when something was created or updated, and it can adjust to time zones.
TIME: Stores only the time (like 17:37:00).

************************************************************************************
why we use timestamp in place of datetime ?
1.) Time Zone Handling
DATETIME: Stores the exact value you insert → no timezone conversion.
TIMESTAMP: Internally stored in UTC, but automatically converted to your server/client time zone when you fetch it
------------------------

2.) Storage Size
DATETIME: Takes 8 bytes.
TIMESTAMP: Takes 4 bytes (smaller).
------------------------

Auto Update Feature
3.) DATETIME: Static unless you manually update it.
TIMESTAMP: Can auto-update when a row changes (perfect for updated_at).

************************************************************************************
************************************************************************************

Q:) What is the difference between INT and DECIMAL data types?
 
A:) INT: Stores whole numbers (like 1, 25, 100) without decimals. 
DECIMAL: Stores numbers with exact decimal places (like 3.14 or 123.456) for precise calculations, like money.

FLOAT and DOUBLE: Store numbers with decimals that can be very large or small (like 0.000001 or 1234.56789). FLOAT is less precise than DOUBLE, which can hold bigger and more accurate numbers.

-------------------------------------------------------------------------------------

FLOAT: ********************************************
- Stores numbers with decimals, but with less precision and a smaller range.
- Takes up less storage space (usually 4 bytes).
- Good for numbers where approximate values are okay, like scientific measurements (e.g., 3.14 or 123.456).
- Less accurate for very large or very small numbers due to rounding errors.

Example: Storing a temperature like 25.7°C.

DOUBLE:*********************************************

 stores numbers with decimals but with higher precision and a larger range.
Takes up more storage space (usually 8 bytes).
Better for calculations needing more accuracy or for very large/small numbers (e.g., 123456.78912345).
Example: Storing precise scientific data like 0.000000123456789

Key Difference:
FLOAT is like a lightweight version for less accuracy (precise) needs, while DOUBLE is for when we need more accuracy or bigger numbers.

-------------------------------------------------------------------------------------
JSON:
* JSON is for storing structured data, like a mini-database within a field.
* It holds JSON objects (like {"name": "John", "age": 25}), which are useful for storing complex data that can be easily read or processed by apps.
-------------------------------------------------------------------------------------

Q:) How is DATE different from DATETIME in MySQL? 
The DATE function in MySQL stores the date in year, month, and day format: 

YYYY-MM-DD
However, the DATETIME function stores the date with the time, and it looks like this: 

YYYY-MM-DD HH:MM:SS 

-------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------
Q:) What is a foreign key, and how would you use it in databases? 
A Foreign Key is a column in one table that refers to the Primary
Key in another table. It is used to create a relationship between two tables.

Key Features:
Establishes a relationship between two tables
Can contain duplicate values
Can accept NULL values
Helps maintain data consistency

For example, in a customers table that stores customer information, each customer has a unique customer_id—in another table called 'transactions' (which stores purchase records), we use customer_id as a foreign key. The customer_id in the transactions table will link each purchase to a specific customer in the customers table.

Here’s how that looks in SQL:

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);
CREATE TABLE transactions (
    transaction_id INT PRIMARY KEY,
    customer_id INT,
    amount DECIMAL(10,2),
    date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-----------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------
 Q:) What is the difference between DELETE, TRUNCATE, and DROP in MySQL?
 DELETE : DELETE means Removes rows from a table based on a condition. It can be rolled back if inside a transaction. Example:

 DELETE FROM employees WHERE department_id = 5;

 ---------*****************************
 TRUNCATE: Deletes all rows from a table, but the table structure remains intact (same). It is faster than DELETE and cannot be rolled back. Example:
 TRUNCATE TABLE employees;

---------*****************************
 
 DROP: Completely removes the table structure and data, along with any dependencies like indexes. Example:
 DROP TABLE employees;

-------------------------------------------------------------------------------------

Q: What is a temporary table in SQL? 
A temporary table only exists during the current database session. Once we close the session, the table is deleted.
-------------------------------------------------------------------------------------

What is a subquery in MySQL? Explain with an example. 
A subquery (also known as a nested query) is nested inside another query. It breaks down complex database operations into more manageable steps. 

*********************************
employees (stores employee details):

id  | name       | salary | department_id
----+------------+--------+---------------
 1  | Alice      | 50000  | 10
 2  | Bob        | 60000  | 10
 3  | Charlie    | 45000  | 20
 4  | David      | 70000  | 20


departments (stores department details)
department_id | department_name
---------------+-----------------
10            | HR
20            | IT

Goal: Find employees who earn more than the average salary of all employees.

Query with Subquery:

SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

SELECT name , salary 
FROM employees 
WHERE salary >  ( SELECT AVG(salary) FROM employees )

----------------------------------------------------------------
SELECT name, salary 
FROM employees 
WHERE salary >O(SELECT AVG {salary) FROM  employees )

-------------------------------------------------------------------------------------

Q:) What is the significance of the AUTO_INCREMENT attribute in MySQL?
👉 It automatically gives a new number to each new row.
👉 Usually used for ID columns to keep them unique.

-------------------------------------------------------------------------------------
 What is a view in MySQL? 
A view is a saved query that works like a virtual table. With this, we can take a complex query, give it a name, and use it like a table for future queries. This way, we don’t have to retype the entire query every time.
----------------------------------- --------------------------------------------------

Q:) What are system-versioned tables, and how do they work? 
 System-versioned tables maintain a full history of changes made in a table. Since they keep previous versions of each row, we can use them to audit and recover data .
-------------------------------------------------------------------------------------

Q.) What are MySQL transactions, and how do you use them?
A:) Transactions are a set of operations executed as a single unit. They ensure data integrity by allowing all operations to succeed or fail together.
-------------------------------------------------------------------------------------

START TRANSACTION;
UPDATE movies
SET genre = 'Sci-Fi', description = 'temporary'
WHERE movie_title = 'Inception' AND year = 2010;
COMMIT;
-- Use ROLLBACK if something goes wrong
 
-------------------------------------------------------------------------------------
What is a default constraint in MySQL? How do you set a default value for a column?
A default constraint in MySQL assigns a default value to a column when no explicit value is provided during an INSERT operation. 
-------------------------------------------------------------------------------------

UPDATE movies
SET genre = 'Sci-Fi', description = 'temporary'
WHERE movie_title = 'Inception' AND year = 2010;

**********************************************************************
*****************
Interpretation 1: Update Movies That Are Either (Inception in 2010) or Fiction
If we want to update movies that are either 'Inception' from 2010 or of type 'fiction', the query is correct as written, but you should:

Confirm the type column exists.
Use parentheses for clarity (though not strictly necessary due to AND precedence).
Add a transaction for safety.
......................................................

START TRANSACTION;
UPDATE movies
SET genre = 'Sci-Fi', description = 'temporary'
WHERE (movie_title = 'Inception' AND year = 2010) OR type = 'fiction';
COMMIT;
*****************

Interpretation 2: Update Inception in 2010 Only If It’s Fiction
If you meant to update 'Inception' from 2010 only if it’s also of type 'fiction', you need to group all conditions with AND. This is a common mistake when combining AND and OR.

Corrected Query:

sql

START TRANSACTION;
UPDATE movies
SET genre = 'Sci-Fi', description = 'temporary'
WHERE movie_title = 'Inception' AND year = 2010 AND type = 'fiction';
COMMIT;
-------------------------------------------------------------------------------------

Q: What is a trigger in MySQL? How do you implement it? 
A: In MySQL, a trigger is a set of actions that run when a database event occurs.
👉 Triggers run automatically when we insert, update, or delete data.
👉 triggers can run before or after these actions.
Triggers do something automatically when data changes in a table.

Simple Explanation
A trigger is like an "if-this-happens-then-do-that" rule for a table.
It can run before or after an INSERT, UPDATE, or DELETE operation.
For example, we can use a trigger to automatically log a change or update another table when data is added.
-------------------------------------------------------------------------------------

Why does adding an index make SQL queries faster? 
If there's no index, the database will have to scan each row to find a specific entry. An index acts like a table of contents, allowing the database to access the relevant rows. So, adding an index cuts down the search time and makes queries run faster. 
-------------------------------------------------------------------------------------

Why would a large application use database sharding? Also, tell me about the challenges with it. 

A large application uses database sharding to divide big data across multiple servers. Each part or shard contains a small part of the data. Since it spreads the data load, there's no need for high-end hardware. Although the speed and scalability also improve, it has some challenges too: 

Some queries like joins may not work, which can complicate data management. 

--When data grows, the shards may become overwhelmed, creating hotspots that slow down performance. 
means 
When a database gets very large, it’s often split into smaller pieces called shards to make it easier to manage and faster to access. Each shard holds a portion of the data. However, if too much data or too many requests go to one specific shard, it can get overloaded. This overloaded shard becomes a hotspot, causing delays or slow performance because it’s handling more work than it can manage efficiently.
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
----------------
Q:) What is Database Queries ?
A database query is a request to retrieve, insert, update, or delete data from a database. In our case, using Sequelize, queries are written in JavaScript instead of raw SQL, but they translate to SQL under the hood.

Why it matters: Queries let us interact with your data (e.g., find a user, add a record).

Types of Queries:
SELECT: Retrieve data (e.g., findOne, findAll in Sequelize).
INSERT: Add data (e.g., UserModel.create({ name: 'John' })).
UPDATE: Modify data (e.g., UserModel.update({ name: 'Jane' }, { where: { id: 1 } })).
DELETE: Remove data (e.g., UserModel.destroy({ where: { id: 1 } })).

-----------------------------------------------------------------------------------------

Redundancy means having multiple copies of the same data in the database.

Normalization : 
Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. 
Normalization involves splitting data into tables and defining relationships (e.g., one-to-many).

Users Table: 
| UserID | Name  |
|--------|-------|
| 1      | John  |

Orders Table:
| OrderID | UserID | Item  |
|---------|--------|-------|
| 1       | 1      | Shoes |
| 2       | 1      | Shirt |

---------------------------------------------------------------------

 Database Design Concepts
Database design is planning how to structure our database (tables, columns, relationships) to meet our app’s needs efficiently.

Relationships:
One-to-One: E.g., each user has one profile.
One-to-Many: E.g., one user has many orders.
Many-to-Many: E.g., users and groups (requires a junction table).

example of many to many 
-------------------------------------------------------------------------------

| userId | name  |      
|--------|-------|
| 1      | John  |
| 2      | Jane  |

-------------------------------------------------------------------------------

| groupId | name    |
|---------|---------|
| 1       | Admins  |
| 2       | Editors |
| 3       | Guests  |

-------------------------------------------------------------------------------

| userId | groupId |
|--------|---------|
| 1      | 1       | // John in Admins
| 1      | 2       | // John in Editors
| 2      | 2       | // Jane in Editors
| 2      | 3       | // Jane in Guests

-------------------------------------------------------------------------------------
If we can delete all rows with DELETE id > 0, why do we use TRUNCATE? 

Performance (Speed):

DELETE WHERE id > 0: Iterates through rows matching the condition (id > 0), deletes them individually, 
 This is slower for large datasets because it processes each row.

TRUNCATE: Removes all rows in a single operation without scanning individual rows.
It’s much faster, especially for large tables.


Resets Table State:

DELETE WHERE id > 0: Only removes rows matching the condition and does not reset auto-increment counters (e.g., id sequence stays at the next value).

TRUNCATE: Resets the table to its initial state, including resetting auto-increment counters (e.g., next id starts at 1 again).

-------------------------------------------------------------------------------------
 */

/**
 Client-Side Rendering (CSR) vs. Server-Side Rendering (SSR)
 Client-Side Rendering (CSR) and Server-Side Rendering (SSR) are two approaches to rendering web pages, determining where and how the HTML content is generated.
 
 What is it? csr
The server sends a minimal HTML page with JavaScript (e.g., a React or Vue app). The browser downloads the JavaScript,executes it, and renders the full HTML content on the client side (in the browser) .

How it works:
The server provides a basic HTML skeleton and a JavaScript bundle.
The browser runs the JavaScript to fetch data (e.g., via AJAX/fetch) and dynamically builds the page.
 
pro : 

 Fast interactions: After the initial load, page updates (e.g., navigating) are quick because JavaScript handles rendering without full page reloads.
Rich user experience: Ideal for single-page applications (SPAs) like React apps.
Less server load: Rendering is offloaded to the client
  
Cons:
Slow initial load: The browser must download JavaScript and fetch data before rendering.
SEO challenges: Search engines may struggle to index content because the initial HTML is minimal.
------------------------------------------------------------------------------------------------------

Server-Side Rendering (SSR)
 The server generates the complete HTML for a page, including data, and sends it to the browser. The browser displays the page immediately

How it works:
The server fetches data (e.g., from a Sequelize database), renders the HTML, and sends it.
The client receives a fully populated HTML page, ready to display.

Pros:
Fast initial load: The browser gets pre-rendered HTML, so users see content quickly.
Better SEO: Search engines can easily index the full HTML content.
Reliable on low-end devices: Less client-side processing required.

Cons:
Higher server load: Rendering HTML for each request is resource-intensive.
Slower interactions: Page navigation may require full server requests unless combined with client-side JavaScript.
Complexity: Server-side logic (e.g., templating) can be more complex.

----------------------------------------------------------------------------------------

WebSockets, Polling, and Long Polling

These are techniques for real-time communication between a client and server, useful for features like live updates (e.g., showing new users in your app without refreshing).

A protocol that establishes a persistent, two-way connection between the client and server, allowing real-time data exchange (e.g., chat messages, live notifications).

How it works:
The client initiates a WebSocket connection (via ws:// or wss://).
The connection stays open, enabling the server to push data to the client (and vice versa) instantly.
Unlike HTTP, it’s not request-response; both sides can send data anytime.
---------------------------------------------------------------------------------------------

Cons:
Complex setup: Requires a WebSocket server (e.g., ws library in Node.js).
Resource-intensive: Persistent connections consume server resources
-----------------------------------------------------------------------------------

Polling
The client repeatedly sends HTTP requests (e.g., via AJAX) at regular intervals to check for updates from the server.

Long Polling
 An improvement over polling where the client sends a request, and the server holds the connection open until new data is available.

---- When to Switch Tech------------
Small app → Node.js + MySQL is fine.
Medium scale (many clients) → Add Redis (Pub/Sub) to avoid constant DB hits.
Large scale (like WhatsApp) → Use WebSockets or Server-Sent Events (SSE) instead of long polling.
-----------------------------------------------------


Comparison: WebSockets, Polling, Long Polling

Feature            	WebSockets	                    Polling              |    	Long Polling
Connection Type:	Persistent, two-way | 	Short-lived HTTP requests    |	   Long-held HTTP requests
Latency	:         Low (instant updates) | 	High (depends on interval)   | 	 Medium (updates when available)
Efficiency :   	High (single connection)|	Low (many requests)          |  	Medium (fewer requests)
Server :    Load    Moderate (persistent)|  	High (frequent requests) | 	High (open connections)
Complexity:    	High (WebSocket setup)   |	Low (simple HTTP)            | 	Medium (timeout handling)
Use Case:  	 Live chat, real-time apps 	 | Periodic updates (e.g., news) | 	Near-real-time (e.g., notifications)

*/
let mongo
let mongo

/**
What are NoSQL Databases ?
NoSQL databases are non-relational databases designed to handle large volumes of unstructured, semi-structured, or structured data. Unlike traditional relational databases (e.g., MySQL, PostgreSQL) that use tables and SQL for data management,

NoSQL databases offer flexible schemas and are optimized for scalability, performance, and handling diverse data types. They are particularly suited for big data, real-time applications, and scenarios where data structures evolve rapidly.

Key Features of NoSQL Databases. 
Flexible Schema: No predefined schema; data can be added or modified without re-structuring.
Scalability: Easily scale horizontally across distributed systems ( e.g., adding more servers).
High Performance: Optimized for specific data access patterns, like key-value lookups or graph traversals.
Diverse Data Types: Support for various data formats ( e.g., JSON, XML, graphs).
Eventual Consistency: Many prioritize availability and partition tolerance over immediate consistency ( per CAP theorem ).

Types of NoSQL Databases
NoSQL databases are categorized based on their data model. The four main types are : 

Key-Value Stores. 
 Store data as key-value pairs, where each key is unique and maps to a value. Simplest NoSQL model, ideal for fast lookups.
Use Cases: Caching, session management, user preferences.

Examples:
Redis: In-memory, high-speed database for caching and real-time analytics.
DynamoDB: AWS-managed, scalable key-value store.
Riak: Distributed, fault-tolerant key-value database.

Pros: Extremely fast, simple, scalable.
Cons: Limited querying capabilities beyond key-based access.
-------------------------------------------------------------------------------------------------------

Document Stores.
Store data as semi-structured documents (e.g., JSON, BSON, XML), where each document is a self-contained unit with a unique key. Documents can have nested structures.

Use Cases: Content management, e-commerce, user profiles.

Examples:
MongoDB: Popular document store with rich querying and indexing.
CouchDB: Focuses on replication and offline-first applications.
Firestore: Google Cloud’s serverless document database.

Pros: Flexible schema, intuitive for developers, supports complex queries.
Cons: Can be slower than key-value stores for simple lookups; redundancy possible.
--------------------------------------------------------------------

Column-Family Stores (Wide-Column Stores)
Description: Store data in columns instead of rows, optimized for large-scale, columnar data access. Data is organized into column families (groupings of related columns).

Use Cases: Time-series data, analytics, IoT applications.

Examples:
Cassandra: Distributed database for high availability and large datasets.
HBase: Runs on Hadoop HDFS, suited for large-scale data processing.
ScyllaDB: High-performance, Cassandra-compatible database.
Pros: Efficient for columnar data access, scalable for big data.
Cons: Complex to set up and query; not ideal for small datasets.

Additional Notes

When to Use NoSQL:
Need for horizontal scaling across distributed systems.
Handling unstructured or semi-structured data.
Rapid development with evolving schemas.
High-throughput, low-latency requirements.

Trade-Offs:
NoSQL databases may sacrifice ACID (Atomicity, Consistency, Isolation, Durability) guarantees for scalability and performance.
Querying can be less standardized than SQL, varying by database type.
----------------------------------------------------------------------------------------

MongoDB stores BSON (Binary Interchange and Structure Object Notation) objects in the collection.
4. What is collection and Document ?
document is order set of key-value pairs.
collection is grp of document.
grp of collection is known as database.

A Database contains a collection, and a collection contains documents and the documents contain data, they are related to each other.
 A collection in MongoDB is a group of documents.
 
What is “Namespace” in MongoDB?
The concatenation of the collection name and database name is called a namespace.

What is Replication in Mongodb?
Replication in MongoDB is the process of keeping multiple copies of the same data on different servers
-------------------------------------------------------------------------------

Comparing MySQL and MongoDB depends on your project's needs, as they serve different purposes. MySQL is a relational database, while MongoDB is a NoSQL database. Below is a simple comparison to help you understand their differences and decide which is better for your use case.

MySQL vs. MongoDB: Key Differences

Aspect          	MySQL	
Type	           Relational database (uses tables with rows and columns).
Data Structure	   Fixed schema (predefined tables with columns).
Query Language	   Uses SQL (structure query language).
Scalability	       Scales vertically (needs more powerful servers).
ACID Compliance	   Fully ACID-compliant (ensures reliable transactions).
Data Types	       Structured data (e.g., numbers, strings in fixed columns).
 Performance	   Fast for structured data and complex joins.
 Use Cases	       Financial systems, e-commerce, apps needing complex queries and joins.    
Examples	       Banking systems, traditional CMS, inventory management.

MongoDB
Type	             NoSQL database (uses JSON-like documents).
Data Structure  	 Flexible schema (documents can have different fields).
Query Language  	 Uses MongoDB Query Language (MQL) or JavaScript-like queries.
Scalability:     	 Scales horizontally (adds more servers easily).
ACID Compliance	     Offers eventual consistency; less strict on ACID for better performance.
    Data Types       Unstructured/semi-structured data (e.g., JSON, arrays, nested objects).
 Performance         Fast for large-scale, unstructured data and simple queries.

Use Cases	    Web apps, real-time analytics, content management, IoT.
Examples    Social media platforms, product catalogs, event logging.


    Pros and Cons
MySQL
Pros:
Reliable for transactions (e.g., banking, where data accuracy is critical).
Standardized SQL makes it easy to learn and use across systems.
Great for structured data and complex relationships (e.g., joining multiple tables).
Mature, widely used, with strong community support.

Cons:
Fixed schema makes changes harder (e.g., adding new columns requires altering tables).
Vertical scaling can be expensive (needs more powerful hardware).
Less suited for unstructured or rapidly changing data.
-------------------------------------------------------------------------------------------

MongoDB
Pros:
Flexible schema allows easy addition or modification of data fields.
Scales horizontally, handling large data volumes across distributed servers.
Fast for unstructured data and simple read/write operations.
Ideal for modern apps with dynamic data (e.g., JSON-like structures).

Cons:
Weaker ACID compliance may lead to data inconsistencies in some cases.
Querying is less standardized, requiring learning MongoDB-specific syntax.
Not ideal for complex relationships or heavy joins.

----------------------------------------------------------------------------------

How does MongoDB ensure high availability?
👉 MongoDB uses replica sets.
✅ Data is copied to multiple servers (replicas).
✅ If one server fails, another takes over automatically
----------------------------------------------------------------------------------
When to use MongoDB instead of MySQL?

👉 Use MongoDB when:
✅  have unstructured or flexible data
✅ our data model changes frequently
✅ our need high write speed and scalability
✅  building real-time apps like chat, IoT, analytics

🔑 In one line:
Choose MongoDB for flexible, fast-changing data and MySQL for structured, relational data.
----------------------------------------------------------------------------------

🔹 What is upsert in MongoDB?

👉 Upsert = Update + Insert
✅ If a document exists, it updates it.
✅ If it doesn’t exist, it inserts a new one

🔑 In one line:
'Upsert' updates existing data or inserts new data if not found.

----------------------------------------------------------------------------------
Explain the structure of ObjectID in MongoDB?
a 4-byte timestamp value, representing the ObjectId's creation, measured in seconds since the Unix epoch
a 5-byte random value
a 3-byte incrementing counter, initialized to a random value
----------------------------------------------------------------------------------

🔹 What is oplog in MongoDB?

👉 Oplog (operations log) is a special log collection.
✅ operations log records all changes (insert, update, delete) in the database.
✅ Used for replication – secondary servers copy data changes from it.

🔑 In one line:
Oplog stores all database changes to keep replicas updated.
----------------------------------------------------------------------------------

🔹 What is Aggregation in MongoDB?
aggregation is use when data is not available directly in database.
An aggregation pipeline consists of one or more stages that process documents
example, a stage can filter documents, group documents, and calculate values.

when the data is not available directly then we use aggregation pipline, here in this output of one pipe will be input of second pipe and so on because we fetch data from different tables.

((👉 Aggregation is a way to process and combine data from multiple documents.))
✅ It helps to filter, group, sort, and calculate data to get meaningful results.
----------------------------------------------------------------------------------

🔹 How does journaling work in MongoDB?

👉 Journaling keeps a log of all write operations before applying them to the database.
✅ If MongoDB crashes, it uses the journal file to recover and restore data safely.

🔑 In one line:
Journaling saves changes in a log first to protect data from crashes.

----------------------------------------------------------------------------------
🔹 Why is MongoDB schema-less?

👉 MongoDB is schema-less because:
✅ MongoDB stores data in JSON-like documents, which can have different fields and structures.
✅ we don’t need to define a fixed schema before adding data.

🔑 In one line:
MongoDB is schema-less to let us store flexible and varied data easily.
----------------------------------------------------------------------------------

🔹 What is a storage engine in MongoDB?
👉 A storage engine is the part of MongoDB that manages how data is stored on disk.
✅ It handles reading and writing data.

🔑 In one line:
Storage engine decides how MongoDB saves and retrieves data.

----------------------------------------------------------------------------------
Relationships in MongoDB
MongoDB, being a NoSQL database, handles relationships differently from relational databases like MySQL.

Relationships in MongoDB are managed in two main ways:

Embedded Documents: Store related data within a single document (like JSON). For example, a user document can include an array of addresses inside it. Best for one-to-few relationships.

References: Store IDs linking to other documents (similar to foreign keys). For example, a user document might reference a separate posts collection. Best for one-to-many or many-to-many relationships.

Simple Explanation: You either keep related data together in one document (embedding) or link documents using IDs (referencing), depending on your data needs.
---------------------------------------------------------------------------------------------

******Use of Capped Collection in MongoDB
A capped collection is a fixed-size collection that automatically overwrites old data when it reaches its size limit, ((acting like a circular buffer)).

Use: Ideal for logging, caching, or storing recent data (e.g., latest 1000 chat messages) where old data can be discarded.

Simple Explanation: It’s a special collection with a set size that auto-deletes old entries to make room for new ones, great for time-sensitive or high-volume data.
--------------------------------------------------------------------------------------------------------

************Splitting in MongoDB
Splitting is part of MongoDB’s sharding process, where large datasets (shards) are divided into smaller chunks based on a shard key.

How it works: When a shard grows too large, MongoDB splits it into smaller pieces, which are then distributed across servers.

Simple Explanation: Splitting breaks big data chunks into smaller ones to spread them across servers, helping manage large datasets efficiently.

***********Horizontal Scalability in MongoDB
 Horizontal scalability means we add more servers (nodes) to distribute the data and workload, instead of just upgrading the hardware (CPU, RAM, storage) of one server.

Example
Suppose one MongoDB server can handle 10 million users.
If your app grows to 100 million users:
Vertical scaling → upgrade to a super expensive machine (more CPU, RAM, SSD).
Horizontal scaling → add 10 cheaper servers, each handling 10 million users, and let MongoDB split the data automatically.

 MongoDB scales by spreading data and workload across multiple servers, making it easy to handle more users or data without slowing down.
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------

*/