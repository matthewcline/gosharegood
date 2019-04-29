var express    = require("express"),
    router     = express.Router();
    passport   = require("passport");
    User       = require("../models/user");

router.get("/", (req, res) => {
    res.redirect("/posts");
});

router.get("/signup", (req, res) => {
    res.render("signup");
});

router.post("/signup", (req, res) => {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user) {
        if(err){
            req.flash("error", err.message);
            return res.redirect("signup");
        }
        passport.authenticate("local")(req, res, function() {
            req.flash("success", `Welcome ${user.username}`)
            res.redirect("/posts");
        });
    });
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", passport.authenticate("local"), 
    (req, res) => {
        res.status(200).send(`req.session: ${req.session.passport.user}`);
    }
);

router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "Logged you out.");
    res.redirect("/posts");
});

module.exports = router;