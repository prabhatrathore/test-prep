/**
 1. What is GraphQL?

GraphQL = Query Language for APIs.
it's a query language that describe api request. it's not a technology or database. 
It lets clients ask exactly what they need, and nothing more.

📦 Developed by: Facebook (2012)
🌐 Released: 2015
🔗 Used by: GitHub, Shopify, Netflix, etc.

⚖️ REST API                            vs                         GraphQL (Main Comparison)

Feature	                       REST API                               	GraphQL
Data Fetching   	Multiple endpoints (e.g. /users, /posts)   	        Single endpoint (/graphql)

over-fetching             common                                             never
under-fetching          often                                                never

Versioning	      Usually requires /v1, /v2 etc.	                    No versioning needed, schema evolves
Request Type	  Uses HTTP methods (GET, POST, PUT, DELETE)	        Always POST (usually) with query body
Performance	         Multiple network calls	                              Single request with nested data
Error Handling	     Status codes	                                    Errors field in JSON response
Flexibility	          Fixed structure	                                         Dynamic and flexible


why graphql ? 
at time of fetching data from server side , client tell specificallly which data they want. 

what it solved ?
it solved overfetching
2. multiple apli call . 
3. subscribtion :   if server got new data thenn in rest api server can't possible to send but in graphql with some configuration we server can send data . 

------ ------------------------------------------------------------------------------------------
query : it's for just fetching the data 
mutation :create, update, delete 
subscription : 4 realtime we use subscription 
 
for all this method in graphql we have 'POST' method only 

------------------------------------------------------------------------------------------------
resolver : it is a function 

------------------------------------------------------------------------------------------------
npm i express graphql express-graphql 
 for intigrating 'express' with 'graphql'  the middleware we need  which come from 'express-graphql' module

------------------------------------------------------------------------------------------------


polymorphic relationship: 

waht is apolla server 
it is open source graphql implementation server 

benefit
easy intigration 
schema first development
powerful feature: caching, performance monitoring 

-------------------------------------------------------------------------------------------
typedefs means graphql type definitions 
what is 'gql'? 
gql, we use write schema 
we give gql string to apollo server so that apollo server can understand gql string(schema) 
with gql , we write graphql 's schema. 

It’s used to write and parse GraphQL schema definitions (typeDefs) or queries in JavaScript.  

Without gql

-------------------------------------------------------------------------------------------
graphQl resolvers
in graphql , resolver is function which is use to run query and mutation 
-------------------------------------------------------------------------------------------\
graphql with subscription 
when we need real-time updates (like chat,notification, stock price,  online users) we use subscription 
subscription work on websocket protocol (a long live connection) 

the client subscribe and as soon as the data changes , server immidiately pushes to client side

HOW IT WORKS-----------
the client send  a asubscription request (e.g userCreated)
the server establishes a websocket connection. 
    whenever the userCreated mutation run on the server ->server publishes an event. 

    all client subscribed to that subscription immidiately recieve the updated data. 
    this means   asubscription works like an 'event listener' that pushes real time data

    ------------------------------
    keyword to remember 
    pub/sub -> publish/subcribe -> the server's internal system that handle events. 
subscription type -> need to be defined in the graphql schema . 

websocket connection -> a long-live connection that remain between the client and server 
    -------------------------------------------------------------
-------------------------------------------------------------------------------------------












*/