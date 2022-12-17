const mongoose=require('mongoose')

const userschema= new mongoose.Schema({
    firstname:{
        type: String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});


mongoose.model("usermodel",userschema)