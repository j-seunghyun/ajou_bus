const express = require('express');
const router = express.Router();
const station = require("../controller/stationController");

router.get("/api/station/semester", station.semesterInfo);
router.get("/api/station/vacation", station.vacationInfo);

module.exports = router;