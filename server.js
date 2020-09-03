// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const apiRoute = require('./routes/apiroute.js');
const htmlRoute = require('./routes/htmlroute.js');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// require("./routes/apiroute.js")(app);
// require("./routes/htmlroute.js")(app);

app.use('/api', apiRoute);
app.use('/', htmlRoute);






app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });