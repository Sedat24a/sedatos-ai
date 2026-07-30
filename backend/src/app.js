const express = require("express");
const cors = require("cors");

const requestId = require("./middlewares/requestId");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(requestId);

app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  credentials: true
}));

app.use(express.json({
  limit: "10mb"
}));

app.use(express.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    application: "SedatOS AI",
    service: "Backend API",
    version: "1.0.0",
    status: "running",
    requestId: req.id,
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "SedatOS AI API",
    requestId: req.id
  });
});

app.use(errorHandler);

module.exports = app;