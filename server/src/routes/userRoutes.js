const express = require('express');
const router = express.Router();
const user = require("../controller/userController");
const check = require("../middleware/check");

router.post("/api/signup", user.signup);
router.post("/api/login", user.signin);
router.post("/api/email", user.sendEmail);
router.get("/api/email/valid", user.checkAuth);
router.post("/api/logout",  check.check, user.logout);
module.exports = router;