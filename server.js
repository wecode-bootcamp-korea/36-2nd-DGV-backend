const http = require("http");
require("dotenv").config();

const { createApp } = require("./app");
const { MySQLDatabase } = require("./models/database");

const startServer = async () => {
  const app = createApp();
  const server = http.createServer(app);
  const PORT = process.env.PORT;

  app.get("/ping", (req, res) => {
    res.json({ message: "pong" });
  });

	await MySQLDatabase.initialize()
  .then(() => {
    console.log("Data Source has been initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
    database.destroy()
  })

  server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();