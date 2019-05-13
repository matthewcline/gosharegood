var express = require("express"),
    router  = express.Router(),  // check to see if {mergeParams: true} is needed?
    Post = require("../models/post"),
    middleware = require("../middleware");

router.get("/posts", (req, res) => {
    Post.find({}).sort('-timeCreated').exec(function(err, allPosts) {
        if(err) {
            console.log("Error: " + err);
        } else {
            res.json(allPosts);
        }
    });
});

module.exports = router;