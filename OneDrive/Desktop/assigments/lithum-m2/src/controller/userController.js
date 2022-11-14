
const userModel = require('../model/userModel')

//Write a POST api to create a user that takes user details from the request body. If the header isFreeAppUser is not present terminate the request response cycle with an 
//error message that the request is missing a mandatory header
let createUser = async (req, res) => {
    let userinfo = req.body
    let data = await userModel.create(userinfo)
    res.send({ newuser: data })

}


 module.exports.createUser=createUser





