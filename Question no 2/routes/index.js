var express = require("express");
var todo = require("../models/todos.js");

var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  let todos = await todo.find();
  res.render("./index", { product: todos });
});

module.exports = router;
