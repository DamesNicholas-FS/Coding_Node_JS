import app from './app/app';
const http = require("http");
require('dotenv').config();

http.createServer(app).listen(process.env.port,()=>{
    console.log(`Server is on port ${process.env.port}`)
})