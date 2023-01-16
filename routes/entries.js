const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer")
const dashboardController = require("../controllers/dashboard");
const { ensureAuth, ensureGuest } = require("../middleware/auth")


// Create entry
router.post("/createEntry", dashboardController.createEntry);
// Delete entry
router.delete("/deleteEntry/:id", dashboardController.deleteEntry);

// Create file entry
router.post("/createFile", upload.single("file"), dashboardController.createEntryFile);
// Delete file entry
router.delete("/deleteFile/:id", dashboardController.deleteWork);

module.exports = router;
