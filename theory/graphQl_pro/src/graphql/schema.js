const userType = require("./typeDefs/userTypes")
const userResolver = require("./resolvers/userResolver")

const typeDefs = [userType]
const resolvers = [userResolver]

module.exports = { typeDefs, resolvers }
