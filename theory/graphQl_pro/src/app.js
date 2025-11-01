const express = require('express')
const { ApolloServer } = require("apollo-server-express")
const { typeDefs, resolvers } = require("../src/graphql/schema")

const authMiddleware = require("./middleware/auth")

async function createApolloServer(app) {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => {
            const user = authMiddleware(req)
            console.log(user, 'useuru')
            return { user }
        },
        introspection: true,
    })
    await server.start()
    server.applyMiddleware({ app, path: '/graphql' })
    return server
}
async function createApp() {
    const app = express()
    return app
}

module.exports = { createApp, createApolloServer }

