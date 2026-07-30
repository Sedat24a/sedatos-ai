const logger = require("../infrastructure/logger");

module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  logger.error(
    {
      error: err.message,
      stack: err.stack,
      path: req.path,
      method: req.method
    },
    "Application Error"
  );

  res.status(statusCode).json({
    success: false,
    error: {
      code: err.code || "INTERNAL_ERROR",
      message:
        statusCode === 500
          ? "Internal server error"
          : err.message
    },
    timestamp: new Date().toISOString()
  });
};