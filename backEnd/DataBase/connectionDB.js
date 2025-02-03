const mongoose = require("mongoose");

const connectionDB = async()=>{
    await mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("DB connected successfully");
    }).catch((error)=>{
        console.log(`${error} : DataBase Error`);
    })
}

module.exports = connectionDB