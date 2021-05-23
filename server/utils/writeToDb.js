// dependencies
const fs = require("fs");
const path = require("path");

// this should write the data into the db.json file
const writeToDb = (data) => {
  try {
    // this defines the path that is containing the db.json
    const filePath = path.join(__dirname, "../db/db.json");
    fs.writeFileSync(filePath, data, "utf-8");
  } catch (error) {
    console.log(error);
  }
};

module.exports = writeToDb;
