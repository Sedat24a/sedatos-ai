const pino = require("pino");
const config = require("../../config");

const logger = pino(
  config.app.environment === "development"
    ? {
        transport: {
          target: "pino-pretty",
          options: {
            colorize: true,
            translateTime: "SYS:standard"
          }
        }
      }
    : {
        level: "info"
      }
);

module.exports = logger;