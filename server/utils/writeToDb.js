const fs = require("fs");
const path = require("path");

const writeToDb = (data) => {
  try {
    const filePath = path.join(__dirname, "../db/db.json");
    fs.writeFileSync(filePath, data, "utf-8");
  } catch (error) {
    console.log(error);
  }
};

module.exports = writeToDb;
