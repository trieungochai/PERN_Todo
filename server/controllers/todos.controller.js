const pool = require("../database");

const getAllTodos = async (req, res) => {
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
    return res
      .status(201)
      .json({ success: true, message: "Successfully created", newTodo: newTodo.rows[0] });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { getAllTodos };
