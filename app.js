require('dotenv').config();
const connectDB = require("./DB/connect");
const express =require("express")
const taskroute=require('./routes/taskroute')
const notfound=require('./Middleware/notfound')
const errorHandlerMiddleware=require("./Middleware/errorHandler")
const app=express()
app.use(express.json())
app.use('/api/v1/task',taskroute)
app.use(notfound)
app.use(errorHandlerMiddleware);
const start=async ()=>{
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(3000,()=>{
            console.log("server is running")
        });
    }catch(error){
        console.log(error);
    }
};


start();