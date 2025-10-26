require('dotenv').config()
const mongoose = require("mongoose")
mongoose?.connect(process.env.MONGO_URI).then(() => { console.log("db is connected") }).catch((err) => { console.log(err, "err occured") })
const express = require('express')
const { graphqlHTTP } = require("express-graphql")


// const schema = require('./schema/schema')
const schema = require('./schema/index')
// const index=require('./schema/index.js')
const app = express()
app.use("/graphql", graphqlHTTP({
    schema,
    // index,
    graphiql: true
}))


/**
schema,  /// we use schema for returning this schema data
graphiql: true /// interactive ui will be made  
*/
app.listen(3000, () => {
    console.log('success, server is started')
})

