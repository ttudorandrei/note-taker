const { Router } = require("express");

const {
  getNotes,
  getNoteById,
  updateNoteById,
} = require("../controllers/notes");

const router = Router();

router.get("/notes", getNotes);
router.get("/notes/:id", getNoteById);
router.put("/notes/:id", () => {
  console.log("see if i=hits");
});

module.exports = router;
