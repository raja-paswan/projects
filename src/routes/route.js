const express=require('express')
const router=express.Router();
const blockController = require("../controllers/blockController");





router.get("/blockchain",blockController.getBlockdata)

module.exports = router
