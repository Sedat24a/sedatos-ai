const NODE_ENV = process.env.NODE_ENV || "development";

const allowedEnvironments = [
  "development",
  "test",
  "staging",
  "production"
];

if (!allowedEnvironments.includes(NODE_ENV)) {
  throw new Error(
    `Invalid NODE_ENV value: "${NODE_ENV}". Allowed values: ${allowedEnvironments.join(", ")}`
  );
}

const environment = Object.freeze({
  nodeEnv: NODE_ENV,

  isDevelopment: NODE_ENV === "development",
  isTest: NODE_ENV === "test",
  isStaging: NODE_ENV === "staging",
  isProduction: NODE_ENV === "production",

  appName: process.env.APP_NAME || "SedatOS AI",

  apiVersion: process.env.API_VERSION || "v1",

  region: process.env.APP_REGION || "global",

  timezone: process.env.APP_TIMEZONE || "UTC",

  locale: process.env.APP_LOCALE || "en",

  maintenanceMode: process.env.MAINTENANCE_MODE === "true",

  debugEnabled:
    process.env.DEBUG === "true" || NODE_ENV === "development",

  logLevel:
    process.env.LOG_LEVEL ||
    (NODE_ENV === "production" ? "warn" : "debug"),

  aiEnabled: process.env.AI_ENABLED !== "false",

  metricsEnabled: process.env.METRICS_ENABLED !== "false",

  docsEnabled: NODE_ENV !== "production"
});

module.exports = environment;
