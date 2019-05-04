var express    = require("express"),
    router     = express.Router();
    passport   = require("passport");
    User       = require("../models/user");

// router.get("/", (req, res) => {
//     res.redirect("/posts");
// });

// router.get("/signup", (req, res) => {
//     res.render("signup");
// });

router.post("/signup", (req, res) => {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user) {
        if(err){
            res.status(500).json({ message: err.message });
        } else {
            passport.authenticate("local")(req, res, function() {
                res.status(200).json({ user: req.user });
            });
        }
    });
});

// router.get("/login", (req, res) => {
//     res.render("login");
// });

router.get('/user', (req, res, next) => {
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post("/login", passport.authenticate("local"), 
    (req, res) => {
        res.status(200).json({ user: req.user });
    }
);

router.get("/logout", (req, res) => {
    const username = req.user.username;
    req.logout();
    res.status(200).send(`logged ${username} out`);
    // req.flash("success", "Logged you out.");
});

module.exports = router;