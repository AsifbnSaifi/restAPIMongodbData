require('dotenv').config()
const mongoose = require('mongoose')
// const products = require('../schema/productsSchema.js')
// const productsJson = require('../products.json')
const  blackcoffer = require('../schema/jsondataSchema.js')
const jsonData  =require('../jsondata.json')

const DatabaseURL = process.env.MONGOURL;
const databaseConnect = async ()=>{
   try {
        await mongoose.connect(DatabaseURL)
        console.log('Connected to the Database')
      //   await blackcoffer.create(jsonData)
      //   console.log('file added Succesful')
   } catch (error) {
    console.error('Error Not Connect to Database');
    process.exit(0);
   }
}

module.exports = databaseConnect