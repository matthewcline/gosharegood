var express = require("express");
var router  = express.Router({mergeParams: true});
var Post = require("../models/post");
// var middleware = require("../middleware");

router.get("/", (req, res) => {
  User.findById(req.params.id, function(err, user) {
    if(err) {
      console.log(err);
    } else {
      res.send("render user profile here");
    }
  });
});

module.exports = router;

