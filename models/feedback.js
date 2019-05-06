var mongoose = require("mongoose");

var feedbackSchema = new mongoose.Schema({
    description: String,
});

module.exports = mongoose.model("Feedback", feedbackSchema);