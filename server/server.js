// node dependencies
const express = require("express");
const cors = require("cors");

// dev dependencies
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// sets the port
const PORT = 8000;

// this initializes the express app
const app = express();

// Middleware

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static(__dirname + "../public"));
app.use(express.static("./"));
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

console.log(__dirname + "/public");

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
