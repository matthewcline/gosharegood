// 'use strict';

// const instead of var?
var express              = require("express"),
    app                  = express(),
    bodyParser           = require("body-parser"),
    mongoose             = require("mongoose"),
    Post                 = require("./models/post");

var indexRoutes          = require("./routes/index"),
    postRoutes           = require("./routes/posts");

var PORT = process.env.PORT || 3000;

var url = process.env.DATABASEURL || "mongodb://localhost:27017/posts"
mongoose.connect(url, { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

if(process.env.ENV && process.env.ENV === 'production') {
    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https') {
            res.redirect(`https://${req.header('host')}${req.url}`);
        }
        else {
            next();
        }
    });
}

app.use("/", indexRoutes);
app.use("/posts", postRoutes);

// possibly need to pass in process.env.IP for Heroku
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});