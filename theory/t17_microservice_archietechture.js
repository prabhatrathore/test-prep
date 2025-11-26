/** 
 What is Microservices Architecture?
Microservices architecture is a design approach where an application is built as a collection of small, independent services that communicate over a network, each performing a specific function.

Unlike monolithic architectures, where all components are tightly coupled in a single codebase, microservices are loosely coupled, independently deployable, and scalable. 

In microservices architecture:

1:) Each service is a self-contained unit responsible for a single business capability (e.g., inventory management, order processing, notifications).

2:) Services communicate via well-defined APIs. 

3:) Services are independently deployable, allowing teams to develop, deploy, and scale them separately.
----------------------------------------------------------------------------

Key Characteristics:

1:) Modularity: Each service is a small, focused module.
2:) Decentralized Data: Each service (typically) has its own database (e.g., MySQL for SupplyMatch’s inventory service).
3:) Scalability: Individual services can be scaled independently (e.g., scale the order service during peak retailer activity).
4:) Resilience: Failure in one service doesn’t crash the entire system.


Advantages of Microservices 
1:) Scalability: Scale the Inventory Service during stock updates or the Notification Service during high WhatsApp traffic without affecting others.

2:) Resilience: If the Notification Service fails, orders and stock updates continue functioning.
3:) Team Autonomy: Different teams can work on Supplier, Order, and Notification Services independently, using JavaScript/Node.js.

 */
/**
 // inventory-service/index.js
const express = require('express');
const mysql = require('mysql2/promise');
const amqp = require('amqplib');

const app = express();
app.use(express.json());

// MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'supplymatch',
  password: 'password'
});

// RabbitMQ connection
async function publishToQueue(stockData) {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'stock_updates';
  await channel.assertQueue(queue);
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(stockData)));
  await channel.close();
  await connection.close();
}

// Update stock API
app.put('/inventory/:productId', async (req, res) => {
  const { productId } = req.params;
  const { stock_quantity } = req.body;

  try {
    const [result] = await pool.query(
      'UPDATE inventory SET stock_quantity = ?, last_updated = NOW() WHERE product_id = ?',
      [stock_quantity, productId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Publish stock update to queue
    await publishToQueue({ productId, stock_quantity });
    res.json({ message: 'Stock updated' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3001, () => console.log('Inventory Service running on port 3001'));
 */

/**
 // notification-service/index.js
const mysql = require('mysql2/promise');
const amqp = require('amqplib');
const twilio = require('twilio');

const client = twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'supplymatch',
  password: 'password'
});

async function consumeStockUpdates() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'stock_updates';
  await channel.assertQueue(queue);

  channel.consume(queue, async (msg) => {
    const { productId, stock_quantity } = JSON.parse(msg.content.toString());

    // Fetch retailer notification preferences
    const [retailers] = await pool.query(
      'SELECT whatsapp_number FROM user_notifications WHERE notification_enabled = TRUE'
    );

    // Send WhatsApp notifications
    for (const retailer of retailers) {
      await client.messages.create({
        from: 'whatsapp:+14155238886',
        to: `whatsapp:${retailer.whatsapp_number}`,
        body: `Product ${productId} stock updated to ${stock_quantity} units.`
      });
    }

    channel.ack(msg);
  });
}

consumeStockUpdates().catch(console.error);
 */

/**
 Microservices communicate in two main ways:

1. Synchronous (REST / gRPC)
Direct call
Waits for response
Simple but tightly coupled

2. Asynchronous (Kafka / RabbitMQ / SQS)
Fire-and-forget
Decoupled
Best for scalable systems

example :
✅ 1. Synchronous Communication Example (REST API)
Service A → Service B (HTTP call)
📌 Flow
Order Service calls Payment Service using REST and waits for the response.

🔷 Payment Service (Service B)
// payment-service/index.js
const express = require("express");
const app = express();

app.use(express.json());

app.post("/pay", (req, res) => {
  const { orderId, amount } = req.body;
  return res.json({ status: "success", message: "Payment completed", orderId });
});

app.listen(4000, () => console.log("Payment Service running on port 4000"));
-----------------------------------------------------------------------------------
🔷 Order Service (Service A)
// order-service/index.js
const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

app.post("/order", async (req, res) => {
  const { orderId, amount } = req.body;

  const paymentResponse = await axios.post(
    "http://localhost:4000/pay",
    { orderId, amount }
  );

  res.json({
    message: "Order placed successfully",
    payment: paymentResponse.data
  });
});

app.listen(3000, () => console.log("Order Service running on port 3000"));


📌 Here REST call waits for response ↴
Order → Payment → Response → Complete Order.


-----------------------------------------------------------------------------------


✅ 1. Fault Tolerance (Simple Explanation)
Fault tolerance means our system keeps working even if some microservices fail.

Example in Node.js microservices:
we have Auth-Service, User-Service, Order-Service
If Order-Service goes down, the whole app should NOT crash

API Gateway will route traffic safely
Other services continue working

A failed service restarts automatically (PM2, Docker, Kubernetes)

How to achieve fault tolerance:

✔ Retry failed requests
✔ Use message queues (Kafka/RabbitMQ)
✔ Circuit breaker (don’t call broken service)
✔ Replicas (multiple instances of each service)
✔ Auto restart (PM2 / Docker / Kubernetes)
--------------*/

/*---------------------------------------------------------------------------

✅ 2. API Gateway (Simple Explanation)
API Gateway is the single entry point for all our microservices.

Without API Gateway:
Frontend → Auth-Service
Frontend → User-Service
Frontend → Order-Service
(Too many direct calls)

With API Gateway:
Frontend → API Gateway → routes request to correct service.

Why it's useful?
Hides internal services
Provides security
Rate limiting
Caching
Centralized error handling
Load balancing
Authentication (JWT check only once)

Example in Node.js:
Using Express Gateway, Kong, NGINX, or AWS API Gateway
/api/login    → Auth-Service
/api/users    → User-Service
/api/orders   → Order-Service

----------------------------------------------------------------------------------------
*/

/*
✅ 3. Discovery Server / Service Discovery
Service Discovery helps microservices find each other automatically.

In microservices we do NOT hardcode:
http://localhost:3002
http://localhost:3003

Because services scale, restart, move, change ports.

Discovery Server keeps a list of:
Which services are running
Their IPs
Their ports
Health status

example of diiscovery 
🔥 Register a microservice with Consul (Node.js example)
User-Service registration
const express = require("express");
const consul = require("consul")();

const app = express();
const PORT = 3001;

// register with Consul
consul.agent.service.register({
    id: "user-service-1",
    name: "user-service",
    address: "localhost",
    port: PORT
}, () => {
    console.log("User-Service registered with Consul");
});

app.get("/users", (req, res) => {
    res.json({ users: ["Ram", "Shyam"] });
});

app.listen(PORT, () => console.log(`User-Service running on ${PORT}`));

-----------------------------------------------------------------------------

🔥 Order-Service discovers User-Service
const express = require("express");
const consul = require("consul")();
const axios = require("axios");

const app = express();
const PORT = 3002;

app.get("/orders", async (req, res) => {
    // Find user-service address from Consul
    consul.agent.service.list(async (err, services) => {
        const userService = services["user-service"];

        const url = `http://${userService.Address}:${userService.Port}/users`;
        const users = await axios.get(url);

        res.json({
            orders: [101, 102],
            users: users.data
        });
    });
});

app.listen(PORT, () => console.log(`Order-Service running on ${PORT}`));

*/

/**
 . What are the key features of microservices architecture?
 🚀 1. Small, Independent Services

Each service handles one small business function only (e.g., Auth Service, Payment Service, Order Service).
They work independently — you can update one service without touching others.

🌐 2. Independent Deployment

Every service can be deployed separately.
Example: You can deploy new version of User Service without redeploying the whole project.

📦 3. Decentralized Data Storage
Each microservice can have its own database.
Example:
User Service → MySQL
Product Service → MongoDB
This avoids a single DB becoming a bottleneck.

🔌 4. Communication via APIs
Services talk to each other through:
REST API
gRPC
Message Brokers (RabbitMQ, Kafka, Redis Pub/Sub)
No direct function calling like monolithic.

🔁 5. Scalability (Easily Scalable)
Only the service that needs more traffic can be scaled.
Example: Product Service is in high demand → scale only that service.

🧱 6. Loose Coupling
Services are not tightly connected.
So, if Payment Service crashes, entire system doesn’t go down — remaining services still work.

📊 7. Technology Flexibility
Each service can use different tech.
Example:
Node.js for Auth
Python for Recommendation Engine
Java for Payment
Node.js fits well because it's lightweight and high-performance for API services.

🛡 8. Fault Isolation
If one service fails, only that part is affected.
Better reliability + easy debugging.

🧪 9. Easy Testing
Since services are small, unit testing & integration testing become easier and faster.
---------------------------------------------------------------------------------------------

What is eventual consistency ? 
Eventual Consistency is a data consistency model used in distributed systems and microservices.

🔥 Simple Definition
Eventual Consistency means data will not be consistent immediately across all services, but it will become consistent after some time.

In short — not instantly correct, but eventually correct.

🧠 Why it happens? 

In microservices, each service has its own database.
When data changes in one service, other services need time to sync/update through events (Kafka, RabbitMQ, etc.).

So for a short time, the data may be different across services.

-------------------------------------------------------------------------------------------
sidecar in microservices?
in microservices architecture, a sidecar is a separate helper container/process that runs alongside a microservice to provide supporting features — without changing the microservice’s application code.

-------------------------------------------------------------------------------------------
What are idempotent operations in microservices?
An idempotent operation produces the same result no matter how many times it’s executed (e.g., DELETE request in REST)

-------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------
What is Circuit Breaker in Microservices?
A circuit breaker prevents a service from repeatedly calling another service that is failing.
If failures exceed a threshold → circuit opens → calls are stopped temporarily → system avoids overload and recovers gracefully.

-------------------------------------------------------------------------------------------
What is the role of Load Balancer in Microservices? 
A load balancer distributes incoming requests across multiple instances of a microservice to:
improve performance
avoid overload
increase availability and fault tolerance
-------------------------------------------------------------------------------------------

What is Event Sourcing in Microservices?
In event sourcing, the state of an application is stored as a sequence of events rather than persisting the latest state only.
To rebuild data, events are replayed in order.
-------------------------------------------------------------------------------------------

What is the role of a message broker in Microservices?
A message broker (Kafka, RabbitMQ, SQS) enables asynchronous communication between services by:
receiving messages from one service
delivering them to others
Benefits: decoupling, reliability, scalability.
-------------------------------------------------------------------------------------------

What is CQRS (Command Query Responsibility Segregation) in Microservices?
CQRS separates write operations (commands) and read operations (queries) into different models or databases.
This improves performance, scalability, and avoids read/write conflicts.
-------------------------------------------------------------------------------------------

What is the role of logging in Microservices?
Logging helps track requests across distributed services for:
debugging
auditing
performance monitoring
Centralized logging tools: ELK, Grafana Loki, Splunk.
-------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------

What is the role of orchestration in Microservices?
Orchestration automates deployment, scaling, and management of microservices.
Tools like Kubernetes control:
container start/stop
scaling
health checks
networking
-------------------------------------------------------------------------------------------

How do you handle data consistency in Microservices?
Since every service has its own DB, consistency is handled using patterns:

Saga Pattern (most common)
Event Sourcing
Outbox Pattern
Eventual Consistency
Instead of ACID transactions across services.
-------------------------------------------------------------------------------------------

What is the role of a Service Mesh in Microservices?
A service mesh manages service-to-service communication via sidecar proxies, providing:

security (mTLS)
retries, timeouts, circuit breakers
observability and tracing
traffic control
No code changes required.
-------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------
What is Domain-Driven Design (DDD) and how is it related to microservices? 
Domain-Driven Design (DDD) is an approach that focuses on designing software around business domains rather than technology.

Key concepts in DDD:
Domain → Business area (e.g., Orders, Payments, Inventory)
Bounded Context → Clear boundary where a domain model applies
Ubiquitous Language → Same terminology for developers + business team

🔥 Relation with Microservices

Microservices align perfectly with DDD:

So, each microservice is built around a single bounded context, making it independent and scalable.
-------------------------------------------------------------------------------------------

How do you handle failure in a microservice?
-------------------------------------------------------------------------------------------

What design patterns are commonly used in microservices architectures?
 -------------------------------------------------------------------------------------------

 How do you ensure data consistency across microservices?
 Since each service has its own database, ACID transactions across services are not possible.
So data consistency is maintained using:
Pattern                                        	Description
Saga Pattern                            	Break transaction into local transactions + compensation
Eventual Consistency	                    Data becomes consistent gradually through events
Outbox Pattern	                          Store DB change + event → publish reliably
Event Sourcing	                          Rebuild state from ordered sequence of events
  ---------------------------------- ---------------------------------------------------------

  How do you handle data sharing between microservices? 
  Microservices should avoid direct database sharing.

Recommended methods:

Method	                                                         Why?
Share data through APIs	                                    Loose coupling
Share events via message brokers	                          Async & scalable
Replicate read-only data	                                  Faster queries & independence
CQRS with separate read models                            	Optimized for queries
   -------------------------------------------------------------------------------------------


What is API versioning in Microservices?
API versioning allows updating APIs without breaking existing clients.

How do you handle versioning in REST APIs?
API versioning ensures new changes do not break existing clients.
URI versioning: /v1/resource.
Header versioning: Accept: application/vnd.api.v1+json.
Query parameters: ?version=1.




-------------------------------------------------------------------------------------------


*/