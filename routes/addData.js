const express = require("express");
const addData = express();
const product = require('../schema/productsSchema.js')


addData.post('/addData', async (req, res) =>{
     
     const singleProduct = req.body
     console.log('single',singleProduct)

         try {
              await product.create(singleProduct)
          res.status(200).json({ msg : 'save'})
            
         } catch (error) {
              console.log(error)
              res.status(400).json({msg : 'internal server error'})
         }
   
})

module.exports = addData