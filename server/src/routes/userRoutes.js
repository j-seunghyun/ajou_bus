const express = require('express');
const router = express.Router();
const user = require("../controller/userController");
const check = require("../middleware/check");

router.post("/api/signup", user.signup);
router.post("/api/login", user.signin);
router.post("/api/email", user.sendEmail);
router.post("/api/email/valid", user.checkAuth);
router.post("/api/logout", check.checkLogin, user.logout);
router.delete("/api/withdraw", check.checkLogin, user.delete);
module.exports = router;