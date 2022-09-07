const express = require("express");
const router = express.Router();

const movieRouter = require("./movieRouter");
const theaterRouter = require("./theaterRouter");

router.use("/movies", movieRouter.router);
router.use("/theaters", theaterRouter.router);

module.exports = router;