const express = require("express");
const { getAllTodos } = require("../controllers/todos.controller");
const todosRouter = express.Router();

todosRouter.route("/").post(getAllTodos)

module.exports = todosRouter;
