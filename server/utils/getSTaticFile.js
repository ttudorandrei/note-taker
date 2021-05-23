// dependencies
const path = require("path");

// this would return the file path for the static files
const getStaticFilePath = (fileName) => {
  try {
    // dynamically builds the path for the static files
    const filePath = path.join(__dirname, "../../public", `/${fileName}.html`);
    return filePath;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getStaticFilePath;
