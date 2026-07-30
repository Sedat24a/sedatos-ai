const app = require("./app");

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`SedatOS AI API running on port ${PORT}`);
});


process.on("SIGTERM", () => {
  console.log("SIGTERM received. Closing server...");

  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});


process.on("SIGINT", () => {
  console.log("SIGINT received. Closing server...");

  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});