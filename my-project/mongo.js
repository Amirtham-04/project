const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://sivarasaarun:Pc3pk108tggqUpuG@cluster0.5afzggf.mongodb.net/user?retryWrites=true&w=majority")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phno:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection