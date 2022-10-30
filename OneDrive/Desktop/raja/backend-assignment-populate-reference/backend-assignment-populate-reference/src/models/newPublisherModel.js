const mongoose=require("mongoose")

const newPublisherchema = new mongoose.Schema({
    name:String,
      headQuarter: String

},{timestamps:true})

module.exports=mongoose.model('newPublisher',newPublisherchema)