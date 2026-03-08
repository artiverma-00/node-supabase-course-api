const logger=(req, res, next)=> {
 console.log(`Request:${req.method} ${req.url}`)
  next();
}

module.exports = logger;

//e.g GET /courses
//POST /enroll