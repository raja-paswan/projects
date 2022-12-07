const coinModel = require("../Models/blockchainModel")
const axios = require("axios")

const getBlockdata = async function (req, res) {

    try {
        var options = {
            method: 'get',
            url: 'http://api.coincap.io/v2/assets',
            Headers: {
                'Authorization': 'Bearer 8ee10f8e-3daf-4046-b108-fc72efd8af72'
            }
        }
        let result = await axios(options)

        let resultData = result.data
        let newArr = []
        for (let i = 0; i < resultData.data.length; i++) {
            let data = {}
            data.symbol = resultData.data[i].symbol
            data.name = resultData.data[i].name
            data.marketCapUsd = resultData.data[i].marketCapUsd
            data.priceUsd = resultData.data[i].priceUsd
            let createData = await coinModel.create(data)
            data.changePercent24Hr = resultData.data[i].changePercent24Hr
            newArr.push(data)
        }
        let sorted = newArr.sort()
        res.send({ msg: sorted })

    } 
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getBlockdata = getBlockdata

// Your Api Key is Ready!
// Your key: e52175d9-6812-4293-a45a-b34e371559de
// Expires on 12/7/2033
//api.coincap.io/v2/assets
