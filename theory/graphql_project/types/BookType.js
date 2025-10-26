const { GraphQLString, GraphQLList, GraphQLObjectType, GraphQLID } = require('graphql')
const Author = require('../models/Author')
const Category = require('../models/Category')

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => {
        const AuthorType = require('./AuthorType')
        const CategoryType = require("./CategoryType")
        return {
            id: { type: GraphQLID },
            title: { type: GraphQLString },
            authorId: { type: GraphQLString },
            authorObj: {
                type: AuthorType,
                resolve(parent) {
                    return Author?.findById(parent.authorId)
                }
            },
            categories: {
                type: new GraphQLList(CategoryType),
                async resolve(parent, args) {
                    return Category?.find({ _id: { $in: parent.categoryIds } })
                }
            }
        }
    }
})
module.exports = BookType