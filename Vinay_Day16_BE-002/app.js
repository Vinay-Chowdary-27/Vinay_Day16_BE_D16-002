const express = require("express");
require("dotenv").config();

const employeeRoutes = require("./routes/employeeRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});