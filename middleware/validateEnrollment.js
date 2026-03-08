function validateEnrollment(req, res, next) {
  const { studentName, studentEmail, courseId } = req.body;

  if (!studentName || !studentEmail || !courseId) {
    return res.status(400).json({
      message: "studentName, studentEmail, and courseId are required",
    });
  }

  next();
}

module.exports = validateEnrollment;
