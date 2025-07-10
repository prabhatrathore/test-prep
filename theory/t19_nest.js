/**
 nest is node.js 's framework . 
 a progressive node.js framwork for building efficient and scalable server-side applications.

build with typescript and heavily inspired by angular. 
uses moduler architecture for better  organization . 


why we need nest.js
to simplify backend development using modern archetecture 
provide a structured way to build scalable  and testable  application.
solve the limitation of traditional  express apps. 

express is fast, unopiniated (no proper file structure provided), minimalist web framwork for node.js 
 
nest is opiniated frmawork of node.js 


---------benefits of nest.js-------------- 
opiniated framework 

fully support typescript
build in dependency injection system.
scalable and maintainable codebase. 
active & growing community support.

-------------for download ------------------
npm i -g @nest/cli 

-g means it will download globally on our system

cli means ->command line interface ,in this we use command for controlling the nest project  

folder structure -----------------
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


------------------------------------------------------------

main.ts file work as a entry point of project 
--------------------------------------------------------------------------
DECORATORS ******************************
special functions  that add metadata (providing special feature) to classes  or methods 
start with @ symbol (e.g. @contrller(), @get())

--------------------------------------------------------------------------
what are services? 
service file work with business logic & calculation 
-> a typescript class  with logic like calculation, data access, etc. 
-> used to write business logic in a clean and reuseable way.
-> they are marked with @injectable () so nestjs ccan use them.

why use services?
-> to separate logic from controllers.
-> make code modular, clean, and testable.
-> services can be reused in multiple places.
-> helps keep our app organized and scalable.

to generate the services 
command : nest generate service product
short command : nest g s product



--------------------------------------------------------------------------


--------------------------------------------------------------------------
*/ 