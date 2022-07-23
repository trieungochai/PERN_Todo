const express = require("express");
const {
  createTodo,
  gelAllTodos,
  getSingleTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos.controller");

const todosRouter = express.Router();

todosRouter.route("/").post(createTodo);
todosRouter.route("/").get(gelAllTodos);
todosRouter.route("/:id").get(getSingleTodo);
todosRouter.route("/:id").put(updateTodo);
todosRouter.route("/:id").delete(deleteTodo);

module.exports = todosRouter;
