// 'use strict';

// const instead of var?
var express              = require("express"),
    app                  = express(),
    cors                 = require("cors"),
    bodyParser           = require("body-parser"),
    mongoose             = require("mongoose"),
    flash                = require("connect-flash"),
    passport             = require("passport"),
    LocalStrategy        = require("passport-local"),
    methodOverride       = require("method-override"),
    Post                 = require("./models/post"),
    User                 = require("./models/user"),
    seedDB               = require("./seeds");

var indexRoutes          = require("./routes/index"),
    postRoutes           = require("./routes/posts"),
    apiRoutes           = require("./routes/api"),
    userRoutes          = require("./routes/users");

var PORT = process.env.PORT || 3001;
var url = process.env.DATABASEURL || "mongodb://localhost:27017/gosharegood";
mongoose.connect(url, { useNewUrlParser: true });
app.use(cors());    // TODO: add whitelist for cors
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();

// passport configuration
app.use(require("express-session")({
    secret: "t3rc3s r3pus",
    resave: false,
    saveUninitialized: false 
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/posts", postRoutes);
app.use("/api", apiRoutes);
app.use("/users/:id", userRoutes);

// possibly need to pass in process.env.IP for Heroku
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});