const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const mongoose=require('mongoose')
const route=require('./routes/route')

app.use(bodyParser.json())
mongoose.connect("mongodb+srv://karthikramadugu:Karthiksai1@karthikcluster.b2ikjot.mongodb.net/blockChain",{
    useNewUrlParser:true
})
.then(()=>console.log("mongoDb is connected"))
.catch(err=>console.log(err))

app.use('/',route)
app.listen(3000,function(){
    console.log("MongoDb is running on port 3000")
})
