const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/', movieController.getTitle);
router.get('/list', movieController.orderByBase);

module.exports = {
    router
};