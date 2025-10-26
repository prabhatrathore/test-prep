const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLInt } = require('graphql')

const BookPaginationType = new GraphQLObjectType({
    name: "BookPagination",
    fields: () => {
        const BookType = require("./BookType")
        return {
            books: { type:new GraphQLList(BookType) },
            totalPages: { type: GraphQLInt },
            currentPages: { type: GraphQLInt },
            hasNextPage: { type: GraphQLString },
            hasPreviousPage: { type: GraphQLString }
        }
    }
})

module.exports = BookPaginationType