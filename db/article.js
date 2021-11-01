const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // }
  
}, { collection : "posts" });

module.exports = mongoose.model("Article", articleSchema);
