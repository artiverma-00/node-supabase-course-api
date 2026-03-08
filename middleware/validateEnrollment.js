const validateEnrollment=(req, res, next)=> {
  const { studentName, studentEmail, courseId } = req.body;

  if (!studentName || !courseId) {
    return res.status(400).json({
      message: "studentName, courseId are required",
    });
  }

  next();
}

module.exports = validateEnrollment;
