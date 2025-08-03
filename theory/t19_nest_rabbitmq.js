/**
 nest is a progressive node.js framwork for building efficient and scalable server-side applications.

build with typescript and heavily inspired by angular. 
uses moduler architecture for better organization . 

why we need nest.js
to simplify backend development using modern architecture 
provide a structured way to build scalable and testable application.
solve the limitation of traditional  express apps. 
 It uses Express.js under the hood by default and supports Fastify as well.

express is fast, unopiniated (no proper file structure provided), minimalist web framwork for node.js 
 
nest is opiniated framwork of node.js 

---------benefits of nest.js-------------- 
opiniated framework 
fully support typescript
build in dependency injection system.
scalable and maintainable codebase. 
active & growing community support.

-------------for download ------------------
npm i -g @nestjs/cli 

-g means it will download globally on our system

cli means -> command line interface , in this we use command for controlling the nest project  

--------------folder structure -----------------
dist -> in distribution folder , there is compiled version of project , this will use in projection site

in nestjs, controller file working is to take request and send response   
controller_file trigger  service_file for getting response 
controllers handle incoming http requests
they define routes (e.g. GET, POST, PUT, DELETE)
bridge between client and business logic(service)
organize api endpoints clearly and modularly.
help separate concerns : routing vs business logic. 
make code scalable and maintainable 

------------------------------------------------------------
create a project , command is 
nest new project_name 
nest new nest_app

------------------------------------------------------------

main.ts file work as a entry point of project 
--------------------------------------------------------------------------
DECORATORS ******************************
special functions that add metadata (providing special feature) to classes or methods. 
start with @ symbol (e.g. @contrller(), @get())

--------------------------------------------------------------------------
what are services? 
service file work with business logic & calculation 
-> a typescript class  with logic like calculation, data access, etc. 
-> used to write business logic in a clean and reuseable way.
-> they are marked with @injectable () so nestjs can use them.

why use services?
-> to separate logic from controllers.
-> make code modular, clean, and testable.
-> services can be reused in multiple places.
-> helps keep our app organized and scalable.

to generate the services 
command : nest generate service product
short command : nest g s product
---------------------------------------
to generate the modules 
command : nest generate module product
short command : nest g m product
---------------------------------------
to generate the controller 
command : nest generate controller product
short command : nest g c product
------------------------------------------------------
what is data transfer object in nest.js?
it means transfer the data from client to server  
------------------------------------------------------
what is interface in typescript?
interface define the structure (type) of an object. 
------------------------------------------------------

------------------------------------------------------



--------------------------------------------------------------------------
🔶 2. Why use NestJS over Express.js directly?
Answer:

Provides out-of-the-box structure (modules, controllers, services).
Built-in Dependency Injection.
Uses TypeScript fully.
Supports decorators and OOP design patterns similar to Angular.
Easier to scale in large enterprise apps.

--------------------------------------------------------------------------
🔶 3. Explain the core components of NestJS.
Answer:

Module: Logical unit grouping controllers and providers.
Controller: Handles incoming requests and returns responses.
Provider (Service): Contains business logic, injectable via DI.
Decorator: Functions adding metadata to classes (e.g., @Controller(), @Injectable()).
--------------------------------------------------------------------------

🔶 4. What is a module in NestJS?
Answer:
A module is a class annotated with @Module() decorator. It groups related controllers and providers. Every NestJS app has at least one root module (AppModule).

--------------------------------------------------------------------------
🔶 6. What is Dependency Injection in NestJS?
Answer:
NestJS uses DI to manage class dependencies efficiently. For example, services are injected into controllers using constructor injection to decouple logic.

--------------------------------------------------------------------------
🔶 8. What is middleware in NestJS and how is it used?
Answer: Middleware is a function executed before route handlers. Used for logging, authentication, etc.
--------------------------------------------------------------------------

🔶 9. What is a Pipe in NestJS?
Answer: Pipes are used for data validation and transformation before reaching route handlers. 

--------------------------------------------------------------------------
🔶 10. What is an Interceptor in NestJS?
Answer: Interceptors are used for transforming responses, adding extra logic before/after method execution, logging, caching, etc.
--------------------------------------------------------------------------

🔶 11. What is a Guard in NestJS?
Answer: Guards determine whether a request is handled by the route handler. Mainly used for authentication and authorization.

--------------------------------------------------------------------------
3. What is the use of decorators in NestJS?
Answer:
Decorators provide metadata to classes and their members. They tell Nest how to process a class (e.g., @Controller, @Get, @Injectable, @Module).

🔶 14. How does NestJS handle asynchronous programming?
Answer:
Using Promises, async/await, and RxJS Observables (for streams, interceptors, etc.). NestJS supports both styles seamlessly

--------------------------------------------------------------------------
🔶 14. How does NestJS handle asynchronous programming?
Answer:
Using Promises, async/await, and RxJS Observables (for streams, interceptors, etc.). NestJS supports both styles seamlessly.
--------------------------------------------------------------------------
TypeScript is developed and maintained by Microsoft, it compiles down to plain JavaScript, making it compatible with all JavaScript environments, including web browsers and Node.js.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
*/ 
rabbitmq
/**
What is RabbitMQ?
RabbitMQ is a message broker that allows applications to communicate with each other asynchronously by sending messages via queues. RabbitMQ implements the AMQP protocol. 
 
2. How does RabbitMQ work internally?
Answer:
Producer: Sends messages to an exchange.
Exchange: Routes messages to queues based on rules.
Queue: Stores messages until consumed.
Consumer: Listens to queue and processes messages.
Broker: The RabbitMQ server acting as an intermediary.


🔶 3. Why do we use RabbitMQ with Node.js applications?
Answer:
To handle asynchronous tasks, decouple services, ensure reliable delivery, and process background jobs without blocking the event loop.

🔶 4. What is the difference between RabbitMQ and Kafka?
Answer:

RabbitMQ	                        Kafka
Message broker	                  Distributed streaming platform
Push-based delivery	              Pull-based delivery
Good for complex routing	      Good for high throughput
Implements AMQP	                  Uses its own protocol

🔶 5. Explain AMQP protocol in short.
Answer:
AMQP (Advanced Message Queuing Protocol) is an open standard protocol for message brokers, defining how messages are formatted, stored, routed, and acknowledged.

🔶 12. What is the use of dead-letter exchange?
Answer:
Messages that are rejected or expired can be routed to a dead-letter exchange for further inspection or retries.
🔶 13. Explain publisher confirms in RabbitMQ.
Answer:
It ensures that the broker has received the message before publisher proceeds, providing reliability in message publishing.

*/