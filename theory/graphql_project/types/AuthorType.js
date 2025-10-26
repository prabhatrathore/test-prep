const { GraphQLString, GraphQLList, GraphQLObjectType, GraphQLID, GraphQLInt } = require('graphql')
const Book = require('../models/Book')

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => {
        const BookType = require('./BookType')

        return {
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            books: {
                type: new GraphQLList(BookType),
                resolve(parent, args) {

                    return Book.find({ authorId: parent.id })
                }
            },
        }
    }
})
module.exports = AuthorType 