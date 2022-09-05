const express = require('express');
const movieController = require('../controllers/movieController');
const router = express.Router();

router.get('/main', movieController.getMain);
router.get('/detail/:movieId', movieController.getDetail);

module.exports = {
    router
};