require('dotenv').config()
const mongoose = require("mongoose")
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, 
            // { useNewUrlParser: true, useUnifiedTopology: true }
        )
        console.log('db connect success')
    } catch (error) {
        console.log(error, "eer in mongo connection")
        return

    }
}
module.exports = connectDb