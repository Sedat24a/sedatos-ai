const app = require("./app");
const config = require("./config");
const logger = require("./infrastructure/logger");

const PORT = config.app.port;

const server = app.listen(PORT, () => {
  logger.info(
    {
      environment: config.app.environment,
      port: PORT,
    },
    `${config.app.name} Backend API Started`
  );
});

const shutdown = (signal) => {
  logger.info(`${signal} received. Closing server...`);

  server.close(() => {
    logger.info("Server closed successfully");
    process.exit(0);
  });
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));