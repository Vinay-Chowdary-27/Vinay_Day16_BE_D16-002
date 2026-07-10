const { query } = require("express-validator");

exports.employeeSearchValidation = [
  query("name")
    .notEmpty()
    .withMessage("Employee name is required"),
];