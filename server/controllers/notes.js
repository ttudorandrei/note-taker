// dependencies
const getFromDb = require("../utils/getFromDb");
const writeToDb = require("../utils/writeToDb");
const { v4: uuidv4 } = require("uuid");

// this should return the data from db.json file
const getNotes = (req, res) => {
  const notes = getFromDb();

  res.json(notes);
};

// this should target the note by its id
const getNoteById = (req, res) => {
  const { id } = req;
  const notes = getFromDb();

  const note = notes[id];

  res.json(note);
};

// creates a new not and adds an id so it can be targeted by id
const postNoteById = (req, res) => {
  const { body } = req;
  // generates random id
  const id = uuidv4();
  // gets the data from the db
  const notes = getFromDb();
  // adds the id into the new note object
  const newNote = {
    ...body,
    id: id,
  };

  // adds the old notes plus the newly created one and adds the id as a key
  const newNotes = [...notes, newNote];

  // writes the new data to the db.json file
  writeToDb(JSON.stringify(newNotes));

  res.json({ success: true });
};

module.exports = {
  getNotes,
  getNoteById,
  postNoteById,
};
