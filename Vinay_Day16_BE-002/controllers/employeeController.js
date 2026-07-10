const pool = require("../config/db");

exports.searchEmployees = async (req, res, next) => {
  try {
    const { name } = req.query;

    const result = await pool.query(
      "SELECT * FROM employees WHERE name ILIKE $1",
      [`%${name}%`]
    );

    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};