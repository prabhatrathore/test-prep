const userModel = require("../../model/user")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const pubSub = require("../../pubsub")

const USER_CREATED = "USER_CREATED"

const userResolver = {
    Query: {
        users: async (__, _, { user }) => {
            console.log(user, 'user in middd')
            if (!user) throw new Error('Unauthorise')
            return await userModel?.find().sort({ createdAt: -1 })
        },
        user: async (_, { id }, { user }) => {
            if (!user) throw new Error("Unauthorise user")
            return await userModel?.findById(id)
        }
    },
    Mutation: {
        createUser: async (_, input) => {
            let email = await userModel?.findOne({ email: input?.email })
            if (email) {
                throw new Error("Email is exist")
            }
            await userModel.create({ name: input?.name, email: input?.email })
            pubSub.publish(USER_CREATED,{userCreated:input})
            return { name: input.name, email: input.email }
        },
        updateUser: async (_, { name, email, id }) => {
            try {
                let obj = {}
                if (name) {
                    obj.name = name
                }
                console.log(name, email, id)
                if (email) {
                    let checkEmail = await userModel?.findOne({
                        email,
                        _id: {
                            $ne: id
                        }
                    })
                    if (checkEmail) {
                        throw new Error("This email already exist in db")
                    }
                    obj.email = email
                }
                // console.log(obj, 'oooooooooobjbjb')
                return await userModel?.findByIdAndUpdate(id, obj)

            } catch (error) {
                console.log(error, "error updated ")
                throw new Error(error)
            }
        },
        deleteUser: async (parent, input) => {
            try {
                let obj = await userModel?.findByIdAndDelete(input.id)
                // console.log(obj, 'eww')

                if (obj && obj?._id) {
                    return true
                } else {
                    return "Already deleted user"
                }
            } catch (error) {
                console.log(error, "eeedelete users")
                throw new Error(error)
            }
        },
        registerUser: async (_, { name, email, password }) => {
            try {
                let existCheck = await userModel?.findOne({ email: email })
                if (existCheck) throw new Error("Email already exist")

                let encrypt = await bcrypt.hash(password, 10)

                let obj = {
                    name, email, password: encrypt
                }
                let newUser = new userModel(obj)
                await newUser.save()
                const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, { expiresIn: "1d" })
                return { token, user: newUser }
            } catch (error) {
                console.log(error, "eeeeeeregister apie")
                throw new Error(error)
            }
        },
        loginUser: async (_, { email, password }) => {
            try {
                let existCheck = await userModel?.findOne({ email: email })
                if (!existCheck) throw new Error("User not found")

                let chekpassword = await bcrypt.compare(password, existCheck.password)
                if (!chekpassword) {
                    throw new Error("Invalid credentials")
                }

                delete existCheck.password
                const token = jwt.sign({ userId: existCheck.id }, process.env.JWT_SECRET, { expiresIn: "1d" })
                return { token, user: existCheck }
            } catch (error) {
                console.log(error, "eeeeeeregister apie")
                throw new Error(error)
            }
        },
    },

    Subscription: {
        userCreated: {
            subscribe: () => pubSub.asyncIterableIterator([USER_CREATED])
        }
    }
}
module.exports = userResolver
