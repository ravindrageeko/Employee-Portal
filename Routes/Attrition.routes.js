const express = require("express");
const {createAttrition, getAllAttrition} = require("../Controllers/attritionController")
const router = express.Router();

router.post("/createAttrition", createAttrition);
router.get("/getAttrition", getAllAttrition);

module.exports = router;
