// dependencies

const fs = require("fs");
const path = require("path");

// this will read the data that is in the db.json file
const getFromDb = () => {
  try {
    // this is the path that is containing the db.json
    const filePath = path.join(__dirname, "../db/db.json");
    // this reads the data in the file, "utf-8" is the encoding
    const data = fs.readFileSync(filePath, "utf-8");
    // data needs to be parsed to be read
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getFromDb;
