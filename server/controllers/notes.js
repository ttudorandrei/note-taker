const getFromDb = require("../utils/getFromDb");
const writeToDb = require("../utils/writeToDb");
const { v4: uuidv4 } = require("uuid");

const getNotes = (req, res) => {
  const notes = getFromDb();

  res.json(notes);
};

const getNoteById = (req, res) => {
  const { id } = req.params;
  const notes = getFromDb();

  const note = notes[id];

  res.json(note);
};

const updateNoteById = (req, res) => {
  const { body } = req;
  const { id } = uuidv4;
  const notes = getFromDb();
  const note = notes[id];
  const newNote = {
    ...body,
    ...note,
    ...id,
  };

  const newNotes = {
    ...notes,
    [id]: newNote,
  };

  console.log(id, "1");
  console.log(notes, "2");
  console.log(note, "3");
  console.log(newNote, "4");
  console.log(newNotes, "5");

  writeToDb(JSON.stringify(newNotes));

  res.json({ success: true });
};

module.exports = {
  getNotes,
  getNoteById,
  updateNoteById,
};
