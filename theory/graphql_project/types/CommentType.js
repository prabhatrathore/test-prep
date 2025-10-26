const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLUnionType, } = require("graphql")
const PostType = require("./postType")
const videoType = require("./videoType")

const postModel = require("../models/Post")
const videoModel = require("../models/VideoModel")

const CommentableType = new GraphQLUnionType({
    name: "Commentable",
    types: [PostType, videoType],
    resolveType: (value) => {
        if (value.url) {
            return 'Video'
        } else if (value.content) {
            return 'Post'
        } else { return null }
    }
})
const CommentType = new GraphQLObjectType({
    name: "Comment",
    fields: () => ({
        id: { type: GraphQLID },
        content: { type: GraphQLString },
        commentableId: { type: GraphQLID },
        commentableType: { type: GraphQLString },
        commentableData: {
            type: CommentableType,
            resolve(parent) {
                if (parent.commentableType == "Post") {
                    return postModel.findById(parent.commentableId)
                }else if (parent.commentableType == "Video"){
                    return videoModel.findById(parent.commentableId)
                }
                return null
            }
        }
        // commentableTypeData:{
        //     type
        // }
    })
})
module.exports = CommentType