/**
nest is opiniated framwork of node.js.   
Nest is a progressive node.js framework for building efficient and scalable server-side applications.
Nest uses moduler architecture for better organization. 

build with typescript and heavily inspired by angular. 

why we need nest.js. ***************************************************
to simplify backend development using modern architecture. 
provide a structured way to build scalable and testable application.
solve the limitation of traditional express apps. 
It uses Express.js under the hood by default and supports Fastify as well.

express is fast, unopiniated (no proper file structure provided), minimalist web framwork for node.js 

Why use Nest.js over Express.js?

Feature                 	Express.js              	Nest.js
Architecture	            Unstructured	             Modular (MVC + DI)
Language	                JavaScript	              TypeScript
Dependency Injection	     Manual	                 Built-in
Testing	                  Manual setup          	 Built-in tools
Scalability                 Moderate                	High
Code Maintainability	       Low                  	High


---------benefits of nest.js-------------- 
opiniated framework 
fully support typescript
build in dependency injection system.
scalable and maintainable codebase. 
active & growing community support.
------------------------------------------------------------------------------------

3. Core Concepts of Nest.js

Modules — a Module is a way to organize our code — module groups related files (like controllers, services)
Controllers — Handle incoming requests and responses
Providers -> 
Services —> Contain business logic
Dependency Injection (DI) —> Automatically provide class instances
Pipes —> Validate and transform incoming data
Guards —> Handle authorization (before route access)
Interceptors —> Modify request/response globally
Filters — Handle exceptions globally
Middleware — Run logic before route handlers
Decorators — Add metadata (e.g., @Controller(), @Get())

------------------------------------------------------------------------------------
What is a Module in Nest.js?
In Nest.js, a Module is a way to organize our code — module groups related parts (like controllers, services, and providers) together.

Every Nest app has a root module (usually AppModule).
Example:
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

***********************************************************
Types of Modules
Root Module → AppModule
Feature Module → e.g., UsersModule, AuthModule
Dynamic Module → Returns module with config (e.g., ConfigModule.forRoot())
example: 
// config.module.ts
@Module({})
export class ConfigModule {
  static forRoot(options: ConfigOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'CONFIG',
          useValue: options,
        },
      ],
      exports: ['CONFIG'],
    };
  }
}
  Use:
  @Module({
  imports: [ConfigModule.forRoot({ apiKey: '123' })],
})
export class AppModule {}
------------------------------------------------------------------------------------*/
What_is_a_Controller
/*
What is a Controller?
Controllers handle incoming HTTP requests and return responses to the client.

controller_file trigger 'service_file' for getting response 
in controllers, routes are define (e.g. GET, POST, PUT, DELETE)
bridge between client and business logic(service)
organize api endpoints clearly and modularly.
make code scalable and maintainable 

Example:
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'Cat created';
  }
}
  -----------------------------------------------------------------
  Route Parameters & Query Params
A:
ts@Get(':id')
findOne(@Param('id') id: string) { ... }

@Get()
find(@Query('name') name: string) { ... }

------------------------------------------------------------------------------------

What is a Provider?
A Provider is anything that can be injected using Nest.js dependency injection system — usually 'this' includes services,
(( repositories, factories, or even plain values.))

( Any class that can be injected using Dependency Injection, Usually services.)

exxample 
@Injectable()
export class CatsService {
  private cats = [];
  create(cat: Cat) { this.cats.push(cat); }
  findAll() { return this.cats; }
}

  Inject in controller:
constructor(private catsService: CatsService) {}
----------------------------------------------------------------------------

Q12. How to register a Provider?
A:
In module:
@Module({
  providers: [CatsService],
})

------------------------------------------------------------------------------
What is a Service ?
Services contain business logic and can be injected into controllers using Dependency Injection.

👉 In short:
Service → The actual class that does the work.
Provider → The way Nest.js manages and injects that class (or other dependencies) into our app.

Example:
@Injectable()
export class UserService {
  findAll() {
    return ['Prabhat', 'John', 'Riya'];
  }
}
  ------------------------------------------------------------------------------------

What is Dependency Injection (DI)?
Dependency Injection is a design pattern where Nest automatically injects class instances (like services) wherever needed, instead of manually creating them.

Example:
constructor(private userService: UserService) {}
------------------------------------------------------------------------------------

What are Pipes?
Pipes are used for data validation and transformation before the controller handles it.

Built-in pipes:::::
ValidationPipe
ParseIntPipe

***************************************

Example:
@UsePipes(new ValidationPipe())
@Post()
createUser(@Body() createUserDto: CreateUserDto) {}
------------------------------------------------------------------------------------

What are Guards?
in nestjs, Guards decide whether a request can access a route or not, mainly used for authentication and authorization.

Example:
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    return req.headers.authorization === 'valid-token';
  }
}
Use:
@UseGuards(RolesGuard)
@Get('admin')
getAdminData() { ... }
----------------------------------------------------------------------------

10. What are Interceptors?
An Interceptor is like a middleware ((with extra powers)) — it can modify requests, responses, ((or handle extra logic (like logging, transforming data, or adding timing) ))

Example:

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    console.log('Before...');
    return next.handle().pipe(tap(() => console.log('After...')));
  }
}
  Apply:
@UseInterceptors(LoggingInterceptor)
@Get()
findAll() { ... }

-------------------------------------------------------------------------------

🟩 11. What are Exception Filters?
Used to handle exceptions (errors) globally or locally.

Example:

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.status(exception.getStatus()).json({ message: exception.message });
  }
}

🟩 12. What is Middleware?
Middleware runs before controllers to modify requests or perform checks (like logging or JWT validation).

Example:

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req, res, next) {
    console.log('Request:', req.url);
    next();
  }
}

🟩 13. What are Decorators?
Decorators are functions that add metadata to classes or methods.

Examples:
@Controller()
@Get()
@Post()
@Injectable()
@Module()

-----------------------------------------------------------------------

🟩 14. How to handle Database in Nest.js?
we can integrate databases using TypeORM, Mongoose, or Prisma.

npm i @nestjs/typeorm typeorm pg

Example (TypeORM):

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
})

🟩 15. What is DTO in Nest.js?
Data Transfer Object Used to define the structure (shape) of the data we expect in a request.

Example:
export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
--------------------------------------------------------------------------

🟩 16. How Authentication works in Nest.js?

Answer:
Usually done using Passport.js or JWT (JSON Web Token) strategies.
Steps:

User logs in → generates JWT token
Token sent in headers (Authorization)
Guard checks token before accessing routes

------------------------------------------------------------------------------

🟩 17. What are Async Providers?
In Nest.js, Async Providers are used when we need to create (or configure) a provider asynchronously — for example, when loading a value from a database, reading environment variables, or waiting for a promise before providing something.

Example:
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGO_URI,
      }),
    }),
  ],
})

---------------------------------------------------------------------

🟩 18. What is Global Module?
A Global module that can be accessed anywhere without importing it again.

Example:

@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
------------------------------------------------------------------------

🟩 19. What are Microservices in Nest.js?

Nest.js supports building microservice-based architectures using message brokers like Redis, RabbitMQ, Kafka, etc.

const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.REDIS,
  options: { host: 'localhost', port: 6379 },
});
------------------------------------------------------------------------------

🟩 20. What is Caching in Nest.js?
Nest.js provides a built-in CacheModule for caching responses using memory or Redis.

Example:
@Module({
  imports: [CacheModule.register()],
})
------------------------------------------------------------------------------------

🟩 21. How Testing Works in Nest.js?
Nest supports unit testing and e2e testing using Jest.
You can test controllers, services, and modules easily using Nest’s TestingModule.

------------------------------------------------------------------------------------
🟩 22. How to Deploy a Nest.js App?
You can deploy it just like any Node.js app:

Build using npm run build
Start using node dist/main.js
Deploy on platforms like AWS, Render, or Docker.

------------------------------------------------------------------------------------
🟩 23. What is the difference between ExpressAdapter and FastifyAdapter?
ExpressAdapter → Default (more popular)
FastifyAdapter → Faster performance (used for high-performance APIs)

🟩 24. How to Handle Environment Variables?
Using @nestjs/config module.

Example:

ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
    });
    ------------------------------------------------------------------------------------
    
    🟩 25. What is Lifecycle Hook in Nest.js?
    Answer:
    Special methods that run at specific times:
    
    onModuleInit()
    onModuleDestroy()
    beforeApplicationShutdown()

    ------------------------------------------------------------------------------------
    
    🟩 26. What is a Custom Decorator?
    Answer:
    we can create your own decorators using createParamDecorator.
    
    Example:
    export const User = createParamDecorator((data, ctx) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
        });
        
        ------------------------------------------------------------------------------------
        ------------------------------------------------------------------------------------
        ------------------------------------------------------------------------------------
        ------------------------------------------------------------------------------------
------------------------------------------------------------------------------------




-------------for download ------------------
npm i -g @nestjs/cli 

-g means it will download globally on our system

cli means -> command line interface , in this we use command for controlling the nest project  

--------------folder structure -----------------
dist -> in distribution folder, there is compiled version of project, this will use in projection site. 


------------------------------------------------------------
create a project, command is 
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
service file work with business logic.
-> a typescript class with logic like calculation, data access, etc. 
-> used to write business logic in a clean and reuseable way.
-> they are marked with @injectable () so nestjs can use them.

why use services?
-> to separate logic from controllers.
-> make code modular, clean, and testable.
-> services can be reused in multiple places.
-> helps keep our app organized and scalable. 

to generate the services 
command : 'nest generate service product'   or 'nest g service product'
short command : nest g s product
---------------------------------------
to generate the modules 
command : 'nest generate module product'  or 'nest g module product'
short command : nest g m product
---------------------------------------
to generate the controller 
command : nest generate controller product
short command : nest g c product
------------------------------------------------------
what is data transfer object in nest.js?
we define the structure in dto for checking data which comes from client side 

it’s mainly used to:
Define and validate the structure of incoming data (like request bodies)
Ensure type safety
Prevent unwanted or malicious data from being processed
------------------------------------------------------

*************what is interface in typescript?----------******************************************************
interface define the structure (type) of an object. 
------------------------------------------------------

------------------------------------------------------
pipes in nest.js 
pipes are used to transform or validate incoming data . 
nestjs allow us to create our own custom pipes 
pipes can be used for custom validation, data transformation, or business logic filtering
 
build-in pipe or custom pipe run before the data hit the route handler (controller method)
we can apply pipes at method level, controller level, or globally. 

command : nest g pipe nameofpipe  example nest g pipe common/pipe/uppercase  

custom pipe will use 'PipeTransform' from @nest/common module for creating custom pipe. 
--------------------------------------------------------------------------
protecting routes ::::: means 
it means restricting access to specific API routes. 
only authorized users ( like logged-in users  or admin ) can access them . 

what are guards? 
guards are classes  that implement logic to decide  whether a request is allowed or not     
mostly used for authentication  and authorization 
3. guards implement the CanActivate interface  and run   before the route  handler

why use guards : 
to secure private routes 
to avoid duplicating checks in every controller 
to build role-based access control system . 

command: nest g guard  guards/auth 

--------------------------------------------------------------------------
--------------------------------------------------------------------------
--------------------------------------------------------------------------
🔶 2. Why use NestJS over Express.js directly?

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
A module is a class annotated with @Module() decorator. It groups related controllers and providers. Every NestJS app has at least one root module (AppModule).

--------------------------------------------------------------------------
🔶 6. What is Dependency Injection in NestJS?
NestJS uses DI to manage class dependencies efficiently. For example, services are injected into controllers using constructor injection to decouple logic.

--------------------------------------------------------------------------
🔶 8. What is middleware in NestJS and how is it used?
 Middleware is a function executed before route handlers. Used for logging, authentication, etc.
--------------------------------------------------------------------------

🔶 9. What is a Pipe in NestJS?
 Pipes are used for data validation and transformation before reaching route handlers. 

--------------------------------------------------------------------------
🔶 10. What is an Interceptor in NestJS?
 Interceptors are used for transforming responses, adding extra logic before/after method execution, logging, caching, etc.
--------------------------------------------------------------------------

🔶 11. What is a Guard in NestJS?
 Guards determine whether a request is handled by the route handler. Mainly used for authentication and authorization.

--------------------------------------------------------------------------
3. What is the use of decorators in NestJS?
Decorators provide metadata to classes and their members. They tell Nest how to process a class (e.g., @Controller, @Get, @Injectable, @Module).

--------------------------------------------------------------------------
🔶 14. How does NestJS handle asynchronous programming?
Using Promises, async/await, and RxJS Observables (for streams, interceptors, etc.). NestJS supports both styles seamlessly.
--------------------------------------------------------------------------
TypeScript is developed and maintained by Microsoft, it compiles down to plain JavaScript, making it compatible with all JavaScript environments, including web browsers and Node.js.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
*/



what_is_rabbitmq
/**
RabbitMQ is a message broker that allows applications to communicate with each other asynchronously by sending messages via queues. RabbitMQ implements the AMQP protocol. 

🔶 5. Explain AMQP protocol in short.
AMQP (Advanced Message Queuing Protocol) is an open standard protocol for message brokers, defining how messages are formatted, stored, routed, and acknowledged.
 
2. How does RabbitMQ work internally?
Answer:
Producer: Sends messages to an exchange.
Exchange: Routes messages to queues based on rules.
Queue: Stores messages until consumed.
Consumer: Listens to queue and processes messages.
Broker: The RabbitMQ server acting as an intermediary.

🔶 3. Why do we use RabbitMQ with Node.js applications?
To handle asynchronous tasks, decouple services, ensure reliable delivery, and process background jobs without blocking the event loop.

🔶 4. What is the difference between RabbitMQ and Kafka?
 RabbitMQ	                        Kafka
Message broker	                  Distributed streaming platform
Push-based delivery	              Pull-based delivery
Good for complex routing	      Good for high throughput
Implements AMQP	                  Uses its own protocol


🔶 12. What is the use of dead-letter exchange?
Messages that are rejected or expired can be routed to a dead-letter exchange for further inspection or retries.

🔶 13. Explain publisher confirms in RabbitMQ.
Answer:
It ensures that the broker has received the message before publisher proceeds, providing reliability in message publishing.

*/