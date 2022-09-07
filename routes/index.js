const express = require('express');
const router = express.Router();
const movieRouter = require("./movieRouter");
const theaterRouter = require("./theaterRouter");
const userRouter = require("./userRouter");

router.use("/user", userRouter.router);
router.use("/movies", movieRouter.router);
router.use("/theaters", theaterRouter.router);

module.exports = router;