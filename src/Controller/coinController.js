const axios=require("axios")
const coinModel=require('../Models/cryptoCurrencyModel')
const getcoins=async function(req,res){
    try{
        let data=await axios.get("https://api.coincap.io/v2/assets")
        let coinData=data["data"]
        //console.log(coinData.data)
        let reqArr=coinData.data
        let check=await coinModel.find()
        if(check.length==0){
            let x=[]
            let obj
       for(let i=0;i<reqArr.length;i++){
            obj={
    symbol : reqArr[i].symbol,
    name  : reqArr[i].name,
    marketCapUsd : reqArr[i].marketCapUsd,
    priceUsd : reqArr[i].priceUsd,
                }
    let create=await coinModel.create(obj)
    x.push(obj)  
            }
res.status(200).send({status:true})
        }
        else{
            let getData=await coinModel.find().lean()
            for(let i=0;i<getData.length;i++){
                getData[i].changePercent24Hr=reqArr[i].changePercent24Hr
            }
            for(let i=0;i<getData.length;i++){
                getData.sort((a,b)=>Number(b.changePercent24Hr)-Number(a.changePercent24Hr))
            }
            return res.send({data:getData})
        }

    }catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}
module.exports.getcoins=getcoins