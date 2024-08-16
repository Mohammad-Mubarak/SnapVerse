import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();



mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(
    console.log("succefully connected")
).catch(error=>{
    console.log("connection fail hogya re baba ")
    process.exit(1)
}
)


