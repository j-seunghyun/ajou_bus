const express = require('express');
const router = express.Router();
const station = require("../controller/stationController");
const check = require("../middleware/check");

router.get("/api/station/semester", check.checkLogin,  station.semesterInfo);
router.get("/api/station/vacation", check.checkLogin, station.vacationInfo);

module.exports = router;