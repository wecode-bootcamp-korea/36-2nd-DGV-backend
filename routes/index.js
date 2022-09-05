const express = require("express");
const router = express.Router();

const movieRouter = require("./movieRouter");

router.use("/movie", movieRouter.router);

module.exports = router;