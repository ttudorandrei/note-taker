const { Router } = require("express");

const { renderHomePage, renderNotesPage } = require("../controllers/html");

const router = Router();

router.get("/", renderHomePage);

router.get("/notes", renderNotesPage);

module.exports = router;
