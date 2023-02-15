const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const homepageController = require("../controllers/homepage");
const authController = require("../controllers/auth");
const dashboardController = require("../controllers/dashboard");

// Loading Homepage
router.get("/", homepageController.getHomepage);

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

router.get("/logout", authController.logout);

router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

router.get("/dashboard", ensureAuth, dashboardController.getDashboard);
router.get("/new", dashboardController.newEntry);

router.get("/entries", ensureAuth, dashboardController.getEntries);

module.exports = router;

