const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authorsModel")
const authorsModel = require("../models/authorsModel")
const bookModel = require("../models/bookModel")
const { all } = require("../routes/route")

//1
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const getBooksData=async function(req,res){
    let author = await authorsModel.find({author_name:"Chetan Bhagat"})
    let bookId = await bookModel.find({author_id:{$eq: author[0].author_id}})
    res.send({msg: bookId})
}

const findAuthor=async function(req,res){
    let  bookPrice = await bookModel.findOneAndUpdate(
        {name:"Two states"},
        {price : 100},
        {new : true}

    )
    let updatePrice = bookPrice.price
    let authorUpdate = await authorsModel.find({author_id: {$eq: bookPrice.author_id}}).select({author_name:1,_id:0})
    res.send({msg: authorUpdate , updatePrice})


}


const findBook=async function(req,res){
    let allBooks = await bookModel.find({price:{$gte:50,$lte:100}})
    let aut =allBooks.map(x => x.author_id)
    let updateBooks = await authorsModel.find({author_id :aut}).select({ author_name:1,_id:0})
    res.send({msg: updateBooks})
}

 module.exports.createBook= createBook
 module.exports.createAuthor= createAuthor
 module.exports.getBooksData= getBooksData
 module.exports.findAuthor= findAuthor
 module.exports.findBook= findBook