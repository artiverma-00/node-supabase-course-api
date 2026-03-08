const express = require("express");
const router = express.Router();
const supabase = require("../supabaseClient");

const validateEnrollment = require("../middleware/validateEnrollment");

/*
GET /courses
Get all courses
*/

router.get("/courses", async (req, res) => {
  const { data, error } = await supabase.from("courses").select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

/*
POST /enroll
Enroll a student
*/

router.post("/enroll", validateEnrollment, async (req, res) => {
  const { student_name, course_id } = req.body;

  const { data, error } = await supabase
    .from("enrollments")
    .insert([{ student_name, course_id }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({
    message: "Enrollment successful",
    data,
  });
});

/*
GET /courses/:id/enrollments
Get enrollments for a course
*/

router.get("/courses/:id/enrollments", async (req, res) => {
  const courseId = req.params.id;

  const { data, error } = await supabase
    .from("enrollments")
    .select("student_name, course_id")
    .eq("course_id", courseId);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

module.exports = router;
