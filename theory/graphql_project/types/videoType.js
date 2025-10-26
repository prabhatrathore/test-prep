const { GraphQLObjectType, GraphQlString, GraphQLID, GraphQLString } = require("graphql")

const videoType = new GraphQLObjectType({
    name: 'Video',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        url: { type: GraphQLString }
    })
})
module.exports = videoType