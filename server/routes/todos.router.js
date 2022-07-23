const express = require("express");
const { createTodo } = require("../controllers/todos.controller");

const todosRouter = express.Router();

todosRouter.route("/").post(createTodo);

module.exports = todosRouter;
