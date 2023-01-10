var mongoose = require("mongoose");

let todoSchema = mongoose.Schema({
  todo: String,
  details: String,
});

let todo = mongoose.model("todo", todoSchema);

module.exports = todo;