const express = require("express");
const Router = express.Router();

Router.get("/" , (req , res)=>{
    res.send("hi")
})

Router.post('/pay' , (req,res,next)=>{
    let monthCount = req.body.year*12+req.body.month
    if (checkLuhn(req.body.cardNo))
     {
        if(checkExpried(monthCount)){
            res.send("success")
          }
          else{
            res.send("expired")
          }
     }
     
    else
    {
        res.send("card error")
    }
     
 })

 function checkExpried(monthCount){
    const d = new Date();
    let Cyear = d.getFullYear()-2000;
    let Cmonth = d.getMonth();
    let cMonthCount = Cyear*12+Cmonth;
    if(monthCount>cMonthCount){
        return true
    }
    else{
        return false
    }
 }

 function checkLuhn(cardNo)
    {
        let nDigits = cardNo.length;
 
        let nSum = 0;
        let isSecond = false;
        for (let i = nDigits - 1; i >= 0; i--)
        {
 
            let d = cardNo[i].charCodeAt() - '0'.charCodeAt();
 
            if (isSecond == true)
                d = d * 2;
 
            // We add two digits to handle
            // cases that make two digits
            // after doubling
            nSum += parseInt(d / 10, 10);
            nSum += d % 10;
 
            isSecond = !isSecond;
        }
        return (nSum % 10 == 0);
    }

module.exports = Router;