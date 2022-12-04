const express = require('express');
const router = express.Router();
const notice = require("../controller/noticeController");
const check = require("../middleware/check");

router.get("/api/notice", notice.allNoticeInfo);
router.get("/api/notice/:noticeId", notice.noticeInfo);
router.post("/api/notice", check.check, notice.posting);
module.exports = router;