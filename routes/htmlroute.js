const router = require('express').Router();
const path = require("path");


   router.get("/", function(rec,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
   router.get("/notes",function(rec,res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));  
    });

module.exports = router;