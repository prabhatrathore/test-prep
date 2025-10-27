/**
 1. What is GraphQL?

GraphQL is Query Language for APIs that describe api's request. it's not a technology or database. 
It lets clients ask exactly what they need, and nothing more.

📦 Developed by: Facebook (2012)
🌐 Released: 2015
🔗 Used by: GitHub, Shopify, Netflix, etc.
--------------------------------------------------------------------------------
⚖️ REST API vs GraphQL (Main Comparison)

Feature	                       REST API                               	GraphQL
Data Fetching   	Multiple endpoints (e.g. /users, /posts)   	        Single endpoint (/graphql)

over-fetching             common                                             never
under-fetching            often                                                never

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
3. subscribtion :   if server got new data then in rest api server can't possible to send but in graphql with some configuration we server can send data . 

------ ------------------------------------------------------------------------------------------
query : it's for just fetching the data 
mutation :create, update, delete 
subscription : 4 realtime send data, we use subscription 
 
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
with gql, we write graphql's schema. 
we give gql string to apollo server so that apollo server can understand gql string(schema) 

It’s used to write and parse GraphQL schema definitions (typeDefs) or queries in JavaScript.  

Without gql it is string 

-------------------------------------------------------------------------------------------
graphQl resolvers
in graphql , resolver is function which is use to run query and mutation 
--------------------------------------------------------------------------------------------

graphql with subscription 
when we need real-time updates (like chat,notification, stock price,  online users) we use subscription 
subscription work on websocket protocol (a long live connection) 

the client subscribe and as soon as the data changes , server immidiately pushes to client side

HOW IT WORKS-----------
the client send  a asubscription request (e.g userCreated)
the server establishes a websocket connection. 
    whenever the userCreated mutation run on the server ->server publishes an event. 

    all client subscribed to that subscription immidiately receive the updated data. 
    this means asubscription works like an 'event listener' that pushes real time data. 

    -----------------------------------------------------------
    keyword to remember 
    pub/sub -> publish/subcribe -> the server's internal system that handle events. 
subscription type -> need to be defined in the graphql schema . 

websocket connection -> a long-live connection that remain between the client and server 
    -------------------------------------------------------------
-------------------------------------------------------------------------------------------
const { ApolloServer } = require("apollo-server-express")

means 👇
👉 You are importing the ApolloServer class from the apollo-server-express package.

🧠 In simple words:
apollo-server-express = library that helps connect Apollo GraphQL with Express.js.
ApolloServer = main class used to create a GraphQL server.
-------------------------------------------------------------------------------------------

🧠 GraphQL Schema — Simple Definition:

A GraphQL schema is like a blueprint (or map) 🗺️ that tells our API:
👉 what data exists,
👉 what clients can ask for,
👉 and what type of data (each field) will return.
-------------------------------------------------------------------------------------------
What are scalar types in GraphQL?
Scalar types are basic atomic data types in GraphQL that represent single values. They include types like String for text, Int for integers, Boolean for true or false values, and ID for unique identifiers. Scalars are used to represent the leaves of the GraphQL query tree, serving as the foundation for more complex data structures.
-------------------------------------------------------------------------------------------
What is an exclamation point in GraphQL?
In GraphQL, an exclamation point (!)  means that the field must contain a value and cannot be empty.
-------------------------------------------------------------------------------------------
What are resolvers in GraphQL?
 The resolver returns the value for a given field in an operation
-------------------------------------------------------------------------------------------

When is GraphQL useful?
GraphQL is useful in situations where applications require efficient and precise data retrieval, real-time updates, and complex data relationships. It also functions well in situations where there are multiple clients, different data requirements, and the need to compile information from various sources.
-------------------------------------------------------------------------------------------

What are the key concepts of the GraphQL query language?
The key concepts of the GraphQL query language revolve around its schema-driven approach. GraphQL defines types and relationships in a schema, allowing clients to request precisely the data they need using queries. 
-------------------------------------------------------------------------------------------
What are variables in GraphQL, and how do you use them?
Variables in GraphQL are dynamic values that can be passed as arguments in queries or mutations, allowing for more flexible and reusable code.
-------------------------------------------------------------------------------------------

What is introspection in GraphQL, and how is it useful?
GraphQL introspection enables clients to ask the GraphQL server questions about the schema, including available types, fields, and directives. It’s useful for building client-side tools that need to understand the schema,
-------------------------------------------------------------------------------------------

How do you do authentication and authorization in GraphQL?
both are handled in the GraphQL context (where we verify the token and attach user info), and then checked inside resolvers.

Authorization is implemented in GraphQL resolvers by checking permissions before returning data or performing mutations
-------------------------------------------------------------------------------------------

How do you do error handling in GraphQL?
Error handling in GraphQL means catching and returning meaningful error messages when something goes wrong — like validation issues, auth errors, or server bugs.

⚙️ 1. Using try...catch inside resolvers
example: 
const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      try {
        const user = await User.findById(id)
        if (!user) throw new Error("User not found")
        return user
      } catch (error) {
        throw new Error(error.message)
      }
    },
  },
}
  -----------------------------------------------------------------------------

⚙️ 2. Global Error Handling using formatError

In Apollo Server, you can customize how errors are shown to the client.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => {
    return {
      message: err.message,
      path: err.path,
      code: err.extensions?.code || "INTERNAL_SERVER_ERROR",
    }
  },
})
  ---------------------------------------------------------------------
⚙️ 3. Custom Error Types
You can define custom error classes like AuthenticationError, UserInputError, etc.
const { AuthenticationError, UserInputError } = require('apollo-server-express')

if (!user) throw new AuthenticationError("You must be logged in")
if (invalidData) throw new UserInputError("Invalid input")


-------------------------------------------------------------------------------------------
What are the advantages and disadvantages of GraphQL?
 
advantages
1. 🎯 Fetch only what we need
In REST, you often get too much or too little data.

In GraphQL, the client decides what fields it wants.
👉 No over-fetching or under-fetching!

2. 🚀 Single Endpoint

Instead of multiple REST endpoints (/users, /posts, /comments),
GraphQL uses one single endpoint (/graphql) for all queries and mutations.

3. 🧩 Strongly Typed Schema

GraphQL uses a schema that defines all data types and relations.
Makes the API self-documented and easy to understand.

4. 🔄 Real-Time Data (with Subscriptions)

You can use GraphQL Subscriptions to get real-time updates (like chat apps 🔔).
-*************************************

⚠️ Disadvantages of GraphQL
1. 🧠 Complex Setup

Harder to set up than REST, especially for small apps.
Requires schema design and resolver functions.

**************************************
3. 🔒 Caching is Harder

REST uses URL-based caching easily.

In GraphQL, since everything is one endpoint, caching needs special handling.
-------------------------------------------------------------------------------------------

What is batching in GraphQL, and what is its impact on performance?
🧠 Batching means combining multiple GraphQL operations (queries or mutations) into a single network request — instead of sending many separate requests.

📦 Example:

Instead of:

// 3 separate requests
query { user(id: 1) { name } }
query { post(id: 1) { title } }
query { comment(id: 1) { text } }


You can batch them together:

[
  { query: "{ user(id: 1) { name } }" },
  { query: "{ post(id: 1) { title } }" },
  { query: "{ comment(id: 1) { text } }" }
]

********************************************
🚀 Impact on Performance
✅ Advantages:

Fewer network requests → reduces network overhead.
Better speed → improves performance, especially for mobile or slow networks.
Less server load → server handles one combined request instead of many small ones.
************************************************

⚠️ Disadvantages:

Large batched requests can become heavy and slower to parse.
Harder debugging → if one operation fails inside the batch, finding the issue takes more effort.
Server must support batching (not all GraphQL servers handle it automatically).
-------------------------------------------------------------------------------------------

What are some security considerations and best practices when exposing a GraphQL API to the public internet?
Strong authentication and authorization procedures,( input validation and sanitization, and limitations on query complexity) are essential when opening a GraphQL API to public access.
 It’s also important to use API monitoring and rate-limiting techniques to identify and stop (abusive) traffic patterns. 

-------------------------------------------------------------------------------------------

How can we optimize GraphQL queries for performance, especially when dealing with deeply nested data?
🧠 Problem:
GraphQL lets clients request deeply nested data, e.g.:
{
  user(id: 1) {
    posts {
      comments {
        author {
          name
        }
      }
    }
  }
}
  👉 it can trigger multiple DB calls and slow down performance.


  🚀 Optimization Techniques
1. 🧮 Use DataLoader (Batching & Caching)

Groups similar DB queries into one batch and caches results.
Example: 
const DataLoader = require("dataloader")
const userLoader = new DataLoader(async (ids) => {
  const users = await User.find({ _id: { $in: ids } })
  return ids.map(id => users.find(u => u.id === id))
})

3. ⏱ Use Query Caching
Cache frequent queries or responses using tools like Redis or Apollo’s built-in cache.
Speeds up repeated requests.

💡 Optimize Resolvers
Avoid unnecessary DB queries inside resolvers.
Use populate() or aggregate() in MongoDB to fetch related data in one go.

🔄 Pagination & Filtering
Never fetch all data at once!
Use limit, offset, or cursor-based pagination.
query {
  users(limit: 10, offset: 0) {
    name
  }
}
-------------------------------------------------------------------------------------------
How would you protect against common security vulnerabilities, like SQL injection or DDoS attacks, in a GraphQL API?

1. Use ORM/ODM like Sequelize or Mongoose (they sanitize queries automatically).
2. Validate all inputs before using them.
-------------------------------------------------------------------------------------------

🧩 Interfaces and Unions in GraphQL
🧠 1. Interface (like a common blueprint)

👉 Interface defines common fields that multiple types must have.
(Think of it like a “contract” — any type that implements it must include those fields.)

📦 Example:
interface Animal {
  id: ID!
  name: String!
}

type Dog implements Animal {
  id: ID!
  name: String!
  breed: String
}

type Cat implements Animal {
  id: ID!
  name: String!
  color: String
}

type Query {
  animals: [Animal]
}


✅ Now animals can return both Dog and Cat, because both follow the Animal structure.

🧩 2. Union (like an OR relationship)

👉 Union combines completely different types that don’t share common fields.
(Think of it as: “this can be either A or B”.)

📦 Example:
union SearchResult = User | Post | Comment

type User {
  id: ID!
  name: String!
}

type Post {
  id: ID!
  title: String!
}

type Comment {
  id: ID!
  text: String!
}

type Query {
  search(keyword: String!): [SearchResult]
}


✅ search can return a mix of users, posts, or comments —
and the client will check the type using inline fragments.

⚔️ Difference (Simple Table)
Feature	                     Interface                            	Union
🧱 Structure    	Common fields (like a shared blueprint)     	No common fields required
🧩 Use case	        Types share similar structure	           Types are totally different
🔗 Keyword	             implements                          	union =
🧠 Example	            Animal → Dog, Cat	                     SearchResult → User, Post
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------


*/