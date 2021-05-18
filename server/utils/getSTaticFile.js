const path = require("path");

const getStaticFilePath = (fileName) => {
  try {
    const filePath = path.join(__dirname, "../../public", `/${fileName}.html`);
    return filePath;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getStaticFilePath;
