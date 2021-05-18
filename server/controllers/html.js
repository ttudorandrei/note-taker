const getStaticFilePath = require("../utils/getStaticFile");

const renderHomePage = (req, res) => {
  const filePath = getStaticFilePath("index");

  res.sendFile(filePath);
};

const renderNotesPage = (req, res) => {
  const filePath = getStaticFilePath("notes");

  res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderNotesPage,
};
