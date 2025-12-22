/*
1. Explain Event-Driven Programming Paradigm in Node.js
Node.js follows an event-driven programming paradigm where actions are triggered by events. The core of Node.js, known as the event loop, continuously listens for events and executes associated callback functions. This non-blocking architecture enables asynchronous programming, and making Node.js highly efficient and scalable.

2. Non-Blocking I/O in Node.js
Node.js utilizes non-blocking I/O operations, allowing multiple tasks to be performed concurrently without waiting for each other to complete. This asynchronous behavior enhances performance and scalability, making Node.js suitable for handling high loads.

7. Popular Frameworks and Libraries in Node.js
Node.js ecosystem has lot of frameworks and libraries catering to various needs:

Express.js: A minimalist web framework for building robust web applications and APIs.
Koa.js: A next-generation web framework developed by the creators of Express, emphasizing modularity and async/await.
Socket.io: A library for real-time bidirectional communication between web clients and servers using WebSockets.
Nest.js: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
Hapi.js: A rich framework for building applications and services, emphasizing configuration over code and enterprise-grade features.

8. Scaling a Node.js Application for High Traffic Loads--------------------------------------------
Scaling a Node.js application involves various strategies to handle high traffic loads efficiently:

Horizontal scaling: Adding more instances of the application across multiple servers or containers.
Load balancing: Distributing incoming requests across multiple instances to prevent overload on any single server.
Caching: Implementing caching mechanisms to store frequently accessed data and reduce database load.
Asynchronous processing: Offloading time-consuming tasks to background workers or queues to keep the main application responsive.

7. Handling Long-Running Tasks in a Node.js Application without Blocking the Event Loop
To handle long-running tasks in a Node.js application without blocking the event loop, use techniques like:

Child Processes: Offload heavy tasks to child processes using the child_process module.
Worker Threads: Leverage Worker Threads API for running CPU-intensive tasks in parallel.
Queues: Implement a message queue system like RabbitMQ or Redis to process tasks asynchronously.
Streams: Use streams for processing large data sets without loading everything into memory at once.
--------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------
✅ Socket.io — Most Important Methods (Node.js)

1. io.on(event, callback)
Listens for new client connections.
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
});

2. socket.on(event, callback)
Listens for an event from a specific client.
socket.on("message", (data) => {
    console.log("Message received:", data);
});

3. socket.emit(event, data)
Sends a message to only the connected client.
socket.emit("welcome", "Welcome to the server!");

4. io.emit(event, data)
Broadcasts to all connected clients.
io.emit("newUser", "A new user just joined!");

5. socket.broadcast.emit(event, data)
Sends to everyone except the sender.
socket.broadcast.emit("userTyping", "Someone is typing...");

6. socket.join(roomName)
Adds a user to a room.
socket.join("chat-room-1");

7. socket.leave(roomName)
Removes a user from a room.
socket.leave("chat-room-1");

8. io.to(roomName).emit(event, data)
Sends message to everyone in a room.
io.to("chat-room-1").emit("roomMessage", "Hello Room!");

9. socket.to(roomName).emit(event, data)
Broadcasts message to a room excluding sender.
socket.to("chat-room-1").emit("roomTyping", "A user is typing...");

10. socket.disconnect()
Manually disconnect a client.
socket.disconnect();

11. socket.id
Returns the unique ID of the connected client.
console.log(socket.id);
--------------------------------------------------------------------------------------------
 */