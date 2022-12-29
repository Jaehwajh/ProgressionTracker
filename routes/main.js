const express = require("express");
const router = express.Router();
const {ensureAuth, ensureGuest} = require("..middleware/auth");
const homepageController = require("../controllers/homepage");
const authController = require("../controllers/auth");

// Loading Homepage
router.get("/", homepageController.getHomepage);

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

router.get("/logout", authController.logout);

router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;