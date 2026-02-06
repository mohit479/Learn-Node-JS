const mongoose =require("mongoose");


async function connectDB(){
    await mongoose.connect("mongodb+srv://Admin:6jbOnvw6OKSXxJSl@learndb.ttiztcf.mongodb.net/halley");
    console.log("DB CONNECTED");
}

// pass 6jbOnvw6OKSXxJSl


module.exports =connectDB;