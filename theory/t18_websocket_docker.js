/**

WebSockets provide a full-duplex, bidirectional communication channel over a single, long-lived TCP connection, enabling real-time, low-latency data exchange between a client (e.g., a browser) and a server. Unlike HTTP, which follows a request-response model. 

WebSockets allow both the client and server to send messages at any time, making them ideal for applications requiring instant updates, such as chat apps, live notifications,

--------------------------------------------------------------------------------

🔹 1. Full-Duplex (💬 Two-way communication)
Full-duplex means:
👉 Both client and server can send messages to each other at the same time.

----------------------------------------------------------------------------

🔹 2. TCP (Transmission Control Protocol)
TCP is a reliable connection-based protocol used to send data over the internet.

Key points:
Ensures all data reaches in correct order 📦📦📦
Keeps a stable connection (not like random one-time messages)

Used by HTTP, HTTPS, and WebSockets

-----------------------------------------------------------------------------------
1:) Establishes a persistent connection between client and server after an HTTP handshake.
2:) Allows bi-directional communication: Both client and server can push data without waiting for a request.
3:) Uses low overhead: After the initial handshake, messages have minimal headers, reducing latency compared to HTTP polling.
4:) Supports real-time use cases: Ideal for live updates, such as stock changes, chat messages, or notifications.
 
Comparison with HTTP:

HTTP: Request-response, stateless, higher latency for real-time (requires polling or long polling).
WebSockets: Persistent, stateful, low-latency, ideal for SupplyMatch’s real-time stock updates.

🕐 What is Latency?
Latency = Time delay ⏳
It’s the time taken between sending a request and getting a response.

----------------------------------------------------------------------------------

WebSockets (ws)
Pros:
1:) Lightweight and high-performance for frequent stock updates.
2:) Full control over protocol (e.g., custom binary formats for large datasets).
3:) Ideal for SupplyMatch if low latency is critical (e.g., thousands of retailers monitoring stock).

Cons:
1:) Manual connection management (e.g., handling disconnections, retries).
2:) No built-in rooms or namespaces, requiring custom logic for targeted updates.
3:) No fallback for non-WebSocket environments.

Example: Broadcasting stock updates to all retailers when a supplier updates inventory in MySQL (as shown in previous WebSocket example).

Socket.IO
Pros:

1:) Simplifies development with automatic reconnection, rooms, and namespaces.
2:) Rooms enable targeted updates (e.g., notify only retailers subscribed to a product).
3:) Fallback to HTTP polling ensures compatibility for SupplyMatch’s diverse retailer base.
4:) Redis adapter simplifies scaling in a microservices architecture.

Cons:
1:) Slightly higher overhead due to additional features.
2:) Less control over low-level protocol details.


socket.io
Library built on WebSockets with additional features.
2:) Rooms, namespaces, automatic reconnection, event-based messaging.
3:) Built-in support for Redis adapter for scaling across multiple Node.js instances.
*/

/**
Containerization is a lightweight virtualization technology that allows applications and their dependencies to be packaged into standardized, isolated units called containers.

What is Docker?
Docker is a tool that helps us:

✅ Package our app with everything it needs (code + libraries)
✅ Into a container (a lightweight, isolated environment)
✅ So it works anywhere — your laptop, server, or cloud — without any issues
 */

/**

 app.use(express.json()) //This middleware parses incoming requests with JSON payloads


 
// two middleware functions are used to parse incoming request data so that it can be accessed in our application.
// app.use(express.json()) //This middleware parses incoming requests with JSON payloads
// app.use(express.urlencoded({ extended: true }))
//extended: true: Allows parsing of nested objects and arrays in the URL-encoded data.
// extended: false: Only parses simple key-value pairs (no nested objects). It uses the built-in querystring module.


// Example of nested data with extended: true:
// Input: user[name]=John&user[age]=30
// Output: req.body = { user: { name: "John", age: "30" } }


   jwt.verify(token, 'squareboat', {
            algorithm: "HS512",  // Specifies the HMAC-SHA512 algorithm for secure verification. 
        });
        
---------------------------------------------------------------------------------

      'squareboat':  The secret key used to verify the token’s signature.
 
      ------------------------------------------------------------------------------------
      dialect: "mysql",// dialect option tells Sequelize which database management system (DBMS) it is interacting with.


       pool: {
            max: 15,//maximum number of connections Sequelize can open in the pool at any time.  Up to 15 connections can be open simultaneously.
            min: 0, // The minimum number of connections Sequelize keeps open, even when there’s no activity
            maxIdleTime: 1000, 
            acquire: 30000000,// The maximum time (in milliseconds) Sequelize waits to acquire a connection from the pool before throwing an error.
            idle: 100000000,//The maximum time (in milliseconds) a connection can remain idle in the pool (not used by any query) before being closed.
        },

-------------------------------------------------------------------------------------
const options = {
    abortEarly: false,.
    Determines whether Joi stops validation as soon as it encounters the first error or continues to validate all fields and collect all errors.
Default: true (Joi stops at the first validation error).
Your setting: false (Joi validates all fields and returns all errors).

    allowUnknown: true,Allows the input object to contain fields that are not defined in the schema.
   
    stripUnknown: true,

    stripUnknown: true, (Joi strips unknown fields from the validated result).
    Default: false (Joi keeps unknown fields in the output).

};

-----------------------------------------------------------------------------------
        let findUSer = await UserModel?.findOne({ where: { name: { [Op.like]: `%${name}%` } }, raw: true })


 */