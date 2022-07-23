const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// routes


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
