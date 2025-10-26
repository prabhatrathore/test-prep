const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLInputObjectType, GraphQLNonNull } = require('graphql')
/**
  GraphQLSchema defines the structure of our entire GraphQL API — it tells GraphQL what kind of data can be fetched and how.

it's a blueprint of our API ,
Query → for reading data
Mutation → for changing data
   -----------------------------------------------------------------------------
 GraphQLObjectType  in this we add query and mutation .
 GraphQLString  :GraphQLString is a datatype, it will return string data 
 */
const User = require('../models/User')

const UserType = new GraphQLObjectType({
    name: "user",
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLString }
    }
})
const user = [{ id: 1, name: 'AONE', age: 20 }, { id: 2, name: 'TWO', age: 30 },]

const userInputType = new GraphQLInputObjectType({
    name: "UserInput",
    fields: {
        name: { type: GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt }
    }

})
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,// here we build 'user' query and they returning USERTYPE ka data return krti h 
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {//args, here we use for getting data from CLIENT- SIDE
                return user?.find((a, b) => a?.id == args.id)
            }
        },
        hello: {
            type: GraphQLString,
            resolve() {
                return 'helllo rom graphql'
            },
        },
        hii: {
            type: GraphQLInt,
            resolve() {
                return 21
            }
        },
        users: {
            type: new GraphQLList(UserType),
            async resolve(parent, args) {
                let fina = await User?.find()
                return fina
            }
        },
        userById: {
            type: UserType,
            args: { id: { type: GraphQLString }, },
            resolve(parent, args) {
                let findById = User?.findById(args.id).exec()
                return findById
            }
        }
    }

})

/**
 name and fields are required, 
 name must be unique, name is query name  
  field is method , hello is query , in field we can define multiple queries. 
  in field , there iss 'type' means what we want to return in this query
   resolve means the actual data return in this function 
   resolve is graphql backend 's brain
   -------------------------------------------------------------------------------
   every query has type and resolver 
 */

const mutationUser = new GraphQLObjectType({
    name: "mutation",
    fields: {
        addUser: {
            type: UserType,
            args: {
                // name: { type: GraphQLString },
                // age: { type: GraphQLInt },
                input: { type: userInputType }
            },
            resolve(_, { input }) {
                if (!input?.name || input?.name.length < 3) {
                    throw new Error("Name must be atleast three character long")
                }
                const tempUser = {
                    id: user?.length + 1 + '',
                    name: input?.name,
                    age: input?.age
                }
                user.push(tempUser)
                console.log(user, 'tttttttttt')
                return tempUser
            }
        },
        addUserDb: {
            type: UserType,
            args: {
                input: { type: userInputType }
            },
            async resolve(_, { input }) {
                try {
                    if (!input?.name || input?.name.length < 3) {
                        throw new Error("Name must be atleast three character long")
                    }
                    let user = new User({
                        name: input?.name, age: input?.age
                    })
                    let obj = await user.save()
                    return obj
                } catch (error) {
                    console.log(error, 'erororo in add user')
                }
            }
        },
        editUser: {
            type: UserType,
            args: {
                id: { type: GraphQLString },
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
            },
            resolve(parentId, args) {
                const tempUser = {
                    name: args?.name,
                    age: args?.age,
                    id: args?.id
                }
                let changes = false
                user?.forEach((a, b) => {
                    if (a?.id == args?.id) {
                        a.name = args?.name,
                            age = args?.age
                        changes = true
                    }
                    return a
                })
                console.log(user, 'tttttttttt')
                if (changes == false) {
                    throw new Error("User not found")
                } else {

                    return tempUser
                }
            }
        },
        editUserDb: {
            type: UserType,
            args: {
                id: { type: GraphQLString },
                name: { type: GraphQLString },
                age: { type: GraphQLString }
            },
            async resolve(parentId, args) {
                try {
                    // console.log(args, "arrrrrrrrrr")
                    let findObj = await User?.findById(args?.id).exec()
                    if (findObj) {
                        let obj = {
                            name: args?.name || findObj?.name,
                            age: args?.age || findObj?.age
                        }
                        await User?.findByIdAndUpdate(args?.id, obj)
                        obj.id = findObj.id
                        return obj
                    }
                } catch (error) {
                    console.log(error, "Erooooooo")
                    throw new Error(error)
                }
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: { type: GraphQLString },
            },
            resolve(parentId, args) {
                let findIndex = user?.findIndex((a, b) => a?.id == args?.id)
                if (findIndex != -1) {
                    let del = user.splice(findIndex, 1)[0]
                    console.log(user, 'tttttttttt', del)
                    return del
                } else {
                    throw new Error("USer not found or deleted already")
                }
            }
        },
        deleteUserDb: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            async resolve(parentId, args) {
                try {
                    let find = await User?.findByIdAndDelete(args?.id).exec()
                    console.log(find, 'delete items')
                    if (find?._id) {

                        find.id = find?._id
                        return find
                    } else {
                        throw new Error("User deleted already")
                    }
                } catch (error) {
                    console.log(error, 'eorroro')
                    throw new Error(error)
                }
            }
        },

    }

})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutationUser
})