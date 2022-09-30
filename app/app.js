import router from '../router/router';
const express = require("express");
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

module.exports = app;