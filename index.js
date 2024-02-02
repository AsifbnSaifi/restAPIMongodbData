const express = require("express");
require("dotenv").config();
const server = express();
const databaseConnect = require('./database/connectDatabase.js');
const getProducts = require('./routes/getProducts.js')
const getjsondata = require('./routes/getjsondata.js')
const addData = require('./routes/addData.js')
const cors = require('cors');
const bodyParser = require('body-parser');

// Use CORS middleware
server.use(cors())
server.use(bodyParser.json());

const port = process.env.PORT || 5000;  


// Find data from database
server.use(getProducts)
// add data to database
server.use(addData)
//data from jsondata
server.use(getjsondata)

databaseConnect().then(() => { 
    server.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })
 });
