const express = require("express");
const router = express.Router();

const movieRouter = require("./movieRouter");

router.use("/movies", movieRouter.router);

module.exports = router;