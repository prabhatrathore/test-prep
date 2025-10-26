const { GraphQLList, GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql")

const category = require("../models/Category")
const book = require("../models/Book")


const categoryType = new GraphQLObjectType({
    name: "Category",
    fields: () => {
        const BookType = require("../types/BookType")

        return {
            name: { type: GraphQLString },
            id: { type: GraphQLID },
            books: {
                type: new GraphQLList(BookType),
                async resolve(parent, args) {
                    return book?.find({ categoryIds: { $in: parent?.id } }).exec()
                }
            },
            parentCatObj: {
                type: categoryType,
                resolve(parent) {
                    return parent.parentCategory ? category?.findOne({ _id: parent?.parentCategory })
                        : null
                }
            },
            subCategories: {
                type: new GraphQLList(categoryType),
                resolve(parent) {
                    return category?.find({ parentCategory: parent._id })
                }
            }
        }
    }
})

module.exports = categoryType