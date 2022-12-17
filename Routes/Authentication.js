const express= require('express')
const router=express.Router();


router.get('/',(req,res)=>{
    res.send("welcome afiya router")
})


router.post('./re',(req,res)=>{
    console.log(req.body)
})

module.exports=router;