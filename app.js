// 'use strict';

// const instead of var?
var express = require("express");
    app     = express();

var PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

// if(process.env.NODE_ENV === 'production') {
app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
        res.redirect(`https://${req.header('host')}${req.url}`);
    }
    else {
        next();
    }
});
//   }

app.get("/", (req, res) => {
    res.render("home");
});

// possibly need to pass in process.env.IP for Heroku
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});