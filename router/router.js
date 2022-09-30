const { request, response } = require("express");
const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).json({
        message: "GET - SUCCESS",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

module.exports = router;