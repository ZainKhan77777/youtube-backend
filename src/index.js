// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";


import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({ path: "./env" });
import app from "./app.js";
connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Error: ", error);
        throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.log("Mongo db connection FAILED", error);
    process.exit(1);
});









// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log("Connected to MongoDB");
//         application.on("error", (error) => {
//             console.log("Error: ", error);
//             throw error;
//         });

//         application.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         });

//     } catch (error) {
//         console.log("Error connecting to MongoDB", error);
//         throw error;
//     }
// })();