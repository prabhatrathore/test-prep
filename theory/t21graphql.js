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




















*/