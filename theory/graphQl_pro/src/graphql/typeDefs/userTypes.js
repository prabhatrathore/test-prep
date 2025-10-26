const { gql } = require("apollo-server-express")

const userType = gql`
type User {
    name:String!
    id:ID! 
    email:String! 
    createdAt:String 
    updatedAt:String
}
type AuthPayload {
token:String! 
user:User!
}
type Query {
    users:[User]
    user(id:ID!):User 
}
type Mutation {
    createUser(name:String!,email:String!):User 
    updateUser(id:ID!,name:String,email:String):User
    deleteUser(id:ID!):String

    registerUser(name:String!, email:String!,password:String!):AuthPayload
    loginUser( email:String!,password:String!):AuthPayload
}

type Subscription{
    userCreated:User
} 
`;
module.exports = userType