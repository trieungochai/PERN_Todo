const pool = require("../database");

const createTodo = async (req, res) => {
  const { description } = req.body;
  if (!description)
    return res
      .status(400)
      .json({ success: false, message: "Description must be provided" });

  try {
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    return res.status(201).json({
      success: true,
      message: "Successfully created",
      newTodo: newTodo.rows[0],
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const gelAllTodos = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    return res.status(200).json({ success: true, allTodos: allTodos.rows });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const getSingleTodo = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(404).json({ success: false, message: "Not found" });

  try {
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    return res.status(200).json({ success: true, todo: todo.rows[0] });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { createTodo, gelAllTodos, getSingleTodo };
