const getStaticFilePath = require("../utils/getStaticFile");

const renderHomePage = (req, res) => {
  const filePath = getStaticFilePath("index");
  console.log(filePath);

  res.sendFile(filePath);
};

const renderNotesPage = (req, res) => {
  const filePath = getStaticFilePath("notes");
  console.log(filePath);

  res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderNotesPage,
};
