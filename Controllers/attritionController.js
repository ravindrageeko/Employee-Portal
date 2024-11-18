const EmployeeAttrition = require("../Models/EmployeeAttrition");
const responseHandler = require("../library/responseTemplate");

exports.createAttrition = async (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    const newAttrition = new EmployeeAttrition(req.body);
    const savedAttrition = await newAttrition.save();
    res.json(
      responseHandler(1, 200, "Attrition saved successfully", savedAttrition)
    );
  } catch (error) {
    res
      .status(400)
      .json(responseHandler(0, 400, "Error creating attrition", error.message));
  }
};

exports.getAllAttrition = async (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    const data = await EmployeeAttrition.find();
    return res.json(
      responseHandler(1, 200, "User retrived successfull.", data)
    );
  } catch (error) {
    res.json(responseHandler(0, 500, "Internal server error", error.message));
  }
};
