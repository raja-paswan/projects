const express = require('express')
const bodyparser = require ('body-parser')
const route = require('./route/route')
const app = express();
const mongoose = require('mongoose')
const moment = require('moment')
app.use(bodyparser.json())

 mongoose.connect("mongodb+srv://rkpraja12:ua5o4Chk3yL3Qdbq@cluster0.rvxvxpr.mongodb.net/test2",{
   
})

.then(()=>console.log("mongoose is connect "))
.catch(err=> console.log(err))

app.use((req, res, next) => {
    let ip=req.ip;
    let path=req.originalUrl;
    let timeStamp=moment().format("YYYY-MM-DD hh:mm:ss");
    
    console.log(timeStamp, ip,path)
    next();
  })

app.use('/', route);



app.listen(process.env.Port||3000,function(){
    console.log((process.env.Port||3000+  " express is runing"))
    
})
