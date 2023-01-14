const express=require("express")
const router=express.Router()
const coinC=require('../Controller/coinController')
router.get('/coins',coinC.getcoins)

module.exports=router