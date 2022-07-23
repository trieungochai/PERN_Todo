const express = require("express");
const {
  createTodo,
  gelAllTodos,
  getSingleTodo,
} = require("../controllers/todos.controller");

const todosRouter = express.Router();

todosRouter.route("/").post(createTodo);
todosRouter.route("/").get(gelAllTodos);
todosRouter.route("/:id").get(getSingleTodo);

module.exports = todosRouter;
