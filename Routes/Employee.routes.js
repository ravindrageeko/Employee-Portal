// routes/authRoutes.js
const express = require("express");
const {createEmployee, getAllEmployees, deleteEmployee } = require("../Controllers/EmployeeController");
const router = express.Router();

router.post("/createEmployee", createEmployee);
router.get("/getEmployee", getAllEmployees);
router.delete("/delete/:id", deleteEmployee );

module.exports = router;
