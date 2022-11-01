const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook", BookController.createBook  )
router.post("/createAuthor", BookController.createAuthor )
router.get("/getBooksData", BookController.getBooksData )
router.get("/findAuthor", BookController.findAuthor)
router.get("/findBook", BookController.findBook)





module.exports = router;