const express = require("express");
const app = express();
const cors = require("cors");
const todosRouter = require("./routes/todos.router");
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/todos", todosRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
