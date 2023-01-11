const express= require('express')
const app= express()
const PORT=3000;
const mongoose= require('mongoose')
const {MONGODB_URI}=require('./Confoig')
require('./models/usermodel')

app.use(express.json());
app.use(require('./Routes/Authentication'))


mongoose.connect(MONGODB_URI)

mongoose.connection.on('connected',()=>{
    console.log("connected")
})

mongoose.connection.on('error',(error)=>{
    console.log("error",error)
})
app.listen(PORT,()=>{
    console.log("server started")
})