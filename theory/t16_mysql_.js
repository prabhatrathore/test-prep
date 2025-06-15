/**
 usb:-- Universal Serial Bus 
 png : Portable Network Graphics
 jpeg : Joint Photographic Experts Group 

 ------------------------------------------------------------------------------------

 HTTP vs HTTPS
HTTP (HyperText Transfer Protocol)  

HTTP is a protocol for transferring data over the web. It’s the foundation of communication between a client (e.g., browser) and a server.
Port: Uses port 80 by default.

Security: Not secure—data is sent in plain text, making it vulnerable to interception (e.g., man-in-the-middle attacks).
Use Case: Suitable for non-sensitive data (e.g., static websites).


HTTPS (HTTP Secure)

Definition: HTTPS is HTTP with an added layer of security using SSL/TLS (Secure Sockets Layer/Transport Layer Security) encryption.

Port: Uses port 443 by default.
Security: Encrypts data between the client and server, ensuring privacy, integrity, and authentication.
Use Case: Essential for sensitive data (e.g., login forms, payment gateways).
Certificate: Requires an SSL/TLS certificate issued by a Certificate Authority (CA) to verify the server’s identity.


How Does a URL Work?
A URL (Uniform Resource Locator) is an address that identifies a resource on the internet.

--------------------------------------------------------------------------------------------------------------

How a URL Works (Step-by-Step)

1:) User Enters URL: The user types a URL (e.g., https://www.example.com/candidates?name=Ram) into their browser.

 ( domain name system )
2:) DNS Resolution: The browser sends the domain (www.example.com) to a DNS server, which resolves it to an IP address (e.g., 192.0.2.1).

3:) Connection to Server:
The browser establishes a connection to the server at the IP address on port 443 (for HTTPS).
For HTTPS, an SSL/TLS handshake occurs: the server presents its SSL certificate, the client verifies it, and they negotiate an encryption key.



*/
function findSecondSmallest(arr) {// hard one 
    if (arr.length < 2) return null;

    let min1 = Infinity;
    let min2 = Infinity;

    for (let num of arr) {
        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num > min1 && num < min2) {
            min2 = num;
        }
    }

    return (min2 === Infinity) ? null : min2;
}
// console.log(findSecondSmallest([4, -1, 2, -5, 0, -5])); // Output: -1
// console.log(findSecondSmallest([1, -2, 3])); // Output: null
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


function findThirdSmallest(arr) {
    if (arr.length < 3) return null; // Not enough elements

    let smallest = Infinity;
    let secondSmallest = Infinity;
    let thirdSmallest = Infinity;

    // Single pass to find smallest, second smallest, and third smallest
    for (let num of arr) {
        if (num < smallest) {
            thirdSmallest = secondSmallest;
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            thirdSmallest = secondSmallest;
            secondSmallest = num;
        } else if (num < thirdSmallest && num !== secondSmallest && num !== smallest) {
            thirdSmallest = num;
        }
    }

    // Check if third smallest exists
    return thirdSmallest === Infinity ? null : thirdSmallest;
}

// Example usage
const arr2 = [5, -2, 10, -8, 3, 0];
console.log(`Third smallest number: ${findThirdSmallest(arr2)}`); // Output: 0

console.log(null == undefined, " console.log(null == undefined);");


/**

ORM converts code objects to database tables.

An ORM (Object-Relational Mapping) is a programming technique or tool that acts as a bridge between a relational database and object-oriented programming languages like JavaScript (in the context of your Node.js/Sequelize project).
 It allows developers to interact with a database using objects and methods in their programming language instead of writing raw SQL queries.

------------------------------------------------------------------------------------------------------

Q:) What is a database, 
A database is a storage container that holds data we can access, modify, and analyze . 

------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------
Q:) How would you scale MySQL for SupplyMatch as the platform grows to millions of transactions?

A: Scaling MySQL for handling increased transactions, users, and data volume. Strategies include:

  Vertical Scaling: Increase server resources (CPU, RAM, SSD) to handle more load.

------------------------------------------------------------------------------------------------------------
Horizontal Scaling:

Sharding: Sharding is a database partitioning technique that splits a large MySQL database into smaller, manageable pieces called shards.

Indexing and Optimization: Add indexes on frequently queried columns (e.g., product_id, stock_quantity) and optimize queries

Caching: Use Redis. 
Partitioning : MySQL’s built-in table partitioning (e.g., PARTITION BY RANGE) keeps data on one server but splits tables logically.  

-----------------------------------------------------------------------------------------------------------

Q:) How do you handle deadlocks in MySQL for a high-concurrency platform?
Deadlocks occur when two or more transactions lock resources in a conflicting order.

Deadlocks happen when two or more transactions hold locks on resources and each waits for the other to release, causing a stalemate. MySQL’s InnoDB storage engine, commonly used for transactional applications, detects and resolves deadlocks automatically.

---------------
How would you secure a MySQL database data?
User Authentication:
Create role-based users with minimal privileges

Encryption:
Enable SSL/TLS for data in transit.

Access Control:
Restrict access to specific IPs:

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

*****left join*******************************************************************************
SELECT p.name, COALESCE(i.stock_quantity, 0) AS stock
FROM products p
LEFT JOIN inventory i ON p.product_id = i.product_id;

-----------
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

Numeric: INT, DECIMAL, FLOAT, DOUBLE, etc.
String: CHAR, VARCHAR, TEXT, BLOB.
Date/time: DATE, DATETIME, TIMESTAMP, TIME.
JSON: For storing JSON objects.

************************************************************************************

String Types (CHAR, VARCHAR, TEXT, BLOB):

These are for text or non-numeric data.
CHAR: Stores fixed-length text (like "ABC" always takes the same space).
VARCHAR: Stores variable-length text (like names or descriptions) that can change in size.
TEXT: Stores large amounts of text, like paragraphs or articles.
BLOB: Stores binary data, like images, videos, or files, not just text.

************************************************************************************
Date/Time Types (DATE, DATETIME, TIMESTAMP, TIME):

These are for dates and times.
DATE: Stores just a date (like 2025-06-08).
DATETIME: Stores both date and time (like 2025-06-08 17:37:00).
TIMESTAMP: Similar to DATETIME but often used for tracking when something was created or updated, and it can adjust to time zones.
TIME: Stores only the time (like 17:37:00).

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

Also stores numbers with decimals but with higher precision and a larger range.
Takes up more storage space (usually 8 bytes).
Better for calculations needing more accuracy or for very large/small numbers (e.g., 123456.78912345).
Example: Storing precise scientific data like 0.000000123456789

Key Difference:
FLOAT is like a lightweight version for less precise needs, while DOUBLE is for when you need more accuracy or bigger numbers.

-------------------------------------------------------------------------------------
JSON:
* This is for storing structured data, like a mini-database within a field.
* It holds JSON objects (like {"name": "John", "age": 25}), which are useful for storing complex data that can be easily read or processed by apps.
-------------------------------------------------------------------------------------

Q:) How is DATE different from DATETIME in MySQL? 
The DATE function in MySQL stores the date in year, month, and day format: 

YYYY-MM-DD

However, the DATETIME function stores the date with the time, and it looks like this: 

YYYY-MM-DD HH:MM:SS 

-------------------------------------------------------------------------------------
Q:) What is a foreign key, and how would you use it in databases? 
A:) A foreign key is a field in one table that links to the primary key of another table. 

For example, in a customers table that stores customer information, each customer has a unique customer_id—in another table called transactions (which stores purchase records), we use customer_id as a foreign key. The customer_id in the transactions table will link each purchase to a specific customer in the customers table.

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
 Q:) What is the difference between DELETE, TRUNCATE, and DROP in MySQL?
 DELETE: Removes rows from a table based on a condition. It can be rolled back if inside a transaction. Example:

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

id | name       | salary | department_id
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
    The AUTO_INCREMENT attribute in MySQL generates unique, sequential numbers for a column, typically the primary key of a table.

-------------------------------------------------------------------------------------
 What is a view in MySQL? 
A view is a saved query that works like a virtual table. With this, we can take a complex query, give it a name, and use it like a table for future queries. This way, we don’t have to retype the entire query every time.

----------------------------------- --------------------------------------------------
What are system-versioned tables, and how do they work? 
System-versioned tables maintain a full history of changes made in a table. Since they keep previous versions of each row, we can use them to audit and recover data.

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
A default constraint in MySQL assigns a default value to a column when no explicit value is provided during an INSERT operation. This ensures the column is valid even if the user omits it during data entry.

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
A: In MySQL, a trigger is a set of actions that run when a database event occurs. Triggers can be configured to execute before or after events like INSERT, UPDATE, or DELETE.

Simple Explanation
A trigger is like an "if-this-happens-then-do-that" rule for a table.
It can run before or after an INSERT, UPDATE, or DELETE operation.
For example, you can use a trigger to automatically log a change or update another table when data is added.

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
Database Queries
What is it? A database query is a request to retrieve, insert, update, or delete data from a database. In your case, using Sequelize, queries are written in JavaScript instead of raw SQL, but they translate to SQL under the hood.
Why it matters: Queries let you interact with your data (e.g., find a user, add a record).

Types of Queries:
SELECT: Retrieve data (e.g., findOne, findAll in Sequelize).
INSERT: Add data (e.g., UserModel.create({ name: 'John' })).
UPDATE: Modify data (e.g., UserModel.update({ name: 'Jane' }, { where: { id: 1 } })).
DELETE: Remove data (e.g., UserModel.destroy({ where: { id: 1 } })).

-----------------------------------------------------------------------------------------

Redundancy means having multiple copies of the same data in the database.

Normalization :
Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves splitting data into tables and defining relationships (e.g., one-to-many).

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

. Database Design Concepts
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
 
 What is it?
The server sends a minimal HTML page with JavaScript (e.g., a React or Vue app). The browser downloads the JavaScript,executes it, and renders the full HTML content on the client side (in the browser).

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

Server-Side Rendering (SSR)
What is it? The server generates the complete HTML for a page, including data, and sends it to the browser. The browser displays the page immediately

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



WebSockets, Polling, and Long Polling

These are techniques for real-time communication between a client and server, useful for features like live updates (e.g., showing new users in your app without refreshing).

A protocol that establishes a persistent, two-way connection between the client and server, allowing real-time data exchange (e.g., chat messages, live notifications).

How it works:
The client initiates a WebSocket connection (via ws:// or wss://).
The connection stays open, enabling the server to push data to the client (and vice versa) instantly.
Unlike HTTP, it’s not request-response; both sides can send data anytime.



Cons:
Complex setup: Requires a WebSocket server (e.g., ws library in Node.js).
Resource-intensive: Persistent connections consume server resources
-----------------------------------------------------------------------------------

Polling
What is it? The client repeatedly sends HTTP requests (e.g., via AJAX) at regular intervals to check for updates from the server.

Long Polling
What is it? An improvement over polling where the client sends a request, and the server holds the connection open until new data is available.



Comparison: WebSockets, Polling, Long Polling

Feature            	WebSockets	                    Polling              |    	Long Polling
Connection Type:	Persistent, two-way | 	Short-lived HTTP requests    |	   Long-held HTTP requests
Latency	:         Low (instant updates) | 	High (depends on interval)   | 	 Medium (updates when available)
Efficiency :   	High (single connection)|	Low (many requests)          |  	Medium (fewer requests)
Server :    Load	Moderate (persistent)|  	High (frequent requests) | 	High (open connections)
Complexity:    	High (WebSocket setup)   |	Low (simple HTTP)            | 	Medium (timeout handling)
Use Case:  	 Live chat, real-time apps 	 | Periodic updates (e.g., news) | 	Near-real-time (e.g., notifications)

*/
