
const express = require("express");
const cors = require("cors");

const app = express();

/*
|--------------------------------------------------------------------------
| Global Middlewares
|--------------------------------------------------------------------------
*/

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/*
|--------------------------------------------------------------------------
| Root Endpoint
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    application: "SedatOS AI",
    service: "Backend API",
    version: "1.0.0",
    status: "running",
    timestamp: new Date().toISOString()
  });
});

/*
|--------------------------------------------------------------------------
| Export Express App
|--------------------------------------------------------------------------
*/

module.exports = app;
