const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');
const movieRouter = require("./movieRouter");

router.use("/user", userRouter.router);
router.use("/movies", movieRouter.router);

module.exports = router;