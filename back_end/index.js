const express = require("express")
const cors = require("cors")
const app = express()
const name = "Gokul"
const password = 7777;
 app.use(express.urlencoded({extends:true}))
 app.use(cors())
app.listen(5000,function(){
    console.log("Sever Started >>>")
})

app.get("/login",function(req,res){
    console.log(req.query)
   if(req.query.username === name && req.query.password == password){
     res.send(true)
   }
   else{
    res.send(false)
   }
})

