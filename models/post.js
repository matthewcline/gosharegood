var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    title: String,
    url: String,
    description: String,
    image: String,
    votes: Number,
    timeCreated: Number,
    author: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      username: String
    }
});

module.exports = mongoose.model("Post", postSchema);