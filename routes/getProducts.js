const express = require("express");
const getalldata = express();
const product = require('../schema/productsSchema.js')



getalldata.get('/data' , async (req, res) =>{
          const data =  await product.find({})
          res.status(200).json({data})          
})

module.exports = getalldata
