const express = require("express");
const router = express.Router();

const ticketRouter = require("./ticketRouter");

router.use("/ticket", ticketRouter.router);

module.exports = router;