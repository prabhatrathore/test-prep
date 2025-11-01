require('dotenv').config()

const { createServer } = require('http');
const { execute, subscribe } = require("graphql")
const { SubscriptionServer } = require("subscriptions-transport-ws")

const { createApp, createApolloServer } = require('./app')
const connectDb = require("./config/dbConfig");
const { typeDefs, resolvers } = require("./graphql/schema")
const { makeExecutableSchema } = require("@graphql-tools/schema")

const PORT = process.env.PORT || 5000;

(async () => {

    await connectDb();
    console.log(PORT, 'eeee')
    const app = await createApp();

    const httpServer = createServer(app)

    const apolloServer = await createApolloServer(app)

    const schema = makeExecutableSchema({
        typeDefs,
        resolvers
    })

    SubscriptionServer.create({
        schema,
        execute,
        subscribe,
        onConnect: () => {
            console.log("client connected for subscription")
        },
        onDisconnect: () => {
            console.log("client disconnected for subscription")
        }
    },{
        server:httpServer,
        path:"/graphql"
    })
    httpServer.listen(PORT, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Server started on port ${PORT}`);
        }
    });

})()
