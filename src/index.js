import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";

dotenv.config({
    path: './env'
});



import connectDB from "./db/index.js"
connectDB()
.then(){
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
    })
}
.catch((err)=>{
    console.log("Mongo db conection failed !!!!",err)
})











// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         console.log("✅ MongoDB connected");

//         app.on("error", (error) => {
//             console.log("Error: ", error);
//             throw error;
//         });

//         app.get("/", (req, res) => {
//             res.send("✅ Server is running fine!");
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`🚀 App is listening on port ${process.env.PORT}`);
//         });

//     } catch (error) {
//         console.error("❌ ERROR: ", error);
//         throw error;
//     }
// })();
