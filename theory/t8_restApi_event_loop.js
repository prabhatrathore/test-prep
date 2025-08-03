/**


 * 1. Encapsulation
 Encapsulation is bundling data (properties) and the methods (functions) that work on that data into a single unit (an object), while hiding the details from the outside world.

 function Person(name, age) {
    // Private data (not truly private in this example, but encapsulated)
    let _name = name;
    let _age = age;
   
    // Public methods to access the data
    this.getName = function() {
        return _name;
    };
    this.setAge = function(newAge) {
        _age = newAge;
    };
}

const person = new Person("Alex", 25);
console.log(person.getName()); // Outputs: Alex
person.setAge(26);
************************************************************************************

Abstraction
 Abstraction is hiding the complex details of how something works and showing only the simple, necessary parts to the user.

 function Car() {
    // Complex details (hidden)
    let speed = 0;

    // Simple interface (public method)
    this.drive = function() {
        speed += 10;
        console.log(`Driving at ${speed} km/h`);
    };
}

const myCar = new Car();
myCar.drive(); // Outputs: Driving at 10 km/h


3. Inheritance
 Inheritance lets one object (or class) “inherit” properties and methods from another, so you can reuse code and extend functionality.

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
};
--------------------------------------------------------------------------------------
function Student(name, grade) {
    Person.call(this, name); // Inherit Person's properties
    this.grade = grade;
}

// Inherit Person's prototype methods
Student.prototype = Object.create(Person.prototype);

const student = new Student("Cody", "A");
student.sayHello(); // Outputs: Hello, I'm Cody
console.log(student.grade); // Outputs: A


. Polymorphism
 Polymorphism lets different objects use the same method name but behave differently based on their own rules.
class Animal {
  makeSound() {
    return "Some generic sound";
  }
}

class Dog extends Animal {
  makeSound() {
    return "Woof!";
  }
}

class Cat extends Animal {
  makeSound() {
    return "Meow!";
  }
}

const dog = new Dog();
const cat = new Cat();

console.log(dog.makeSound()); // Output: Woof!
console.log(cat.makeSound()); // Output: Meow!
---------------------------------------------------------------------------------------------
function Animal() {}
Animal.prototype.makeSound = function() {
    console.log("Some sound");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.makeSound = function() {
    console.log("Woof");
};

function Cat() {}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.makeSound = function() {
    console.log("Meow");
};

const dog = new Dog();
const cat = new Cat();
dog.makeSound(); // Outputs: Woof
cat.makeSound(); // Outputs: Meow
 */

/**
What is an API?  
API allows interactions between systems by following a set of standards and PROTOCOLS in order to share FEATURE, INFORMATION and DATA.
(API ACTS AS an interface between different applications).
api act as a bridge between frontend and backend.it allow two application to talk to each other.

What is a REST API?
=> A REST API is a way for two computer programs (like a web app and a server) to talk to each other over the internet using simple rules. It uses the HTTP protocol (the same thing our browser uses to load websites) to send and receive data.
=> it is a type of api that follow certain rules. 
 
Details:

Architecture Style: REST (Representational State Transfer) is a set of guidelines for building web applications that communicate efficiently.
HTTP Protocol: It uses HTTP methods like GET (to fetch data), POST (to send data), PUT (to update data), and DELETE (to remove data).
put method: used to update  existing data completely
patch method: used to partially update existing data. 
Data Transfer: It sends and receives data in formats like JSON or XML.


What is a RESTful API?
A RESTful API is a REST API that strictly follows REST’s rules to make communication between programs even easier and more organized. It’s like a well-mannered REST API that behaves predictably.

Details:

Follows REST Principles:
Uses HTTP methods properly: GET to fetch, POST to create, PUT to update, DELETE to delete.
Treats everything as a “resource” (like a user, a file, or a product), and each resource has a unique address (URL).
Returns data in a standard format (usually JSON or XML).
Doesn’t store information about the user between requests (stateless).
Why “RESTful”: The term “RESTful” means it fully follows REST’s guidelines, making it easier for different programs to work together.

Key Difference Between REST API and RESTful API
REST API: Any API that uses REST principles (like HTTP methods for communication).
RESTful API: A REST API that fully follows REST’s strict rules (e.g., stateless, resource-based URLs, proper HTTP methods).

Question: “What’s the difference between a REST API and a RESTful API?”
Answer: A REST API is a way for apps to communicate over the internet using HTTP methods like GET and POST.
 A RESTful API is a REST API that strictly follows REST rules, like using proper HTTP methods, organizing data as resources, and being stateless.

Question: “Why use a RESTful API?”
Answer: It makes communication between apps easier, more predictable, and scalable because it follows standard rules that all developers understand.


--------------------------------------------------------------------------   

What are the features of RESTful apis?  

It is an architecture style to develop web application. 
Use http protocol as a communication interface.
It tranfer data through http methods. 
 

– GET: collects information from a resource  
– PUT:updates an api resource  
– POST: creates a new resource in the server  
– DELETE: removes a resource of the server  

  Body-parser is the Node.js body parsing middleware. for handling json data from requestbody

 What are HTTP status codes and when should we use these different codes?  
HTTP status codes is a code which we send in response when client makes request to server.  

1xx: Informational – Communicates transfer protocol-level information.  
 2xx: Success – Indicates that the client’s request was accepted successfully.  

3xx: Redirection – Indicates that the client must take some additional action in order to complete their request.  

400 Bad Request   

The 400 Bad request status code indicates that the server was unable to process the request due to invalid information sent by the client. In other words, the client request needs modification


5xx: Server Error – The server takes responsibility for these error status codes.  

200 OK  
Indicates that the request has succeeded.  
201 Created  
Indicates that the request has succeeded and a new resource has been created as a result. 


401 Unauthorized   

Indicates that the request requires user authentication information. The client MAY repeat the request with a suitable Authorization header field  

402 Payment Required (Experimental)  
Reserved for future use. It is aimed for using in the digital payment systems.  

403 Forbidden  
Unauthorized request. The client does not have access rights to the content. 
Unlike 401, the client’s identity is known to the server.  

404 Not Found  
The server can not find the requested resource.   

------------------------------------------------------------------------------------------------------------------  
 
What are the HTTP methods and which operations should use these methods?  
HTTP Method  
CRUD operation  
Entire Collection (e.g. /users)  

Specific Item (e.g. /users/{id})  

pagination : the process of giving a page number to each page of a book, magazine, document, etc; the page numbers given


=================================================================
Postman is an application used for API testing. It is an HTTP client that tests HTTP requests.
What is Postman? Postman is an API client that makes it easy for developers to 
perform crud operation (create, share, test and document APIs.)

-------------------------------------------------------------------------------------------------------------  
Headers : it allow sending extra information in a request, such as authentication tokens,and content types. 


What are the key components of an HTTP request?  
 HTTP request contains the following elements:  
A request line.   
header fields.  
A message body, if needed.  

The key components of an HTTP request are:
1.HTTP Method: The HTTP method indicates the type of request being made, such as GET, POST, PUT, DELETE, HEAD, OPTIONS, etc.
2.URL (Uniform Resource Locator): The URL specifies the location of the resource being requested, including the hostname, path, and query parameters.
3.Headers: Headers provide additional information about the request, such as the content type, user agent, cookies, and authentication credentials.
4.Body: The request body contains any data being sent to the server, such as form data or JSON payload.

------------------------------------------------------------------------------------------------------  
What are the key components of an HTTP response?  
HTTP Response broadly has 3 main components:   
Status Line  
Headers  
Body (Optional)  


The key components of an HTTP response are:
1.Status Code: The status code indicates the result of the request, such as 200 OK, 404 Not Found, 500 Internal Server Error, etc.
2.Headers: Headers provide additional information about the response, such as the content type, caching directives, and authentication challenges.
3.Body: The response body contains the data returned by the server, such as HTML, JSON, or binary data.
Both requests and responses can also include other components, such as cookies, authentication tokens, and caching directives, depending on the specific use case and requirements of the application.

---------------------------------------------------------------------------------------------------------  
What are the multiple ways to send data in an HTTP request. This data could be used for creating a resource or fetching a resource from a server.  
Body ,query ,params  

Body params :
Body of the request which contains all the data that the server needs to successfullly process the request. 
-----------------------------------------------------------------------------------------------------------------------  

What is the difference between path and query parameters. When should you use them?  
The first difference between query and path parameters is their position in the URL. 

While the query parameters appear on the right side of the ‘?’ in the URL, 
path parameters come before the question mark sign.  

Secondly, the query parameters are used to sort/filter resources. On the other hand, path parameters are used to identify a specific resource or resources.  

If we want to identify a resource, you should use Path Variable. 
But if we want to sort or filter items, then we should use query parameter.  

-----------------------------------------------------------------------------------------------  
What is meant by an idempotent method, which HTTP method is idempotent  
Idempotent methods are those methods that do not change the responses to the resources externally. They can be called multiple times without any change in the responses


DELETE method, get method, put method

28. What is the maximum payload size that can be sent in POST methods?
Theoretically, there is no restriction on the size of the payload that can be sent. 
------------------------------------------------------------------------------------------------------------
 25. What is Payload in terms of RESTful web services?
Payload refers to the data passes in the request body.
 It is not the same as the request parameters. The payload can be sent only in POST methods as part of the request body
---------------------------------------------------------------------------------------------------------
 23. Can we implement transport layer security (TLS) in REST?
Yes, we can. TLS does the task of encrypting the communication between the REST client and the server
It is used for secure communication as it is the successor of the Secure Socket Layer (SSL). 
---------------------------------------------------------------------------------------------------------
What makes REST services to be easily scalable?
REST services follow the concept of statelessness which essentially means no storing of any data across the requests on the server.

What are the differences between REST and AJAX?
REST	
REST- Representational State Transfer 
REST has a URI for accessing resources by means of a request-response pattern.	
REST is an architectural pattern for developing client-server communication systems.	
REST is based on the Request-Response Model.

REST requires the interaction between client and server.

AJAX
AJAX - Asynchronous javascript and XML
AJAX is used for dynamic updation of UI without the need to reload the page.
AJAX supports asynchronous requests 

SOAP - Simple Object Access Protocol ||	
SOAP is a protocol used to implement web services.||	
SOAP cannot use REST as it is a protocol.||	

SOAP supports only XML transmission between the client and the server.	
SOAP reads are not cacheable.	
REST read requests can be cached.	
SOAP is slower.
    REST is faster.
Since SOAP is a protocol, it defines its own security measures.	
SOAP is not commonly preferred, but they are used in cases which require stateful data transfer and more reliability.


SOAP (Simple Object Access Protocol) is a messaging protocol used for exchanging structured data between web services. It uses XML (eXtensible Markup Language) to encode data and define the format of the message.

 Can you tell the disadvantages of RESTful web services?
As the services follow the idea of statelessness, it is not possible to maintain sessions. 
REST does not impose security restrictions inherently.

---------------------------------------------------------------------------------------------------

Uniform Resource Identifier is the full form of URI 
It is used in url to specify which resource the client would like to access in a request.
URI is of the format: <protocol>://<service-name>/<ResourceType>/<ResourceID>
There are 2 types of URI:
URN: Uniform Resource Name identifies the resource by means of a name that is both unique and persistent:
urn = slash ke baad wala     http://abc.com/samplePage.html
 person identity
They are used as templates that are used by other parsers to identify the resource.
urn:isbn:1234567890 is used for identification of book based on the ISBN number in a library application.
-----------------------------------------------------------------------------------------------------------

URL: Uniform Resource Locator. It is the address to not just identify a resource but also to specify how to access it. 
In an api, the url can be named as base url, which means that is the base address that will be used in every request. 
Examples include:
http://abc.com
ftp://sampleServer.com/sampleFile.zip
URLs start with a protocol (like ftp, http etc) and they have the information of the network hostname (sampleServer.com) and the path to the document(/samplePage.html). It can also have query parameters.
----------------------------------------------------------------------------------------------------------

What is a REST Resource?
Every content in the REST architecture is considered a resource. 

What do you understand by RESTful Web Services?
RESTful web services are services that follow REST architecture. REST stands for Representational State Transfer and uses HTTP protocol (web protocol) for implementation.
-------------------------------------------------------------------------------
4. What are the features of RESTful Web Services?
Every RESTful web service has the following features:
The service is based on the Client-Server model.
The service uses HTTP Protocol for fetching data/resources, query execution, or any other functions.
The medium of communication between the client and server is called “Messaging”.
Resources are accessible to the service by means/through of URIs.

*------------------------------------------------------------------------------

10. Define Messaging in terms of RESTful web services.
The technique of sending a message from the REST client to the REST server in the form of an HTTP request and the server responding back with the response as HTTP Response is called Messaging.
--------------------------------------------------------------------------------------------------------

12. While creating URI for web services, what are the best practices that needs to be followed?
Below is the list of best practices that need to be considered with designing URI for web services:

While using the long name for resources, use underscore or hyphen. Avoid using spaces between words. For example, to define authorized users resource, the name can be “authorized_users” or “authorized-users”.

The URI is case-insensitive, but as part of best practice, it is recommended to use lower case only.
 When the URI is updated, the older URI must be redirected to the new one using the HTTP status code 300.
Use appropriate HTTP methods like GET, PUT, DELETE, PATCH, etc. It is not needed or recommended to use these method names in the URI. Example: To get user details of a particular ID, use /users/{id} instead of /getUser

Use the technique of forward slashing to indicate the hierarchy between the resources and the collections. Example: To get the address of the user of a particular id, we can use: /users/{id}/address


Q: What is the difference between idempotent and safe HTTP methods?
  Safe methods are those that do not change any resources internally. These methods can be cached and can be retrieved without any effects on the resource.e.g. get 

Idempotent methods are those methods that do not change the responses to the resources externally. They can be called multiple times without any change in the responses. 

How can you test RESTful Web Services?
RESTful web services can be tested using various tools like Postman, etc.

 Is it possible to send payload in the GET and DELETE methods?
No, the payload is not the same as the request parameters. Hence, it is not possible to send payload data in these methods.


REST	------------------------------------------------
-- REST follows stateless architecture, meaning it won’t store any session-based data.
-- The mode of communication is uni-directional. At a time, only the server or the client will communicate.
-- REST is based on the Request-Response Model.
-- Every request will have sections like header, title, body, URL, etc.
--For every HTTP request, a new TCP (Transmission Control Protocol) connection is set up.	There will be only one TCP connection and then the client and server can start communicating.

-- REST web services support both vertical and horizontal scaling.
--REST depends on HTTP methods to get the response.
Communication is slower here.
Memory/Buffers are not needed to store data here.


Web Socket************------------------------

-- Web Socket APIs follow the stateful protocol as it necessitates session-based data storage.
	The communication is bi-directional, communication can be done by both client or server at a time.
	Web Socket follows the full-duplex model.
	Web sockets do not have any overhead and hence suited for real-time communication.

	Web socket-based services only support vertical scaling.
	Web Sockets depend on the IP address and port number of the system to get a response.
	Message transmission happens very faster than REST API.
	Memory is required to store data.

full-duplex model  means support for data transmission between two points in both directions at exactly the same time.


Explain the architectural style for creating web API?
HTTP for client server communication
XML/JSON as formatting language
Simple URI as the address for the services
Stateless communication

22`1:)what is web socket in js? 
WebSockets is a next-generation bidirectional communication technology for web applications
the WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server.

what is redis and whai is it used for?
Redis is an open-source, NoSQL, in-memory data structure store that is used as a database, cache, and message broker 
 -------------------------------------------------------------
 whai is generator in js?
 A generator is a function that can stop midway and then continue from where it stopped. In short, a generator appears to be a function but it behaves like an iterator.
  */