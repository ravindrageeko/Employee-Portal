// routes/authRoutes.js
const express = require("express");
const {
  requestChange,
  approveChange,
  getChangeRequest,
} = require("../Controllers/sessionChange.controller");
const router = express.Router();
const authMiddleware = require("../Middlewares/authMiddleware");
const isAdmin = require("../Middlewares/IsAdmin");

router.post("/requestChange", authMiddleware, isAdmin, requestChange);
router.post("/approveChange", authMiddleware, isAdmin, approveChange);
router.get("/getChangeRequest", authMiddleware, isAdmin, getChangeRequest);

module.exports = router;
