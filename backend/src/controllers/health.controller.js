const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    service: "SedatOS AI API",
    status: "healthy",
    requestId: req.id,
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  getHealth
};