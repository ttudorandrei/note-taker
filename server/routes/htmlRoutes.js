const { Router } = require("express");

const { renderHomePage, renderNotesPage } = require("../controllers/html");

const router = Router();

router.get("/notes", renderNotesPage);

router.get("/", renderHomePage);

module.exports = router;
