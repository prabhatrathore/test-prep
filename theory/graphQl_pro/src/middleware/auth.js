const jwt = require("jsonwebtoken");
require("dotenv").config()

const authMiddleware = (req) => {
console.log(req.headers,"req.headers,req.headers,")
    const authHeader = req.headers.authorization || ""

    if (!authHeader) return null;
    const token = authHeader.replace('Bearer ', "");
    console.log(token,'tokennn in mid')
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        console.log(error,"eee auth mid")
        throw new Error(error)
    }

}

module.exports = authMiddleware