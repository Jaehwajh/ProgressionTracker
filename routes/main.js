const express = require("express");
const router = express.Router();
const {ensureAuth, ensureGuest} = require("..middleware/auth");
const homepageController = require("../controllers/homepage");

// Loading Homepage
router.get("/", homepageController.getHomepage);

module.exports = router;