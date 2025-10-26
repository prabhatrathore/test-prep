const { GraphQLSchema, GraphQLID, GraphQLString, GraphQLList, GraphQLObjectType, GraphQLInt, GraphQLNonNull } = require('graphql')

const AuthorType = require("../types/AuthorType")
const BookType = require("../types/BookType")
const AuthorModel = require("../models/Author")
const Book = require('../models/Book')
const BookPaginationType = require('../types/BookpaginationType')
const categoryType = require('../types/CategoryType')
const Category = require('../models/Category')
//---------------------------------------------------
const postModel = require("../models/Post")
const commentModel = require("../models/Comment")
const videoModel = require("../models/VideoModel")
//-----------------------------------------------------
const postType = require("../types/postType")
const commentType = require("../types/CommentType")
const videoType = require("../types/videoType")

const mutationUser = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: GraphQLString }
            },
            resolve(_, args) {
                try {
                    let obj = new AuthorModel({ name: args?.name })
                    return obj.save()
                } catch (error) {
                    console.log(error, "eroro add author")
                    throw new Error(error)
                }
            }
        },
        addBook: {
            type: BookType,
            args: {
                title: { type: GraphQLString },
                authorId: { type: GraphQLString },
                categoryIds: { type: GraphQLList(GraphQLID) }
            },
            resolve(_, args) {
                try {
                    let obj = new Book({ title: args?.title, authorId: args?.authorId, categoryIds: args?.categoryIds })
                    return obj.save()
                } catch (error) {
                    console.log(error, "erro add boko")
                    throw new Error(error)
                }
            }
        },
        addCategory: {
            type: categoryType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                parentCategory: { type: GraphQLID }
            },
            async resolve(_, args) {
                try {
                    return await Category.create({ name: args.name, parentCategory: args.parentCategory || null })
                } catch (error) {
                    console.log(error, "Erororor in add category")
                    throw new Error(error)
                }
            }
        },
        //-----------------post 
        addPost: {
            type: postType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                content: { type: GraphQLString }
            },
            resolve(parent, args) {
                return postModel?.create({ title: args?.title, content: args?.content })
            }
        },
        addVideo: {
            type: videoType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                url: { type: GraphQLString }
            },
            resolve(parent, args) {
                return videoModel?.create({ title: args?.title, url: args?.url })
            }
        },
        addComment: {
            type: commentType,
            args: {
                content: { type: new GraphQLNonNull(GraphQLString) },
                commentableId: { type: new GraphQLNonNull(GraphQLString) },
                commentableType: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return commentModel.create({ content: args?.content, commentableId: args?.commentableId, commentableType: args?.commentableType })
            }
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name: "QueryType",
    fields: {
        getAuthors: {
            type: new GraphQLList(AuthorType),
            resolve() {
                return AuthorModel.find()
            }
        },
        //-----------get books
        getBooks: {
            type: new GraphQLList(BookType),
            resolve() {
                return Book?.find().exec()
            }
        },
        booksWithpaginationWithfilter: {
            type: new GraphQLList(BookType),
            args: {
                page: { type: GraphQLInt },
                limit: { type: GraphQLInt },
                authorId: { type: GraphQLString }
            },
            async resolve(parent, args) {
                try {
                    let page = args.page || 1
                    let limit = args.limit || 4
                    let offset = (page - 1) * limit
                    let filter = {}
                    if (args.authorId) {
                        filter.authorId = args.authorId
                    }
                    return await Book?.find(filter).skip(offset).limit(limit)
                } catch (error) {
                    console.log(error, 'erororo get book iwth pagiantion')
                    throw new Error(error)
                }
            }
        },
        booksWithPaginationData: {// with pagination with diffenrent response send
            type: BookPaginationType,
            args: {
                page: { type: GraphQLInt },
                limit: { type: GraphQLInt },
                authorId: { type: GraphQLString }
            },
            async resolve(parent, args) {
                try {
                    let page = args?.page || 1
                    let limit = args?.limit || 3
                    let offset = (page - 1) * limit
                    let filter = {}
                    if (args.authorId) {
                        filter.authorId = args.authorId
                    }
                    const totalCount = await Book.countDocuments(filter)
                    const totalPages = Math.ceil(totalCount / limit)
                    let books = await Book?.find(filter).skip(offset).limit(limit)
                    return {
                        books,
                        totalPages,
                        currentPages: page,
                        hasNextPage: page < totalPages ? 'true' : 'false',
                        hasPreviousPage: page > 1 ? 'true' : "false"
                    }
                } catch (error) {
                    console.log(error, 'erroro')
                    throw new Error(error)
                }
            }
        },
        //-----------------category--------------------------------------------
        getCategory: {
            type: categoryType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                try {
                    return Category?.findById(args.id)
                } catch (error) {
                    console.log(error, "get category error")
                    throw new Error(error)
                }
            }
        },
        getAllCat: {
            type: GraphQLList(categoryType),
            resolve(_, args) {
                try {
                    return Category?.find().exec()
                } catch (error) {
                    console.log(error, 'get all catergory')
                    throw new Error(error)
                }
            }
        },
////////------------------post--------------------------------
        getPost: {
            type: new GraphQLList(postType),
            resolve() {
                return postModel?.find()
            }
        },
        getVideo: {
            type: new GraphQLList(videoType),
            resolve() {
                return videoModel?.find()
            }
        },
        getComment: {
            type: new GraphQLList(commentType),
            resolve() {
                return commentModel?.find()
            }
        },

    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutationUser
})