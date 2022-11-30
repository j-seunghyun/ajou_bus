const express = require('express');
const router = express.Router();
const user = require("../controller/userController");

router.post("/api/signup", user.signup);
router.post("/api/login", user.signin);
router.post("/api/email", user.sendEmail);
router.get("/api/email/valid", user.checkAuth);
router.post("/api/logout", user.logout);
module.exports = router;