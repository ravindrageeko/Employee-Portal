const EmployeeDetails = require("../Models/Employee");
const responseHandler = require("../library/responseTemplate");

exports.createEmployee = async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');

    // Set a default password if it's not provided
    if (!req.body.password) {
      req.body.password = "random@4862"; // Default password
    }

    // Create a new employee profile with the data in req.body
    const newEmployee = new EmployeeDetails(req.body);

    // Save the new employee to the database
    await newEmployee.save();

    // Respond with success message
    return res.json(responseHandler(1, 201, "Employee profile created successfully", newEmployee));
  } catch (error) {
    return res.json(responseHandler(0, 400, "Error creating employee profile", error.message));
  }
};


exports.getAllEmployees = async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    const employees = await EmployeeDetails.find();
    if (employees.length === 0) {
      return res.status(404).json(responseHandler(0, 404, "No employees found."));
    }
    return res.json(responseHandler(1, 200, "Employees retrieved successfully", employees));
  } catch (error) {
    return res.json(responseHandler(0, 500, "Internal server error", error.message));
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    const { id } = req.params;
    const result = await EmployeeDetails.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json(responseHandler(0, 404, "No employee found with the given ID."));
    }

    return res.json(responseHandler(1, 200, "Employee deleted successfully", { id }));
  } catch (error) {
    return res.json(responseHandler(0, 500, "Internal server error", error.message));
  }
};
