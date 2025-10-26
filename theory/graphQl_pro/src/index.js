const connectDb = require("./config/dbConfig");
const createApp = require('./app')
require('dotenv').config()

const PORT = process.env.PORT || 5000;

(async () => {

    await connectDb();
    console.log(PORT, 'eeee')
    const app = await createApp();

    app.listen(PORT, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Server started on port ${PORT}`);
        }
    });
    
})()
