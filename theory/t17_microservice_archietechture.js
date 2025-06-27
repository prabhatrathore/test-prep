/**
 
Microservices architecture is a design approach where an application is built as a collection of small, independent services that communicate over a network, each performing a specific function.

Unlike monolithic architectures, where all components are tightly coupled in a single codebase, microservices are loosely coupled, independently deployable, and scalable


What is Microservices Architecture?
In microservices architecture:

1:) Each service is a self-contained unit responsible for a single business capability (e.g., inventory management, order processing, notifications).

2:) Services communicate via well-defined APIs

3:) Services are independently deployable, allowing teams to develop, deploy, and scale them separately.

Key Characteristics:

1:) Modularity: Each service is a small, focused module.

2:) Decentralized Data: Each service typically has its own database (e.g., MySQL for SupplyMatch’s inventory service).

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