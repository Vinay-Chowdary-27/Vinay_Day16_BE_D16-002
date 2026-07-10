const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController");
const {
  employeeSearchValidation,
} = require("../middleware/validation");

const { validationResult } = require("express-validator");

router.get(
  "/search",
  employeeSearchValidation,
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    next();
  },
  employeeController.searchEmployees
);

module.exports = router;