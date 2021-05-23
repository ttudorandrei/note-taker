// dependencies
const getStaticFilePath = require("../utils/peter");

// this creates the filepath for index.html
const renderHomePage = (req, res) => {
  const filePath = getStaticFilePath("index");

  // this will serve the static file (index.html in this case)
  res.sendFile(filePath);
};

// this creates the filepath for notes.html
const renderNotesPage = (req, res) => {
  const filePath = getStaticFilePath("notes");

  // this will serve the static file (notes.html in this case)
  res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderNotesPage,
};
