var express = require("express"),
    router  = express.Router(),  // check to see if {mergeParams: true} is needed?
    Post = require("../models/post"),
    middleware = require("../middleware");

router.get("/", (req, res) => {
    Post.find({}).sort('-votes').exec(function(err, allPosts) {
        if(err) {
            console.log("Error: " + err);
        } else {
            res.render("posts/index", {posts: allPosts});
        }
    });
});

router.post("/", middleware.isLoggedIn, (req, res) => {
    var post = req.body.post;
    post.author = {
        id: req.user._id,
        username: req.user.username
    }
    Post.create(post, (err, newPost) => {
        if(err) {
            console.log("Error: " + err);
        } else {
            res.redirect("/posts");
        }
    });
});

// add middleware
router.put("/:id/votes", (req, res) => {
    User.findById(currentUser._id, (err, foundUser) => {
        if(err) {
            console.log("error");
        } else {
            console.log("found user: ", foundUser);
        }
    });
    // Post.findByIdAndUpdate(req.params.id, req.body.comment, function(err, updatedComment) {
    //     if(err) {
    //         res.redirect("back");
    //     } else {
    //         res.redirect(`/campgrounds/${req.params.id}/`);
    //     }
    // });
});

router.get("/new", middleware.isLoggedIn, (req, res) => {
    res.render("posts/new");
})

module.exports = router;