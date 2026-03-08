const express = require("express");
const validateEnrollment = require("../middleware/validateEnrollment");

const router = express.Router();

router.get("/", async (req, res) => {
  return res.status(200).json({
    message: "Courses route is working",
    data: [],
  });
});

router.post("/enroll", validateEnrollment, async (req, res) => {
  return res.status(201).json({
    message: "Enrollment payload is valid",
    data: req.body,
  });
});

module.exports = router;
