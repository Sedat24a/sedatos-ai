require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`
==================================================
🚀 SedatOS AI Backend API Started
==================================================
Environment : ${process.env.NODE_ENV || "development"}
Port        : ${PORT}
Status      : Running
==================================================
`);
});
