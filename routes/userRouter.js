const express = require('express');
const userController = require('../controllers/userController');
const validation = require("../middlewares/auth");
const router = express.Router();

router.post("/login", userController.logInWithKakao);
router.get("/detail", validation.validationToken, userController.getUserDetail);

module.exports = {
    router
};