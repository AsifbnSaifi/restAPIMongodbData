const express = require("express");
const getjsondata = express();
const jsondata = require('../schema/jsondataSchema.js')


getjsondata.get('/jsondata' , async (req, res) =>{
       const data = await jsondata.find({})
       res.status(200).json(data)
})

module.exports = getjsondata