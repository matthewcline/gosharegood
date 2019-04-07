var mongoose = require("mongoose");

// SCHEMA SETUP
var postSchema = new mongoose.Schema({
    title: String,
    url: String,
    description: String,
    votes: Number
    // author: {
    //     id: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "User"
    //     },
    //     username: String
    // },
    // comments: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Comment"
    //     }
    // ]
});

module.exports = mongoose.model("Post", postSchema);