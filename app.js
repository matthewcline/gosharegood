// 'use strict';

// const instead of var?
var express = require("express");
    app     = express();

var PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("YOU'RE ON THE HOME PAGE!!");
});

// possibly need to pass in process.env.IP for Heroku
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});