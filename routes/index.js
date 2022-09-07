const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');

router.use("/user", userRouter.router);

const movieRouter = require("./movieRouter");

router.use("/movies", movieRouter.router);

module.exports = router;