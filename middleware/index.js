var Post = require("../models/post");

var middlewareObj = {};

middlewareObj.isLoggedIn = function (req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You need to be logged in to do that.");
    res.redirect("/login");
}

middlewareObj.checkPostOwnership = (req, res, next) => {
    if(req.isAuthenticated()) {
        Post.findById(req.params.id, (err, foundPost) => {
            if(err || !foundPost) {
                req.flash("error", "Post not found");
                res.redirect("back");
            } else {
                if(foundPost.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that.");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that.");
        res.redirect("back");
    }
}

module.exports = middlewareObj;