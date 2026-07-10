const express = require("express");
const router = express.Router();

const attendanceController = require(
  "../controllers/attendanceController"
);

router.get(
  "/filter",
  attendanceController.filterAttendance
);

module.exports = router;