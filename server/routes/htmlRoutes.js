// deconstructs router from express
const { Router } = require("express");

// deconstructs "renderHomePage" and "renderNotesPage" functions for the html routes
const { renderHomePage, renderNotesPage } = require("../controllers/html");

const router = Router();

// renders the notes page
router.get("/notes", renderNotesPage);

// renders the home page
router.get("/", renderHomePage);

module.exports = router;
