var express = require("express"),
    router  = express.Router();

router.get("/", (req, res) => {
    res.render("posts/index");
});

router.post("/", (req, res) => {
    res.send("you sent a post!");
});

module.exports = router;