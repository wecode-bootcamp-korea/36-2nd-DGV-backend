const http = require("http");
require("dotenv").config();

const { createApp } = require("./app");
const { MySQLDatabase } = require("./models/database");

const startServer = async () => {
  const app = createApp();
  const server = http.createServer(app);
  const PORT = process.env.PORT;

	await MySQLDatabase.initialize();

  server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();