const mongoose = require("mongoose")

async function connectDB() {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("database connected")
    } catch (e) {
        console.log(e)
        
    }
}

module.exports = connectDB;