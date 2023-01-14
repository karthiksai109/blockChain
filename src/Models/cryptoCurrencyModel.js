const mongoose=require('mongoose')
const cryptoCurrency=new mongoose.Schema({
 symbol: {
    type:String
 },
    // String and Unique
name:{
    type:String
},
 // String and Unique
marketCapUsd:{
    type:String
}, // String  ( not Number)
priceUsd:{
    type:String
} //String
   

},{timestamps:true})

module.exports=mongoose.model("Bitcoin",cryptoCurrency)