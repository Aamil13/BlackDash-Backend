const  mongoose = require('mongoose');

const connectDB = async(req,res)=>{
        try {
            const conn = await mongoose.connect(process.env.MONGO_DB)
            console.log(`Connected to mongo on ${conn.connection.host}`);
        } catch (error) {
            return console.log(error);
        }
}

module.exports = connectDB;