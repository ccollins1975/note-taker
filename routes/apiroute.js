const router = require("express").Router();
let db = require("../db/db.json");
const shortid = require('shortid');
const fs = require("fs");
const path = require("path");
router.get("/notes", function (req, res) {

    res.json(db)
});
router.post("/notes", function (req, res) {
    // res.json(db)
    var newNote = {
        title: req.body.title,
        text: req.body.text,
        id: shortid.generate()
    }
    db.push(newNote);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(db));
    return res.json(db)
});
router.delete("/notes/:id", function (req, res) {
    // res.json(db)
    // fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (error, data) {
    //     console.log (data)
    //     let results = data;
    //     if (error) {
    //         console.log(error)
    //     } else {
        console.log ("delete")
            db = db.filter((note) =>  note.id !== req.params.id);
            
            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(db),err =>{
                if (err)throw err
                console.log('res')
                res.sendStatus(200)
            });
            

        // }
    // });
});


module.exports = router;