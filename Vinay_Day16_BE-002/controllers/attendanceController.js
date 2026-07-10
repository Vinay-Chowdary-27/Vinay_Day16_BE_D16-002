const pool = require("../config/db");

exports.filterAttendance = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 5 } = req.query;

    const offset = (page - 1) * limit;

    const result = await pool.query(
      `SELECT * FROM attendance
       WHERE status = $1
       LIMIT $2 OFFSET $3`,
      [status, limit, offset]
    );

    res.status(200).json({
      page: Number(page),
      limit: Number(limit),
      data: result.rows,
    });
  } catch (error) {
    next(error);
  }
};