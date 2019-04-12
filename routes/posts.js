var express = require("express"),
    router  = express.Router(),
    Post = require("../models/post");

router.get("/", (req, res) => {
    // Post.find({}, (err, allPosts) => {
    //     if(err) {
    //         console.log("Error: " + err);
    //     } else {
    //         res.render("posts/index", {posts: allPosts});
    //     }
    // });
    Post.find({}).sort('-votes').exec(function(err, allPosts) {
        if(err) {
            console.log("Error: " + err);
        } else {
            res.render("posts/index", {posts: allPosts});
        }
    });
});

router.post("/", (req, res) => {
    Post.create(req.body.post, (err, newPost) => {
        if(err) {
            console.log("Error: " + err);
        } else {
            res.redirect("/posts");
        }
    });
});

router.get("/new", (req, res) => {
    res.render("posts/new");
})

module.exports = router;