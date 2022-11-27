const express = require('express');
const router = express.Router();
const user = require("../controller/userController");
    // 회원가입 API 작성
router.post("/api/signup", user.signup);
router.post("/api/login", user.signin);

module.exports = router;