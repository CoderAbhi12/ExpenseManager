const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
// const path = require("path");
const colors=require('colors')
const dotenv=require('dotenv')
const connectDb = require('./configure/connectDb')
//congig dot env file
dotenv.config();
//database call
connectDb();

//rest object 
const app=express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
//user routes
app.use('/api/v1/users',require('./rout/userRoute'))
//tranctaion routes
app.use('/api/v1/transections',require('./rout/transectionRoutes'))



//port
const PORT=5000 || process.env.PORT;

//listen server
app.listen(PORT,()=>{
    console.log("server running on port ${PORT}");
});