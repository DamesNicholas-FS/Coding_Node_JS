const express = require("express");
const router =require('../router/router.js')
const app = express();

//middleware
app.use(express.json())

//Default Service
app.get("/", (req,res,next)=>{
    res.status(200).json({
        message: `Service Is Up!`
    })
})

app.use('/example', router);

app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = (404);
    next(error)
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500).json({
        message: error.message,
        status: error.status,
    })
})

module.exports = app;