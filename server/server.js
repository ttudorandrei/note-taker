// node dependencies
const express = require("express");
const cors = require("cors");

// sets the port
const PORT = 8000;

// this initializes the express app
const app = express();

// Middleware

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
