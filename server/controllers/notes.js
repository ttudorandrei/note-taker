const getFromDb = require("../utils/getFromDb");
const writeToDb = require("../utils/writeToDb");

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
  const { id } = req.params;
  const { body } = req;
  const notes = getFromDb();
  const note = notes[id];
  const newNote = {
    ...note,
    ...body,
  };

  const newNotes = {
    ...notes,
    [id]: newNote,
  };

  writeToDb(JSON.stringify(newNotes));

  res.json({ success: true });
};

module.exports = {
  getNotes,
  getNoteById,
  updateNoteById,
};
