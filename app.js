const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const routes  = require("./routes");

const createApp = () => {
  const app = express();
  
  app.get("/ping", (req, res) => {
    res.json({ message: "pong" });
  });

  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));

  app.use(routes);

  return app;
};

module.exports = { createApp };