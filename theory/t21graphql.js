/**
 1. What is GraphQL?
GraphQL is Query Language for APIs that describe api's request. ((it's not a technology or database)). 
GraphQL ask clients exactly what they need, and nothing more.
we use graphql for fetching structure data 

📦 Developed by: Facebook (2012)
🌐 Released: 2015 (open-sourced in 2015)
🔗 Used by: GitHub, Shopify, Netflix, etc.
--------------------------------------------------------------------------------

⚖️ REST API vs GraphQL (Main Comparison)

Feature	                       REST API                               	GraphQL
Endpoints      	Multiple endpoints (e.g. /users, /posts)   	        Single endpoint (/graphql) 

over-fetching             common                                             never
under-fetching            often                                              never
 
Versioning	      Usually requires /v1, /v2 etc.	                     No versioning needed, schema evolves
Request Type	  Uses HTTP methods (GET, POST, PUT, DELETE)	           POST (usually) with query body
-------------------------------------------------------------------------------------------
Flexibility	          Fixed structure	                                    Dynamic and flexible

--------------------------------------------------------------------------------------------
(/graphql -> we can change this endpoint but it's a convention)
-------------------------------------------------------------------------------------------

why graphql ? 
at time of fetching data from server side, client tell specificallly what data they want. 

graphql-> what it solved ?
it solved overfetching
2. multiple api call . 
3. subscription : if server got new data,-> in rest api, server can't possible to send but in graphql with some configuration, server can send data . 
------ ------------------------------------------------------------------------------------------

What are the main components of GraphQL?

Schema        – defines structure of API means what data types exist and what operations can be performed. (types, queries,  mutations)

Resolvers     – Resolver is a functions that return data for schema fields.
              in graphql , resolver is function which is use to run query and mutation 
Queries       – Queries is used to read data from the server.  
Mutations     – used to write/update/delete data . 
Subscriptions – used for real-time data send from server . 
------------------------------------------------------------------------------------------------
*/
/*
What is a GraphQL Schema?
GraphQL Schema defines what data types exist and what operations can be performed.

Example:
type User {
  id: ID!
  name: String!
  email: String!
}

type Query {
  getUser(id: ID!): User
}
  ---------------------------------------------------------------------
What is SDL (Schema Definition Language)?
SDL (Schema Definition Language) is A human-readable syntax use to define GraphQL schema.

type Book {
  id: ID!
  title: String!
  author: Author!
}

type Author {
  id: ID!
  name: String!
  books: [Book!]!
}

type Query {
  book(id: ID!): Book
  books: [Book!]!
  author(id: ID!): Author
}

------------------------------------------------------------------------------------------------

difference betweeen both.
GraphQL Schema → The actual structure that defines what data can be queried, (including types, fields, and relationships (it’s what the server uses) ) .

Schema Definition Language (SDL)→ SDL is a human-readable syntax use to define GraphQL schema (like writing the blueprint).
/*------------------------------------------------------------------------------------------------

How does GraphQL work with Node.js?
1. Use Apollo Server or Express GraphQL package 
2. Define a schema
3. Write resolvers
4. Start the server

------ ------------------------------------------------------------------------------------------
const { ApolloServer, gql } = require('apollo-server');
gql--> graphql

const typeDefs = gql`   
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => 'Hello GraphQL with Node.js!',
  },
}

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server ready at ${url}`));

------ ------------------------------------------------------------------------------------------
BASIC TYPES & OPERATIONS 

Q7. What are Scalar Types in GraphQL?
Scalars are the basic data types in GraphQL that represent single values.

Default Scalars:
Int     → Integer
Float   →  Decimal
String  → Text
Boolean → true/false
ID      → Unique identifier

------------------------------------------------------------------------

What are GraphQL Types ?
1. Object Type → Defines fields (e.g., User)
2. Input Type → Used in mutations
3. Enum Type → Fixed values
4. Interface & Union Types → Used for polymorphism.

---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
What are Input Types in GraphQL?
Input Types in GraphQL used in mutations ((to pass structured input.))

Example:
input CreateUserInput {
  name: String!
  email: String!
}
type Mutation {
  createUser(input: CreateUserInput): User
}
------------------------------------------------------------------------

Q8. What are the 3 Operation Types ?

Operation               Purpose                    Example
Query              Fetch data (GET)              query { user(id:1) { name } }
Mutation          Modify data (POST/PUT)         mutation { createUser(...) }
Subscription       Real-time updates             subscription { messageAdded }
------------------------------------------------------------------------------------------------------

OBJECT TYPES & NESTING 
Q10. How to define nested types?

type Post {
  id: ID!
  title: String!
  content: String
  author: User!
}

type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}
------ ------------------------------------------------------------------------------------------

What is Apollo Server?
Apollo Server is the most popular GraphQL server for Node.js.
Apollo Server handles schema creation, query execution, and integrations easily.

----- benefit of Apollo Server----- : 
easy intigration 
schema first development
((powerful feature: caching, performance monitoring ))

------ ------------------------------------------------------------------------------------------
What is the difference between Apollo Server and Express GraphQL?
Feature	                   Apollo Server                  	Express GraphQL
Popularity	                 High                           	Moderate
Performance	              Slightly better                    	Basic
Features         	Subscriptions, caching, federation        	Basic only
Integration	            Built-in tools                   	Requires manual setup
------ ------------------------------------------------------------------------------------------

What is a Resolver Map ? 
Resolver Map is an object that connects our schema fields to their resolver functions — 

((it tells GraphQL how to fetch the data for each field.))

🧩 Example:

Schema (definition):
type Query {
  getUser: User
 }

type Mutation {
  createUser(name: String): User
}

------- ------------------------------------------------------------------------------------------
Resolvers (map):

const resolvers = {
  Query: {
    getUser: () => {
      // code to fetch a user from database
      return { id: 1, name: "Prabhat" };
    }
  },
  Mutation: {
    createUser: (_, { name }) => {
      // code to create a user in database
      return { id: 2, name };
    }
  }
};
------ ------------------------------------------------------------------------------------------

What is Context in GraphQL?
The context object is shared across all resolvers in a single request.
It’s useful for authentication ((or database access)).

Example: 
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization;
    return { token };
  },
});
------ ------------------------------------------------------------------------------------------
------ ------------------------------------------------------------------------------------------

What are Relationships in GraphQL?
Relationships define how types are linked.

Example:
type Author {
  id: ID!
  name: String!
  books: [Book]
}

type Book {
  id: ID!
  title: String!
  author: Author
}


Resolvers must handle how these linked data are fetched.

------ ------------------------------------------------------------------------------------------
How to connect GraphQL with MongoDB using Mongoose?
Steps:
Connect MongoDB

Define Mongoose models
Use them inside resolvers

Example:

const User = mongoose.model('User', new mongoose.Schema({ name: String }));

const resolvers = {
  Query: {
    users: async () => await User.find(),
  },
};
------ ------------------------------------------------------------------------------------------

How do you do Authentication in GraphQL?
Use middleware or context to validate tokens (like JWT).

Example:
context: ({ req }) => {
  const token = req.headers.authorization;
  const user = verifyToken(token);
  return { user };
}

Then access context.user inside resolvers
------ ------------------------------------------------------------------------------------------
How do you handle Authorization?

we usually handle it inside our resolvers or middleware (context).
*******************************************************************************

1️⃣ User logs in → get a JWT token

When a user logs in, we generate a JWT token:
const jwt = require("jsonwebtoken");

const token = jwt.sign({ userId: user.id, role: user.role }, "SECRET_KEY", { expiresIn: "1h" });

***************************************************************

2️⃣ Client sends token in headers

Every GraphQL request will include the token:

{
  "Authorization": "Bearer <token>"
  }
  
  ***************************************************************
 3️⃣ Verify token in Apollo Server context : 

This is where we decode the token and attach user info to the request:

const { ApolloServer } = require('@apollo/server');
const jwt = require('jsonwebtoken');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.split(' ')[1]; // remove 'Bearer '
    if (token) {
      try {
        const user = jwt.verify(token, "SECRET_KEY");
        return { user }; // available in resolvers
      } catch (err) {
        throw new Error("Invalid or expired token");
      }
    }
    return {};
  },
});
  ***************************************************************
  4️⃣ Check Authorization inside Resolver

Now inside any resolver, we can check the user’s role/permission:
const resolvers = {
  Query: {
    getAllUsers: (_, __, { user }) => {
      if (!user) throw new Error("Not authenticated");
      if (user.role !== "admin") throw new Error("Not authorized");
      
      // fetch users from DB
      return users;
      }
      }
      };    
      ------ ------------------------------------------------------------------------------------------
      ******************************************************************

What is a Fragment in GraphQL ?
Fragments help to reuse field selections.

a Fragment is a reusable piece of a query — it lets us define a set of fields once and use it in multiple queries or mutations.

Example:
fragment userFields on User { 
  id
  name
}

{
  getUser(id: 1) {
    ...userFields
  }
}
------ ------------------------------------------------------------------------------------------

What is batching in GraphQL, and what is its impact on performance?
Batching means combining multiple GraphQL operations (queries or mutations) into a single request — instead of sending many separate requests.

Usually implemented via DataLoader.

Example:
const DataLoader = require('dataloader');
const userLoader = new DataLoader(keys => getUsersByIds(keys));
--------------------------------------------------------------------------------------

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

------ ------------------------------------------------------------------------------------------
What is Error Handling in GraphQL?
GraphQL returns both data and errors in the same response.

Example Response:

{
  "data": null,
  "errors": [{ "message": "User not found" }]
}
------ ------------------------------------------------------------------------------------------
What are Interfaces and Unions in GraphQL?

🧩 Interfaces and Unions in GraphQL
🧠 1. Interface (like a common blueprint)

👉 Interface defines common fields that multiple types ((must)) have.
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
-------------------------------------------------------------------------------------

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

------ ------------------------------------------------------------------------------------------
What are Directives in GraphQL?
Answer:
Directives modify query behavior dynamically.

Example:

query {
  users {
    name @include(if: true)
    age @skip(if: false)
  }
}
------ ------------------------------------------------------------------------------------------
How can you Optimize GraphQL Performance?

Use DataLoader to batch database calls

Apply query complexity limits

Use caching for repeated queries

Avoid deep nested queries

Use pagination and filtering
------ ------------------------------------------------------------------------------------------
What are Common Security Practices in GraphQL?

Answer:////////

Validate and sanitize inputs

Limit query depth and complexity

Use authentication on context

Disable introspection in production

Rate-limit requests
------ ------------------------------------------------------------------------------------------
How to Implement Pagination in GraphQL?

Use arguments like limit and offset in queries.

Example:

type Query {
  users(limit: Int, offset: Int): [User]
}
------ ------------------------------------------------------------------------------------------
------ ------------------------------------------------------------------------------------------
What are Aliases in GraphQL?
Aliases allow renaming fields in a query.

Example:
{
  firstUser: getUser(id: 1) { name }
  secondUser: getUser(id: 2) { name }
}
------ ------------------------------------------------------------------------------------------

What is Introspection in GraphQL?
Introspection is the ability to query the schema itself, helping tools like GraphiQL auto-generate docs.
(Disable in production for security reasons.)

🟩 35. What is the N+1 problem in GraphQL?
When resolvers make too many database calls (one per item).
Fix: Use DataLoader to batch those queries.

🟩 36. How to handle File Uploads in GraphQL?
Apollo supports multipart uploads using 'graphql-upload' package.

-------------------------------------------------------------------------------------------------

What are Custom Scalars in GraphQL?
we can define our own scalar types like Date or Email.

Example:
scalar Date
------ ------------------------------------------------------------------------------------------
What is GraphQL Playground?
GraphQL Playground is an interactive IDE to test GraphQL queries and mutations (like Postman for REST).

------ ------------------------------------------------------------------------------------------
🟩 40. How to Deploy a GraphQL Server?

Answer:
Same as Node.js app:
npm run build
Deploy on platforms like Render, Vercel, AWS, or Heroku
Expose the /graphql endpoint
------ ------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
npm i express graphql express-graphql 
 for intigrating 'express' with 'graphql'  the middleware we need  which come from 'express-graphql' module

------------------------------------------------------------------------------------------------

polymorphic relationship: 

-------------------------------------------------------------------------------------------
typedefs means graphql type definitions 

what is 'gql'? 
with gql, we write graphql's schema. 
we give gql string to apollo server so that apollo server can understand gql string(schema) 

It’s used to write and parse GraphQL schema definitions (typeDefs) or queries in JavaScript.  

Without gql it is string 

-------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------

graphql with subscription 
when we need real-time updates (like chat, notification, stock price, online users) we use subscription 
subscription work on websocket protocol (a long live connection) 

the client subscribe and as soon as the data changes , server immidiately pushes to client side

HOW IT WORKS-----------
the client send  a asubscription request (e.g userCreated)
the server establishes a websocket connection. 
    whenever the userCreated mutation run on the server ->server publishes an event. 

    all client subscribed to that subscription immidiately receive the updated data. 
    this means subscription works like an 'event listener' that pushes real time data. 

    -----------------------------------------------------------
    keyword to remember 
    pub/sub -> publish/subcribe -> the server's internal system that handle events. 
  subscription type -> need to be defined in the graphql schema . 

  websocket connection -> a long-live connection that remain between the client and server 
    -------------------------------------------------------------
-------------------------------------------------------------------------------------------
const { ApolloServer } = require("apollo-server-express")

means 👇
👉 we are importing the ApolloServer class from the apollo-server-express package.

🧠 In simple words :
apollo-server-express = library that helps connect Apollo GraphQL with Express.js.
ApolloServer = main class used to create a GraphQL server.
-------------------------------------------------------------------------------------------

🧠 GraphQL Schema — Simple Definition:

A GraphQL schema is like a blueprint (or map) 🗺️ that tells our API:
👉 what data exists,
👉 what clients can ask for,
👉 and what type of data (each field) will return.
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
What is an exclamation point in GraphQL?
In GraphQL, an exclamation point (!)  means that the field must contain a value and cannot be empty.
-------------------------------------------------------------------------------------------

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
 
⚠️ Disadvantages of GraphQL
1. 🧠 Complex Setup

Harder to set up than REST, especially for small apps.
Requires schema design and resolver functions.

**************************************
3. 🔒 Caching is Harder

REST uses URL-based caching easily.

In GraphQL, since everything is one endpoint, caching needs special handling.
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------

What are some security considerations and best practices when exposing a GraphQL API to the public internet?
Strong authentication and authorization procedures, (input validation and sanitization, and limitations on query complexity) 

are essential when opening a GraphQL API to public access.
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
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
*/