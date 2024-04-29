const mongose=require('mongoose')
const colors=require('colors')
const connectDb=async()=>{
    try{
        await mongose.connect(process.env.MONGO_URL);
        console.log("DB connected");
    }
    catch(error){
        console.log(error)
    }
}
module.exports=connectDb