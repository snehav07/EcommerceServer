require('dotenv').config()
const cors = require('cors')
const express = require('express')
const router = require('./Routes/router')
require('./DB/connection')

// Create a Express Server
const ecServer = express()

// Use cors in epxress server
ecServer.use(cors())
ecServer.use(express.json())
ecServer.use(router)

const PORT = 3000 || process.env.PORT

ecServer.listen(PORT,()=>{
    console.log(`Ecommerce Server started at PORT:${PORT}`);
})

// http://localhost:3000/
ecServer.get("/",(req,res)=>{
    res.status(200).send(`<h1>Ecommerce Server Started and waiting for client request</h1>`)
})