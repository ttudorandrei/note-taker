// deconstructs router from express
const { Router } = require("express");

// deconstructs the functions needed for the api routes
const { getNotes, postNoteById } = require("../controllers/notes");

const router = Router();

// route to get the notes from the db
router.get("/notes", getNotes);
// route to add note to the db
router.post("/notes", postNoteById);

module.exports = router;
