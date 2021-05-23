const { Router } = require("express");

const {
  getNotes,
  getNoteById,
  updateNoteById,
} = require("../controllers/notes");

const router = Router();

router.get("/notes", getNotes);
router.post("/notes", updateNoteById);
router.get("/notes/:id", getNoteById);
router.put("/notes/:id", updateNoteById);

module.exports = router;
