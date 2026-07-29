
require("dotenv").config();

const config = {
  app: {
    name: process.env.APP_NAME || "SedatOS AI",
    version: process.env.APP_VERSION || "1.0.0",
    environment: process.env.NODE_ENV || "development",
    port: Number(process.env.PORT || 3000),
    apiPrefix: "/api/v1"
  }
};

module.exports = config;
