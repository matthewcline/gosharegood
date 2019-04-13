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

router.put("/:id/votes", middleware.isLoggedIn, (req, res) => {
    User.findById(req.user._id, (err, foundUser) => {
        if(err) {
            console.log("error");
        } else {
            Post.findById(req.params.id, (err, foundPost) => {
                if(err) {
                    console.log(err);
                } else {
                    var votes = foundUser.votes;
                    var votesDifference;
                    console.log("foundUser.votes: ", foundUser.votes);
                    var index = foundUser.votes.indexOf(foundPost._id);
                    console.log("index: ", index);
                    if(index === -1) {
                        console.log("did not find post id object in foundUser.votes");
                        votesDifference = 1;
                        votes.push(foundPost._id);
                        foundUser.votes
                    } else {
                        console.log("found post id object in foundUser.votes");
                        votesDifference = -1;
                        votes.splice(index, 1);
                    }
                    foundPost.votes = foundPost.votes + votesDifference;
                    foundPost.save();
                    foundUser.votes = votes;
                    foundUser.save();
                    res.redirect("/posts");
                }
            });
        }
    });
});

router.get("/new", middleware.isLoggedIn, (req, res) => {
    res.render("posts/new");
})

module.exports = router;