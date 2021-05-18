// node dependencies
const express = require("express");
const path = require("path");

const directoryPath = path.resolve(__dirname);

// this initializes the express app and sets the port
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(directoryPath));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
