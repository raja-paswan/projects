//__________________________ Import : Necessary Package and Modules ___________________________________________

const express = require("express")
// const bodyParser = require("body-parser")
const route = require("./routes/route")
const mongoose=require('mongoose')
const app = express();

app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))

//__________________________ Connection : MongoDB Cluster ___________________________________________


mongoose.connect("mongodb+srv://rkpraja12:ua5o4Chk3yL3Qdbq@cluster0.rvxvxpr.mongodb.net/testpr2", {
    useNewUrlParser: true
})
    .then(() => console.log("mongoDb is connected"))
    .catch(err => console.log(err))

app.use("/", route);

//__________________________ Listen : Port ___________________________________________

app.listen(process.env.PORT || 3000, function () {
    console.log("express app running on port" + (process.env.PORT || 3000))
})