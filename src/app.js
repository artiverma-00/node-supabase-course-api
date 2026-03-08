const express = require("express");
const cors = require("cors");
const requestLogger = require("./middlewares/requestLogger");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Backend is running",
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the backend API",
  });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
