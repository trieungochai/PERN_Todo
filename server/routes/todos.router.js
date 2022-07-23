const express = require("express");
const { createTodo, gelAllTodos } = require("../controllers/todos.controller");

const todosRouter = express.Router();

todosRouter.route("/").post(createTodo);
todosRouter.route("/").get(gelAllTodos);

module.exports = todosRouter;
