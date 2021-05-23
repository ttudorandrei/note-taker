// deconstructs router from express
const { Router } = require("express");

// deconstructs the functions needed for the api routes
const {
  getNotes,
  getNoteById,
  updateNoteById,
} = require("../controllers/notes");

const router = Router();

// route to get the notes from the db
router.get("/notes", getNotes);
// route to add note to the db
router.post("/notes", updateNoteById);
// route to target a note by id and update it
router.put("/notes/:id", updateNoteById);

module.exports = router;
