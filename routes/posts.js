var express = require("express"),
    router  = express.Router(),  // check to see if {mergeParams: true} is needed?
    Post = require("../models/post"),
    User = require("../models/user"),
    middleware = require("../middleware");


// router.get("/", (req, res) => {
//     Post.find({}).sort('-votes').exec(function(err, allPosts) {
//         if(err) {
//             console.log("Error: " + err);
//         } else {
//             res.render("posts/index", {posts: allPosts});
//         }
//     });
// });

router.post("/", middleware.isLoggedIn, (req, res) => {
    var post = {
        title: req.body.title,
        url: req.body.url,
        description: req.body.description,
    }
    post.author = {
        id: req.user._id,
        username: req.user.username
    }
    post.votes = 0;
    post.timeCreated = Date.now();
    Post.create(post, (err, newPost) => {
        if(err) {
            console.log("Error: " + err);
        } else {
            res.send("successfully created post");
        }
    });
});

router.get("/:id", (req, res) => {
    Post.findById(req.params.id, (err, foundPost) => {
        if(err || !foundPost) {
            req.flash("error", "Post not found");
        } else {
            res.status(200).json({post: foundPost});
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
                    var index = foundUser.votes.indexOf(foundPost._id);
                    if(index === -1) {
                        votesDifference = 1;
                        votes.push(foundPost._id);
                    } else {
                        votesDifference = -1;
                        votes.splice(index, 1);
                    }
                    const postVotes = foundPost.votes + votesDifference;
                    foundPost.votes = postVotes;
                    foundPost.save();
                    foundUser.votes = votes;
                    foundUser.save((err) => {
                        if(err) {
                            console.log(err);
                        } else {
                            res.status(200).json({ votes: postVotes });
                        }
                    });
                }
            });
        }
    });
});

router.put("/:id", middleware.checkPostOwnership, (req, res) => {
    var post = {
        title: req.body.title,
        url: req.body.url,
        description: req.body.description,
    }
    Post.findByIdAndUpdate(req.params.id, post, (err, updatedPost) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).json({post: updatedPost});
        }
    });
});

router.delete("/:id", middleware.checkPostOwnership, (req, res) => {
    Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).json({ post: deletedPost });
        }
    })
});

module.exports = router;