const router = require("express").Router();
const db = require("../db/db.json");
const shortid = require('shortid');
router.get("/notes", function(req,res){
    res.json(db)
});
router.post("/notes", function(req,res){
    // res.json(db)
    var newNote = {
        title: req.body.title,
        text: req.body.text,
        id:shortid.generate()
    }
});
router.delete("/notes/:id", function(req,res){
    res.json(db)
});


module.exports = router;
 